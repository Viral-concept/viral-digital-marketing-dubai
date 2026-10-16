import type { Locale } from "@/i18n/config";

type LegalDoc = { title: string; updated: string; sections: { heading: string; body: string[] }[] };

/**
 * TEMPLATES ONLY. Must be reviewed by a qualified UAE legal adviser and completed with the
 * licensed company name, trade licence number, registered address and contact details.
 */
export const privacy: Record<Locale, LegalDoc> = {
  en: {
    title: "Privacy notice",
    updated: "2026-10-15",
    sections: [
      {
        heading: "Who we are",
        body: [
          "This website is operated by [Licensed company name], [trade licence number], [registered address], United Arab Emirates (\"we\", \"us\").",
          "For any privacy question or request, contact [privacy contact email].",
        ],
      },
      {
        heading: "What we collect",
        body: [
          "Information you submit through our enquiry form: your name, business email, company, optional phone number, the service you are interested in, an optional budget range and your message.",
          "Basic technical information needed to deliver and secure the website, such as IP address, browser type and pages requested, kept in server logs for a limited period.",
          "If analytics are enabled, aggregated usage information collected with cookies or similar technologies, subject to your choices where consent is required.",
        ],
      },
      {
        heading: "Why we use it",
        body: [
          "To reply to your enquiry and discuss a potential project, based on your consent given when you submit the form.",
          "To protect the website against spam and abuse.",
          "To understand how the website is used and improve it, where analytics are enabled.",
        ],
      },
      {
        heading: "Sharing and storage",
        body: [
          "We do not sell personal data. We share it only with service providers that help us operate the website and respond to enquiries (for example hosting, email delivery and CRM providers), under appropriate agreements.",
          "Some providers may process data outside the UAE. Where this happens we rely on safeguards permitted under the UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021).",
        ],
      },
      {
        heading: "How long we keep it",
        body: ["Enquiries are kept for up to [retention period] after our last contact, unless we enter into a contract with you, in which case contract records are kept as required by law."],
      },
      {
        heading: "Your rights",
        body: [
          "Subject to applicable law, you may request access to, correction or deletion of your personal data, restrict or object to processing, and withdraw consent at any time. Contact [privacy contact email] to make a request.",
        ],
      },
    ],
  },
  ar: {
    title: "إشعار الخصوصية",
    updated: "2026-10-15",
    sections: [
      {
        heading: "من نحن",
        body: [
          "يُدار هذا الموقع من قِبل [اسم الشركة المرخّصة]، [رقم الرخصة التجارية]، [العنوان المسجّل]، الإمارات العربية المتحدة (\"نحن\").",
          "لأي سؤال أو طلب يتعلق بالخصوصية، تواصل معنا عبر [البريد الإلكتروني المخصص للخصوصية].",
        ],
      },
      {
        heading: "البيانات التي نجمعها",
        body: [
          "المعلومات التي ترسلها عبر نموذج الاستفسار: اسمك، وبريدك الإلكتروني للعمل، وشركتك، ورقم هاتفك إن رغبت، والخدمة التي تهمك، ونطاق الميزانية إن رغبت، ورسالتك.",
          "معلومات تقنية أساسية لازمة لتشغيل الموقع وحمايته، مثل عنوان IP ونوع المتصفح والصفحات المطلوبة، وتُحفظ في سجلات الخادم لمدة محدودة.",
          "عند تفعيل أدوات التحليل، معلومات استخدام مجمّعة تُجمع عبر ملفات تعريف الارتباط أو تقنيات مشابهة، وفق اختياراتك حيثما تكون الموافقة مطلوبة.",
        ],
      },
      {
        heading: "أسباب الاستخدام",
        body: [
          "للرد على استفسارك ومناقشة مشروع محتمل، استنادًا إلى موافقتك عند إرسال النموذج.",
          "لحماية الموقع من الرسائل المزعجة وإساءة الاستخدام.",
          "لفهم طريقة استخدام الموقع وتحسينه، عند تفعيل أدوات التحليل.",
        ],
      },
      {
        heading: "المشاركة والتخزين",
        body: [
          "لا نبيع البيانات الشخصية، ولا نشاركها إلا مع مزودي الخدمات الذين يساعدوننا في تشغيل الموقع والرد على الاستفسارات (مثل الاستضافة وإرسال البريد وأنظمة إدارة العملاء)، بموجب اتفاقيات مناسبة.",
          "قد يعالج بعض المزودين البيانات خارج الإمارات، وفي هذه الحالة نعتمد على الضمانات المسموح بها بموجب قانون حماية البيانات الشخصية في الإمارات (المرسوم بقانون اتحادي رقم ٤٥ لسنة ٢٠٢١).",
        ],
      },
      {
        heading: "مدة الاحتفاظ",
        body: ["نحتفظ بالاستفسارات لمدة أقصاها [مدة الاحتفاظ] من آخر تواصل، ما لم نبرم معك عقدًا، وفي هذه الحالة نحتفظ بسجلات العقد وفق ما يقتضيه القانون."],
      },
      {
        heading: "حقوقك",
        body: [
          "وفقًا للقانون المعمول به، يحق لك طلب الوصول إلى بياناتك الشخصية أو تصحيحها أو حذفها، وتقييد المعالجة أو الاعتراض عليها، وسحب موافقتك في أي وقت. تواصل عبر [البريد الإلكتروني المخصص للخصوصية] لتقديم طلبك.",
        ],
      },
    ],
  },
};

