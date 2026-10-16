import type { Industry } from "../types";

const industry: Industry = {
  slug: "automotive",
  tier: 2,
  motif: "route",
  hue: 4,
  services: ["digital-marketing", "web-applications", "ai-chatbots", "social-media", "seo", "ai-automation"],
  related: ["finance-fintech-insurance", "ecommerce-retail", "luxury-fashion-jewellery"],
  en: {
    name: "Automotive and Car Dealerships",
    short: "Inventory campaigns, test-drive booking and service retention for dealers, used-car traders and workshops.",
    headline: "From model search to test drive to service bay",
    intro:
      "Car buyers in the UAE compare models, prices and finance options online long before they visit a showroom. We help dealerships, used-car businesses and workshops connect live inventory to campaigns, book test drives without friction and keep owners coming back for service.",
    challenges: [
      {
        title: "Inventory that changes daily",
        body: "Stock moves quickly, especially for used and pre-owned cars. Ads, website listings and marketplace feeds that are not synced lead to enquiries about cars that are already sold.",
      },
      {
        title: "Leads from many channels",
        body: "Enquiries arrive from classifieds, social ads, the website, WhatsApp and walk-ins. Without one view, sales teams duplicate effort and managers cannot see which channels produce real buyers.",
      },
      {
        title: "Finance and trade-in questions",
        body: "Buyers want monthly payment estimates, bank finance options and trade-in values early. If these answers require a phone call, many prospects stop at the research stage.",
      },
      {
        title: "Service retention after the sale",
        body: "Owners often drift to independent workshops after the warranty period. Service departments need timely reminders and easy booking to keep customers within the dealership network.",
      },
    ],
    marketing: [
      {
        title: "Inventory-driven ad campaigns",
        body: "Catalogue and vehicle ads on Meta and Google built from your live stock feed, so prices, mileage and availability stay current and sold cars drop out automatically.",
      },
      {
        title: "Model and launch campaigns",
        body: "Campaigns around new model arrivals, Ramadan and year-end offers and motor show moments, with separate creative for Arabic and English audiences and clear test-drive calls to action.",
      },
      {
        title: "Local SEO for showrooms and service centres",
        body: "Optimised Google Business Profiles and location pages for each showroom and workshop, covering servicing, bodywork, tyres and warranty work across the Emirates you operate in.",
      },
    ],
    solutions: [
      {
        title: "Searchable stock website",
        body: "A fast vehicle search with filters for make, model, year, price and specification, detailed photo galleries and enquiry buttons that pass the exact vehicle into your CRM.",
      },
      {
        title: "Test-drive and service booking",
        body: "Online booking for test drives, servicing and inspections with showroom selection, time slots, reminders and calendar invites, reducing phone calls and missed appointments.",
      },
      {
        title: "Finance and trade-in calculators",
        body: "Tools that estimate monthly payments and capture trade-in details with photos, giving buyers early answers and giving your sales team the information needed to prepare an offer.",
      },
      {
        title: "AI sales and service assistant",
        body: "A WhatsApp and web assistant that answers stock questions in Arabic and English, books test drives and service slots, and hands warm buyers to a salesperson with the conversation summarised.",
      },
    ],
    journey: [
      {
        title: "Research",
        body: "Buyers compare models, reviews and prices online. We make sure your stock and offers appear in their searches and social feeds with accurate, attractive information.",
      },
      {
        title: "Vehicle enquiry",
        body: "Most enquiries concern a specific car. We design listings and chat flows that capture which vehicle, which questions and which contact method the buyer prefers, then respond quickly.",
      },
      {
        title: "Finance and trade-in",
        body: "Payment plans and trade-ins often decide the deal. We provide early estimates and collect trade-in details so your team can prepare a realistic offer before the visit.",
      },
      {
        title: "Test drive and purchase",
        body: "We make booking a test drive simple, send reminders and directions, and give sales teams a clear summary so the showroom conversation picks up exactly where the online one ended.",
      },
      {
        title: "Ownership and service",
        body: "After delivery, timely service reminders, recall notices and personal offers keep owners connected. When they are ready to upgrade, the relationship is already in place.",
      },
    ],
    faqs: [
      {
        q: "Can you connect our dealer management system to the website and ads?",
        a: "In many cases, yes, through a stock feed or API from your DMS. We review what your system can export and design a sync that keeps the website, ads and marketplace listings consistent.",
      },
      {
        q: "Do you work with used-car businesses as well as franchised dealers?",
        a: "Yes. Used-car traders often benefit most from inventory-driven ads and fast enquiry handling. For franchised dealers, we work within brand guidelines and any manufacturer co-op requirements.",
      },
      {
        q: "Can the assistant give finance approvals or prices?",
        a: "No. It can share listed prices, explain general finance options and collect details, but approvals and final offers stay with your team and finance partners. We set clear limits on what it says.",
      },
      {
        q: "What affects the cost of an automotive campaign programme?",
        a: "Cost typically depends on the number of brands, showrooms and stock volume, the channels used and the level of creative production. Media spend is agreed separately and stays in your accounts.",
      },
    ],
    visualDirection: "Sweeping route lines and road curves, deep reds against graphite, motion blur and dashboard detailing.",
    cta: {
      title: "Turn your stock into booked test drives",
      body: "Tell us how you manage inventory and leads today. We will show where enquiries are lost between ad, listing and showroom, and how to connect the pieces.",
    },
    metaTitle: "Car Dealership Marketing in Dubai and the UAE",
    metaDescription:
      "Inventory ads, stock websites, test-drive booking, finance calculators and AI sales assistants for car dealerships, used-car traders and workshops in the UAE.",
  },
  ar: {
    name: "السيارات ووكالات السيارات",
    short: "حملات للمخزون وحجز للتجارب وتعزيز لعودة عملاء الصيانة للوكلاء وتجار السيارات المستعملة والورش.",
    headline: "من البحث عن الطراز إلى تجربة القيادة إلى مركز الصيانة",
    intro:
      "يقارن مشترو السيارات في الإمارات الطرازات والأسعار وخيارات التمويل عبر الإنترنت قبل زيارة صالة العرض بوقت طويل. نساعد الوكلاء وتجار السيارات المستعملة والورش على ربط المخزون الحي بالحملات، وتسهيل حجز تجارب القيادة، والحفاظ على عودة الملاك للصيانة.",
    challenges: [
      {
        title: "مخزون يتغير يومياً",
        body: "يتحرك المخزون بسرعة، خاصة في السيارات المستعملة. وحين لا تتزامن الإعلانات وقوائم الموقع ومنصات البيع، تصل استفسارات عن سيارات بيعت بالفعل.",
      },
      {
        title: "عملاء من قنوات متعددة",
        body: "تصل الاستفسارات من مواقع الإعلانات المبوبة وإعلانات التواصل الاجتماعي والموقع وWhatsApp والزيارات المباشرة. ومن دون رؤية موحدة، يتكرر جهد فرق المبيعات ولا يعرف المدراء أي القنوات تأتي بمشترين حقيقيين.",
      },
      {
        title: "أسئلة التمويل والاستبدال",
        body: "يريد المشترون مبكراً تقديرات القسط الشهري وخيارات التمويل البنكي وقيمة سياراتهم الحالية. وإن تطلبت هذه الإجابات اتصالاً هاتفياً، يتوقف كثيرون عند مرحلة البحث.",
      },
      {
        title: "الاحتفاظ بعملاء الصيانة بعد البيع",
        body: "كثيراً ما يتجه الملاك إلى ورش مستقلة بعد انتهاء الضمان. وتحتاج أقسام الصيانة إلى تذكيرات في وقتها وحجز سهل لإبقاء العملاء ضمن شبكة الوكيل.",
      },
    ],
    marketing: [
      {
        title: "حملات قائمة على المخزون",
        body: "إعلانات كتالوج ومركبات على Meta وGoogle مبنية من بيانات مخزونكم الحي، لتبقى الأسعار والمسافة المقطوعة والتوفر محدثة، وتختفي السيارات المباعة تلقائياً.",
      },
      {
        title: "حملات الطرازات والإطلاقات",
        body: "حملات حول وصول الطرازات الجديدة وعروض رمضان ونهاية العام ومعارض السيارات، بمحتوى إبداعي منفصل للجمهور العربي والإنجليزي، ودعوات واضحة لحجز تجربة القيادة.",
      },
      {
        title: "البحث المحلي لصالات العرض ومراكز الصيانة",
        body: "ملفات Google تجارية محسنة وصفحات لكل صالة عرض وورشة، تغطي الصيانة الدورية وأعمال الهيكل والإطارات وأعمال الضمان في الإمارات التي تعملون فيها.",
      },
    ],
    solutions: [
      {
        title: "موقع مخزون قابل للبحث",
        body: "بحث سريع عن المركبات مع تصفية حسب الصانع والطراز والسنة والسعر والمواصفات، ومعارض صور مفصلة، وأزرار استفسار تنقل بيانات السيارة المحددة إلى نظام CRM لديكم.",
      },
      {
        title: "حجز تجارب القيادة والصيانة",
        body: "حجز إلكتروني لتجارب القيادة والصيانة والفحص مع اختيار صالة العرض والمواعيد والتذكيرات ودعوات التقويم، مما يقلل المكالمات والمواعيد الفائتة.",
      },
      {
        title: "حاسبات التمويل والاستبدال",
        body: "أدوات تقدر الأقساط الشهرية وتجمع تفاصيل السيارة المراد استبدالها مع الصور، فتمنح المشتري إجابات مبكرة وتمنح فريق المبيعات المعلومات اللازمة لإعداد العرض.",
      },
      {
        title: "مساعد ذكي للمبيعات والصيانة",
        body: "مساعد عبر WhatsApp والموقع يجيب عن أسئلة المخزون بالعربية والإنجليزية، ويحجز تجارب القيادة ومواعيد الصيانة، ويحول المشترين الجادين إلى مندوب المبيعات مع ملخص للمحادثة.",
      },
    ],
    journey: [
      {
        title: "البحث",
        body: "يقارن المشترون الطرازات والمراجعات والأسعار عبر الإنترنت. نضمن ظهور مخزونكم وعروضكم في عمليات بحثهم وصفحاتهم على وسائل التواصل بمعلومات دقيقة وجذابة.",
      },
      {
        title: "الاستفسار عن مركبة",
        body: "تتعلق معظم الاستفسارات بسيارة محددة. نصمم القوائم ومسارات المحادثة لالتقاط السيارة المطلوبة والأسئلة ووسيلة التواصل المفضلة، ثم الرد بسرعة.",
      },
      {
        title: "التمويل والاستبدال",
        body: "كثيراً ما تحسم خطط السداد والاستبدال الصفقة. نقدم تقديرات مبكرة ونجمع تفاصيل السيارة الحالية ليعد فريقكم عرضاً واقعياً قبل الزيارة.",
      },
      {
        title: "تجربة القيادة والشراء",
        body: "نجعل حجز تجربة القيادة بسيطاً، ونرسل التذكيرات والاتجاهات، ونمنح فرق المبيعات ملخصاً واضحاً لتستكمل محادثة صالة العرض من حيث انتهت المحادثة الإلكترونية.",
      },
      {
        title: "الملكية والصيانة",
        body: "بعد التسليم، تبقي تذكيرات الصيانة وإشعارات الاستدعاء والعروض الشخصية الملاك على تواصل. وحين يستعدون للترقية، تكون العلاقة قائمة بالفعل.",
      },
    ],
    faqs: [
      {
        q: "هل يمكنكم ربط نظام إدارة الوكالة لدينا بالموقع والإعلانات؟",
        a: "في حالات كثيرة نعم، عبر ملف بيانات للمخزون أو واجهة برمجية من نظامكم. نراجع ما يمكن لنظامكم تصديره ونصمم مزامنة تحافظ على اتساق الموقع والإعلانات وقوائم المنصات.",
      },
      {
        q: "هل تعملون مع تجار السيارات المستعملة إلى جانب الوكلاء المعتمدين؟",
        a: "نعم. غالباً ما يستفيد تجار السيارات المستعملة أكثر من الإعلانات القائمة على المخزون والتعامل السريع مع الاستفسارات. أما مع الوكلاء المعتمدين، فنعمل ضمن إرشادات العلامة وأي متطلبات تسويق مشترك من الشركة المصنعة.",
      },
      {
        q: "هل يستطيع المساعد إعطاء موافقات التمويل أو الأسعار النهائية؟",
        a: "لا. يمكنه مشاركة الأسعار المعلنة وشرح خيارات التمويل العامة وجمع البيانات، أما الموافقات والعروض النهائية فتبقى لدى فريقكم وشركائكم في التمويل. ونضع حدوداً واضحة لما يقوله.",
      },
      {
        q: "ما الذي يؤثر في تكلفة برنامج حملات السيارات؟",
        a: "تعتمد التكلفة عادة على عدد العلامات وصالات العرض وحجم المخزون، والقنوات المستخدمة، ومستوى الإنتاج الإبداعي. ويُتفق على الإنفاق الإعلاني بشكل منفصل ويبقى في حساباتكم.",
      },
    ],
    visualDirection: "خطوط طرق ومنعطفات انسيابية، ودرجات حمراء عميقة على الجرافيت، وأثر الحركة وتفاصيل لوحة القيادة.",
    cta: {
      title: "حولوا مخزونكم إلى تجارب قيادة محجوزة",
      body: "أخبرونا كيف تديرون المخزون والعملاء اليوم. سنوضح أين تضيع الاستفسارات بين الإعلان والقائمة وصالة العرض، وكيف نربط هذه المراحل.",
    },
    metaTitle: "تسويق وكالات السيارات في دبي والإمارات",
    metaDescription:
      "إعلانات قائمة على المخزون ومواقع للسيارات وحجز لتجارب القيادة وحاسبات تمويل ومساعدو مبيعات أذكياء لوكالات السيارات وتجار المستعمل والورش في الإمارات.",
  },
};

export default industry;
