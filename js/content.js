/* ============================================================================
   content.js — เนื้อหาทั้งหมดของเว็บอยู่ในไฟล์นี้ไฟล์เดียว
   ============================================================================
   แก้ข้อความในนี้ได้เลย ไม่ต้องแตะ index.html หรือ site.css

   กติกาเดียวที่ต้องจำ:
     - `th` กับ `en` ต้องมีคีย์เหมือนกันเป๊ะ และ array ต้องยาวเท่ากัน
     - ข้อความอยู่ในเครื่องหมายคำพูด "..." ถ้าจะใช้ " ข้างในให้เขียน \"
     - ลบรายการไหนก็ลบทั้งบล็อก { ... } รวมลูกน้ำท้ายด้วย

   ทุกที่ที่เขียนว่า TODO คือจุดที่ควรแก้เป็นข้อมูลจริงของคุณ
   ============================================================================ */

const CONTENT = {
  /* --- ข้อมูลที่ใช้ร่วมกันทั้งสองภาษา ------------------------------------ */
  meta: {
    name: "Chanathip Jaidee",        // TODO ชื่อที่อยากให้แสดง
    initials: "CJ",                   // TODO ตัวย่อบนโลโก้มุมซ้ายบน
    handle: "golfcnt19",
    email: "chanathipjaidee@gmail.com",
    github: "https://github.com/golfcnt19",
    // ลิงก์เพิ่มเติม — ลบบรรทัดที่ไม่มีได้เลย
    links: [
      { label: "GitHub",   url: "https://github.com/golfcnt19", icon: "github" },
      { label: "LinkedIn", url: "",                             icon: "linkedin" }, // TODO ใส่ URL หรือลบบรรทัดนี้
    ],
    // ปีที่ใช้ในลิขสิทธิ์ท้ายเว็บ ปล่อยไว้ ระบบใส่ปีปัจจุบันให้เอง
  },

  /* ======================================================================= */
  /*  ภาษาไทย                                                                */
  /* ======================================================================= */
  th: {
    nav: {
      about: "เกี่ยวกับ",
      skills: "ทักษะ",
      projects: "ผลงาน",
      experience: "ประสบการณ์",
      education: "การศึกษา",
      contact: "ติดต่อ",
    },

    hero: {
      status: "เปิดรับโอกาสใหม่",              // TODO หรือ "ไม่ว่างรับงาน"
      role: "SOFTWARE ENGINEER · FULL STACK",
      tagline:
        "7 ปีในระบบธนาคาร ทำงานได้ตั้งแต่ฐานข้อมูลจนถึงหน้าจอ — " +
        "Java, Angular, Flutter และ Kotlin",
      ctaPrimary: "ดูผลงาน",
      ctaSecondary: "ติดต่อผม",
      scrollHint: "เลื่อนลง",
    },

    about: {
      eyebrow: "แนะนำตัว",
      title: "เกี่ยวกับผม",
      body: [
        // TODO เขียนแทนสองย่อหน้านี้ — เพิ่มหรือลดย่อหน้าได้
        "ผมเป็น software engineer ประสบการณ์ 7 ปีที่ธนาคารกรุงศรีอยุธยา " +
        "ทำงานได้ตั้งแต่ฐานข้อมูลจนถึงหน้าจอ — เขียน service ฝั่งหลังบ้านด้วย Java " +
        "ทำเว็บด้วย Angular กับ TypeScript เขียนแอปมือถือด้วย Flutter และ Kotlin",

        "งานในระบบธนาคารสอนให้ให้ความสำคัญกับความถูกต้องของข้อมูลและความน่าเชื่อถือของระบบ " +
        "คุ้นเคยกับฐานข้อมูลระดับองค์กรทั้ง Oracle, SQL Server, MySQL และ PostgreSQL " +
        "ชอบงานที่ได้ดูแลฟีเจอร์ตั้งแต่ schema จนถึงปุ่มที่ผู้ใช้กดจริง",
      ],
      factsLabel: "ข้อมูลโดยย่อ",
      facts: [
        { k: "ที่อยู่",     v: "ประเทศไทย" },          // TODO จังหวัด
        { k: "บทบาท",      v: "Software Engineer" },
        { k: "ประสบการณ์", v: "7 ปี · ธนาคารกรุงศรีอยุธยา" },
        { k: "ภาษา",       v: "ไทย (เจ้าของภาษา) · อังกฤษ" },
        { k: "ถนัด",       v: "Angular · Flutter · Java" },
      ],
    },

    stats: {
      // value เป็นตัวเลขล้วน ระบบจะนับขึ้นให้เอง
      items: [
        { value: 7,  suffix: "",  label: "ปีประสบการณ์" },
        { value: 5,  suffix: "+", label: "โปรเจคที่ทำ" },       // TODO ใส่จำนวนจริง
        { value: 4,  suffix: "",  label: "ฐานข้อมูลที่ใช้ได้" },
      ],
    },

    skills: {
      eyebrow: "ความถนัด",
      title: "ทักษะและเครื่องมือ",
      lead: "เทคโนโลยีที่ใช้งานได้จริงและใช้อยู่เป็นประจำ",
      groups: [
        // TODO ปรับกลุ่มและรายการให้ตรงกับที่คุณใช้จริง
        { group: "Mobile",   note: "แอปมือถือ ทั้ง cross-platform และ native", items: ["Flutter", "Dart", "Kotlin", "Android"] },
        { group: "Frontend", note: "เว็บแอป",                items: ["Angular", "TypeScript", "HTML", "CSS"] },
        { group: "Backend",  note: "ฝั่งเซิร์ฟเวอร์",         items: ["Java", "REST API"] },
        { group: "Database", note: "ออกแบบและเขียน query",   items: ["SQL Server", "MySQL", "Oracle", "PostgreSQL"] },
        { group: "Tools",    note: "เครื่องมือประจำวัน",      items: ["Git", "GitHub", "VS Code", "Android Studio"] },
      ],
    },

    projects: {
      eyebrow: "ผลงาน",
      title: "โปรเจคที่เลือกมา",
      lead: "งานที่ทำแล้วได้เรียนรู้อะไรบางอย่าง",
      // TODO แทนที่ด้วยโปรเจคจริง — ลบ/เพิ่มบล็อกได้ตามต้องการ
      items: [
        {
          name: "bayFlutter",
          kind: "Mobile App",
          desc: "แอปมือถือที่เขียนด้วย Flutter ฝึกการวางโครงหน้าจอและจัดการ state",
          tags: ["Flutter", "Dart"],
          repo: "https://github.com/golfcnt19/bayFlutter",
          live: "",
          highlight: true,
        },
        {
          name: "project-angular",
          kind: "Web App",
          desc: "เว็บแอปที่ใช้ Angular กับ TypeScript ฝึกโครงสร้าง component และ routing",
          tags: ["Angular", "TypeScript"],
          repo: "https://github.com/golfcnt19/project-angular",
          live: "",
          highlight: false,
        },
        {
          name: "my_flutter",
          kind: "Mobile App",
          desc: "โปรเจคทดลอง Flutter ทดสอบ widget และการเชื่อมต่อข้อมูล",
          tags: ["Flutter", "Dart"],
          repo: "https://github.com/golfcnt19/my_flutter",
          live: "",
          highlight: false,
        },
      ],
    },

    experience: {
      eyebrow: "เส้นทาง",
      title: "ประสบการณ์",
      items: [
        {
          // TODO ยืนยันปีเริ่ม — ผมคำนวณ 2562 จาก "7 ปี" นับถอยหลังจากปีนี้
          period: "2562 — ปัจจุบัน · 7 ปี",
          role: "Software Engineer",
          org: "ธนาคารกรุงศรีอยุธยา (Bank of Ayudhya)",
          // TODO เขียนแทนบรรทัดนี้ — ดูแลระบบอะไร ทีมกี่คน ผลลัพธ์ที่วัดได้
          desc: "พัฒนาและดูแลระบบภายในของธนาคาร ทำงานทั้งฝั่งแอปพลิเคชันและฐานข้อมูล",
          tags: ["Java", "Angular", "Oracle", "SQL Server"],
        },
      ],
    },

    education: {
      eyebrow: "พื้นฐาน",
      title: "การศึกษา",
      items: [
        {
          period: "TODO ปี",
          degree: "TODO วุฒิ / สาขา",
          place: "TODO สถาบัน",
        },
      ],
    },

    contact: {
      eyebrow: "ติดต่อ",
      title: "คุยกันได้",
      lead: "สนใจร่วมงานหรืออยากคุยเรื่องโปรเจค ส่งอีเมลมาได้เลย ตอบทุกฉบับ",
      emailLabel: "ส่งอีเมล",
      copyLabel: "คัดลอกอีเมล",
      copiedLabel: "คัดลอกแล้ว",
    },

    footer: {
      builtWith: "เขียนด้วย HTML, CSS และ JavaScript ล้วน",
      backToTop: "กลับขึ้นบน",
    },

    ui: {
      langSwitch: "EN",
      langSwitchTitle: "Switch to English",
      menu: "เมนู",
      viewRepo: "ดูโค้ด",
      viewLive: "เปิดเว็บ",
    },
  },

  /* ======================================================================= */
  /*  English                                                                */
  /* ======================================================================= */
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Work",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
    },

    hero: {
      status: "Open to new opportunities",
      role: "SOFTWARE ENGINEER · FULL STACK",
      tagline:
        "Seven years in banking systems, working from the database through to the screen — " +
        "Java, Angular, Flutter and Kotlin.",
      ctaPrimary: "View Work",
      ctaSecondary: "Get In Touch",
      scrollHint: "Scroll",
    },

    about: {
      eyebrow: "Background",
      title: "About Me",
      body: [
        "I am a software engineer with 7 years at Bank of Ayudhya (Krungsri), comfortable " +
        "from the database up to the screen — services in Java, web frontends in Angular " +
        "and TypeScript, mobile apps in Flutter and Kotlin.",

        "Working on banking systems taught me to take data correctness and reliability " +
        "seriously. I am at home in enterprise databases — Oracle, SQL Server, MySQL and " +
        "PostgreSQL — and I like owning a feature from the schema to the button someone " +
        "actually taps.",
      ],
      factsLabel: "Quick Facts",
      facts: [
        { k: "Location",  v: "Thailand" },
        { k: "Role",      v: "Software Engineer" },
        { k: "Experience", v: "7 years · Bank of Ayudhya" },
        { k: "Languages", v: "Thai (Native) · English" },
        { k: "Focus",     v: "Angular · Flutter · Java" },
      ],
    },

    stats: {
      items: [
        { value: 7, suffix: "",  label: "Years Experience" },
        { value: 5, suffix: "+", label: "Projects Built" },
        { value: 4, suffix: "",  label: "Databases Used" },
      ],
    },

    skills: {
      eyebrow: "Capabilities",
      title: "Skills & Tools",
      lead: "Technologies I work with regularly.",
      groups: [
        { group: "Mobile",   note: "Cross-platform and native", items: ["Flutter", "Dart", "Kotlin", "Android"] },
        { group: "Frontend", note: "Web applications",    items: ["Angular", "TypeScript", "HTML", "CSS"] },
        { group: "Backend",  note: "Server side",         items: ["Java", "REST API"] },
        { group: "Database", note: "Schema design and queries", items: ["SQL Server", "MySQL", "Oracle", "PostgreSQL"] },
        { group: "Tools",    note: "Daily drivers",       items: ["Git", "GitHub", "VS Code", "Android Studio"] },
      ],
    },

    projects: {
      eyebrow: "Selected Work",
      title: "Projects",
      lead: "Work that taught me something.",
      items: [
        {
          name: "bayFlutter",
          kind: "Mobile App",
          desc: "A Flutter mobile app — practice in screen architecture and state management.",
          tags: ["Flutter", "Dart"],
          repo: "https://github.com/golfcnt19/bayFlutter",
          live: "",
          highlight: true,
        },
        {
          name: "project-angular",
          kind: "Web App",
          desc: "An Angular and TypeScript web app — component structure and routing.",
          tags: ["Angular", "TypeScript"],
          repo: "https://github.com/golfcnt19/project-angular",
          live: "",
          highlight: false,
        },
        {
          name: "my_flutter",
          kind: "Mobile App",
          desc: "A Flutter sandbox for testing widgets and data binding.",
          tags: ["Flutter", "Dart"],
          repo: "https://github.com/golfcnt19/my_flutter",
          live: "",
          highlight: false,
        },
      ],
    },

    experience: {
      eyebrow: "Track Record",
      title: "Experience",
      items: [
        {
          period: "2019 — Present · 7 years",
          role: "Software Engineer",
          org: "Bank of Ayudhya (Krungsri)",
          desc: "Building and maintaining internal banking systems, working across both the application layer and the database.",
          tags: ["Java", "Angular", "Oracle", "SQL Server"],
        },
      ],
    },

    education: {
      eyebrow: "Foundation",
      title: "Education",
      items: [
        {
          period: "TODO Years",
          degree: "TODO Degree / Field",
          place: "TODO Institution",
        },
      ],
    },

    contact: {
      eyebrow: "Contact",
      title: "Let's Talk",
      lead: "Interested in working together or want to talk about a project? Send an email — I reply to every one.",
      emailLabel: "Send Email",
      copyLabel: "Copy Email",
      copiedLabel: "Copied",
    },

    footer: {
      builtWith: "Built with plain HTML, CSS and JavaScript",
      backToTop: "Back to top",
    },

    ui: {
      langSwitch: "ไทย",
      langSwitchTitle: "เปลี่ยนเป็นภาษาไทย",
      menu: "Menu",
      viewRepo: "Code",
      viewLive: "Live",
    },
  },
};
