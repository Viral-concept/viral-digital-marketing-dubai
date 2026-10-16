import type { Industry } from "../types";

const industry: Industry = {
  slug: "professional-legal",
  tier: 3,
  motif: "grid",
  hue: 220,
  services: ["web-design-development", "seo", "ai-automation", "branding", "digital-marketing"],
  related: ["finance-fintech-insurance", "technology-saas", "real-estate"],
  en: {
    name: "Professional and Legal Services",
    short: "Authority-building websites, search visibility and intake automation for UAE law, audit and consulting firms.",
    headline: "Expertise that is easy to find and simple to engage",
    intro:
      "Clients choose law firms, auditors, consultants and corporate service providers on credibility, responsiveness and fit. We help professional firms in the UAE present their expertise clearly, appear when clients search for specific matters, and handle intake and conflict checks efficiently. The tone stays measured, accurate and appropriate for a regulated profession.",
    challenges: [
      {
        title: "Differentiating on expertise",
        body: "Many firm websites list the same practice areas in the same words. Prospective clients struggle to see who actually understands their specific matter, jurisdiction or industry.",
      },
      {
        title: "Referral-heavy, slow-moving pipelines",
        body: "Work often comes through referrals and reputation, which is valuable but hard to scale. Firms want more direct enquiries without compromising their professional standing.",
      },
      {
        title: "Unqualified and misdirected enquiries",
        body: "Contact forms bring a mix of serious matters, out-of-scope requests and free-advice seekers. Partners and associates spend non-billable time sorting them.",
      },
      {
        title: "Manual intake and document handling",
        body: "Engagement letters, KYC, conflict checks and document collection often move by email and attachments, slowing onboarding and creating risk around sensitive information.",
      },
    ],
    marketing: [
      {
        title: "Practice-area and matter-specific SEO",
        body: "We build in-depth pages for specific matters, such as company setup in free zones, employment disputes, VAT and corporate tax, or wills and inheritance, in Arabic and English.",
      },
      {
        title: "Thought leadership and LinkedIn",
        body: "We help partners turn their knowledge into articles, regulatory update briefings and LinkedIn posts, with a clear editorial process and review by the author before publication.",
      },
      {
        title: "Selective paid search",
        body: "Where appropriate, we run tightly controlled search campaigns for high-intent matters, with careful wording, negative keywords and landing pages that qualify enquiries before contact.",
      },
    ],
    solutions: [
      {
        title: "Authority-led firm website",
        body: "A bilingual website with clear practice pages, lawyer and adviser profiles, insights hub and structured enquiry routes, designed to reflect the firm's standing and load quickly on mobile.",
      },
      {
        title: "Smart client intake form",
        body: "An intake flow that asks matter type, jurisdiction, urgency and parties involved, routes the enquiry to the right team and captures details needed for an initial conflict check.",
      },
      {
        title: "Secure client onboarding portal",
        body: "A portal for engagement letters, e-signature, KYC document upload and matter updates, replacing email attachments with a secure, auditable process clients find straightforward.",
      },
      {
        title: "AI research and drafting support",
        body: "Internal tools that summarise documents, extract key clauses and prepare first drafts from your own templates, always reviewed by a qualified professional before anything reaches a client.",
      },
    ],
    journey: [
      {
        title: "Problem or trigger",
        body: "Clients usually arrive with a specific issue: a dispute, a regulatory change, a setup or a transaction. We create content that names these situations plainly so the right clients recognise themselves.",
      },
      {
        title: "Research and reassurance",
        body: "Prospects check credentials, experience and approach. We present profiles, practice depth and published insights so the firm's expertise is visible without overstatement.",
      },
      {
        title: "First enquiry",
        body: "Enquiries need to be easy but structured. We design forms and WhatsApp routes that gather enough detail to triage, and set clear expectations about response times and next steps.",
      },
      {
        title: "Consultation and engagement",
        body: "We automate consultation booking, conflict check preparation and engagement letter delivery, so clients move from first call to signed engagement without unnecessary delay.",
      },
      {
        title: "Ongoing matter and relationship",
        body: "Clients value updates and access. We build portals and update workflows that keep them informed, and plan relevant briefings that keep the firm in mind for future matters.",
      },
    ],
    faqs: [
      {
        q: "Is it appropriate for a law firm to advertise?",
        a: "Professional advertising is permitted within limits that depend on your licensing authority and professional rules. We keep messaging factual, avoid promises about outcomes and build partner review into every piece of content.",
      },
      {
        q: "Who writes the legal or technical content?",
        a: "We work from interviews and drafts with your professionals, then edit for clarity, structure and search. Your team reviews and approves every article for accuracy before it is published.",
      },
      {
        q: "How do you protect confidential client information?",
        a: "We build intake and portals with encryption, role-based access and minimal data collection, in line with the UAE PDPL and your internal policies. Sensitive documents are never processed by AI tools without your explicit approval and safeguards.",
      },
      {
        q: "What does a professional services website typically cost?",
        a: "Cost typically depends on the number of practice areas and profiles, Arabic content volume, integrations such as CRM or e-signature, and whether a client portal is included. We scope in clear phases.",
      },
    ],
    compliance:
      "Advertising by law firms in Dubai is subject to rules from the Government of Dubai Legal Affairs Department, and firms in DIFC or ADGM may have additional requirements; other professions have their own bodies. We avoid outcome promises, build professional review into publishing and handle client data in line with the UAE PDPL. Please confirm specific rules with your compliance lead.",
    visualDirection:
      "Measured navy grids like document columns, serif headlines, restrained accents and calm portrait photography that feels confident rather than corporate stock.",
    cta: {
      title: "Discuss your firm's digital presence",
      body: "Tell us about your practice areas and how clients find you today. We will suggest how to make your expertise more visible and your intake more efficient.",
    },
    metaTitle: "Law Firm and Professional Services Marketing in Dubai",
    metaDescription:
      "Authority-led websites, practice-area SEO, client intake and onboarding automation for law firms, auditors and consultancies in Dubai and across the UAE.",
  },
  ar: {
    name: "الخدمات المهنية والقانونية",
    short: "مواقع تبني المكانة وظهور في البحث وأتمتة لاستقبال العملاء لمكاتب المحاماة والتدقيق والاستشارات في الإمارات.",
    headline: "خبرة يسهل العثور عليها ويسهل التعاقد معها",
    intro:
      "يختار العملاء مكاتب المحاماة والمدققين والمستشارين ومزودي خدمات الشركات بناءً على المصداقية وسرعة الاستجابة والملاءمة. نساعد الشركات المهنية في الإمارات على عرض خبرتها بوضوح، والظهور حين يبحث العملاء عن قضايا ومسائل محددة، وإدارة استقبال العملاء والتحقق من تعارض المصالح بكفاءة. وتبقى النبرة متزنة ودقيقة ولائقة بمهنة خاضعة للتنظيم.",
    challenges: [
      {
        title: "التميّز بالخبرة",
        body: "تعرض مواقع كثيرة مجالات الممارسة نفسها بالكلمات نفسها. فيصعب على العملاء المحتملين معرفة من يفهم فعلًا مسألتهم المحددة أو الاختصاص القضائي أو قطاعهم.",
      },
      {
        title: "اعتماد كبير على الإحالات وبطء في تدفق العمل",
        body: "يأتي العمل غالبًا عبر الإحالات والسمعة، وهي قيّمة لكن يصعب التوسع فيها. وتريد المكاتب مزيدًا من الاستفسارات المباشرة دون المساس بمكانتها المهنية.",
      },
      {
        title: "استفسارات غير مؤهلة أو في غير موضعها",
        body: "تجلب نماذج التواصل خليطًا من القضايا الجادة والطلبات خارج النطاق ومن يبحثون عن استشارة مجانية. فيقضي الشركاء والمحامون وقتًا غير مدفوع في فرزها.",
      },
      {
        title: "استقبال يدوي وتعامل يدوي مع المستندات",
        body: "تنتقل خطابات التكليف وإجراءات «اعرف عميلك» والتحقق من تعارض المصالح وجمع المستندات غالبًا عبر البريد والمرفقات، مما يبطئ الانضمام ويخلق مخاطر على المعلومات الحساسة.",
      },
    ],
    marketing: [
      {
        title: "تحسين محركات البحث حسب مجال الممارسة والمسألة",
        body: "نبني صفحات معمّقة لمسائل محددة، مثل تأسيس الشركات في المناطق الحرة ونزاعات العمل وضريبة القيمة المضافة وضريبة الشركات والوصايا والمواريث، بالعربية والإنجليزية.",
      },
      {
        title: "القيادة الفكرية وLinkedIn",
        body: "نساعد الشركاء على تحويل معرفتهم إلى مقالات وملخصات للمستجدات التنظيمية ومنشورات على LinkedIn، عبر عملية تحرير واضحة ومراجعة من الكاتب قبل النشر.",
      },
      {
        title: "إعلانات بحث انتقائية",
        body: "حيث يكون ذلك مناسبًا، ندير حملات بحث مضبوطة بدقة للمسائل ذات النية العالية، بصياغة حذرة وكلمات مستبعدة وصفحات هبوط تؤهل الاستفسارات قبل التواصل.",
      },
    ],
    solutions: [
      {
        title: "موقع يبني مكانة المكتب",
        body: "موقع ثنائي اللغة بصفحات واضحة لمجالات الممارسة، وملفات تعريفية للمحامين والمستشارين، ومركز للمقالات، ومسارات استفسار منظمة، مصمم ليعكس مكانة المكتب ويُحمَّل بسرعة على الهاتف.",
      },
      {
        title: "نموذج ذكي لاستقبال العملاء",
        body: "مسار استقبال يسأل عن نوع المسألة والاختصاص ودرجة الاستعجال والأطراف المعنية، ويوجّه الاستفسار إلى الفريق المناسب، ويجمع البيانات اللازمة للتحقق الأولي من تعارض المصالح.",
      },
      {
        title: "بوابة آمنة لانضمام العملاء",
        body: "بوابة لخطابات التكليف والتوقيع الإلكتروني ورفع مستندات «اعرف عميلك» ومتابعة المستجدات، تحل محل مرفقات البريد بعملية آمنة قابلة للتدقيق يجدها العملاء سهلة.",
      },
      {
        title: "دعم البحث والصياغة بالذكاء الاصطناعي",
        body: "أدوات داخلية تلخّص المستندات وتستخرج البنود الأساسية وتُعدّ مسودات أولى من قوالبك الخاصة، ويراجعها دائمًا مختص مؤهل قبل أن يصل أي شيء إلى العميل.",
      },
    ],
    journey: [
      {
        title: "المشكلة أو الدافع",
        body: "يأتي العملاء عادةً بمسألة محددة: نزاع، أو تغيير تنظيمي، أو تأسيس، أو صفقة. نُعدّ محتوى يسمّي هذه الحالات بوضوح ليتعرف العملاء المناسبون على أنفسهم فيه.",
      },
      {
        title: "البحث والاطمئنان",
        body: "يتحقق العملاء المحتملون من المؤهلات والخبرة والأسلوب. نعرض الملفات التعريفية وعمق الممارسة والمقالات المنشورة لتظهر خبرة المكتب دون مبالغة.",
      },
      {
        title: "الاستفسار الأول",
        body: "يجب أن يكون الاستفسار سهلًا ومنظمًا في آن. نصمم نماذج ومسارات WhatsApp تجمع ما يكفي من التفاصيل للفرز، وتوضح التوقعات بشأن وقت الرد والخطوات التالية.",
      },
      {
        title: "الاستشارة والتكليف",
        body: "نؤتمت حجز الاستشارات وتحضير التحقق من تعارض المصالح وإرسال خطابات التكليف، لينتقل العميل من المكالمة الأولى إلى التكليف الموقّع دون تأخير غير ضروري.",
      },
      {
        title: "متابعة المسألة والعلاقة",
        body: "يقدّر العملاء التحديثات وسهولة الوصول. نبني بوابات ومسارات تحديث تُبقيهم على اطلاع، ونخطط لملخصات مفيدة تُبقي المكتب حاضرًا في أذهانهم للمسائل القادمة.",
      },
    ],
    faqs: [
      {
        q: "هل يليق بمكتب محاماة أن يُعلن؟",
        a: "الإعلان المهني مسموح ضمن حدود تعتمد على جهة الترخيص والقواعد المهنية لديك. نُبقي الرسائل واقعية، ونتجنب الوعود بالنتائج، وندمج مراجعة الشركاء في كل محتوى.",
      },
      {
        q: "من يكتب المحتوى القانوني أو التخصصي؟",
        a: "نعمل انطلاقًا من مقابلات ومسودات مع المختصين لديك، ثم نحرر النص من حيث الوضوح والبنية ومحركات البحث. ويراجع فريقك كل مقال ويعتمد دقته قبل نشره.",
      },
      {
        q: "كيف تحمون معلومات العملاء السرية؟",
        a: "نبني أنظمة الاستقبال والبوابات بالتشفير وصلاحيات الوصول حسب الأدوار وجمع الحد الأدنى من البيانات، وفق قانون حماية البيانات الشخصية الإماراتي وسياساتك الداخلية. ولا تُعالَج المستندات الحساسة بأدوات الذكاء الاصطناعي دون موافقتك الصريحة وضمانات واضحة.",
      },
      {
        q: "كم تبلغ تكلفة موقع لشركة خدمات مهنية عادةً؟",
        a: "تعتمد التكلفة عادةً على عدد مجالات الممارسة والملفات التعريفية، وحجم المحتوى العربي، والتكاملات مثل نظام إدارة علاقات العملاء أو التوقيع الإلكتروني، وما إذا كانت بوابة العملاء مشمولة. ونحدد النطاق على مراحل واضحة.",
      },
    ],
    compliance:
      "يخضع إعلان مكاتب المحاماة في دبي لقواعد دائرة الشؤون القانونية لحكومة دبي، وقد تكون للمكاتب في مركز دبي المالي العالمي أو سوق أبوظبي العالمي متطلبات إضافية، ولكل مهنة أخرى جهاتها. نتجنب الوعود بالنتائج، وندمج المراجعة المهنية في النشر، ونتعامل مع بيانات العملاء وفق قانون حماية البيانات الشخصية الإماراتي. يُرجى تأكيد القواعد المحددة مع مسؤول الامتثال لديك.",
    visualDirection:
      "شبكات كحلية متزنة تشبه أعمدة المستندات، وعناوين بخطوط ذات زوائد، ولمسات لونية مقتصدة، وصور شخصية هادئة توحي بالثقة بعيدًا عن الصور النمطية للشركات.",
    cta: {
      title: "ناقش الحضور الرقمي لمكتبك",
      body: "حدّثنا عن مجالات ممارستك وكيف يصل إليك العملاء اليوم. سنقترح كيف تجعل خبرتك أوضح، واستقبال العملاء أكثر كفاءة.",
    },
    metaTitle: "تسويق مكاتب المحاماة والخدمات المهنية في دبي",
    metaDescription:
      "مواقع تبني المكانة وتحسين محركات البحث لمجالات الممارسة وأتمتة استقبال العملاء وانضمامهم لمكاتب المحاماة والتدقيق والاستشارات في دبي وسائر الإمارات.",
  },
};

export default industry;
