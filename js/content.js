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
      role: "FULL STACK DEVELOPER",
      tagline:
        "ทำงานได้ตั้งแต่ฝั่งเซิร์ฟเวอร์ถึงหน้าจอ — Angular, Flutter, Java และ Kotlin " +
        "ชอบงานที่ได้ดูแลฟีเจอร์ตั้งแต่ต้นจนจบ",
      ctaPrimary: "ดูผลงาน",
      ctaSecondary: "ติดต่อผม",
      scrollHint: "เลื่อนลง",
    },

    about: {
      eyebrow: "แนะนำตัว",
      title: "เกี่ยวกับผม",
      body: [
        // TODO เขียนแทนสองย่อหน้านี้ — เพิ่มหรือลดย่อหน้าได้
        "ผมเป็น full stack developer ทำงานได้ตั้งแต่ฐานข้อมูลจนถึงหน้าจอ " +
        "เขียนแอปมือถือด้วย Flutter และ Kotlin ทำเว็บด้วย Angular กับ TypeScript " +
        "ทำ service ฝั่งหลังบ้านด้วย Java และทำงานกับฐานข้อมูลได้หลายตัว " +
        "ทั้ง SQL Server, MySQL, Oracle และ PostgreSQL",

        "ชอบงานที่ได้ดูแลฟีเจอร์ตั้งแต่ schema จนถึงปุ่มที่ผู้ใช้กดจริง " +
        "กำลังมองหาทีมที่ให้ความสำคัญกับคุณภาพของโค้ด และมีคนที่เก่งกว่าให้เรียนรู้",
      ],
      factsLabel: "ข้อมูลโดยย่อ",
      facts: [
        { k: "ที่อยู่",     v: "ประเทศไทย" },          // TODO จังหวัด
        { k: "บทบาท",      v: "Full Stack Developer" },
        { k: "ภาษา",       v: "ไทย (เจ้าของภาษา) · อังกฤษ" },
        { k: "ถนัด",       v: "Angular · Flutter · Java" },
      ],
    },

    stats: {
      // value เป็นตัวเลขล้วน ระบบจะนับขึ้นให้เอง
      items: [
        { value: 5,  suffix: "+", label: "โปรเจคที่ทำ" },       // TODO
        { value: 3,  suffix: "+", label: "ปีที่เขียนโค้ด" },     // TODO
        { value: 4,  suffix: "",  label: "ภาษาที่ใช้ได้" },      // TODO
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
      // TODO ใส่ประสบการณ์จริง ถ้ายังไม่มีให้ลบทั้ง items เหลือ []
      items: [
        {
          period: "2566 — ปัจจุบัน",
          role: "Developer",
          org: "TODO ชื่อบริษัท",
          desc: "TODO สรุปสั้น ๆ ว่าทำอะไร ดูแลส่วนไหน ใช้เทคโนโลยีอะไร",
          tags: ["Flutter", "Angular"],
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
      role: "FULL STACK DEVELOPER",
      tagline:
        "Working from the server through to the screen — Angular, Flutter, Java and Kotlin. " +
        "Drawn to owning a feature end to end.",
      ctaPrimary: "View Work",
      ctaSecondary: "Get In Touch",
      scrollHint: "Scroll",
    },

    about: {
      eyebrow: "Background",
      title: "About Me",
      body: [
        "I am a full stack developer, comfortable from the database up to the screen. " +
        "I build mobile apps with Flutter and Kotlin, web frontends with Angular and " +
        "TypeScript, services with Java, and I work across SQL Server, MySQL, Oracle " +
        "and PostgreSQL.",

        "I like owning a feature end to end, from the schema to the button someone actually " +
        "taps. Currently looking for a team that cares about code quality and where there " +
        "are people to learn from.",
      ],
      factsLabel: "Quick Facts",
      facts: [
        { k: "Location",  v: "Thailand" },
        { k: "Role",      v: "Full Stack Developer" },
        { k: "Languages", v: "Thai (Native) · English" },
        { k: "Focus",     v: "Angular · Flutter · Java" },
      ],
    },

    stats: {
      items: [
        { value: 5, suffix: "+", label: "Projects Built" },
        { value: 3, suffix: "+", label: "Years Coding" },
        { value: 4, suffix: "",  label: "Languages Used" },
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
          period: "2023 — Present",
          role: "Developer",
          org: "TODO Company",
          desc: "TODO A short summary of what you do, what you own, what you use.",
          tags: ["Flutter", "Angular"],
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
