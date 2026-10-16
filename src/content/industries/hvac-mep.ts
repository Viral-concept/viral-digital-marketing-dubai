import type { Industry } from "../types";

const industry: Industry = {
  slug: "hvac-mep",
  tier: 1,
  motif: "wave",
  hue: 196,
  services: ["seo", "digital-marketing", "ai-chatbots", "web-applications", "ai-automation", "web-design-development"],
  related: ["facilities-management", "construction", "real-estate"],
  en: {
    name: "HVAC, MEP and Air Conditioning",
    short: "Local search, call-out booking and dispatch automation for AC, HVAC and MEP service companies.",
    headline: "Be the first number they call when the AC stops",
    intro:
      "When an air conditioner fails in a Dubai summer, customers search, call and book within minutes. We help HVAC and MEP companies win those urgent jobs, convert one-off repairs into annual maintenance contracts and run dispatch with less manual coordination.",
    challenges: [
      {
        title: "Urgent, high-intent demand",
        body: "Breakdown searches peak in the hottest months and late in the evening. If your number, availability and service areas are not obvious on Google and Maps, the job goes to whoever answers first.",
      },
      {
        title: "Missed calls and slow quotes",
        body: "Technicians are on site and office teams are stretched in peak season. Calls ring out, WhatsApp messages wait and quote requests sit in inboxes while customers keep searching.",
      },
      {
        title: "One-off jobs that never return",
        body: "Many customers book a single repair and are never contacted again. Without structured follow-up, the more valuable maintenance contracts go to competitors who ask at the right time.",
      },
      {
        title: "Dispatch by phone and spreadsheet",
        body: "Assigning technicians, tracking parts and confirming arrival times by phone creates errors and makes it hard to see capacity across areas such as Dubai Marina, Jumeirah or Al Barsha.",
      },
    ],
    marketing: [
      {
        title: "Google Business Profile and local SEO",
        body: "Optimised profiles, service-area pages and review collection so you appear for searches like AC repair, duct cleaning or chiller maintenance in the communities and Emirates you actually cover.",
      },
      {
        title: "Search ads for emergency and seasonal demand",
        body: "Call-focused Google Ads with schedules that follow peak hours and summer demand, plus separate campaigns for residential repairs, villa servicing and commercial maintenance contracts.",
      },
      {
        title: "Maintenance reminders and seasonal campaigns",
        body: "Pre-summer servicing offers, duct cleaning reminders and contract renewals sent by WhatsApp, SMS or email to past customers, timed to avoid the rush and fill quieter months.",
      },
    ],
    solutions: [
      {
        title: "Online booking with service-area checks",
        body: "A mobile-first booking flow where customers choose a service, confirm their area and pick a time slot, with jobs passed straight into your scheduling system instead of a shared inbox.",
      },
      {
        title: "AI call-out assistant on WhatsApp",
        body: "An assistant that answers out of hours in Arabic or English, captures the unit type, symptoms, photos and location, and books or escalates urgent breakdowns to the on-call team.",
      },
      {
        title: "Technician dispatch and job app",
        body: "A web app for assigning jobs by area and skill, sharing customer details and checklists with technicians, and capturing photos, parts used and customer sign-off on site.",
      },
      {
        title: "AMC contract portal",
        body: "A customer portal for annual maintenance contracts showing upcoming visits, service history and invoices, with automated renewal reminders and easy booking of extra call-outs.",
      },
    ],
    journey: [
      {
        title: "Breakdown or need",
        body: "The journey starts with a warm room, a leak or a noisy unit. We make sure your business shows clearly on Google, Maps and search ads at that moment, with your coverage and response options visible.",
      },
      {
        title: "Call, chat or book",
        body: "Some customers call, others prefer WhatsApp or a booking form. We design every route to be quick on mobile and make sure no enquiry goes unanswered, including out of hours.",
      },
      {
        title: "Triage and quote",
        body: "Clear information about the unit, problem and location helps your team quote accurately. We build intake that collects photos and details upfront, reducing wasted visits and back-and-forth.",
      },
      {
        title: "Visit and fix",
        body: "Customers want to know who is coming and when. Automated confirmations, technician details and arrival updates reduce no-access visits and repeated calls to your office.",
      },
      {
        title: "Contract and repeat service",
        body: "After a successful job is the best time to offer a maintenance contract. We set up review requests, AMC offers and servicing reminders that turn a single repair into an ongoing relationship.",
      },
    ],
    faqs: [
      {
        q: "We cover several Emirates. Can you target only the areas we serve?",
        a: "Yes. We build service-area pages and set ad location targeting around the areas you can reach reliably. We can also separate budgets so busy areas do not take spend from the ones you want to grow.",
      },
      {
        q: "Will an AI assistant handle emergency calls properly?",
        a: "We design it to recognise urgent situations, collect the key details and alert your on-call team straight away rather than trying to solve the problem itself. Your team agrees the escalation rules before launch.",
      },
      {
        q: "Can the dispatch app connect to our existing accounting or job software?",
        a: "Often it can, depending on whether your current tools offer an API or data export. We review your systems first and recommend connecting, extending or replacing them based on cost and effort.",
      },
      {
        q: "What drives the cost of a local marketing programme?",
        a: "Cost typically depends on the number of service areas and service lines, the competitiveness of your keywords and how much content and review work is needed. Ad spend is separate and agreed with you.",
      },
    ],
    visualDirection: "Flowing airflow waves, cool blues against heat-haze ambers, schematic duct lines and gauge details.",
    cta: {
      title: "Ready for the next peak season?",
      body: "Tell us which services and areas matter most to you. We will review how customers find and book you today and suggest where to win more urgent jobs and contracts.",
    },
    metaTitle: "HVAC and AC Service Marketing in Dubai",
    metaDescription:
      "Local SEO, call-out ads, WhatsApp booking assistants, dispatch apps and AMC portals designed for HVAC, MEP and air conditioning companies across the UAE.",
  },
  ar: {
    name: "التكييف والتبريد والأعمال الكهروميكانيكية",
    short: "بحث محلي وحجز للطلبات الطارئة وأتمتة لتوزيع الفنيين لشركات التكييف والأعمال الكهروميكانيكية.",
    headline: "كونوا أول رقم يتصل به العميل حين يتوقف المكيف",
    intro:
      "عندما يتعطل المكيف في صيف دبي، يبحث العميل ويتصل ويحجز خلال دقائق. نساعد شركات التكييف والأعمال الكهروميكانيكية على كسب هذه الطلبات العاجلة، وتحويل الإصلاحات الفردية إلى عقود صيانة سنوية، وإدارة توزيع الفنيين بتنسيق يدوي أقل.",
    challenges: [
      {
        title: "طلب عاجل وعالي النية",
        body: "تبلغ عمليات البحث عن الأعطال ذروتها في أشد الأشهر حرارة وفي ساعات المساء المتأخرة. وإن لم يكن رقمكم ومدى توفركم ومناطق خدمتكم واضحة على Google والخرائط، تذهب المهمة لمن يرد أولاً.",
      },
      {
        title: "مكالمات فائتة وعروض أسعار بطيئة",
        body: "الفنيون في المواقع وفريق المكتب مضغوط في موسم الذروة. فتبقى المكالمات دون رد ورسائل WhatsApp في الانتظار وطلبات الأسعار في البريد، بينما يواصل العميل البحث.",
      },
      {
        title: "مهام فردية لا تتكرر",
        body: "يحجز كثير من العملاء إصلاحاً واحداً ثم لا يتواصل معهم أحد مجدداً. ومن دون متابعة منظمة، تذهب عقود الصيانة الأعلى قيمة إلى منافسين يطرحونها في الوقت المناسب.",
      },
      {
        title: "توزيع المهام بالهاتف والجداول",
        body: "تعيين الفنيين وتتبع قطع الغيار وتأكيد مواعيد الوصول هاتفياً يؤدي إلى أخطاء، ويصعّب رؤية الطاقة المتاحة عبر مناطق مثل دبي مارينا والجميرا والبرشاء.",
      },
    ],
    marketing: [
      {
        title: "ملف Google التجاري والبحث المحلي",
        body: "ملفات محسّنة وصفحات لمناطق الخدمة وجمع منظم للتقييمات، لتظهروا في عمليات البحث عن إصلاح المكيفات وتنظيف مجاري الهواء وصيانة المبردات في المجتمعات والإمارات التي تغطونها فعلاً.",
      },
      {
        title: "إعلانات البحث للطلب الطارئ والموسمي",
        body: "إعلانات Google تركز على المكالمات بجداول تتبع ساعات الذروة وطلب الصيف، مع حملات منفصلة لإصلاحات المنازل وصيانة الفلل وعقود الصيانة التجارية.",
      },
      {
        title: "تذكيرات الصيانة والحملات الموسمية",
        body: "عروض الصيانة قبل الصيف وتذكيرات تنظيف مجاري الهواء وتجديد العقود عبر WhatsApp أو الرسائل النصية أو البريد للعملاء السابقين، بتوقيت يتفادى الزحام ويملأ الأشهر الأهدأ.",
      },
    ],
    solutions: [
      {
        title: "حجز إلكتروني مع التحقق من منطقة الخدمة",
        body: "مسار حجز مصمم للهاتف أولاً يختار فيه العميل الخدمة ويؤكد منطقته ويحدد موعداً، مع نقل المهام مباشرة إلى نظام الجدولة لديكم بدلاً من بريد مشترك.",
      },
      {
        title: "مساعد ذكي للطلبات الطارئة عبر WhatsApp",
        body: "مساعد يرد خارج ساعات العمل بالعربية أو الإنجليزية، ويجمع نوع الوحدة والأعراض والصور والموقع، ثم يحجز الموعد أو يصعّد الأعطال العاجلة إلى الفريق المناوب.",
      },
      {
        title: "تطبيق توزيع الفنيين والمهام",
        body: "تطبيق ويب لتعيين المهام حسب المنطقة والتخصص، ومشاركة بيانات العميل وقوائم الفحص مع الفنيين، وتوثيق الصور وقطع الغيار المستخدمة وتوقيع العميل في الموقع.",
      },
      {
        title: "بوابة عقود الصيانة السنوية",
        body: "بوابة للعملاء تعرض الزيارات القادمة وسجل الخدمة والفواتير ضمن عقود الصيانة السنوية، مع تذكيرات تجديد مؤتمتة وحجز سهل للزيارات الإضافية.",
      },
    ],
    journey: [
      {
        title: "العطل أو الحاجة",
        body: "تبدأ الرحلة بغرفة دافئة أو تسرب مياه أو وحدة مزعجة. نتأكد من ظهور شركتكم بوضوح على Google والخرائط وإعلانات البحث في تلك اللحظة، مع إبراز مناطق التغطية وخيارات الاستجابة.",
      },
      {
        title: "اتصال أو محادثة أو حجز",
        body: "بعض العملاء يتصلون وآخرون يفضلون WhatsApp أو نموذج الحجز. نصمم كل مسار ليكون سريعاً على الهاتف، ونضمن ألا يبقى أي طلب دون رد، حتى خارج ساعات العمل.",
      },
      {
        title: "الفرز وعرض السعر",
        body: "المعلومات الواضحة عن الوحدة والمشكلة والموقع تساعد فريقكم على التسعير بدقة. نبني آلية استقبال تجمع الصور والتفاصيل مسبقاً، فتقل الزيارات غير المجدية والمراسلات المتكررة.",
      },
      {
        title: "الزيارة والإصلاح",
        body: "يريد العميل معرفة من سيأتي ومتى. التأكيدات المؤتمتة وبيانات الفني وتحديثات الوصول تقلل الزيارات التي يتعذر فيها الدخول والاتصالات المتكررة بمكتبكم.",
      },
      {
        title: "العقد والخدمة المتكررة",
        body: "أفضل وقت لعرض عقد الصيانة هو بعد إنجاز المهمة بنجاح. نجهز طلبات التقييم وعروض العقود السنوية وتذكيرات الصيانة التي تحول الإصلاح الواحد إلى علاقة مستمرة.",
      },
    ],
    faqs: [
      {
        q: "نغطي عدة إمارات، فهل يمكنكم استهداف المناطق التي نخدمها فقط؟",
        a: "نعم. نبني صفحات لمناطق الخدمة ونضبط الاستهداف الجغرافي للإعلانات حول المناطق التي تصلونها بموثوقية. ويمكننا أيضاً فصل الميزانيات حتى لا تستهلك المناطق المزدحمة ميزانية المناطق التي تريدون النمو فيها.",
      },
      {
        q: "هل سيتعامل المساعد الذكي مع الطلبات الطارئة بشكل صحيح؟",
        a: "نصممه ليتعرف على الحالات العاجلة، ويجمع التفاصيل الأساسية، وينبه فريقكم المناوب فوراً بدلاً من محاولة حل المشكلة بنفسه. ويتفق فريقكم على قواعد التصعيد قبل الإطلاق.",
      },
      {
        q: "هل يمكن ربط تطبيق التوزيع ببرامج المحاسبة أو إدارة المهام الحالية لدينا؟",
        a: "غالباً نعم، بحسب ما إذا كانت أدواتكم الحالية توفر واجهة برمجية أو تصديراً للبيانات. نراجع أنظمتكم أولاً ونوصي بالربط أو التوسيع أو الاستبدال بناءً على التكلفة والجهد.",
      },
      {
        q: "ما الذي يحدد تكلفة برنامج التسويق المحلي؟",
        a: "تعتمد التكلفة عادة على عدد مناطق الخدمة وخطوط الخدمات، ومدى التنافس على الكلمات المفتاحية، وحجم العمل المطلوب على المحتوى والتقييمات. أما الإنفاق الإعلاني فمنفصل ويُتفق عليه معكم.",
      },
    ],
    visualDirection: "موجات تدفق هواء انسيابية، ودرجات زرقاء باردة مقابل كهرمان الحر، وخطوط مخططات المجاري وتفاصيل العدادات.",
    cta: {
      title: "مستعدون لموسم الذروة القادم؟",
      body: "أخبرونا بالخدمات والمناطق الأهم لكم. سنراجع كيف يجدكم العملاء ويحجزون معكم اليوم، ونقترح أين يمكنكم كسب مزيد من الطلبات العاجلة والعقود.",
    },
    metaTitle: "تسويق شركات التكييف وصيانة المكيفات في دبي",
    metaDescription:
      "بحث محلي وإعلانات للطلبات الطارئة ومساعدو حجز عبر WhatsApp وتطبيقات لتوزيع الفنيين وبوابات لعقود الصيانة لشركات التكييف والأعمال الكهروميكانيكية في الإمارات.",
  },
};

export default industry;
