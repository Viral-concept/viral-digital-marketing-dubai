import type { Service } from "../types";

const service: Service = {
  slug: "ai-chatbots",
  family: "intelligence",
  index: "10",
  industries: ["real-estate", "dental-aesthetic", "hospitality", "ecommerce-retail"],
  related: ["ai-automation", "social-media", "web-design-development"],
  en: {
    name: "AI Chatbot Development",
    short: "Arabic and English AI assistants for WhatsApp and web, grounded in your own knowledge, with human handover.",
    headline: "AI assistants on WhatsApp that know when to call a human",
    intro:
      "We build AI chatbots that answer customer questions accurately, qualify enquiries and book appointments on WhatsApp and your website. They draw answers from your own approved content rather than guessing, and work in Arabic and English. When a conversation needs a person, the chat moves to your team with the full context attached.",
    outcomes: [
      "Instant, accurate replies to common questions at any hour, including weekends and holidays.",
      "Better-qualified enquiries reaching your sales or front desk team.",
      "More bookings captured from conversations that would otherwise go cold.",
      "Consistent answers in Arabic and English, based on information you control.",
    ],
    deliverables: [
      {
        title: "Conversation design",
        body: "Mapping of the questions customers ask, the information needed to qualify them and the points where a human should take over, written in a natural tone for both languages.",
      },
      {
        title: "WhatsApp Business API setup",
        body: "Set-up through an approved provider, number and display name verification, message templates for approved outbound messages and opt-in handling.",
      },
      {
        title: "Website and in-app chat",
        body: "A branded chat widget for your website or app that shares the same knowledge and logic as WhatsApp, so customers get consistent answers wherever they ask.",
      },
      {
        title: "Knowledge base retrieval",
        body: "Retrieval from your own documents, price lists, policies and FAQs, so the assistant answers from approved sources and says so when it does not know.",
      },
      {
        title: "Human handover and CRM integration",
        body: "Smooth transfer to live agents with conversation history, plus connection to your CRM, booking system or inbox so leads and appointments are recorded automatically.",
      },
      {
        title: "Monitoring and improvement",
        body: "Conversation review, accuracy checks, unanswered question reports and regular updates to content and flows as your services, prices and policies change.",
      },
    ],
    process: [
      {
        title: "Define the job",
        body: "We agree what the assistant should handle, what it must never do and how success is measured, using real past conversations from your team where available.",
      },
      {
        title: "Prepare the knowledge",
        body: "We gather and clean your source content in Arabic and English, fill gaps and set rules for sensitive topics such as pricing, medical claims or legal matters.",
      },
      {
        title: "Build and test with your team",
        body: "We build the assistant, connect channels and systems, then test it with your staff using tricky and realistic questions before any customer sees it.",
      },
      {
        title: "Launch, review and tune",
        body: "We launch in stages, review conversations closely in the early weeks and improve answers, handover rules and flows based on what customers actually ask.",
      },
    ],
    fit: [
      "Businesses receiving high volumes of WhatsApp enquiries that are hard to answer quickly.",
      "Clinics, hotels and service companies that want bookings captured around the clock.",
      "Property and automotive sales teams that need leads qualified before a call.",
      "E-commerce brands answering repeated questions about orders, delivery and returns.",
    ],
    faqs: [
      {
        q: "Will the chatbot make up answers?",
        a: "We design it to answer from your approved knowledge base and to say when it does not know, then hand over to your team. No AI system is perfect, so we test carefully, set limits on sensitive topics and monitor conversations after launch.",
      },
      {
        q: "Does it understand Arabic, including Gulf dialect?",
        a: "Yes, current AI models handle Modern Standard Arabic and common Gulf expressions well, as well as English and mixed messages. We test with real examples from your customers and adjust responses so they sound natural.",
      },
      {
        q: "What do we need for WhatsApp Business API?",
        a: "You need a verified Meta business account, a phone number for the API and approved message templates for outbound messages. We guide you through the set-up with an approved provider, and the number and account remain yours.",
      },
      {
        q: "How is customer data protected?",
        a: "We limit what data the assistant collects, store conversations securely and choose AI providers with suitable data terms. We design with the UAE PDPL in mind and recommend reviewing consent wording and retention periods with your compliance lead.",
      },
    ],
    metaTitle: "AI Chatbot and WhatsApp Bot Development in Dubai",
    metaDescription:
      "AI chatbots for WhatsApp and websites in Dubai, answering in Arabic and English from your own knowledge base, booking appointments and handing over to staff.",
  },
  ar: {
    name: "تطوير روبوتات المحادثة بالذكاء الاصطناعي",
    short: "مساعدون أذكياء بالعربية والإنجليزية على WhatsApp وموقعك، يستندون إلى معرفتك ويحوّلون المحادثة لفريقك.",
    headline: "مساعدون أذكياء على WhatsApp يعرفون متى يستدعون موظفًا",
    intro:
      "نبني روبوتات محادثة بالذكاء الاصطناعي تجيب عن أسئلة العملاء بدقة، وتؤهل الاستفسارات، وتحجز المواعيد على WhatsApp وموقعك الإلكتروني. تستمد إجاباتها من محتواك المعتمد بدل التخمين، وتعمل بالعربية والإنجليزية. وحين تحتاج المحادثة إلى شخص، تنتقل إلى فريقك مع كامل سياقها.",
    outcomes: [
      "ردود فورية ودقيقة على الأسئلة الشائعة في أي وقت، بما في ذلك العطلات ونهاية الأسبوع.",
      "استفسارات أكثر تأهيلًا تصل إلى فريق المبيعات أو الاستقبال.",
      "حجوزات أكثر من محادثات كانت ستنقطع لولا الرد السريع.",
      "إجابات متسقة بالعربية والإنجليزية مبنية على معلومات تتحكم بها.",
    ],
    deliverables: [
      {
        title: "تصميم المحادثات",
        body: "رسم الأسئلة التي يطرحها العملاء، والمعلومات اللازمة لتأهيلهم، والنقاط التي يجب أن يتولى فيها موظف المحادثة، بأسلوب طبيعي في اللغتين.",
      },
      {
        title: "إعداد واجهة WhatsApp للأعمال",
        body: "الإعداد عبر مزوّد معتمد، والتحقق من الرقم واسم العرض، وقوالب الرسائل المعتمدة للرسائل الصادرة، وإدارة موافقة العملاء على التواصل.",
      },
      {
        title: "المحادثة على الموقع والتطبيق",
        body: "نافذة محادثة بهوية علامتك على موقعك أو تطبيقك تشترك في المعرفة والمنطق نفسيهما مع WhatsApp، ليحصل العملاء على إجابات متسقة أينما سألوا.",
      },
      {
        title: "الاسترجاع من قاعدة المعرفة",
        body: "استرجاع من مستنداتك وقوائم أسعارك وسياساتك وأسئلتك الشائعة، ليجيب المساعد من مصادر معتمدة ويصرّح بذلك حين لا يعرف الإجابة.",
      },
      {
        title: "التحويل إلى الموظفين والربط بنظام إدارة العملاء",
        body: "انتقال سلس إلى موظفي الخدمة مع سجل المحادثة، وربط بنظام إدارة العملاء أو نظام الحجز أو صندوق الوارد لتسجيل العملاء المحتملين والمواعيد تلقائيًا.",
      },
      {
        title: "المراقبة والتحسين",
        body: "مراجعة المحادثات وفحص الدقة وتقارير الأسئلة التي لم تُجب، وتحديثات منتظمة للمحتوى والمسارات كلما تغيرت خدماتك وأسعارك وسياساتك.",
      },
    ],
    process: [
      {
        title: "تحديد المهمة",
        body: "نتفق على ما يتولاه المساعد وما يجب ألا يفعله أبدًا وكيف يُقاس النجاح، مستعينين بمحادثات سابقة حقيقية من فريقك حين تتوفر.",
      },
      {
        title: "تجهيز المعرفة",
        body: "نجمع المحتوى المصدري بالعربية والإنجليزية وننقحه، ونسد الثغرات، ونضع قواعد للمواضيع الحساسة مثل الأسعار والادعاءات الطبية والمسائل القانونية.",
      },
      {
        title: "البناء والاختبار مع فريقك",
        body: "نبني المساعد ونربط القنوات والأنظمة، ثم نختبره مع موظفيك بأسئلة واقعية وصعبة قبل أن يراه أي عميل.",
      },
      {
        title: "الإطلاق والمراجعة والضبط",
        body: "نطلقه على مراحل، ونراجع المحادثات عن قرب في الأسابيع الأولى، ونحسّن الإجابات وقواعد التحويل والمسارات بناءً على ما يسأله العملاء فعلًا.",
      },
    ],
    fit: [
      "الشركات التي تتلقى أعدادًا كبيرة من استفسارات WhatsApp يصعب الرد عليها بسرعة.",
      "العيادات والفنادق وشركات الخدمات التي تريد استقبال الحجوزات على مدار الساعة.",
      "فرق مبيعات العقارات والسيارات التي تحتاج إلى تأهيل العملاء قبل الاتصال.",
      "علامات التجارة الإلكترونية التي تجيب عن أسئلة متكررة حول الطلبات والتوصيل والإرجاع.",
    ],
    faqs: [
      {
        q: "هل سيختلق روبوت المحادثة إجابات؟",
        a: "نصممه ليجيب من قاعدة معرفتك المعتمدة وليصرّح حين لا يعرف، ثم يحوّل المحادثة إلى فريقك. لا يوجد نظام ذكاء اصطناعي مثالي، لذا نختبر بعناية ونضع حدودًا للمواضيع الحساسة ونراقب المحادثات بعد الإطلاق.",
      },
      {
        q: "هل يفهم العربية، بما فيها اللهجة الخليجية؟",
        a: "نعم، تتعامل نماذج الذكاء الاصطناعي الحالية جيدًا مع العربية الفصحى والتعابير الخليجية الشائعة، وكذلك مع الإنجليزية والرسائل المختلطة. ونختبر بأمثلة حقيقية من عملائك ونعدّل الردود لتبدو طبيعية.",
      },
      {
        q: "ما الذي نحتاجه لواجهة WhatsApp للأعمال؟",
        a: "تحتاج إلى حساب أعمال موثّق لدى Meta، ورقم هاتف مخصص للواجهة، وقوالب رسائل معتمدة للرسائل الصادرة. نرشدك خلال الإعداد مع مزوّد معتمد، ويبقى الرقم والحساب ملكًا لك.",
      },
      {
        q: "كيف تُحمى بيانات العملاء؟",
        a: "نحصر البيانات التي يجمعها المساعد، ونخزّن المحادثات بأمان، ونختار مزودي ذكاء اصطناعي بشروط بيانات مناسبة. ونصمم مع مراعاة قانون حماية البيانات الشخصية في الإمارات، ونوصي بمراجعة صيغ الموافقة ومدد الاحتفاظ بالبيانات مع مسؤول الامتثال لديك.",
      },
    ],
    metaTitle: "تطوير روبوتات محادثة ذكية وWhatsApp في دبي",
    metaDescription:
      "روبوتات محادثة ذكية لـ WhatsApp والمواقع في دبي، تجيب بالعربية والإنجليزية من قاعدة معرفتك الخاصة، وتحجز المواعيد، وتحوّل المحادثات إلى فريقك عند الحاجة.",
  },
};

export default service;
