import type { Industry } from "../types";

const industry: Industry = {
  slug: "education",
  tier: 2,
  motif: "grid",
  hue: 228,
  services: ["digital-marketing", "web-design-development", "web-applications", "ai-chatbots", "seo", "mobile-apps"],
  related: ["technology-saas", "professional-legal", "events-exhibitions"],
  en: {
    name: "Education and EdTech",
    short: "Admissions marketing, enquiry handling and learning platforms for UAE schools, institutes and EdTech.",
    headline: "From open-day interest to confirmed enrolment, without lost enquiries",
    intro:
      "Parents and students in the UAE compare schools, universities and courses carefully, often across several emirates and curricula. We help education providers attract the right applicants, respond quickly in Arabic and English, and run admissions and learning platforms that families find easy to use. The goal is a clear, trustworthy path from first search to first day.",
    challenges: [
      {
        title: "Long, seasonal admissions cycles",
        body: "Enrolment decisions are made months ahead and cluster around specific terms and intakes. Marketing that starts late, or stops after open days, leaves seats empty or waitlists unmanaged.",
      },
      {
        title: "Multiple decision-makers",
        body: "For schools, parents decide but children influence. For universities and courses, students research while families or employers often pay. Messaging has to answer each person's concerns.",
      },
      {
        title: "Slow enquiry follow-up",
        body: "Enquiries arrive by form, phone, WhatsApp and walk-in during busy periods. Without a shared system, admissions teams struggle to respond quickly or know which families are close to deciding.",
      },
      {
        title: "Platforms that frustrate users",
        body: "Clunky application forms, portals that break on mobile and disconnected learning tools reflect poorly on the institution and create extra work for staff and parents.",
      },
    ],
    marketing: [
      {
        title: "Intake-focused paid campaigns",
        body: "We plan Google and Meta campaigns around each intake and term, targeting by curriculum, location and programme, and optimise towards booked tours and submitted applications rather than clicks.",
      },
      {
        title: "Programme and curriculum SEO",
        body: "We build pages for each programme, curriculum and campus that answer what families search for, including fees structure explanations, transport, facilities and admissions steps, in both languages.",
      },
      {
        title: "Community and social proof",
        body: "We plan social content showing campus life, teaching and events, and help you collect and present genuine parent and student feedback in line with your policies and approvals.",
      },
    ],
    solutions: [
      {
        title: "Online application and admissions portal",
        body: "A bilingual application flow with document upload, assessment booking, status tracking and staff dashboards, so families always know where they stand and admissions teams work from one view.",
      },
      {
        title: "Tour and open-day booking",
        body: "Campus tour, trial class and open-day booking with calendar sync, automated reminders by WhatsApp and email, and follow-up sequences tailored to the grade or programme of interest.",
      },
      {
        title: "AI admissions assistant",
        body: "A website and WhatsApp assistant that answers questions on curricula, fees, transport and deadlines from your approved information, captures enquiry details and books a call with admissions.",
      },
      {
        title: "Learning and parent apps",
        body: "Web and mobile platforms for course delivery, assignments, progress updates and parent communication, integrated with your existing student information system where possible.",
      },
    ],
    journey: [
      {
        title: "Early research",
        body: "Families and students start by searching options, often months ahead. We make sure your programme pages, reviews and Google Business Profile are clear, current and easy to compare.",
      },
      {
        title: "Shortlisting",
        body: "Prospects narrow choices by curriculum, location, fees and reputation. We provide downloadable guides, fee explanations and comparison-friendly content that helps them shortlist with confidence.",
      },
      {
        title: "Enquiry and visit",
        body: "This is the key conversion moment. We make tour booking simple, respond to enquiries quickly through an assistant and admissions team, and send helpful preparation details before the visit.",
      },
      {
        title: "Application and assessment",
        body: "We keep applications short, mobile-friendly and bilingual, with clear checklists for documents and automatic reminders so families do not stall halfway through.",
      },
      {
        title: "Offer, enrolment and onboarding",
        body: "After an offer, families need reassurance. We automate offer communication, fee and uniform information, and welcome sequences that make the first weeks smoother for parents and students.",
      },
    ],
    faqs: [
      {
        q: "When should we start marketing for the next intake?",
        a: "Ideally well before your main open days, as many families research months ahead. We usually plan awareness, enquiry and application phases backwards from your intake dates and adjust as applications come in.",
      },
      {
        q: "Can the admissions assistant give wrong information?",
        a: "We restrict the assistant to approved content such as fee schedules, curricula and policies, and design it to hand over to staff when it is unsure. You review and approve its knowledge before launch and whenever policies change.",
      },
      {
        q: "Can you integrate with our student information system?",
        a: "Often, yes. Integration typically depends on whether your system offers an API or data export. We review it early so applications and enquiries flow into your records instead of being re-entered by hand.",
      },
      {
        q: "How do you protect student and parent data?",
        a: "We build forms and portals with access controls, minimal data collection and clear consent, in line with the UAE PDPL. We also recommend confirming requirements with your regulator and internal data protection lead.",
      },
    ],
    compliance:
      "Education providers in Dubai are overseen by KHDA, and other emirates have their own education authorities; marketing claims about ratings, accreditation or outcomes should be confirmed with your compliance lead. Student and parent data is subject to the UAE PDPL, which we account for in forms and platforms.",
    visualDirection:
      "Ordered blue grids like timetables and campus plans, bright accents for milestones, open modern photography of learning spaces and diverse students.",
    cta: {
      title: "Plan your next intake with us",
      body: "Tell us about your programmes, intake dates and current enquiry process. We will map where applicants drop off and suggest the marketing and systems that help most.",
    },
    metaTitle: "Education Marketing and EdTech Development in UAE",
    metaDescription:
      "Admissions marketing, bilingual application portals, AI enquiry assistants and learning platforms for schools, universities and EdTech in Dubai and the UAE.",
  },
  ar: {
    name: "التعليم والتقنيات التعليمية",
    short: "تسويق القبول ومعالجة الاستفسارات ومنصات التعلّم للمدارس والمعاهد وشركات التقنيات التعليمية في الإمارات.",
    headline: "من الاهتمام بيوم الأبواب المفتوحة إلى التسجيل المؤكد دون فقدان أي استفسار",
    intro:
      "يقارن أولياء الأمور والطلاب في الإمارات بين المدارس والجامعات والدورات بعناية، وغالبًا عبر عدة إمارات ومناهج. نساعد مقدمي التعليم على استقطاب المتقدمين المناسبين، والرد بسرعة بالعربية والإنجليزية، وتشغيل منصات قبول وتعلّم تجدها الأسر سهلة الاستخدام. والهدف مسار واضح وموثوق من البحث الأول حتى اليوم الدراسي الأول.",
    challenges: [
      {
        title: "دورات قبول طويلة وموسمية",
        body: "تُتخذ قرارات التسجيل قبل أشهر وتتركز حول فصول ودفعات محددة. والتسويق الذي يبدأ متأخرًا أو يتوقف بعد أيام الأبواب المفتوحة يترك مقاعد شاغرة أو قوائم انتظار دون إدارة.",
      },
      {
        title: "تعدد أصحاب القرار",
        body: "في المدارس يقرر الأهل ويؤثر الأبناء. وفي الجامعات والدورات يبحث الطالب بينما تدفع الأسرة أو جهة العمل غالبًا. ويجب أن تجيب الرسائل عن مخاوف كل طرف.",
      },
      {
        title: "بطء متابعة الاستفسارات",
        body: "تصل الاستفسارات عبر النماذج والهاتف وWhatsApp والزيارات المباشرة في أوقات الذروة. ومن دون نظام مشترك، يصعب على فرق القبول الرد بسرعة أو معرفة الأسر الأقرب إلى اتخاذ القرار.",
      },
      {
        title: "منصات تزعج المستخدمين",
        body: "نماذج التقديم المعقدة والبوابات التي لا تعمل جيدًا على الهاتف وأدوات التعلّم غير المترابطة تنعكس سلبًا على المؤسسة، وتضيف عبئًا على الموظفين وأولياء الأمور.",
      },
    ],
    marketing: [
      {
        title: "حملات مدفوعة مرتبطة بكل دفعة",
        body: "نخطط لحملات Google وMeta حول كل دفعة وفصل دراسي، مع استهداف حسب المنهج والموقع والبرنامج، ونحسّنها نحو الجولات المحجوزة والطلبات المقدَّمة لا النقرات.",
      },
      {
        title: "تحسين محركات البحث للبرامج والمناهج",
        body: "نبني صفحات لكل برنامج ومنهج وحرم جامعي تجيب عمّا تبحث عنه الأسر، بما في ذلك شرح هيكل الرسوم والمواصلات والمرافق وخطوات القبول، باللغتين.",
      },
      {
        title: "المجتمع والآراء الموثوقة",
        body: "نخطط لمحتوى اجتماعي يُظهر الحياة في الحرم والتدريس والفعاليات، ونساعدك على جمع آراء حقيقية من أولياء الأمور والطلاب وعرضها وفق سياساتك واعتماداتك.",
      },
    ],
    solutions: [
      {
        title: "بوابة التقديم والقبول الإلكترونية",
        body: "مسار تقديم ثنائي اللغة مع رفع المستندات وحجز التقييمات وتتبّع حالة الطلب ولوحات تحكم للموظفين، لتعرف الأسر موقعها دائمًا ويعمل فريق القبول من واجهة واحدة.",
      },
      {
        title: "حجز الجولات وأيام الأبواب المفتوحة",
        body: "حجز لجولات الحرم والحصص التجريبية وأيام الأبواب المفتوحة مع مزامنة التقويم، وتذكيرات تلقائية عبر WhatsApp والبريد، ورسائل متابعة مصممة حسب الصف أو البرنامج المطلوب.",
      },
      {
        title: "مساعد قبول بالذكاء الاصطناعي",
        body: "مساعد على الموقع وWhatsApp يجيب عن أسئلة المناهج والرسوم والمواصلات والمواعيد النهائية من معلوماتك المعتمدة، ويجمع بيانات الاستفسار، ويحجز مكالمة مع فريق القبول.",
      },
      {
        title: "تطبيقات التعلّم وأولياء الأمور",
        body: "منصات ويب وتطبيقات هاتف لتقديم الدروس والواجبات وتحديثات التقدّم والتواصل مع أولياء الأمور، مع ربطها بنظام معلومات الطلاب الحالي لديك حيثما أمكن.",
      },
    ],
    journey: [
      {
        title: "البحث المبكر",
        body: "تبدأ الأسر والطلاب بالبحث عن الخيارات، غالبًا قبل أشهر. نتأكد من أن صفحات برامجك وتقييماتك وملفك على Google واضحة ومحدّثة وسهلة المقارنة.",
      },
      {
        title: "إعداد القائمة المختصرة",
        body: "يضيّق المهتمون خياراتهم حسب المنهج والموقع والرسوم والسمعة. نوفر أدلة قابلة للتنزيل وشرحًا للرسوم ومحتوى يسهل مقارنته، ليختاروا بثقة.",
      },
      {
        title: "الاستفسار والزيارة",
        body: "هذه لحظة التحويل الأهم. نسهّل حجز الجولات، ونرد على الاستفسارات بسرعة عبر المساعد وفريق القبول، ونرسل تفاصيل مفيدة للتحضير قبل الزيارة.",
      },
      {
        title: "التقديم والتقييم",
        body: "نُبقي نماذج التقديم قصيرة ومناسبة للهاتف وثنائية اللغة، مع قوائم واضحة بالمستندات المطلوبة وتذكيرات تلقائية حتى لا تتوقف الأسر في منتصف الطريق.",
      },
      {
        title: "العرض والتسجيل والانضمام",
        body: "بعد العرض تحتاج الأسر إلى الطمأنينة. نؤتمت رسائل العرض ومعلومات الرسوم والزي المدرسي ورسائل الترحيب التي تجعل الأسابيع الأولى أسهل على الأهل والطلاب.",
      },
    ],
    faqs: [
      {
        q: "متى يجب أن نبدأ التسويق للدفعة القادمة؟",
        a: "يُفضَّل البدء قبل أيام الأبواب المفتوحة الرئيسية بوقت كافٍ، لأن كثيرًا من الأسر تبحث قبل أشهر. نخطط عادةً لمراحل التعريف والاستفسار والتقديم بالرجوع من مواعيد الدفعات، ونعدّلها مع ورود الطلبات.",
      },
      {
        q: "هل يمكن أن يقدّم مساعد القبول معلومات خاطئة؟",
        a: "نقصر المساعد على المحتوى المعتمد مثل جداول الرسوم والمناهج والسياسات، ونصممه ليحوّل المحادثة إلى الموظفين حين لا يكون متأكدًا. وتراجع أنت معلوماته وتعتمدها قبل الإطلاق وكلما تغيّرت السياسات.",
      },
      {
        q: "هل يمكنكم الربط مع نظام معلومات الطلاب لدينا؟",
        a: "غالبًا نعم. يعتمد الربط عادةً على توفر واجهة برمجية أو إمكانية تصدير البيانات في نظامك. نراجع ذلك مبكرًا لتنتقل الطلبات والاستفسارات إلى سجلاتك بدل إعادة إدخالها يدويًا.",
      },
      {
        q: "كيف تحمون بيانات الطلاب وأولياء الأمور؟",
        a: "نبني النماذج والبوابات بضوابط وصول وجمع الحد الأدنى من البيانات وموافقة واضحة، وفق قانون حماية البيانات الشخصية الإماراتي. وننصح أيضًا بتأكيد المتطلبات مع الجهة التنظيمية ومسؤول حماية البيانات لديك.",
      },
    ],
    compliance:
      "تشرف هيئة المعرفة والتنمية البشرية على مقدمي التعليم في دبي، ولكل إمارة أخرى جهتها التعليمية؛ وينبغي تأكيد ادعاءات التسويق المتعلقة بالتقييمات أو الاعتماد أو النتائج مع مسؤول الامتثال لديك. وتخضع بيانات الطلاب وأولياء الأمور لقانون حماية البيانات الشخصية الإماراتي، ونراعي ذلك في النماذج والمنصات.",
    visualDirection:
      "شبكات زرقاء منتظمة تشبه الجداول الدراسية ومخططات الحرم، مع لمسات مشرقة للمحطات المهمة، وصور حديثة ومفتوحة لبيئات التعلّم وطلاب متنوعين.",
    cta: {
      title: "خطط لدفعتك القادمة معنا",
      body: "حدّثنا عن برامجك ومواعيد الدفعات وطريقة معالجة الاستفسارات حاليًا. سنحدد أين يتوقف المتقدمون، ونقترح التسويق والأنظمة الأكثر فائدة.",
    },
    metaTitle: "تسويق التعليم وتطوير المنصات التعليمية في الإمارات",
    metaDescription:
      "تسويق القبول وبوابات تقديم ثنائية اللغة ومساعدون أذكياء للاستفسارات ومنصات تعلّم للمدارس والجامعات وشركات التقنيات التعليمية في دبي والإمارات.",
  },
};

export default industry;
