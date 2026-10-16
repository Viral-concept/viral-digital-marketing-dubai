import type { Industry } from "../types";

const industry: Industry = {
  slug: "healthcare",
  tier: 1,
  motif: "orbit",
  hue: 172,
  services: ["web-design-development", "seo", "ai-chatbots", "web-applications", "digital-marketing", "mobile-apps"],
  related: ["dental-aesthetic", "education", "technology-saas"],
  en: {
    name: "Healthcare and Medical Clinics",
    short: "Compliant patient acquisition, appointment booking and front-desk automation for clinics and medical centres.",
    headline: "Help patients find the right doctor and book with confidence",
    intro:
      "Patients choose clinics by specialty, doctor, insurance acceptance and location, usually on a phone and often in Arabic. We build clear clinic websites, careful campaigns and booking and messaging tools that reduce front-desk pressure while respecting healthcare advertising rules and patient privacy.",
    challenges: [
      {
        title: "Strict advertising rules",
        body: "Medical marketing must avoid misleading claims, unapproved comparisons and certain patient imagery. Many clinics hold back from marketing altogether because the approval process feels unclear.",
      },
      {
        title: "Overloaded front desks",
        body: "Reception teams handle calls, walk-ins, insurance checks and WhatsApp messages at once. Booking requests get missed, and patients wait on hold or try another clinic.",
      },
      {
        title: "Insurance and doctor questions",
        body: "Patients want to know whether their insurance is accepted, which doctor to see and what a first visit costs. When these answers are buried, enquiries turn into repeated calls.",
      },
      {
        title: "Sensitive patient data",
        body: "Forms, chat tools and analytics can collect health information. Clinics need systems designed to minimise data collection, control access and respect patient consent.",
      },
    ],
    marketing: [
      {
        title: "Specialty and condition SEO",
        body: "Doctor profiles, specialty pages and patient education articles reviewed by your clinicians, structured so patients searching for symptoms, treatments or specialists in their area can find you.",
      },
      {
        title: "Google Business Profile for each branch",
        body: "Accurate opening hours, services, insurance information and responses to reviews for every location, helping patients nearby choose and contact the right branch quickly.",
      },
      {
        title: "Compliance-aware campaigns",
        body: "Search and social campaigns for services such as check-ups, paediatrics or physiotherapy, with messaging and creative prepared for your internal and regulatory approval before anything runs.",
      },
    ],
    solutions: [
      {
        title: "Doctor and specialty booking",
        body: "Online booking by specialty, doctor, branch and language, with insurance information and visit preparation notes, connected to your clinic management system where it allows integration.",
      },
      {
        title: "Patient messaging assistant",
        body: "An AI assistant on WhatsApp and the website that answers common questions about services, timings and insurance, books or reschedules appointments and never gives medical advice.",
      },
      {
        title: "Appointment reminders and recalls",
        body: "Automated reminders, preparation instructions, follow-up prompts and recall messages for vaccinations or check-ups, designed to reduce no-shows and keep care on track.",
      },
      {
        title: "Patient app or portal",
        body: "A mobile app or web portal for appointments, results notifications, prescriptions and family profiles, built with access controls and data handling agreed with your IT and compliance teams.",
      },
    ],
    journey: [
      {
        title: "Symptom or need",
        body: "Patients start with a symptom, a referral or a routine check. We create clear, clinician-reviewed content that helps them understand which specialty or service they need.",
      },
      {
        title: "Choosing a clinic",
        body: "Location, insurance, doctor experience and language often decide the choice. We make these details visible on your website and Google profiles so patients can decide quickly.",
      },
      {
        title: "Booking",
        body: "We design booking to take as few steps as possible on mobile, with options to book online, by WhatsApp or by phone, and immediate confirmation by message.",
      },
      {
        title: "Before the visit",
        body: "Reminders, directions, parking notes and preparation instructions reduce missed appointments and help the visit start on time. Patients can reschedule easily instead of not showing up.",
      },
      {
        title: "Follow-up and continuity",
        body: "After the visit, we support follow-up bookings, feedback requests and recall reminders, so patients return for ongoing care and the clinic builds long-term relationships.",
      },
    ],
    faqs: [
      {
        q: "How do you handle healthcare advertising approvals?",
        a: "We build an approval step into the content workflow so your medical and compliance leads review claims, imagery and offers before publishing. We also recommend confirming any regulatory permits needed for specific campaigns with the relevant authority.",
      },
      {
        q: "Will the chatbot give medical advice?",
        a: "No. We design it to answer administrative questions such as timings, services and insurance, and to direct clinical questions to your team or emergency services where appropriate. Its scope is agreed and tested with you.",
      },
      {
        q: "Can you integrate with our clinic management system?",
        a: "It depends on the system and whether it offers an API or booking integration. We review it early and, where direct integration is not possible, design a workflow that still reduces manual entry.",
      },
      {
        q: "How is patient data protected?",
        a: "We collect only the data each step needs, use secure hosting and access controls, and design consent and retention with UAE data protection principles in mind. Specific obligations should be confirmed with your compliance lead.",
      },
    ],
    compliance:
      "Healthcare advertising in Dubai is subject to DHA rules on claims, testimonials and before/after imagery, and clinics in other Emirates may fall under MOHAP or the relevant local health authority. We build approval steps into the content workflow and recommend confirming specific claims with your compliance lead. Patient data is handled with UAE PDPL and health data requirements in mind.",
    visualDirection: "Calm orbital forms, clinical teal and soft whites, gentle gradients and clear wayfinding lines.",
    cta: {
      title: "Make it easier for patients to reach you",
      body: "Tell us about your specialties, branches and current booking process. We will suggest practical improvements that respect your compliance requirements and ease the load on your front desk.",
    },
    metaTitle: "Healthcare and Clinic Marketing in Dubai",
    metaDescription:
      "Clinic websites, specialty SEO, online booking and patient messaging assistants for medical centres in Dubai and the UAE, built with DHA rules in mind.",
  },
  ar: {
    name: "الرعاية الصحية والعيادات الطبية",
    short: "استقطاب منضبط للمرضى وحجز للمواعيد وأتمتة لمكاتب الاستقبال في العيادات والمراكز الطبية.",
    headline: "ساعدوا المرضى على إيجاد الطبيب المناسب والحجز بثقة",
    intro:
      "يختار المرضى العيادة حسب التخصص والطبيب وقبول التأمين والموقع، غالباً من الهاتف وكثيراً بالعربية. نبني مواقع واضحة للعيادات وحملات مدروسة وأدوات للحجز والمراسلة تخفف الضغط عن الاستقبال، مع احترام أنظمة الإعلان الصحي وخصوصية المرضى.",
    challenges: [
      {
        title: "أنظمة إعلان صارمة",
        body: "يجب أن يتجنب التسويق الطبي الادعاءات المضللة والمقارنات غير المعتمدة وأنواعاً معينة من صور المرضى. وتمتنع عيادات كثيرة عن التسويق كلياً لأن إجراءات الموافقة تبدو غير واضحة.",
      },
      {
        title: "مكاتب استقبال مثقلة",
        body: "يتعامل فريق الاستقبال مع المكالمات والزيارات المباشرة والتحقق من التأمين ورسائل WhatsApp في وقت واحد. فتضيع طلبات الحجز، وينتظر المرضى على الخط أو يجربون عيادة أخرى.",
      },
      {
        title: "أسئلة التأمين والأطباء",
        body: "يريد المرضى معرفة ما إذا كان تأمينهم مقبولاً، وأي طبيب يراجعون، وتكلفة الزيارة الأولى. وحين تكون هذه الإجابات غير ظاهرة، تتحول الاستفسارات إلى اتصالات متكررة.",
      },
      {
        title: "بيانات مرضى حساسة",
        body: "قد تجمع النماذج وأدوات المحادثة والتحليلات معلومات صحية. وتحتاج العيادات إلى أنظمة مصممة لتقليل البيانات المجمعة وضبط الصلاحيات واحترام موافقة المريض.",
      },
    ],
    marketing: [
      {
        title: "تحسين البحث للتخصصات والحالات",
        body: "ملفات للأطباء وصفحات للتخصصات ومقالات توعوية يراجعها أطباؤكم، منظمة بحيث يجدكم المرضى الذين يبحثون عن أعراض أو علاجات أو أخصائيين في منطقتهم.",
      },
      {
        title: "ملف Google التجاري لكل فرع",
        body: "ساعات عمل دقيقة وخدمات ومعلومات التأمين وردود على التقييمات لكل موقع، لمساعدة المرضى القريبين على اختيار الفرع المناسب والتواصل معه بسرعة.",
      },
      {
        title: "حملات تراعي الامتثال",
        body: "حملات بحث وتواصل اجتماعي لخدمات مثل الفحوص الدورية وطب الأطفال والعلاج الطبيعي، مع إعداد الرسائل والتصاميم للمراجعة الداخلية والتنظيمية قبل نشر أي منها.",
      },
    ],
    solutions: [
      {
        title: "الحجز حسب الطبيب والتخصص",
        body: "حجز إلكتروني حسب التخصص والطبيب والفرع واللغة، مع معلومات التأمين وإرشادات التحضير للزيارة، مرتبط بنظام إدارة العيادة لديكم حيث يسمح بالتكامل.",
      },
      {
        title: "مساعد مراسلة المرضى",
        body: "مساعد بالذكاء الاصطناعي عبر WhatsApp والموقع يجيب عن الأسئلة الشائعة حول الخدمات والمواعيد والتأمين، ويحجز المواعيد أو يعدلها، ولا يقدم أي نصيحة طبية.",
      },
      {
        title: "تذكيرات المواعيد والمتابعة الدورية",
        body: "تذكيرات مؤتمتة وتعليمات تحضير ورسائل متابعة وتذكير بالتطعيمات أو الفحوص الدورية، مصممة لتقليل التغيب والحفاظ على استمرارية الرعاية.",
      },
      {
        title: "تطبيق أو بوابة للمرضى",
        body: "تطبيق جوال أو بوابة ويب للمواعيد وإشعارات النتائج والوصفات وملفات أفراد الأسرة، مبنية بضوابط وصول وآليات تعامل مع البيانات يُتفق عليها مع فرق تقنية المعلومات والامتثال لديكم.",
      },
    ],
    journey: [
      {
        title: "العرَض أو الحاجة",
        body: "يبدأ المريض بعرَض أو تحويل أو فحص روتيني. ننشئ محتوى واضحاً يراجعه الأطباء يساعده على فهم التخصص أو الخدمة التي يحتاجها.",
      },
      {
        title: "اختيار العيادة",
        body: "غالباً ما يحسم الموقع والتأمين وخبرة الطبيب واللغة الاختيار. نُظهر هذه التفاصيل بوضوح على موقعكم وملفات Google ليقرر المريض بسرعة.",
      },
      {
        title: "الحجز",
        body: "نصمم الحجز بأقل عدد من الخطوات على الهاتف، مع خيارات الحجز الإلكتروني أو عبر WhatsApp أو الهاتف، وتأكيد فوري برسالة.",
      },
      {
        title: "قبل الزيارة",
        body: "التذكيرات والاتجاهات وملاحظات المواقف وتعليمات التحضير تقلل المواعيد الفائتة وتساعد على بدء الزيارة في وقتها. ويستطيع المريض تغيير الموعد بسهولة بدلاً من التغيب.",
      },
      {
        title: "المتابعة واستمرارية الرعاية",
        body: "بعد الزيارة ندعم حجوزات المتابعة وطلبات التقييم وتذكيرات الفحوص الدورية، ليعود المرضى لاستكمال رعايتهم وتبني العيادة علاقات طويلة الأمد.",
      },
    ],
    faqs: [
      {
        q: "كيف تتعاملون مع موافقات الإعلان الصحي؟",
        a: "ندمج خطوة موافقة في سير عمل المحتوى ليراجع المسؤولون الطبيون ومسؤولو الامتثال لديكم الادعاءات والصور والعروض قبل النشر. وننصح أيضاً بتأكيد أي تصاريح تنظيمية مطلوبة لحملات محددة مع الجهة المختصة.",
      },
      {
        q: "هل سيقدم المساعد الآلي نصائح طبية؟",
        a: "لا. نصممه للإجابة عن الأسئلة الإدارية مثل المواعيد والخدمات والتأمين، وتوجيه الأسئلة السريرية إلى فريقكم أو إلى خدمات الطوارئ عند الحاجة. ويُتفق على نطاقه ويُختبر معكم.",
      },
      {
        q: "هل يمكنكم الربط مع نظام إدارة العيادة لدينا؟",
        a: "يعتمد ذلك على النظام وما إذا كان يوفر واجهة برمجية أو تكاملاً للحجز. نراجعه مبكراً، وحين يتعذر التكامل المباشر نصمم مسار عمل يقلل الإدخال اليدوي رغم ذلك.",
      },
      {
        q: "كيف تُحمى بيانات المرضى؟",
        a: "نجمع فقط البيانات التي تحتاجها كل خطوة، ونستخدم استضافة آمنة وضوابط وصول، ونصمم آليات الموافقة والاحتفاظ بالبيانات مع مراعاة مبادئ حماية البيانات في الدولة. وينبغي تأكيد الالتزامات المحددة مع مسؤول الامتثال لديكم.",
      },
    ],
    compliance:
      "يخضع الإعلان الصحي في دبي لأنظمة هيئة الصحة بدبي بشأن الادعاءات والشهادات وصور قبل وبعد، وقد تخضع العيادات في الإمارات الأخرى لوزارة الصحة ووقاية المجتمع أو للجهة الصحية المحلية المختصة. ندمج خطوات الموافقة في سير عمل المحتوى، وننصح بتأكيد الادعاءات المحددة مع مسؤول الامتثال لديكم. ونتعامل مع بيانات المرضى مع مراعاة قانون حماية البيانات الشخصية ومتطلبات البيانات الصحية في الدولة.",
    visualDirection: "أشكال مدارية هادئة، ودرجات الفيروزي الطبي والأبيض الناعم، وتدرجات لطيفة وخطوط إرشادية واضحة.",
    cta: {
      title: "سهّلوا على المرضى الوصول إليكم",
      body: "حدثونا عن تخصصاتكم وفروعكم وطريقة الحجز الحالية. سنقترح تحسينات عملية تحترم متطلبات الامتثال لديكم وتخفف الضغط عن مكتب الاستقبال.",
    },
    metaTitle: "تسويق العيادات والرعاية الصحية في دبي",
    metaDescription:
      "مواقع للعيادات وتحسين بحث للتخصصات وحجز إلكتروني ومساعدو مراسلة للمرضى للمراكز الطبية في دبي والإمارات، مبنية مع مراعاة أنظمة هيئة الصحة بدبي.",
  },
};

export default industry;
