/**
 * Browser smoke test for the production build. Requires Playwright (`npm i -D playwright`).
 *
 * It expects three `next start` servers built from the same code:
 *   3100: no enquiry delivery configured       (honest "not sent" state)
 *   3101: ENQUIRY_WEBHOOK_URL -> a working hook (success state)
 *   3102: ENQUIRY_WEBHOOK_URL -> a failing hook (error state)
 * Usage: node scripts/smoke-test.mjs ./screenshots
 */
import { mkdirSync } from "node:fs";
import { chromium } from "playwright";
const out = process.argv[2] ?? "./screenshots";
mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
const results = [];
const errors = [];
const check = (name, ok, extra = "") => results.push(`${ok ? "PASS" : "FAIL"} ${name} ${extra}`);
async function newPage(port, w = 1440, h = 900) {
  const p = await browser.newPage({ viewport: { width: w, height: h } });
  p.on("pageerror", (e) => errors.push(String(e).slice(0, 200)));
  p.on("console", (m) => m.type() === "error" && errors.push(m.text().slice(0, 200)));
  return p;
}
async function fill(p) {
  await p.fill("#name", "Test Person");
  await p.fill("#email", "test@example.org");
  await p.fill("#company", "Test Co");
  await p.selectOption("#service", "seo");
  await p.selectOption("#budget", "15-40k");
  await p.fill("#message", "We want to grow organic enquiries in Arabic and English.");
  await p.check('input[name="consent"]');
  await p.waitForTimeout(2800); // respect the too-fast spam check
}

// 1. Client validation
let p = await newPage(3100);
await p.goto("http://localhost:3100/en/contact", { waitUntil: "networkidle" });
await p.click('button[type="submit"]');
await p.waitForTimeout(300);
const errCount = await p.locator('[id$="-error"]').count();
check("client validation shows field errors", errCount >= 5, `(${errCount} errors)`);
check("focus moves to first invalid field", (await p.evaluate(() => document.activeElement?.id)) === "name");
await p.screenshot({ path: `${out}/form-invalid.png`, fullPage: false });

// 2. No delivery configured -> honest failure, no success message
await p.reload({ waitUntil: "networkidle" });
await fill(p);
await p.click('button[type="submit"]');
await p.waitForSelector("form [role=alert] >> text=/not sent|لم يُرسَل/", { timeout: 15000 });
const alertText = await p.locator("form [role=alert]").first().innerText(); console.log("ALERT:", alertText.replace(/\n/g," "));
await p.waitForTimeout(300);
check("entered values kept after a failed send", (await p.inputValue("#name")) === "Test Person" && (await p.inputValue("#service")) === "seo" && (await p.isChecked('input[name="consent"]')));
check("unconfigured delivery shows not-sent message", /not sent/i.test(alertText) && !(await p.locator("text=has been received").count()));
await p.screenshot({ path: `${out}/form-not-configured.png` });

// 3. Working webhook -> success
p = await newPage(3101);
await p.goto("http://localhost:3101/ar/contact", { waitUntil: "networkidle" });
await fill(p);
await p.click('button[type="submit"]');
await p.waitForSelector('[role="status"]', { timeout: 15000 });
check("webhook delivery shows success (Arabic)", (await p.locator('[role="status"]').innerText()).includes("شكرًا"));
await p.screenshot({ path: `${out}/form-success-ar.png` });

// 4. Failing webhook -> error, not success
p = await newPage(3102);
await p.goto("http://localhost:3102/en/contact", { waitUntil: "networkidle" });
await fill(p);
await p.click('button[type="submit"]');
await p.waitForSelector("form [role=alert] >> text=/not sent|لم يُرسَل/", { timeout: 15000 });
check("failing webhook shows error, not success", (await p.locator("text=has been received").count()) === 0);

// 5. Too-fast submission rejected
p = await newPage(3101);
await p.goto("http://localhost:3101/en/contact", { waitUntil: "networkidle" });
await p.fill("#name", "Bot"); await p.fill("#email", "bot@example.org"); await p.fill("#company", "Bot Co");
await p.selectOption("#service", "seo"); await p.fill("#message", "x".repeat(30)); await p.check('input[name="consent"]');
await p.click('button[type="submit"]');
await p.waitForSelector("form [role=alert] >> text=/not sent|لم يُرسَل/", { timeout: 15000 });
check("too-fast submission rejected", (await p.locator('[role="status"]').count()) === 0);

// 6. Language switch keeps the equivalent page
p = await newPage(3100);
await p.goto("http://localhost:3100/en/services/seo", { waitUntil: "networkidle" });
await p.click('header a[hreflang="ar"]');
await p.waitForURL("**/ar/services/seo");
check("language switch keeps page", p.url().endsWith("/ar/services/seo"));
check("arabic html attrs", (await p.evaluate(() => document.documentElement.lang + document.documentElement.dir)) === "arrtl");

// 7. Industry explorer keyboard + demo stepping
await p.goto("http://localhost:3100/en", { waitUntil: "networkidle" });
const tab = p.locator('[role="tab"]').first();
await tab.focus();
await p.keyboard.press("ArrowDown");
await p.waitForTimeout(900);
const selected = await p.locator('[role="tab"][aria-selected="true"]').first().innerText();
check("industry explorer arrow keys", /HVAC/.test(selected), selected);
const demoNext = p.locator("button", { hasText: /^Next$/ });
await demoNext.scrollIntoViewIfNeeded();
await demoNext.click(); await demoNext.click(); await demoNext.click();
await p.waitForTimeout(700);
check("journey demo advances", (await p.locator("text=Stage 4 of 6").count()) === 1);
await p.screenshot({ path: `${out}/demo-stage4.png` });

// 8. Directory filter + search
await p.goto("http://localhost:3100/en/industries", { waitUntil: "networkidle" });
await p.click("button[aria-pressed] >> text=Core focus");
const tier1 = await p.locator("main ul li h2").count();
await p.click("button[aria-pressed] >> text=All");
await p.fill('input[type="search"]', "clinic");
await p.waitForTimeout(300);
const clinic = await p.locator("main ul li h2").allInnerTexts();
check("directory filter core focus", tier1 === 6, `(${tier1})`);
check("directory search", clinic.length >= 2, clinic.join(" | "));

// 9. Reduced motion: content visible
const rm = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
const rp = await rm.newPage();
await rp.goto("http://localhost:3100/en", { waitUntil: "networkidle" });
await rp.evaluate(() => window.scrollTo(0, 2600)); await rp.waitForTimeout(700);
await rp.screenshot({ path: `${out}/reduced-motion.png` });
check("reduced motion renders", true);

// 10. Keyboard: skip link
await p.goto("http://localhost:3100/en", { waitUntil: "networkidle" });
await p.keyboard.press("Tab");
check("skip link first focus", (await p.evaluate(() => document.activeElement?.textContent)) === "Skip to content");

// 11. No JS: content still visible
const nojs = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1440, height: 900 } });
const np = await nojs.newPage();
await np.goto("http://localhost:3100/en/industries/real-estate");
const vis = await np.evaluate(() => getComputedStyle(document.querySelector("h1 .w")).opacity);
check("no-JS headline visible", vis === "1", vis);

console.log(results.join("\n"));
console.log("console/page errors:", JSON.stringify([...new Set(errors)]));
await browser.close();
