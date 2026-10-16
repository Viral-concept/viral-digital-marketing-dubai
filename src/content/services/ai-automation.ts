import type { Service } from "../types";

const service: Service = {
  slug: "ai-automation",
  family: "intelligence",
  index: "09",
  industries: ["real-estate", "logistics", "professional-legal", "finance-fintech-insurance"],
  related: ["ai-chatbots", "web-applications", "digital-marketing"],
  en: {
    name: "AI Automation and AI Agents",
    short: "Workflow automation, CRM automation, document processing and AI agents, with people kept in control.",
    headline: "Automate the busywork, keep people on the decisions",
    intro:
      "We design and build automations that take repetitive work off your team: routing leads, updating the CRM, reading documents and drafting responses. Where it helps, we add AI agents that can complete multi-step tasks, always with clear limits and human approval at the points that matter. Data handling is planned with the UAE Personal Data Protection Law in mind from day one.",
    outcomes: [
      "Faster response to leads and requests, including outside office hours.",
      "Less time spent copying data between email, spreadsheets, WhatsApp and the CRM.",
      "More consistent processes, with an audit trail of what was done and by whom.",
      "Staff time redirected from admin to work that needs judgement and relationships.",
    ],
    deliverables: [
      {
        title: "Automation opportunity audit",
        body: "A review of your workflows to find repetitive, rules-based tasks worth automating, ranked by time saved, risk and ease of implementation.",
      },
      {
        title: "Workflow automation",
        body: "Automated flows connecting your forms, inboxes, calendars, spreadsheets and business tools, built on platforms such as Make, n8n or custom code depending on scale and security needs.",
      },
      {
        title: "CRM automation",
        body: "Lead capture from every channel, enrichment, assignment rules, follow-up reminders and pipeline updates, so no enquiry from a portal, ad or WhatsApp chat is left waiting.",
      },
      {
        title: "Document processing",
        body: "Extraction of data from invoices, contracts, IDs, quotations and forms in Arabic and English, with validation rules and human review for uncertain results.",
      },
      {
        title: "AI agents with human oversight",
        body: "Agents that research, draft, classify or carry out multi-step tasks within defined permissions, with approval steps, activity logs and simple ways to pause or correct them.",
      },
      {
        title: "Governance, privacy and handover",
        body: "Documentation, access controls, data handling aligned with UAE PDPL principles, monitoring for failures and training so your team understands and trusts the system.",
      },
    ],
    process: [
      {
        title: "Find the right first workflow",
        body: "We map current processes with the people who run them and choose a first automation that is frequent, well understood and low risk if something goes wrong.",
      },
      {
        title: "Design rules and guardrails",
        body: "We define inputs, decisions, exceptions and where a person must review or approve, and agree what data the system can access and where it is stored.",
      },
      {
        title: "Build, test on real cases",
        body: "We build the automation and test it against real historical examples, measuring accuracy and edge cases before it touches live customers or records.",
      },
      {
        title: "Roll out, monitor, expand",
        body: "We launch with monitoring and alerts, review results with your team, then extend automation to further workflows once the first one is stable and trusted.",
      },
    ],
    fit: [
      "Sales teams losing leads between ad platforms, portals, WhatsApp and the CRM.",
      "Operations and finance teams processing high volumes of documents by hand.",
      "Service businesses that want quicker responses without adding headcount.",
      "Leaders who want practical AI use cases with clear controls, not experiments.",
    ],
    faqs: [
      {
        q: "Will AI agents act without our approval?",
        a: "Only where you decide it is safe. We design agents with defined permissions and add human approval for actions such as sending customer messages, changing records or making commitments. Every action is logged so it can be reviewed.",
      },
      {
        q: "How do you handle personal data and the UAE PDPL?",
        a: "We map what personal data each automation uses, limit access to what is necessary and choose hosting and AI providers with appropriate data terms. We design with UAE PDPL principles in mind and recommend confirming specific obligations with your legal or compliance adviser.",
      },
      {
        q: "Does automation work with Arabic documents and messages?",
        a: "Yes. Modern AI models handle Arabic and English well for most business tasks. We test accuracy on your own Arabic examples, and add human review where handwriting, scans or dialect make results less reliable.",
      },
      {
        q: "What drives cost and timeline?",
        a: "It typically depends on the number of systems involved, the quality of your data, the volume of tasks and how much human review is needed. Starting with one well-chosen workflow keeps the first phase focused and measurable.",
      },
    ],
    metaTitle: "AI Automation and AI Agents for UAE Businesses",
    metaDescription:
      "AI automation in Dubai: CRM and workflow automation, Arabic and English document processing and AI agents with human oversight, designed with UAE PDPL in mind.",
  },
  ar: {
    name: "الأتمتة بالذكاء الاصطناعي والوكلاء الأذكياء",
    short: "أتمتة سير العمل ونظام إدارة العملاء ومعالجة المستندات ووكلاء أذكياء، مع بقاء القرار بيد فريقك.",
    headline: "أتمتة المهام الروتينية، وإبقاء القرارات بيد البشر",
    intro:
      "نصمم أتمتة تُخفف عن فريقك الأعمال المتكررة ونبنيها: توزيع العملاء المحتملين، وتحديث نظام إدارة علاقات العملاء (CRM)، وقراءة المستندات، وصياغة الردود. وحيث يكون ذلك مفيدًا، نضيف وكلاء أذكياء ينجزون مهام متعددة الخطوات، دائمًا ضمن حدود واضحة وبموافقة بشرية في المراحل الحاسمة. ونخطط معالجة البيانات منذ اليوم الأول مع مراعاة قانون حماية البيانات الشخصية في الإمارات.",
    outcomes: [
      "استجابة أسرع للعملاء المحتملين والطلبات، حتى خارج ساعات العمل.",
      "وقت أقل في نسخ البيانات بين البريد وجداول البيانات وWhatsApp ونظام إدارة العملاء.",
      "إجراءات أكثر اتساقًا مع سجل تدقيق يوضح ما تم ومن قام به.",
      "توجيه وقت الموظفين من الأعمال الإدارية إلى ما يحتاج إلى حكمة وعلاقات.",
    ],
    deliverables: [
      {
        title: "تقييم فرص الأتمتة",
        body: "مراجعة لسير العمل لديك لتحديد المهام المتكررة القائمة على قواعد والتي تستحق الأتمتة، مرتبة حسب الوقت الموفّر والمخاطر وسهولة التنفيذ.",
      },
      {
        title: "أتمتة سير العمل",
        body: "مسارات آلية تربط النماذج وصناديق البريد والتقويمات وجداول البيانات وأدوات العمل، مبنية على منصات مثل Make أو n8n أو بشيفرة مخصصة حسب الحجم ومتطلبات الأمان.",
      },
      {
        title: "أتمتة نظام إدارة العملاء",
        body: "استقبال العملاء المحتملين من كل قناة، وإثراء بياناتهم، وقواعد التوزيع، وتذكيرات المتابعة، وتحديث مراحل الصفقات، حتى لا يبقى أي استفسار من بوابة أو إعلان أو محادثة WhatsApp دون رد.",
      },
      {
        title: "معالجة المستندات",
        body: "استخراج البيانات من الفواتير والعقود والهويات وعروض الأسعار والنماذج بالعربية والإنجليزية، مع قواعد تحقق ومراجعة بشرية للنتائج غير المؤكدة.",
      },
      {
        title: "وكلاء أذكياء تحت إشراف بشري",
        body: "وكلاء يبحثون ويصوغون ويصنفون أو ينفذون مهام متعددة الخطوات ضمن صلاحيات محددة، مع خطوات اعتماد وسجلات نشاط وطرق بسيطة لإيقافهم أو تصحيحهم.",
      },
      {
        title: "الحوكمة والخصوصية والتسليم",
        body: "توثيق وضوابط وصول ومعالجة بيانات تتماشى مع مبادئ قانون حماية البيانات الشخصية في الإمارات، ومراقبة للأعطال، وتدريب يجعل فريقك يفهم النظام ويثق به.",
      },
    ],
    process: [
      {
        title: "اختيار سير العمل الأول المناسب",
        body: "نرسم الإجراءات الحالية مع الأشخاص الذين ينفذونها، ونختار أتمتة أولى متكررة ومفهومة جيدًا ومنخفضة المخاطر إذا حدث خطأ.",
      },
      {
        title: "تصميم القواعد والضوابط",
        body: "نحدد المدخلات والقرارات والاستثناءات والمواضع التي يجب أن يراجع فيها شخص أو يعتمد، ونتفق على البيانات التي يصل إليها النظام ومكان تخزينها.",
      },
      {
        title: "البناء والاختبار على حالات حقيقية",
        body: "نبني الأتمتة ونختبرها على أمثلة تاريخية حقيقية، فنقيس الدقة والحالات الاستثنائية قبل أن تتعامل مع عملاء أو سجلات فعلية.",
      },
      {
        title: "الإطلاق والمراقبة والتوسع",
        body: "نطلق النظام مع المراقبة والتنبيهات، ونراجع النتائج مع فريقك، ثم نوسع الأتمتة إلى مسارات أخرى بعد أن يستقر المسار الأول ويكسب الثقة.",
      },
    ],
    fit: [
      "فرق المبيعات التي تضيع منها العملاء بين المنصات الإعلانية والبوابات وWhatsApp ونظام إدارة العملاء.",
      "فرق العمليات والمالية التي تعالج كميات كبيرة من المستندات يدويًا.",
      "شركات الخدمات التي تريد استجابة أسرع دون زيادة عدد الموظفين.",
      "القادة الذين يريدون استخدامات عملية للذكاء الاصطناعي بضوابط واضحة، لا تجارب عابرة.",
    ],
    faqs: [
      {
        q: "هل سيتصرف الوكلاء الأذكياء دون موافقتنا؟",
        a: "فقط حيث تقررون أن ذلك آمن. نصمم الوكلاء بصلاحيات محددة ونضيف موافقة بشرية لإجراءات مثل إرسال رسائل للعملاء أو تعديل السجلات أو تقديم التزامات. ويُسجَّل كل إجراء لتمكن مراجعته.",
      },
      {
        q: "كيف تتعاملون مع البيانات الشخصية وقانون حمايتها في الإمارات؟",
        a: "نحدد البيانات الشخصية التي تستخدمها كل أتمتة، ونحصر الوصول فيما هو ضروري، ونختار مزودي الاستضافة والذكاء الاصطناعي بشروط بيانات مناسبة. ونصمم وفق مبادئ القانون الاتحادي لحماية البيانات الشخصية، ونوصي بتأكيد الالتزامات المحددة مع مستشاركم القانوني أو مسؤول الامتثال.",
      },
      {
        q: "هل تعمل الأتمتة مع المستندات والرسائل العربية؟",
        a: "نعم. تتعامل نماذج الذكاء الاصطناعي الحديثة جيدًا مع العربية والإنجليزية في معظم مهام الأعمال. نختبر الدقة على أمثلتكم العربية الفعلية، ونضيف مراجعة بشرية حين تقلل الكتابة اليدوية أو المسح الضوئي أو اللهجات من موثوقية النتائج.",
      },
      {
        q: "ما الذي يحدد التكلفة والمدة؟",
        a: "يعتمد ذلك عادةً على عدد الأنظمة المعنية وجودة بياناتكم وحجم المهام ومقدار المراجعة البشرية المطلوبة. والبدء بمسار عمل واحد مختار بعناية يُبقي المرحلة الأولى مركّزة وقابلة للقياس.",
      },
    ],
    metaTitle: "الأتمتة بالذكاء الاصطناعي والوكلاء الأذكياء في الإمارات",
    metaDescription:
      "أتمتة بالذكاء الاصطناعي في دبي: أتمتة سير العمل ونظام إدارة العملاء، ومعالجة المستندات بالعربية والإنجليزية، ووكلاء أذكياء بإشراف بشري وفق قانون حماية البيانات.",
  },
};

export default service;
