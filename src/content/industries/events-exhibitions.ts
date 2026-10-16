import type { Industry } from "../types";

const industry: Industry = {
  slug: "events-exhibitions",
  tier: 3,
  motif: "wave",
  hue: 300,
  services: ["web-applications", "digital-marketing", "social-media", "mobile-apps", "ai-automation", "ai-chatbots"],
  related: ["tourism-travel", "hospitality", "technology-saas"],
  en: {
    name: "Events, Exhibitions and Corporate Experiences",
    short: "Registration platforms, delegate marketing and event automation for UAE organisers, exhibitors and agencies.",
    headline: "Fill the hall, smooth the entry, follow up every lead",
    intro:
      "Events in the UAE run on tight timelines, from DWTC exhibitions and Expo City conferences to private corporate gatherings. We help organisers, exhibitors and event agencies drive registrations, run smooth check-in and capture value after the doors close. Each campaign, platform and workflow is built around a fixed date that cannot move.",
    challenges: [
      {
        title: "Fixed dates, compressed campaigns",
        body: "Every event has an immovable deadline. Registration campaigns must build early interest, respond to slow periods and peak at the right moment, with no chance to rerun.",
      },
      {
        title: "Registration friction and no-shows",
        body: "Long forms, unclear pricing and confusing ticket types reduce sign-ups, while registered delegates who do not attend weaken the experience for exhibitors and sponsors.",
      },
      {
        title: "Exhibitors and sponsors need proof of value",
        body: "Exhibitors want qualified visitors and measurable leads. Without good data on attendance and engagement, retaining sponsors and rebooking stands becomes harder each year.",
      },
      {
        title: "Fragmented event tools",
        body: "Ticketing, badges, agendas, apps, lead scanning and CRM often come from different vendors. Data does not connect, and teams spend the week after the event reconciling spreadsheets.",
      },
    ],
    marketing: [
      {
        title: "Phased delegate acquisition",
        body: "We plan early-bird, main and final-call phases across LinkedIn, Google, Meta and email, targeting by role, industry and region, and shift budget based on daily registration pace.",
      },
      {
        title: "Speaker and exhibitor amplification",
        body: "We give speakers, exhibitors and partners ready-to-share content and tracked links, turning their own networks into a measurable registration channel.",
      },
      {
        title: "Live and post-event content",
        body: "We plan on-site social coverage, short highlight videos and post-event recaps that sustain interest, support sponsor reporting and seed next year's campaign.",
      },
    ],
    solutions: [
      {
        title: "Delegate registration with badge QR",
        body: "A bilingual registration flow with ticket types, group bookings, promo codes and secure payment, issuing QR badges for fast check-in and session scanning on the day.",
      },
      {
        title: "Event app and agenda",
        body: "A mobile or web app with personalised agendas, speaker profiles, floor plans, push notifications and meeting requests, so delegates can plan their day and find the right people.",
      },
      {
        title: "Exhibitor lead capture and portal",
        body: "An exhibitor portal for stand details, staff passes and manuals, plus a lead scanning app that records visitor details and notes and sends them to the exhibitor's CRM after the event.",
      },
      {
        title: "AI event concierge and follow-up",
        body: "An assistant that answers questions on venue, parking, agenda and visa letters before the event, and automated sequences that send delegates recordings, surveys and next-year offers afterwards.",
      },
    ],
    journey: [
      {
        title: "Awareness and save the date",
        body: "Events compete for attention months ahead. We build a clear event site, early announcements and targeted campaigns so the right audience marks the date.",
      },
      {
        title: "Registration",
        body: "We keep registration short and mobile-friendly, explain ticket options and group rates clearly, and confirm instantly with calendar invitations, badge details and a WhatsApp option.",
      },
      {
        title: "Pre-event engagement",
        body: "Between registration and attendance, interest can fade. We send agenda highlights, speaker news, meeting tools and practical travel and parking information to reduce no-shows.",
      },
      {
        title: "On the day",
        body: "Entry and navigation shape first impressions. We design fast QR check-in, live agenda updates and simple ways for delegates to connect with exhibitors and each other.",
      },
      {
        title: "Follow-up and next edition",
        body: "Value is realised after the event. We automate thank-you messages, content access, surveys and lead delivery to exhibitors, and capture early interest for the next edition.",
      },
    ],
    faqs: [
      {
        q: "How early should we start marketing an event?",
        a: "It typically depends on the event size and audience. Large exhibitions and conferences often need several months of phased activity, while internal or invitation-only events need less. We plan backwards from the event date and registration targets you set.",
      },
      {
        q: "Should we build a custom platform or use an event SaaS tool?",
        a: "Many events run well on established event platforms with custom branding and integrations. Custom builds suit recurring flagship events, unusual workflows or specific data needs. We recommend based on your scale and how often the event repeats.",
      },
      {
        q: "Can you handle Arabic and English registration?",
        a: "Yes. We design registration, emails, badges and apps in both languages, including right-to-left layouts and correct Arabic name handling on badges.",
      },
      {
        q: "How is delegate data protected?",
        a: "We collect only what is needed, use clear consent for marketing and data sharing with exhibitors, and secure data in line with the UAE PDPL. You remain the owner of all delegate data.",
      },
    ],
    compliance:
      "Delegate and visitor data is subject to the UAE PDPL; sharing contact details with exhibitors or sponsors should rest on clear consent captured at registration. We build these consent steps into forms and recommend confirming your data sharing approach with your legal adviser.",
    visualDirection:
      "Flowing magenta waves suggesting crowds and sound, bold stage lighting tones, and energetic photography of halls, stages and conversations.",
    cta: {
      title: "Tell us about your next event",
      body: "Share the date, audience and current tools. We will suggest a registration and engagement plan, and which platforms or automations will make the biggest difference.",
    },
    metaTitle: "Event and Exhibition Marketing and Apps in Dubai",
    metaDescription:
      "Delegate marketing, bilingual registration with QR badges, event apps, exhibitor lead capture and AI follow-up for event organisers and exhibitors in Dubai.",
  },
  ar: {
    name: "الفعاليات والمعارض وتجارب الشركات",
    short: "منصات تسجيل وتسويق للحضور وأتمتة الفعاليات لمنظمي الفعاليات والعارضين والوكالات في الإمارات.",
    headline: "املأ القاعة، وسهّل الدخول، وتابع كل عميل محتمل",
    intro:
      "تعمل الفعاليات في الإمارات وفق جداول زمنية ضيقة، من معارض مركز دبي التجاري العالمي ومؤتمرات مدينة إكسبو إلى لقاءات الشركات الخاصة. نساعد المنظمين والعارضين ووكالات الفعاليات على زيادة التسجيلات، وتنظيم دخول سلس، وتحقيق القيمة بعد إغلاق الأبواب. ونبني كل حملة ومنصة ومسار عمل حول موعد ثابت لا يمكن تغييره.",
    challenges: [
      {
        title: "مواعيد ثابتة وحملات مضغوطة",
        body: "لكل فعالية موعد نهائي لا يتغير. ويجب أن تبني حملات التسجيل الاهتمام مبكرًا، وتتعامل مع فترات الركود، وتبلغ ذروتها في الوقت المناسب، دون فرصة للإعادة.",
      },
      {
        title: "صعوبة التسجيل وغياب المسجلين",
        body: "النماذج الطويلة والأسعار غير الواضحة وتعدد أنواع التذاكر المربك تقلل التسجيلات، بينما يُضعف غياب المسجلين التجربة على العارضين والرعاة.",
      },
      {
        title: "العارضون والرعاة يحتاجون إلى إثبات القيمة",
        body: "يريد العارضون زوارًا مؤهلين وعملاء محتملين قابلين للقياس. ومن دون بيانات جيدة عن الحضور والتفاعل، يصبح الاحتفاظ بالرعاة وإعادة حجز الأجنحة أصعب كل عام.",
      },
      {
        title: "أدوات فعاليات متفرقة",
        body: "تأتي التذاكر والشارات والبرامج والتطبيقات ومسح بيانات الزوار ونظام إدارة علاقات العملاء غالبًا من موردين مختلفين. فلا تترابط البيانات، ويقضي الفريق الأسبوع التالي للفعالية في مطابقة جداول البيانات.",
      },
    ],
    marketing: [
      {
        title: "استقطاب الحضور على مراحل",
        body: "نخطط لمراحل التسجيل المبكر والرئيسي والفرصة الأخيرة عبر LinkedIn وGoogle وMeta والبريد، مستهدفين حسب الدور الوظيفي والقطاع والمنطقة، ونعيد توزيع الميزانية وفق وتيرة التسجيل اليومية.",
      },
      {
        title: "تضخيم صوت المتحدثين والعارضين",
        body: "نزوّد المتحدثين والعارضين والشركاء بمحتوى جاهز للمشاركة وروابط قابلة للتتبّع، فتتحول شبكاتهم الخاصة إلى قناة تسجيل قابلة للقياس.",
      },
      {
        title: "محتوى مباشر وما بعد الفعالية",
        body: "نخطط لتغطية اجتماعية من الموقع، ومقاطع قصيرة لأبرز اللحظات، وملخصات بعد الفعالية تحافظ على الاهتمام، وتدعم تقارير الرعاة، وتمهّد لحملة العام التالي.",
      },
    ],
    solutions: [
      {
        title: "تسجيل الحضور مع شارات برمز QR",
        body: "مسار تسجيل ثنائي اللغة بأنواع تذاكر وحجوزات جماعية ورموز ترويجية ودفع آمن، يُصدر شارات برمز QR للدخول السريع ومسح الحضور في الجلسات يوم الفعالية.",
      },
      {
        title: "تطبيق الفعالية والبرنامج",
        body: "تطبيق هاتف أو ويب ببرامج مخصصة لكل مشارك، وملفات للمتحدثين، ومخططات للقاعات، وإشعارات فورية، وطلبات اجتماعات، ليخطط المشاركون يومهم ويلتقوا بالأشخاص المناسبين.",
      },
      {
        title: "بوابة العارضين والتقاط بيانات الزوار",
        body: "بوابة للعارضين لتفاصيل الأجنحة وتصاريح الموظفين والأدلة، مع تطبيق لمسح بيانات الزوار يسجّل معلوماتهم والملاحظات، ويرسلها إلى نظام إدارة العملاء لدى العارض بعد الفعالية.",
      },
      {
        title: "مساعد ذكي للفعالية ومتابعة بعدها",
        body: "مساعد يجيب قبل الفعالية عن أسئلة المكان ومواقف السيارات والبرنامج وخطابات التأشيرة، ورسائل آلية بعدها تُرسل للحضور التسجيلات والاستبيانات وعروض النسخة القادمة.",
      },
    ],
    journey: [
      {
        title: "التعريف وحفظ الموعد",
        body: "تتنافس الفعاليات على الاهتمام قبل أشهر. نبني موقعًا واضحًا للفعالية وإعلانات مبكرة وحملات موجّهة ليحفظ الجمهور المناسب الموعد.",
      },
      {
        title: "التسجيل",
        body: "نُبقي التسجيل قصيرًا ومناسبًا للهاتف، ونشرح خيارات التذاكر وأسعار المجموعات بوضوح، ونؤكد التسجيل فورًا مع دعوات للتقويم وتفاصيل الشارة وخيار التأكيد عبر WhatsApp.",
      },
      {
        title: "التفاعل قبل الفعالية",
        body: "قد يتراجع الاهتمام بين التسجيل والحضور. نرسل أبرز فقرات البرنامج وأخبار المتحدثين وأدوات ترتيب الاجتماعات ومعلومات عملية عن التنقل والمواقف لتقليل الغياب.",
      },
      {
        title: "يوم الفعالية",
        body: "يصنع الدخول والتنقل الانطباع الأول. نصمم دخولًا سريعًا برمز QR وتحديثات مباشرة للبرنامج وطرقًا بسيطة ليتواصل الحضور مع العارضين ومع بعضهم.",
      },
      {
        title: "المتابعة والنسخة القادمة",
        body: "تتحقق القيمة بعد الفعالية. نؤتمت رسائل الشكر والوصول إلى المحتوى والاستبيانات وتسليم بيانات العملاء المحتملين للعارضين، ونلتقط الاهتمام المبكر بالنسخة القادمة.",
      },
    ],
    faqs: [
      {
        q: "متى يجب أن نبدأ تسويق الفعالية؟",
        a: "يعتمد ذلك عادةً على حجم الفعالية وجمهورها. فالمعارض والمؤتمرات الكبيرة تحتاج غالبًا إلى أشهر من النشاط المرحلي، بينما تحتاج الفعاليات الداخلية أو المقتصرة على المدعوين إلى وقت أقل. نخطط بالرجوع من موعد الفعالية وأهداف التسجيل التي تحددها.",
      },
      {
        q: "هل نبني منصة مخصصة أم نستخدم أداة فعاليات جاهزة؟",
        a: "تعمل فعاليات كثيرة جيدًا على منصات فعاليات معروفة مع هوية بصرية وتكاملات مخصصة. أما البناء المخصص فيناسب الفعاليات الرئيسية المتكررة أو مسارات العمل غير المعتادة أو احتياجات البيانات الخاصة. ونوصي حسب حجم فعاليتك ومدى تكرارها.",
      },
      {
        q: "هل يمكنكم تنفيذ التسجيل بالعربية والإنجليزية؟",
        a: "نعم. نصمم التسجيل والرسائل والشارات والتطبيقات باللغتين، بما في ذلك التخطيط من اليمين إلى اليسار والكتابة الصحيحة للأسماء العربية على الشارات.",
      },
      {
        q: "كيف تُحمى بيانات الحضور؟",
        a: "نجمع ما يلزم فقط، ونستخدم موافقة واضحة للتسويق ولمشاركة البيانات مع العارضين، ونؤمّن البيانات وفق قانون حماية البيانات الشخصية الإماراتي. وتبقى أنت مالك جميع بيانات الحضور.",
      },
    ],
    compliance:
      "تخضع بيانات الحضور والزوار لقانون حماية البيانات الشخصية الإماراتي؛ وينبغي أن تستند مشاركة بيانات الاتصال مع العارضين أو الرعاة إلى موافقة واضحة يتم الحصول عليها عند التسجيل. ندمج خطوات الموافقة هذه في النماذج، وننصح بتأكيد أسلوب مشاركة البيانات مع مستشارك القانوني.",
    visualDirection:
      "موجات أرجوانية متدفقة توحي بالحشود والصوت، ودرجات جريئة من إضاءة المسارح، وصور حيوية للقاعات والمنصات والحوارات.",
    cta: {
      title: "حدّثنا عن فعاليتك القادمة",
      body: "شاركنا الموعد والجمهور والأدوات الحالية. سنقترح خطة للتسجيل والتفاعل، والمنصات أو الأتمتة الأكثر أثرًا.",
    },
    metaTitle: "تسويق الفعاليات والمعارض وتطبيقاتها في دبي",
    metaDescription:
      "تسويق للحضور وتسجيل ثنائي اللغة بشارات QR وتطبيقات للفعاليات والتقاط بيانات الزوار للعارضين ومتابعة ذكية لمنظمي الفعاليات والعارضين في دبي والإمارات.",
  },
};

export default industry;
