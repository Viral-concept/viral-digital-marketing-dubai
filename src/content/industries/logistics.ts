import type { Industry } from "../types";

const industry: Industry = {
  slug: "logistics",
  tier: 2,
  motif: "route",
  hue: 210,
  services: ["web-applications", "ai-automation", "seo", "web-design-development", "digital-marketing", "mobile-apps"],
  related: ["manufacturing-industrial", "ecommerce-retail", "technology-saas"],
  en: {
    name: "Logistics and Supply Chain",
    short: "B2B lead generation, quote tools, tracking portals and automation for freight, warehousing and delivery firms.",
    headline: "Faster quotes, clearer tracking, fewer manual updates",
    intro:
      "Logistics buyers want quick quotes, reliable visibility and a partner who understands UAE free zones, ports and customs. We help freight forwarders, 3PLs, warehousing and last-mile companies win B2B accounts online and replace repetitive emails and spreadsheets with practical digital tools.",
    challenges: [
      {
        title: "Slow, manual quoting",
        body: "Quote requests arrive by email and phone with missing details, then go back and forth before pricing. Shippers who need a quick answer often move to the forwarder who replies first.",
      },
      {
        title: "Constant status queries",
        body: "Customer service teams spend hours answering where-is-my-shipment questions by phone, email and WhatsApp, because clients lack a simple way to see status themselves.",
      },
      {
        title: "Undifferentiated positioning",
        body: "Many logistics websites list the same services in the same way. Buyers struggle to see who specialises in their lanes, cargo types, free zones or industries.",
      },
      {
        title: "Fragmented systems",
        body: "Transport management, warehouse systems, accounting and email often do not connect, leading to re-keying of data, delays in invoicing and errors in documentation.",
      },
    ],
    marketing: [
      {
        title: "Lane and service SEO",
        body: "Pages built around specific services, trade lanes, cargo types and hubs such as Jebel Ali, JAFZA and Dubai South, so procurement and supply chain managers find a specialist rather than a generalist.",
      },
      {
        title: "LinkedIn and account-based marketing",
        body: "Targeted LinkedIn campaigns and content reaching supply chain, procurement and operations leaders at importers, e-commerce brands and manufacturers in your chosen sectors.",
      },
      {
        title: "Search ads for high-intent services",
        body: "Google Ads for services with clear buying intent, such as warehousing space, customs clearance or same-day delivery, linked to quote forms that capture the details your team needs.",
      },
    ],
    solutions: [
      {
        title: "Instant quote request tool",
        body: "A guided quote form that captures origin, destination, cargo type, dimensions, incoterms and timing, with rate rules for standard routes and automatic routing of complex shipments to the right team.",
      },
      {
        title: "Customer tracking portal",
        body: "A branded portal where clients see shipment status, documents, proof of delivery and invoices in one place, connected to your transport or warehouse management system.",
      },
      {
        title: "Document and email automation",
        body: "AI-assisted extraction of data from invoices, packing lists and booking emails into your systems, reducing manual entry and flagging missing or inconsistent information for review.",
      },
      {
        title: "Driver and last-mile app",
        body: "A mobile app for drivers with route lists, delivery confirmation, photos and signatures, and automatic customer notifications in Arabic and English as each delivery progresses.",
      },
    ],
    journey: [
      {
        title: "Need identified",
        body: "A shipper needs a new lane, more warehouse space or a better delivery partner. We make sure your specialist services appear in searches and on LinkedIn when that need arises.",
      },
      {
        title: "Quote request",
        body: "Speed and completeness matter. We design quote forms that gather the right information first time and acknowledge requests instantly with a clear response timeframe.",
      },
      {
        title: "Evaluation",
        body: "Buyers check capabilities, coverage, certifications and references. We present your network, facilities and sector experience clearly on your website and in downloadable profiles.",
      },
      {
        title: "Onboarding",
        body: "New accounts need user access, documentation, rate agreements and contacts. We automate onboarding steps so clients start shipping without long email chains.",
      },
      {
        title: "Ongoing operations",
        body: "Day-to-day visibility keeps accounts loyal. Tracking portals, proactive notifications and regular reporting reduce queries and give your account managers more time for growth.",
      },
    ],
    faqs: [
      {
        q: "Can the tracking portal connect to our existing TMS or WMS?",
        a: "Often yes, through an API, database connection or scheduled data export. We review your systems first and recommend the most reliable integration for your setup and budget.",
      },
      {
        q: "Can we give instant prices online?",
        a: "For standard services with stable rate tables, we can build calculators that show indicative prices. For complex or spot shipments, the tool captures details and routes the request for manual pricing.",
      },
      {
        q: "Is digital marketing effective for B2B logistics?",
        a: "It works best when focused on specialisms, lanes and sectors rather than general logistics terms. Combined with LinkedIn and a strong website, it supports your sales team in reaching new accounts.",
      },
      {
        q: "How long does a custom logistics portal take to build?",
        a: "It typically depends on the number of integrations, user roles and features. We often start with a focused first version covering tracking and documents, then add features in later phases.",
      },
    ],
    visualDirection: "Interlinking route lines and network nodes, steel blues and signal orange, container grids and map contours.",
    cta: {
      title: "Spend less time on quotes and status emails",
      body: "Tell us about your services, systems and the questions customers ask most. We will suggest where online tools and automation can save time and support growth.",
    },
    metaTitle: "Logistics Marketing and Software in Dubai",
    metaDescription:
      "B2B lead generation, quote request tools, shipment tracking portals and document automation for logistics, freight and warehousing companies in the UAE.",
  },
  ar: {
    name: "الخدمات اللوجستية وسلاسل الإمداد",
    short: "استقطاب عملاء الشركات وأدوات عروض الأسعار وبوابات التتبع والأتمتة لشركات الشحن والتخزين والتوصيل.",
    headline: "عروض أسعار أسرع، وتتبع أوضح، وتحديثات يدوية أقل",
    intro:
      "يريد مشترو الخدمات اللوجستية عروض أسعار سريعة ورؤية موثوقة لشحناتهم وشريكاً يفهم المناطق الحرة والموانئ والجمارك في الإمارات. نساعد وكلاء الشحن ومزودي الخدمات اللوجستية وشركات التخزين والتوصيل على كسب حسابات الشركات عبر الإنترنت، واستبدال الرسائل والجداول المتكررة بأدوات رقمية عملية.",
    challenges: [
      {
        title: "تسعير يدوي بطيء",
        body: "تصل طلبات الأسعار عبر البريد والهاتف ناقصة التفاصيل، ثم تتكرر المراسلات قبل التسعير. والشاحن الذي يحتاج إلى إجابة سريعة ينتقل غالباً إلى أول وكيل يرد.",
      },
      {
        title: "استفسارات مستمرة عن الحالة",
        body: "تقضي فرق خدمة العملاء ساعات في الرد على أسئلة موقع الشحنة عبر الهاتف والبريد وWhatsApp، لأن العملاء لا يملكون طريقة بسيطة لمعرفة الحالة بأنفسهم.",
      },
      {
        title: "تموضع غير مميز",
        body: "تعرض مواقع لوجستية كثيرة الخدمات نفسها بالطريقة نفسها. فيصعب على المشترين معرفة من يتخصص في خطوطهم ونوع بضائعهم ومناطقهم الحرة وقطاعاتهم.",
      },
      {
        title: "أنظمة متفرقة",
        body: "كثيراً ما لا تترابط أنظمة إدارة النقل والمستودعات والمحاسبة والبريد، مما يؤدي إلى إعادة إدخال البيانات وتأخر الفوترة وأخطاء في المستندات.",
      },
    ],
    marketing: [
      {
        title: "تحسين البحث للخطوط والخدمات",
        body: "صفحات مبنية حول خدمات محددة وخطوط تجارية وأنواع بضائع ومراكز مثل جبل علي والمنطقة الحرة لجبل علي ودبي الجنوب، ليجد مدراء المشتريات وسلاسل الإمداد متخصصاً لا مزوداً عاماً.",
      },
      {
        title: "LinkedIn والتسويق الموجه للحسابات",
        body: "حملات ومحتوى موجه على LinkedIn يصل إلى قادة سلاسل الإمداد والمشتريات والعمليات لدى المستوردين وعلامات التجارة الإلكترونية والمصنعين في القطاعات التي تختارونها.",
      },
      {
        title: "إعلانات البحث للخدمات عالية النية",
        body: "إعلانات Google للخدمات ذات نية شراء واضحة مثل مساحات التخزين والتخليص الجمركي والتوصيل في اليوم نفسه، مرتبطة بنماذج أسعار تجمع التفاصيل التي يحتاجها فريقكم.",
      },
    ],
    solutions: [
      {
        title: "أداة طلب عروض الأسعار الفورية",
        body: "نموذج أسعار موجه يجمع المنشأ والوجهة ونوع البضاعة والأبعاد وشروط التسليم والتوقيت، مع قواعد تسعير للخطوط القياسية وتوجيه تلقائي للشحنات المعقدة إلى الفريق المختص.",
      },
      {
        title: "بوابة تتبع للعملاء",
        body: "بوابة تحمل علامتكم يرى فيها العملاء حالة الشحنات والمستندات وإثبات التسليم والفواتير في مكان واحد، مرتبطة بنظام إدارة النقل أو المستودعات لديكم.",
      },
      {
        title: "أتمتة المستندات والبريد",
        body: "استخراج البيانات بمساعدة الذكاء الاصطناعي من الفواتير وقوائم التعبئة ورسائل الحجز إلى أنظمتكم، مما يقلل الإدخال اليدوي وينبه إلى المعلومات الناقصة أو غير المتسقة للمراجعة.",
      },
      {
        title: "تطبيق للسائقين والتوصيل للميل الأخير",
        body: "تطبيق جوال للسائقين يضم قوائم المسارات وتأكيد التسليم والصور والتواقيع، مع إشعارات تلقائية للعملاء بالعربية والإنجليزية مع تقدم كل عملية توصيل.",
      },
    ],
    journey: [
      {
        title: "تحديد الحاجة",
        body: "يحتاج الشاحن إلى خط جديد أو مساحة تخزين أكبر أو شريك توصيل أفضل. نضمن ظهور خدماتكم المتخصصة في نتائج البحث وعلى LinkedIn حين تنشأ هذه الحاجة.",
      },
      {
        title: "طلب عرض السعر",
        body: "السرعة والاكتمال أمران حاسمان. نصمم نماذج أسعار تجمع المعلومات الصحيحة من المرة الأولى، وتؤكد استلام الطلب فوراً مع مهلة رد واضحة.",
      },
      {
        title: "التقييم",
        body: "يتحقق المشترون من القدرات والتغطية والشهادات والمراجع. نعرض شبكتكم ومرافقكم وخبرتكم القطاعية بوضوح على موقعكم وفي ملفات تعريفية قابلة للتحميل.",
      },
      {
        title: "تفعيل الحساب",
        body: "تحتاج الحسابات الجديدة إلى صلاحيات المستخدمين والمستندات واتفاقيات الأسعار وجهات الاتصال. نؤتمت خطوات التفعيل ليبدأ العملاء الشحن دون سلاسل بريد طويلة.",
      },
      {
        title: "العمليات المستمرة",
        body: "الرؤية اليومية تحافظ على ولاء الحسابات. تقلل بوابات التتبع والإشعارات الاستباقية والتقارير المنتظمة الاستفسارات، وتمنح مدراء الحسابات وقتاً أكبر للنمو.",
      },
    ],
    faqs: [
      {
        q: "هل يمكن ربط بوابة التتبع بنظام إدارة النقل أو المستودعات الحالي لدينا؟",
        a: "غالباً نعم، عبر واجهة برمجية أو اتصال بقاعدة البيانات أو تصدير مجدول للبيانات. نراجع أنظمتكم أولاً ونوصي بأكثر طرق التكامل موثوقية لإعدادكم وميزانيتكم.",
      },
      {
        q: "هل يمكننا عرض أسعار فورية عبر الإنترنت؟",
        a: "للخدمات القياسية ذات جداول الأسعار المستقرة، يمكننا بناء حاسبات تعرض أسعاراً تقديرية. أما الشحنات المعقدة أو الفورية، فتجمع الأداة التفاصيل وتوجه الطلب للتسعير اليدوي.",
      },
      {
        q: "هل التسويق الرقمي فعال للخدمات اللوجستية بين الشركات؟",
        a: "ينجح أكثر حين يركز على التخصصات والخطوط والقطاعات بدلاً من المصطلحات اللوجستية العامة. ومع LinkedIn وموقع قوي، يدعم فريق المبيعات لديكم في الوصول إلى حسابات جديدة.",
      },
      {
        q: "كم يستغرق بناء بوابة لوجستية مخصصة؟",
        a: "يعتمد ذلك عادة على عدد التكاملات وأدوار المستخدمين والخصائص. وغالباً ما نبدأ بنسخة أولى مركزة تغطي التتبع والمستندات، ثم نضيف الخصائص في مراحل لاحقة.",
      },
    ],
    visualDirection: "خطوط مسارات متشابكة وعقد شبكية، ودرجات الأزرق الفولاذي مع البرتقالي الإشاري، وشبكات الحاويات وخطوط الخرائط.",
    cta: {
      title: "وقت أقل في عروض الأسعار ورسائل الحالة",
      body: "حدثونا عن خدماتكم وأنظمتكم والأسئلة الأكثر تكراراً من عملائكم. سنقترح أين يمكن للأدوات الإلكترونية والأتمتة توفير الوقت ودعم النمو.",
    },
    metaTitle: "تسويق وبرمجيات الخدمات اللوجستية في دبي",
    metaDescription:
      "استقطاب عملاء الشركات وأدوات طلب الأسعار وبوابات تتبع الشحنات وأتمتة المستندات لشركات الخدمات اللوجستية والشحن والتخزين في دبي ودولة الإمارات.",
  },
};

export default industry;
