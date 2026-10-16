import type { Industry } from "../types";

const industry: Industry = {
  slug: "tourism-travel",
  tier: 2,
  motif: "route",
  hue: 22,
  services: ["digital-marketing", "web-design-development", "social-media", "seo", "ai-chatbots", "ai-automation"],
  related: ["hospitality", "events-exhibitions", "restaurants-cafes"],
  en: {
    name: "Tourism, Travel and Experiences",
    short: "Direct bookings, seasonal campaigns and AI trip assistants for UAE tour operators, DMCs and attractions.",
    headline: "More direct bookings for tours, attractions and travel experiences",
    intro:
      "Travellers discover UAE experiences on TikTok, compare them on OTAs and book on their phones, often the day before. We help tour operators, DMCs, attractions and travel agencies win more direct bookings, answer questions instantly in several languages and automate the operations behind each trip, from pickup to review.",
    challenges: [
      {
        title: "OTA commission and dependency",
        body: "Online travel agencies bring reach but take commission and own the customer relationship. Operators want to grow direct bookings without losing the visibility those platforms provide.",
      },
      {
        title: "Strong seasonality",
        body: "Demand peaks in the cooler months and around holidays, then drops sharply in summer. Marketing and staffing need to flex with the season and fill shoulder periods with residents and GCC visitors.",
      },
      {
        title: "Last-minute, mobile decisions",
        body: "Many visitors book desert safaris, dhow cruises or attraction tickets from their hotel room, sometimes hours before. Slow sites or unclear availability send them straight to a competitor or OTA.",
      },
      {
        title: "Operational complexity",
        body: "Pickups, guide allocation, group sizes, language preferences and supplier confirmations are often coordinated by phone and spreadsheet, creating errors that show up in reviews.",
      },
    ],
    marketing: [
      {
        title: "Seasonal and source-market campaigns",
        body: "We plan Google, Meta and TikTok campaigns around peak season, school holidays, Eid and Ramadan, targeting key source markets and in-destination visitors, with offers that shift as demand changes.",
      },
      {
        title: "Experience and destination SEO",
        body: "We build pages for each experience, itinerary and location with clear inclusions, timings and FAQs, plus destination guides that capture travellers while they are still planning.",
      },
      {
        title: "Short-form video and creator content",
        body: "We plan vertical video that shows the real experience, coordinate permitted creator collaborations and use reviews and user content with permission to build trust before booking.",
      },
    ],
    solutions: [
      {
        title: "Direct booking website with live availability",
        body: "A fast, multilingual site with live availability, instant confirmation, add-ons such as private transfers or photos, and secure payment, connected to your booking system or channel manager.",
      },
      {
        title: "AI multilingual trip assistant",
        body: "A WhatsApp and website assistant that answers questions on timings, pickups, dress code and suitability for children, suggests experiences and completes bookings in the traveller's language.",
      },
      {
        title: "Pickup and guide coordination automation",
        body: "Automated pickup schedules, driver and guide assignment, and day-before reminders with location pins sent to guests, reducing missed pickups and last-minute calls.",
      },
      {
        title: "B2B agent and DMC portal",
        body: "A portal where travel agents and partners check rates, hold or book experiences, download vouchers and track commissions, replacing manual email exchanges and rate sheets.",
      },
    ],
    journey: [
      {
        title: "Inspiration",
        body: "Trips start with a video, a friend's photos or a destination guide. We create content that shows the experience honestly and makes your brand memorable before planning begins.",
      },
      {
        title: "Planning and comparison",
        body: "Travellers compare options on OTAs, Google and social. We make sure your site shows clear inclusions, prices, reviews and a reason to book direct, such as flexible changes or added extras.",
      },
      {
        title: "Booking",
        body: "Booking must be quick on a phone. We design short flows with live availability, clear pickup details, local and international payment options and instant confirmation.",
      },
      {
        title: "Pre-trip and on the day",
        body: "Guests want reassurance. We automate reminders, pickup times and what-to-bring notes, and give them a quick way to reach your team on WhatsApp if anything changes.",
      },
      {
        title: "Review and return",
        body: "Reviews drive future bookings. We send timely review requests, share photos where appropriate and keep in touch with residents and repeat visitors for future seasons.",
      },
    ],
    faqs: [
      {
        q: "Can you reduce our reliance on OTAs?",
        a: "We can help grow your direct share through better search visibility, retargeting and a booking experience that gives travellers a reason to book with you. Most operators keep OTAs for reach, so we plan the two to work together.",
      },
      {
        q: "Which languages should our site and assistant support?",
        a: "It typically depends on your main source markets. English and Arabic are a strong base, and we can add languages such as Russian, Chinese or German for key experiences once demand is clear.",
      },
      {
        q: "Can you connect to our booking system?",
        a: "Usually, yes. We work with common tour and activity booking platforms and channel managers, and can build custom integrations where an API is available. We review your setup at the start.",
      },
      {
        q: "How do you handle the summer slowdown?",
        a: "We shift focus towards residents, GCC visitors, indoor experiences and summer offers, and use quieter months to improve content, SEO and automation ahead of the next peak.",
      },
    ],
    compliance:
      "Tourism businesses in Dubai are licensed through Dubai's Department of Economy and Tourism, and paid creator collaborations generally require a UAE Media Council advertiser permit. We recommend confirming licensing-related claims and partner permits with your team before campaigns go live.",
    visualDirection:
      "Warm sunset-orange route lines tracing journeys across stylised maps, dune and coastline textures, and bright, candid experience photography.",
    cta: {
      title: "Plan your next season with us",
      body: "Tell us about your experiences, booking channels and source markets. We will suggest how to grow direct bookings and smooth operations before your next peak.",
    },
    metaTitle: "Tourism and Travel Marketing in Dubai",
    metaDescription:
      "Direct booking websites, seasonal campaigns, multilingual AI trip assistants and booking automation for tour operators, DMCs and attractions in Dubai and UAE.",
  },
  ar: {
    name: "السياحة والسفر والتجارب",
    short: "حجوزات مباشرة وحملات موسمية ومساعدون أذكياء للرحلات لمنظمي الرحلات والوجهات السياحية في الإمارات.",
    headline: "حجوزات مباشرة أكثر للجولات والمعالم وتجارب السفر",
    intro:
      "يكتشف المسافرون تجارب الإمارات على TikTok، ويقارنونها على منصات الحجز الإلكترونية، ويحجزون من هواتفهم، وغالبًا قبل يوم واحد. نساعد منظمي الرحلات وشركات إدارة الوجهات والمعالم السياحية ووكالات السفر على كسب حجوزات مباشرة أكثر، والرد على الأسئلة فورًا بعدة لغات، وأتمتة العمليات خلف كل رحلة من الاستقبال حتى التقييم.",
    challenges: [
      {
        title: "عمولات منصات الحجز والاعتماد عليها",
        body: "توفر منصات الحجز الإلكترونية انتشارًا واسعًا، لكنها تقتطع عمولة وتملك العلاقة مع العميل. ويريد المشغلون زيادة الحجوزات المباشرة دون خسارة الظهور الذي تمنحه هذه المنصات.",
      },
      {
        title: "موسمية حادة",
        body: "يبلغ الطلب ذروته في الأشهر الأبرد وحول العطلات، ثم ينخفض بشدة في الصيف. ويجب أن يتكيف التسويق والتوظيف مع الموسم، وأن تُملأ الفترات الانتقالية بالمقيمين وزوار الخليج.",
      },
      {
        title: "قرارات في اللحظة الأخيرة عبر الهاتف",
        body: "يحجز كثير من الزوار رحلات السفاري الصحراوية أو جولات المراكب التقليدية أو تذاكر المعالم من غرف الفنادق، أحيانًا قبل ساعات فقط. والمواقع البطيئة أو التوفر غير الواضح يدفعهم مباشرة إلى منافس أو منصة حجز.",
      },
      {
        title: "تعقيد العمليات",
        body: "غالبًا ما يُنسَّق الاستقبال وتوزيع المرشدين وأحجام المجموعات وتفضيلات اللغة وتأكيدات الموردين عبر الهاتف وجداول البيانات، مما يولّد أخطاء تظهر لاحقًا في التقييمات.",
      },
    ],
    marketing: [
      {
        title: "حملات موسمية حسب الأسواق المصدِّرة",
        body: "نخطط لحملات Google وMeta وTikTok حول موسم الذروة والعطلات المدرسية والعيد ورمضان، مستهدفين الأسواق المصدِّرة الرئيسية والزوار الموجودين في الوجهة، بعروض تتغير مع تغيّر الطلب.",
      },
      {
        title: "تحسين محركات البحث للتجارب والوجهات",
        body: "نبني صفحات لكل تجربة وبرنامج رحلة وموقع، بمحتويات واضحة لما يشمله العرض والمواعيد والأسئلة الشائعة، إضافة إلى أدلة للوجهات تجذب المسافرين وهم ما زالوا يخططون.",
      },
      {
        title: "فيديو قصير ومحتوى صنّاع المحتوى",
        body: "نخطط لمقاطع عمودية تُظهر التجربة الحقيقية، وننسّق تعاونات مرخّصة مع صنّاع المحتوى، ونستخدم التقييمات ومحتوى الزوار بإذنهم لبناء الثقة قبل الحجز.",
      },
    ],
    solutions: [
      {
        title: "موقع حجز مباشر مع توفر لحظي",
        body: "موقع سريع متعدد اللغات يعرض التوفر لحظيًا ويؤكد الحجز فورًا، مع إضافات مثل التوصيل الخاص أو الصور، ودفع آمن، ومربوط بنظام الحجز أو مدير القنوات لديك.",
      },
      {
        title: "مساعد رحلات ذكي متعدد اللغات",
        body: "مساعد على WhatsApp والموقع يجيب عن أسئلة المواعيد ونقاط الاستقبال واللباس المناسب وملاءمة التجربة للأطفال، ويقترح التجارب ويكمل الحجز بلغة المسافر.",
      },
      {
        title: "أتمتة تنسيق الاستقبال والمرشدين",
        body: "جداول استقبال آلية، وتوزيع للسائقين والمرشدين، وتذكيرات قبل يوم مع روابط الموقع تُرسل إلى الضيوف، مما يقلل حالات تفويت الاستقبال والاتصالات في اللحظة الأخيرة.",
      },
      {
        title: "بوابة للوكلاء وشركات إدارة الوجهات",
        body: "بوابة يطّلع فيها وكلاء السفر والشركاء على الأسعار، ويحجزون التجارب أو يحتجزونها مؤقتًا، وينزّلون القسائم، ويتابعون العمولات، بدل تبادل الرسائل وجداول الأسعار يدويًا.",
      },
    ],
    journey: [
      {
        title: "الإلهام",
        body: "تبدأ الرحلات بمقطع فيديو أو صور صديق أو دليل وجهة. نُعدّ محتوى يُظهر التجربة بصدق ويجعل علامتك راسخة في الذاكرة قبل بدء التخطيط.",
      },
      {
        title: "التخطيط والمقارنة",
        body: "يقارن المسافرون الخيارات على منصات الحجز وGoogle ووسائل التواصل. نتأكد من أن موقعك يعرض ما يشمله العرض والأسعار والتقييمات بوضوح، مع سبب للحجز المباشر مثل مرونة التعديل أو إضافات مجانية.",
      },
      {
        title: "الحجز",
        body: "يجب أن يكون الحجز سريعًا على الهاتف. نصمم مسارات قصيرة مع توفر لحظي وتفاصيل استقبال واضحة وخيارات دفع محلية ودولية وتأكيد فوري.",
      },
      {
        title: "قبل الرحلة ويوم التجربة",
        body: "يحتاج الضيوف إلى الطمأنينة. نؤتمت التذكيرات ومواعيد الاستقبال وملاحظات ما يجب إحضاره، ونمنحهم وسيلة سريعة للتواصل مع فريقك عبر WhatsApp إن تغيّر أي شيء.",
      },
      {
        title: "التقييم والعودة",
        body: "تقود التقييمات الحجوزات المستقبلية. نرسل طلبات التقييم في الوقت المناسب، ونشارك الصور حيث يناسب، ونبقى على تواصل مع المقيمين والزوار المتكررين للمواسم القادمة.",
      },
    ],
    faqs: [
      {
        q: "هل يمكنكم تقليل اعتمادنا على منصات الحجز؟",
        a: "يمكننا المساعدة في زيادة حصة حجوزاتك المباشرة عبر ظهور أفضل في البحث وإعادة الاستهداف وتجربة حجز تمنح المسافرين سببًا للحجز معك. ويحتفظ معظم المشغلين بالمنصات للانتشار، لذا نخطط ليعمل الطرفان معًا.",
      },
      {
        q: "ما اللغات التي يجب أن يدعمها موقعنا والمساعد؟",
        a: "يعتمد ذلك عادةً على أسواقك المصدِّرة الرئيسية. العربية والإنجليزية أساس قوي، ويمكننا إضافة لغات مثل الروسية أو الصينية أو الألمانية للتجارب الرئيسية حين يتضح الطلب.",
      },
      {
        q: "هل يمكنكم الربط بنظام الحجز لدينا؟",
        a: "غالبًا نعم. نعمل مع منصات حجز الجولات والأنشطة الشائعة ومديري القنوات، ويمكننا بناء تكاملات مخصصة حيث تتوفر واجهة برمجية. نراجع إعدادك في البداية.",
      },
      {
        q: "كيف تتعاملون مع تراجع الصيف؟",
        a: "نحوّل التركيز نحو المقيمين وزوار الخليج والتجارب الداخلية وعروض الصيف، ونستغل الأشهر الأهدأ لتحسين المحتوى ومحركات البحث والأتمتة استعدادًا للذروة التالية.",
      },
    ],
    compliance:
      "تُرخَّص الأعمال السياحية في دبي عبر دائرة الاقتصاد والسياحة، وتتطلب التعاونات المدفوعة مع صنّاع المحتوى عمومًا تصريح المعلن من مجلس الإمارات للإعلام. ننصح بتأكيد الادعاءات المتعلقة بالترخيص وتصاريح الشركاء مع فريقك قبل إطلاق الحملات.",
    visualDirection:
      "خطوط مسارات برتقالية دافئة بلون الغروب ترسم الرحلات على خرائط مبسطة، مع ملمس الكثبان والسواحل، وصور مشرقة وعفوية للتجارب.",
    cta: {
      title: "خطط لموسمك القادم معنا",
      body: "حدّثنا عن تجاربك وقنوات الحجز وأسواقك المصدِّرة. سنقترح كيف تزيد الحجوزات المباشرة وتنظّم العمليات قبل الذروة القادمة.",
    },
    metaTitle: "تسويق السياحة والسفر في دبي",
    metaDescription:
      "مواقع حجز مباشر وحملات موسمية ومساعدون أذكياء للرحلات بعدة لغات وأتمتة الحجوزات لمنظمي الرحلات وشركات إدارة الوجهات والمعالم السياحية في دبي والإمارات.",
  },
};

export default industry;