export const terms: Record<Locale, LegalDoc> = {
  en: {
    title: "Website terms of use",
    updated: "2026-10-15",
    sections: [
      { heading: "About these terms", body: ["These terms apply to your use of this website, operated by [Licensed company name], [trade licence number], United Arab Emirates."] },
      {
        heading: "Information on this website",
        body: [
          "Content is provided for general information about our services. It is not professional, legal or financial advice.",
          "Concept projects and illustrative scenarios are clearly labelled. They are not client engagements and do not represent results achieved for any business.",
        ],
      },
      { heading: "Intellectual property", body: ["Unless stated otherwise, the design, text, graphics and code of this website belong to us. You may not reproduce them for commercial use without permission."] },
      { heading: "Enquiries", body: ["Submitting an enquiry does not create a contract. Any project is governed by a separate written agreement."] },
      { heading: "Liability", body: ["To the extent permitted by law, we are not liable for losses arising from use of this website or reliance on its general information."] },
      { heading: "Governing law", body: ["These terms are governed by the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates. [Confirm jurisdiction with legal adviser.]"] },
    ],
  },
  ar: {
    title: "شروط استخدام الموقع",
    updated: "2026-10-15",
    sections: [
      { heading: "حول هذه الشروط", body: ["تنطبق هذه الشروط على استخدامك لهذا الموقع الذي تديره [اسم الشركة المرخّصة]، [رقم الرخصة التجارية]، الإمارات العربية المتحدة."] },
      {
        heading: "المعلومات على هذا الموقع",
        body: [
          "يُقدَّم المحتوى لأغراض المعلومات العامة حول خدماتنا، ولا يُعد استشارة مهنية أو قانونية أو مالية.",
          "المشاريع المفاهيمية والسيناريوهات التوضيحية موسومة بوضوح، وهي ليست أعمالًا لعملاء ولا تمثل نتائج تحققت لأي جهة.",
        ],
      },
      { heading: "الملكية الفكرية", body: ["ما لم يُذكر خلاف ذلك، فإن تصميم هذا الموقع ونصوصه ورسومه وشيفرته ملك لنا، ولا يجوز نسخها للاستخدام التجاري دون إذن."] },
      { heading: "الاستفسارات", body: ["لا يُنشئ إرسال الاستفسار أي عقد، ويخضع أي مشروع لاتفاقية مكتوبة منفصلة."] },
      { heading: "المسؤولية", body: ["في حدود ما يسمح به القانون، لا نتحمل مسؤولية أي خسائر ناتجة عن استخدام هذا الموقع أو الاعتماد على معلوماته العامة."] },
      { heading: "القانون الحاكم", body: ["تخضع هذه الشروط لقوانين إمارة دبي والقوانين الاتحادية لدولة الإمارات العربية المتحدة. [يُرجى تأكيد الاختصاص مع المستشار القانوني.]"] },
    ],
  },
};
