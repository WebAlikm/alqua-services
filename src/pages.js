export const pageOrder = ["about", "help", "contact", "faq", "government", "emergency"];
export const footerPageOrder = ["privacy", "accessibility"];

export const pageContent = {
  en: {
    about: {
      nav: "About",
      icon: "◎",
      kicker: "About the prototype",
      title: "Local services, made easier to reach",
      intro: "Al Qua'a Services is a bilingual community directory designed to help residents find useful services without creating an account or learning a complex system.",
      notice: "This is a Tatweer Hackathon 2026 prototype. Listings are demonstration data unless clearly marked as officially verified.",
      sections: [
        {
          title: "Why it exists",
          intro: "Service information can be spread across websites, messages, and word of mouth. This prototype brings the first step into one clear place.",
          items: [
            { icon: "⌕", title: "Search by need", text: "Residents can describe a problem in everyday Arabic or English." },
            { icon: "◉", title: "Designed for Al Qua'a", text: "Health, family, farm, education, business, and community needs shape the directory." },
            { icon: "↗", title: "Reusable foundation", text: "The same model can be adapted for other rural communities with local data and partners." }
          ]
        },
        {
          title: "Design principles",
          items: [
            { icon: "ع", title: "Arabic first", text: "Arabic and English are available throughout the core experience." },
            { icon: "✓", title: "Low friction", text: "No sign-up is required to search, call, open WhatsApp, or view directions." },
            { icon: "i", title: "Honest information", text: "Data status is shown so prototype entries are not presented as official records." }
          ]
        }
      ]
    },
    help: {
      nav: "Help",
      icon: "?",
      kicker: "Using the directory",
      title: "Find the right service in three steps",
      intro: "Search directly or choose the persona closest to your situation. Then contact the provider using the action that works for you.",
      sections: [
        {
          title: "Quick start",
          items: [
            { icon: "1", title: "Describe your need", text: "Try a short phrase such as “medicine delivery” or “help for my farm”." },
            { icon: "2", title: "Check the result", text: "Review the location, availability, priority label, and data status." },
            { icon: "3", title: "Take action", text: "Call, open WhatsApp, or view more details. Confirm information before travelling." }
          ]
        },
        {
          title: "Useful tips",
          items: [
            { icon: "⌕", title: "No results?", text: "Use fewer words, clear the filters, or browse by category." },
            { icon: "文", title: "Change language", text: "Use the language button in the header to switch between Arabic and English." },
            { icon: "!", title: "Urgent situation?", text: "Do not use directory listings for emergencies. Open the Emergency page instead.", href: "#/emergency", action: "Emergency information" }
          ]
        }
      ]
    },
    contact: {
      nav: "Contact",
      icon: "✉",
      kicker: "Contact and feedback",
      title: "Use the right channel",
      intro: "Project feedback belongs with the prototype team. Requests for official municipal services should go directly to the responsible authority.",
      notice: "Al Qua'a Services is not a government entity and cannot process official applications or emergency reports.",
      sections: [
        {
          title: "Prototype feedback",
          items: [
            { icon: "⌘", title: "GitHub repository", text: "Review the project, report an issue, or suggest a directory improvement.", href: "https://github.com/WebAlikm/alqua-services", action: "Open repository", external: true },
            { icon: "+", title: "Suggest a service", text: "Use a GitHub issue to propose a listing and include a public source that can be verified.", href: "https://github.com/WebAlikm/alqua-services/issues", action: "Submit feedback", external: true }
          ]
        },
        {
          title: "Official municipal contact",
          items: [
            { icon: "☎", title: "Al Ain City Municipality", text: "Official municipality customer service: 03 712 8000.", href: "tel:+97137128000", action: "Call 03 712 8000" },
            { icon: "☎", title: "Abu Dhabi Government", text: "Abu Dhabi Government Contact Centre: 800 555.", href: "tel:800555", action: "Call 800 555" }
          ]
        }
      ]
    },
    faq: {
      nav: "FAQ",
      icon: "?",
      kicker: "Frequently asked questions",
      title: "What residents should know",
      intro: "Clear answers about the prototype, its data, and how to use it safely.",
      faqs: [
        { question: "Is Al Qua'a Services an official government platform?", answer: "No. It is a Tatweer Hackathon 2026 prototype. Use the Government page for official portals." },
        { question: "Do I need an account?", answer: "No. Searching and viewing directory information does not require registration." },
        { question: "Are all listings verified?", answer: "No. Each detail panel shows a data status. Demo entries marked as pending must be confirmed with the provider." },
        { question: "Can I use the directory in Arabic?", answer: "Yes. Use the language button in the header to switch the full interface between Arabic and English." },
        { question: "How can a service be added?", answer: "Submit a suggestion through the project repository with a public source and provider details for verification." },
        { question: "What should I do in an emergency?", answer: "Use the Emergency page and call the appropriate UAE emergency number immediately. Do not wait for a directory response." }
      ]
    },
    government: {
      nav: "Government",
      icon: "◆",
      kicker: "Official services",
      title: "Go directly to trusted government portals",
      intro: "These links open official UAE and Abu Dhabi service platforms. Applications, payments, and identity services should be completed only on their official websites.",
      sections: [
        {
          title: "Official portals",
          items: [
            { icon: "🇦🇪", title: "UAE Government Portal", text: "Federal information and services for residents, visitors, and businesses.", href: "https://u.ae/en/", action: "Open U.ae", external: true },
            { icon: "A", title: "TAMM Abu Dhabi", text: "Abu Dhabi Government services in one official platform.", href: "https://www.tamm.abudhabi/", action: "Open TAMM", external: true },
            { icon: "⌂", title: "Al Ain City Municipality", text: "Municipal, public health, infrastructure, and community information for Al Ain.", href: "https://www.dmt.gov.ae/en/aam", action: "Open municipality", external: true },
            { icon: "◇", title: "Ministry of Interior", text: "Official traffic, police, licensing, and public safety services.", href: "https://moi.gov.ae/en/home", action: "Open MOI", external: true },
            { icon: "ID", title: "ICP", text: "Identity, citizenship, customs, residency, and entry services.", href: "https://icp.gov.ae/en/", action: "Open ICP", external: true }
          ]
        }
      ]
    },
    privacy: {
      nav: "Privacy",
      icon: "◈",
      kicker: "Prototype privacy",
      title: "Clear boundaries for personal information",
      intro: "The current prototype is designed for service discovery without an account and does not intentionally collect or store personal information.",
      notice: "Calling, opening WhatsApp, using maps, or visiting an official portal takes you to a third-party service with its own privacy practices.",
      sections: [
        {
          title: "What happens in this prototype",
          items: [
            { icon: "⌕", title: "Search stays in the browser", text: "Search terms and filters are used locally to display matching demo listings." },
            { icon: "○", title: "No resident account", text: "The directory does not ask for a name, Emirates ID, address, password, or payment information." },
            { icon: "↗", title: "External services", text: "Contact and government links open separate services. Review their privacy notices before sharing information." }
          ]
        },
        {
          title: "Report a concern",
          items: [
            { icon: "!", title: "Privacy feedback", text: "Report a privacy concern through the public project issue tracker. Do not include private personal information.", href: "https://github.com/WebAlikm/alqua-services/issues", action: "Open feedback", external: true }
          ]
        }
      ]
    },
    accessibility: {
      nav: "Accessibility",
      icon: "◉",
      kicker: "Inclusive access",
      title: "Designed for different ages and abilities",
      intro: "The interface prioritizes readable text, clear actions, Arabic and English support, keyboard navigation, and large touch targets.",
      sections: [
        {
          title: "Current accessibility features",
          items: [
            { icon: "⌨", title: "Keyboard support", text: "Interactive controls use native links, buttons, inputs, and visible focus indicators." },
            { icon: "ع", title: "Arabic and RTL", text: "The interface supports Arabic right-to-left layout and an English alternative." },
            { icon: "Aa", title: "Readable controls", text: "Important actions use strong contrast, clear labels, and generous touch areas." },
            { icon: "◎", title: "Screen-reader structure", text: "Headings, navigation landmarks, labels, and dialog semantics provide page structure." }
          ]
        },
        {
          title: "Help improve access",
          intro: "This is an evolving prototype, not a formal accessibility certification.",
          items: [
            { icon: "+", title: "Report a barrier", text: "Describe the page, device, and problem in the project issue tracker without including private information.", href: "https://github.com/WebAlikm/alqua-services/issues", action: "Send accessibility feedback", external: true }
          ]
        }
      ]
    },
    emergency: {
      nav: "Emergency",
      icon: "!",
      kicker: "UAE emergency numbers",
      title: "Call immediately when safety is at risk",
      intro: "Do not use the directory, WhatsApp listings, or contact form for an emergency. Call the appropriate UAE emergency service and clearly state your location.",
      emergency: true,
      sections: [
        {
          title: "Emergency numbers",
          items: [
            { icon: "●", title: "Police", text: "Crime, serious road incidents, or immediate danger.", number: "999", href: "tel:999", action: "Call 999", tone: "emergency" },
            { icon: "+", title: "Ambulance", text: "Medical emergencies and serious injuries.", number: "998", href: "tel:998", action: "Call 998", tone: "emergency" },
            { icon: "▲", title: "Fire and Civil Defence", text: "Fire, smoke, or rescue from a burning building.", number: "997", href: "tel:997", action: "Call 997", tone: "emergency" },
            { icon: "≈", title: "Coastguard", text: "Marine emergencies.", number: "996", href: "tel:996", action: "Call 996" },
            { icon: "⌖", title: "Search and Rescue", text: "Search and rescue emergencies.", number: "995", href: "tel:995", action: "Call 995" },
            { icon: "⚡", title: "Electricity failure", text: "Report an electricity failure.", number: "991", href: "tel:991", action: "Call 991" }
          ]
        },
        {
          title: "Accessibility support in Abu Dhabi",
          intro: "People of determination can report a medical emergency by SMS to 5999. Include the incident, patient location, and a contact phone number.",
          items: [
            { icon: "SMS", title: "Emergency SMS", text: "For people of determination in the Emirate of Abu Dhabi.", number: "5999", href: "sms:5999", action: "Message 5999" },
            { icon: "i", title: "Official emergency guidance", text: "Review the UAE Government's current emergency guidance and reporting channels.", href: "https://u.ae/en/information-and-services/justice-safety-and-the-law/handling-emergencies", action: "Open official source", external: true }
          ]
        }
      ]
    }
  },
  ar: {
    about: {
      nav: "عن المنصة",
      icon: "◎",
      kicker: "عن النموذج الأولي",
      title: "خدمات محلية أسهل وصولًا",
      intro: "خدمات القوع دليل مجتمعي ثنائي اللغة يساعد السكان على العثور على الخدمات المفيدة دون إنشاء حساب أو تعلم نظام معقد.",
      notice: "هذا نموذج أولي لهاكاثون تطوير 2026. القوائم بيانات تجريبية ما لم تُعرض بوضوح على أنها موثقة رسميًا.",
      sections: [
        {
          title: "لماذا أُنشئ؟",
          intro: "قد تكون معلومات الخدمات موزعة بين المواقع والرسائل والتواصل الشفهي. يجمع هذا النموذج الخطوة الأولى في مكان واضح.",
          items: [
            { icon: "⌕", title: "البحث حسب الحاجة", text: "يمكن للسكان وصف المشكلة بكلمات يومية بالعربية أو الإنجليزية." },
            { icon: "◉", title: "مصمم للقوع", text: "احتياجات الصحة والأسرة والمزارع والتعليم والأعمال والمجتمع تشكل الدليل." },
            { icon: "↗", title: "أساس قابل للتكرار", text: "يمكن تكييف النموذج لمجتمعات ريفية أخرى باستخدام بيانات وشركاء محليين." }
          ]
        },
        {
          title: "مبادئ التصميم",
          items: [
            { icon: "ع", title: "العربية أولًا", text: "تتوفر العربية والإنجليزية في التجربة الأساسية." },
            { icon: "✓", title: "خطوات قليلة", text: "لا يلزم التسجيل للبحث أو الاتصال أو فتح واتساب أو الاتجاهات." },
            { icon: "i", title: "معلومات واضحة", text: "تظهر حالة البيانات حتى لا تبدو القوائم التجريبية كسجلات رسمية." }
          ]
        }
      ]
    },
    help: {
      nav: "المساعدة",
      icon: "?",
      kicker: "استخدام الدليل",
      title: "اعثر على الخدمة المناسبة في ثلاث خطوات",
      intro: "ابحث مباشرة أو اختر الفئة الأقرب إلى حالتك، ثم تواصل مع الجهة بالطريقة المناسبة لك.",
      sections: [
        {
          title: "البدء السريع",
          items: [
            { icon: "١", title: "صف حاجتك", text: "استخدم عبارة قصيرة مثل «توصيل دواء» أو «مساعدة لمزرعتي»." },
            { icon: "٢", title: "راجع النتيجة", text: "تحقق من الموقع والتوفر والأولوية وحالة البيانات." },
            { icon: "٣", title: "اتخذ إجراء", text: "اتصل أو افتح واتساب أو اعرض التفاصيل. أكد المعلومات قبل التوجه." }
          ]
        },
        {
          title: "نصائح مفيدة",
          items: [
            { icon: "⌕", title: "لا توجد نتائج؟", text: "استخدم كلمات أقل أو أعد ضبط الفلاتر أو تصفح حسب الفئة." },
            { icon: "文", title: "تغيير اللغة", text: "استخدم زر اللغة في أعلى الصفحة للتبديل بين العربية والإنجليزية." },
            { icon: "!", title: "حالة عاجلة؟", text: "لا تستخدم قوائم الدليل للطوارئ. افتح صفحة الطوارئ.", href: "#/emergency", action: "معلومات الطوارئ" }
          ]
        }
      ]
    },
    contact: {
      nav: "تواصل معنا",
      icon: "✉",
      kicker: "التواصل والملاحظات",
      title: "استخدم قناة التواصل المناسبة",
      intro: "ملاحظات المشروع تذهب إلى فريق النموذج الأولي. أما طلبات الخدمات البلدية الرسمية فتُرسل مباشرة إلى الجهة المسؤولة.",
      notice: "خدمات القوع ليست جهة حكومية ولا يمكنها معالجة الطلبات الرسمية أو بلاغات الطوارئ.",
      sections: [
        {
          title: "ملاحظات النموذج الأولي",
          items: [
            { icon: "⌘", title: "مستودع GitHub", text: "راجع المشروع أو أبلغ عن مشكلة أو اقترح تحسينًا للدليل.", href: "https://github.com/WebAlikm/alqua-services", action: "فتح المستودع", external: true },
            { icon: "+", title: "اقترح خدمة", text: "استخدم بلاغ GitHub لاقتراح قائمة مع مصدر عام قابل للتحقق.", href: "https://github.com/WebAlikm/alqua-services/issues", action: "إرسال ملاحظة", external: true }
          ]
        },
        {
          title: "التواصل البلدي الرسمي",
          items: [
            { icon: "☎", title: "بلدية مدينة العين", text: "خدمة المتعاملين الرسمية للبلدية: 03 712 8000.", href: "tel:+97137128000", action: "اتصل 03 712 8000" },
            { icon: "☎", title: "حكومة أبوظبي", text: "مركز اتصال حكومة أبوظبي: 800 555.", href: "tel:800555", action: "اتصل 800 555" }
          ]
        }
      ]
    },
    faq: {
      nav: "الأسئلة الشائعة",
      icon: "?",
      kicker: "الأسئلة الشائعة",
      title: "ما الذي يجب أن يعرفه السكان؟",
      intro: "إجابات واضحة عن النموذج الأولي وبياناته وكيفية استخدامه بأمان.",
      faqs: [
        { question: "هل خدمات القوع منصة حكومية رسمية؟", answer: "لا. هذا نموذج أولي لهاكاثون تطوير 2026. استخدم صفحة الجهات الحكومية للوصول إلى المنصات الرسمية." },
        { question: "هل أحتاج إلى حساب؟", answer: "لا. البحث وعرض معلومات الدليل لا يتطلبان التسجيل." },
        { question: "هل جميع القوائم موثقة؟", answer: "لا. تعرض لوحة التفاصيل حالة البيانات، ويجب تأكيد القوائم التجريبية مع الجهة المقدمة." },
        { question: "هل يمكن استخدام الدليل بالعربية؟", answer: "نعم. استخدم زر اللغة أعلى الصفحة للتبديل بين العربية والإنجليزية." },
        { question: "كيف يمكن إضافة خدمة؟", answer: "أرسل اقتراحًا عبر مستودع المشروع مع مصدر عام وتفاصيل الجهة للتحقق." },
        { question: "ماذا أفعل في حالة الطوارئ؟", answer: "افتح صفحة الطوارئ واتصل فورًا برقم الطوارئ المناسب في دولة الإمارات. لا تنتظر ردًا من الدليل." }
      ]
    },
    government: {
      nav: "الجهات الحكومية",
      icon: "◆",
      kicker: "الخدمات الرسمية",
      title: "انتقل مباشرة إلى المنصات الحكومية الموثوقة",
      intro: "تفتح هذه الروابط منصات رسمية لدولة الإمارات وإمارة أبوظبي. يجب إكمال الطلبات والمدفوعات وخدمات الهوية عبر مواقعها الرسمية فقط.",
      sections: [
        {
          title: "المنصات الرسمية",
          items: [
            { icon: "🇦🇪", title: "البوابة الرسمية لحكومة الإمارات", text: "معلومات وخدمات اتحادية للسكان والزوار والأعمال.", href: "https://u.ae/en/", action: "فتح U.ae", external: true },
            { icon: "A", title: "تم أبوظبي", text: "خدمات حكومة أبوظبي في منصة رسمية واحدة.", href: "https://www.tamm.abudhabi/", action: "فتح تم", external: true },
            { icon: "⌂", title: "بلدية مدينة العين", text: "معلومات البلدية والصحة العامة والبنية التحتية والمجتمع في العين.", href: "https://www.dmt.gov.ae/en/aam", action: "فتح البلدية", external: true },
            { icon: "◇", title: "وزارة الداخلية", text: "خدمات المرور والشرطة والتراخيص والسلامة العامة.", href: "https://moi.gov.ae/en/home", action: "فتح الوزارة", external: true },
            { icon: "ID", title: "الهيئة الاتحادية للهوية والجنسية", text: "خدمات الهوية والجنسية والجمارك والإقامة والدخول.", href: "https://icp.gov.ae/en/", action: "فتح الهيئة", external: true }
          ]
        }
      ]
    },
    privacy: {
      nav: "الخصوصية",
      icon: "◈",
      kicker: "خصوصية النموذج الأولي",
      title: "حدود واضحة للمعلومات الشخصية",
      intro: "صُمم النموذج الحالي لاكتشاف الخدمات دون حساب، ولا يجمع أو يخزن المعلومات الشخصية بشكل مقصود.",
      notice: "عند الاتصال أو فتح واتساب أو الخرائط أو منصة رسمية، تنتقل إلى خدمة خارجية لها ممارسات الخصوصية الخاصة بها.",
      sections: [
        {
          title: "ما الذي يحدث في هذا النموذج؟",
          items: [
            { icon: "⌕", title: "البحث داخل المتصفح", text: "تُستخدم كلمات البحث والفلاتر محليًا لعرض القوائم التجريبية المطابقة." },
            { icon: "○", title: "لا يوجد حساب للسكان", text: "لا يطلب الدليل الاسم أو الهوية الإماراتية أو العنوان أو كلمة المرور أو معلومات الدفع." },
            { icon: "↗", title: "الخدمات الخارجية", text: "تفتح روابط التواصل والجهات الحكومية خدمات منفصلة. راجع إشعارات الخصوصية قبل مشاركة المعلومات." }
          ]
        },
        {
          title: "الإبلاغ عن ملاحظة",
          items: [
            { icon: "!", title: "ملاحظات الخصوصية", text: "أبلغ عن ملاحظة عبر صفحة مشكلات المشروع العامة، ولا تضع معلومات شخصية خاصة.", href: "https://github.com/WebAlikm/alqua-services/issues", action: "فتح صفحة الملاحظات", external: true }
          ]
        }
      ]
    },
    accessibility: {
      nav: "سهولة الوصول",
      icon: "◉",
      kicker: "وصول شامل",
      title: "مصمم لمختلف الأعمار والقدرات",
      intro: "تعطي الواجهة الأولوية للنص المقروء والإجراءات الواضحة ودعم العربية والإنجليزية والتنقل بلوحة المفاتيح ومناطق اللمس الكبيرة.",
      sections: [
        {
          title: "ميزات سهولة الوصول الحالية",
          items: [
            { icon: "⌨", title: "دعم لوحة المفاتيح", text: "تستخدم العناصر التفاعلية روابط وأزرارًا وحقولًا أصلية مع مؤشر تركيز واضح." },
            { icon: "ع", title: "العربية واتجاه RTL", text: "تدعم الواجهة العربية من اليمين إلى اليسار مع خيار اللغة الإنجليزية." },
            { icon: "Aa", title: "عناصر واضحة", text: "تستخدم الإجراءات المهمة تباينًا قويًا وتسميات واضحة ومساحات لمس مناسبة." },
            { icon: "◎", title: "بنية لقارئات الشاشة", text: "توفر العناوين ومناطق التنقل والتسميات ونوافذ التفاصيل بنية واضحة للصفحة." }
          ]
        },
        {
          title: "ساعدنا على تحسين الوصول",
          intro: "هذا نموذج أولي قيد التطوير وليس شهادة رسمية لسهولة الوصول.",
          items: [
            { icon: "+", title: "أبلغ عن عائق", text: "اذكر الصفحة والجهاز والمشكلة في صفحة مشكلات المشروع دون تضمين معلومات خاصة.", href: "https://github.com/WebAlikm/alqua-services/issues", action: "إرسال ملاحظة وصول", external: true }
          ]
        }
      ]
    },
    emergency: {
      nav: "الطوارئ",
      icon: "!",
      kicker: "أرقام الطوارئ في الإمارات",
      title: "اتصل فورًا عندما تكون السلامة في خطر",
      intro: "لا تستخدم الدليل أو قوائم واتساب أو التواصل مع المشروع في حالة الطوارئ. اتصل بالجهة المناسبة واذكر موقعك بوضوح.",
      emergency: true,
      sections: [
        {
          title: "أرقام الطوارئ",
          items: [
            { icon: "●", title: "الشرطة", text: "الجرائم أو الحوادث الخطرة أو الخطر المباشر.", number: "999", href: "tel:999", action: "اتصل 999", tone: "emergency" },
            { icon: "+", title: "الإسعاف", text: "الحالات الطبية الطارئة والإصابات الخطرة.", number: "998", href: "tel:998", action: "اتصل 998", tone: "emergency" },
            { icon: "▲", title: "الإطفاء والدفاع المدني", text: "الحريق أو الدخان أو الإنقاذ من مبنى مشتعل.", number: "997", href: "tel:997", action: "اتصل 997", tone: "emergency" },
            { icon: "≈", title: "خفر السواحل", text: "الطوارئ البحرية.", number: "996", href: "tel:996", action: "اتصل 996" },
            { icon: "⌖", title: "البحث والإنقاذ", text: "حالات البحث والإنقاذ.", number: "995", href: "tel:995", action: "اتصل 995" },
            { icon: "⚡", title: "أعطال الكهرباء", text: "الإبلاغ عن انقطاع أو عطل كهربائي.", number: "991", href: "tel:991", action: "اتصل 991" }
          ]
        },
        {
          title: "دعم سهولة الوصول في أبوظبي",
          intro: "يمكن لأصحاب الهمم الإبلاغ عن حالة طبية طارئة برسالة نصية إلى 5999 تتضمن الحادث وموقع المريض ورقم هاتف للتواصل.",
          items: [
            { icon: "SMS", title: "رسالة طوارئ", text: "لأصحاب الهمم في إمارة أبوظبي.", number: "5999", href: "sms:5999", action: "أرسل إلى 5999" },
            { icon: "i", title: "الإرشادات الرسمية للطوارئ", text: "راجع إرشادات حكومة الإمارات الحالية وقنوات الإبلاغ.", href: "https://u.ae/en/information-and-services/justice-safety-and-the-law/handling-emergencies", action: "فتح المصدر الرسمي", external: true }
          ]
        }
      ]
    }
  }
};
