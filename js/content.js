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
        "12 ปีในสายพัฒนาซอฟต์แวร์ ทำงานได้ตั้งแต่ฐานข้อมูลจนถึงหน้าจอ — " +
        "Java, Angular, Flutter, Kotlin และ PHP",
      ctaPrimary: "ดูผลงาน",
      ctaSecondary: "ติดต่อผม",
      scrollHint: "เลื่อนลง",
    },

    about: {
      eyebrow: "แนะนำตัว",
      title: "เกี่ยวกับผม",
      body: [
        // TODO เขียนแทนสองย่อหน้านี้ — เพิ่มหรือลดย่อหน้าได้
        "ผมเป็น software engineer ประสบการณ์ 12 ปี เริ่มจากเขียน PHP ทำระบบภายในองค์กร " +
        "ที่แสงชัยกรุ๊ป 5 ปี แล้วมาต่อที่ธนาคารกรุงศรีอยุธยาอีก 7 ปี " +
        "ทำงานได้ตั้งแต่ฐานข้อมูลจนถึงหน้าจอ — เขียน API ฝั่งหลังบ้านด้วย Java, Kotlin และ Spring " +
        "ทำเว็บด้วย Angular กับ TypeScript เขียนแอปมือถือด้วย Flutter และ Kotlin",

        "งานในระบบธนาคารสอนให้ให้ความสำคัญกับความถูกต้องของข้อมูลและความน่าเชื่อถือของระบบ " +
        "นอกจากเขียนโค้ดแล้วยังทำ load test ด้วย JMeter ดูผลผ่าน Dynatrace เพื่อหาคอขวด " +
        "และเขียนสคริปต์ทดสอบอัตโนมัติด้วย Appium " +
        "ชอบงานที่ได้ดูแลฟีเจอร์ตั้งแต่ schema จนถึงปุ่มที่ผู้ใช้กดจริง",
      ],
      factsLabel: "ข้อมูลโดยย่อ",
      facts: [
        { k: "ที่อยู่",     v: "กรุงเทพมหานคร" },
        { k: "บทบาท",      v: "Software Engineer" },
        { k: "ประสบการณ์", v: "12 ปี · ธนาคารกรุงศรีอยุธยา, แสงชัยกรุ๊ป" },
        { k: "ภาษา",       v: "ไทย (เจ้าของภาษา) · อังกฤษ" },
        { k: "ถนัด",       v: "Angular · Flutter · Java" },
        { k: "วิธีทำงาน",  v: "Agile" },
      ],
    },

    stats: {
      // value เป็นตัวเลขล้วน ระบบจะนับขึ้นให้เอง
      items: [
        { value: 12, suffix: "",  label: "ปีประสบการณ์" },
        { value: 2,  suffix: "",  label: "องค์กรที่ร่วมงาน" },
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
        { group: "Backend",  note: "พัฒนา API ฝั่งเซิร์ฟเวอร์", items: ["Java", "Kotlin", "Spring", "REST API", "PHP"] },
        { group: "Database", note: "ออกแบบและเขียน query",   items: ["SQL Server", "MySQL", "Oracle", "PostgreSQL"] },
        { group: "Testing",  note: "ทดสอบโหลดและเขียนสคริปต์อัตโนมัติ", items: ["JMeter", "Appium", "Load Testing", "Test Automation"] },
        { group: "DevSecOps", note: "คอนเทนเนอร์ และสาย build อัตโนมัติ — พื้นฐาน ใช้ประกอบงานพัฒนา",
          items: ["Podman", "Minikube", "Kubernetes", "Jenkins", "n8n", "CI/CD", "Dynatrace", "AWS CloudShell"] },
        { group: "Requirements", note: "เก็บ requirement และทำงานร่วมกับทีม",
          items: ["Jira", "Miro", "Figma", "Requirement Analysis"] },
        { group: "Tools",    note: "เครื่องมือประจำวัน",      items: ["IntelliJ IDEA", "Android Studio", "VS Code", "Git", "GitHub"] },
        { group: "AI",       note: "ใช้ช่วยงานพัฒนาในแต่ละวัน",
          items: ["Claude", "GitHub Copilot", "ChatGPT", "Codex", "Gemini"] },
      ],
    },

    projects: {
      eyebrow: "ผลงาน",
      title: "โปรเจคที่เลือกมา",
      lead: "งานที่ทำแล้วได้เรียนรู้อะไรบางอย่าง",

      /* เพิ่มโปรเจคใหม่: ก๊อปบล็อกข้างล่างแล้วแก้ อย่าลืมเพิ่มใน en ด้วย
         ให้จำนวนรายการเท่ากันเสมอ ไม่งั้นสลับภาษาแล้วเนื้อหาหาย */
      items: [
        {
          name: "Expense Tracker",
          kind: "Full Stack",
          desc:
            "ระบบบันทึกค่าใช้จ่าย — REST API หนึ่งตัว ต่อด้วย client สองแบบ " +
            "วัดผลด้วย JMeter บนข้อมูล 200,000 แถว พบว่า index ที่ออกแบบตามคิวรีจริง " +
            "ทำให้ throughput ต่างกัน 13.8 เท่า (2,675 เทียบกับ 194 req/s) และ p99 ลดจาก 528 เหลือ 32 ms",
          tags: ["Kotlin", "Spring Boot", "Angular", "Flutter", "PostgreSQL", "JMeter"],
          repo: "https://github.com/golfcnt19/expense-tracker",
          live: "https://golfcnt19.github.io/expense-tracker/",
          highlight: true,
        },
      ],
    },

    experience: {
      eyebrow: "เส้นทาง",
      title: "ประสบการณ์",
      // เรียงจากงานล่าสุดลงไปหางานแรก
      items: [
        {
          // TODO ยืนยันปีเริ่ม — ผมคำนวณ 2562 จาก "7 ปี" นับถอยหลังจากปีนี้
          period: "2562 — ปัจจุบัน · 7 ปี",
          role: "Software Engineer",
          org: "ธนาคารกรุงศรีอยุธยา (Bank of Ayudhya)",
          // TODO เขียนแทนบรรทัดนี้ — ดูแลระบบอะไร ทีมกี่คน ผลลัพธ์ที่วัดได้
          desc: "พัฒนาและดูแลระบบของธนาคาร ทำ API ฝั่งหลังบ้านด้วย Java, Kotlin และ Spring " +
                "ควบคู่กับงานฝั่งเว็บ ฐานข้อมูล และแอปมือถือด้วย Flutter และ Kotlin " +
                "รวมถึงทำ load test ด้วย JMeter และเขียนสคริปต์ทดสอบอัตโนมัติด้วย Appium",
          tags: ["Java", "Spring", "Angular", "Flutter", "Kotlin", "Oracle", "JMeter", "Appium"],
        },
        {
          // TODO ยืนยันช่วงปี — คำนวณจาก 5 ปีก่อนเข้าธนาคาร
          period: "2557 — 2562 · 5 ปี",
          role: "Developer",
          org: "บริษัท แสงชัยกรุ๊ป",
          // TODO เขียนแทนบรรทัดนี้ — ทำระบบอะไร ใช้กับกี่หน่วยงาน
          desc: "งานแรก พัฒนาระบบภายในองค์กรด้วย PHP ให้ธุรกิจจัดจำหน่ายระบบทำความเย็น " +
                "ปรับอากาศ และไฟฟ้า",
          tags: ["PHP", "MySQL", "JavaScript"],
        },
      ],
    },

    education: {
      eyebrow: "พื้นฐาน",
      title: "การศึกษา",
      items: [
        {
          // TODO ใส่ช่วงปีที่เรียน เช่น "2553 — 2557" — เว้นว่างไว้จะไม่แสดงบรรทัดนี้
          period: "",
          degree: "วิทยาการสารสนเทศ (Informatics)",
          place: "มหาวิทยาลัยบูรพา · คณะวิทยาการสารสนเทศ",
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
        "Twelve years building software, working from the database through to the screen — " +
        "Java, Angular, Flutter, Kotlin and PHP.",
      ctaPrimary: "View Work",
      ctaSecondary: "Get In Touch",
      scrollHint: "Scroll",
    },

    about: {
      eyebrow: "Background",
      title: "About Me",
      body: [
        "I am a software engineer with 12 years of experience — five years writing PHP " +
        "business systems at Sangchai Group, then seven at Bank of Ayudhya (Krungsri). " +
        "I am comfortable from the database up to the screen: backend APIs in Java, Kotlin " +
        "and Spring, web frontends in Angular and TypeScript, mobile apps in Flutter and Kotlin.",

        "Working on banking systems taught me to take data correctness and reliability " +
        "seriously. Beyond writing code I run load tests with JMeter, read the results in " +
        "Dynatrace to find bottlenecks, and write automated test scripts with Appium. I like " +
        "owning a feature from the schema to the button someone actually taps.",
      ],
      factsLabel: "Quick Facts",
      facts: [
        { k: "Location",  v: "Bangkok, Thailand" },
        { k: "Role",      v: "Software Engineer" },
        { k: "Experience", v: "12 years · Bank of Ayudhya, Sangchai Group" },
        { k: "Languages", v: "Thai (Native) · English" },
        { k: "Focus",     v: "Angular · Flutter · Java" },
        { k: "Ways of working", v: "Agile" },
      ],
    },

    stats: {
      items: [
        { value: 12, suffix: "", label: "Years Experience" },
        { value: 2,  suffix: "", label: "Companies" },
        { value: 4,  suffix: "", label: "Databases Used" },
      ],
    },

    skills: {
      eyebrow: "Capabilities",
      title: "Skills & Tools",
      lead: "Technologies I work with regularly.",
      groups: [
        { group: "Mobile",   note: "Cross-platform and native", items: ["Flutter", "Dart", "Kotlin", "Android"] },
        { group: "Frontend", note: "Web applications",    items: ["Angular", "TypeScript", "HTML", "CSS"] },
        { group: "Backend",  note: "Server-side API development", items: ["Java", "Kotlin", "Spring", "REST API", "PHP"] },
        { group: "Database", note: "Schema design and queries", items: ["SQL Server", "MySQL", "Oracle", "PostgreSQL"] },
        { group: "Testing",  note: "Load testing and automation", items: ["JMeter", "Appium", "Load Testing", "Test Automation"] },
        { group: "DevSecOps", note: "Containers and automated build pipelines — working familiarity alongside dev work",
          items: ["Podman", "Minikube", "Kubernetes", "Jenkins", "n8n", "CI/CD", "Dynatrace", "AWS CloudShell"] },
        { group: "Requirements", note: "Gathering requirements and working with the team",
          items: ["Jira", "Miro", "Figma", "Requirement Analysis"] },
        { group: "Tools",    note: "Daily drivers",       items: ["IntelliJ IDEA", "Android Studio", "VS Code", "Git", "GitHub"] },
        { group: "AI",       note: "Day-to-day development assistants",
          items: ["Claude", "GitHub Copilot", "ChatGPT", "Codex", "Gemini"] },
      ],
    },

    projects: {
      eyebrow: "Selected Work",
      title: "Projects",
      lead: "Work that taught me something.",
      // ต้องมีจำนวนรายการเท่ากับฝั่ง th เสมอ
      items: [
        {
          name: "Expense Tracker",
          kind: "Full Stack",
          desc:
            "One REST API with two clients. Load tested with JMeter over 200,000 rows: " +
            "indexes designed around the queries the code actually runs made throughput " +
            "13.8× higher (2,675 vs 194 req/s) and cut p99 from 528 ms to 32 ms.",
          tags: ["Kotlin", "Spring Boot", "Angular", "Flutter", "PostgreSQL", "JMeter"],
          repo: "https://github.com/golfcnt19/expense-tracker",
          live: "https://golfcnt19.github.io/expense-tracker/",
          highlight: true,
        },
      ],
    },

    experience: {
      eyebrow: "Track Record",
      title: "Experience",
      // Most recent first
      items: [
        {
          period: "2019 — Present · 7 years",
          role: "Software Engineer",
          org: "Bank of Ayudhya (Krungsri)",
          desc: "Building and maintaining banking systems — backend APIs in Java, Kotlin and Spring alongside web, database and mobile work in Flutter and Kotlin, plus load testing with JMeter and automated test scripts with Appium.",
          tags: ["Java", "Spring", "Angular", "Flutter", "Kotlin", "Oracle", "JMeter", "Appium"],
        },
        {
          period: "2014 — 2019 · 5 years",
          role: "Developer",
          org: "Sangchai Group",
          desc: "First role. Built internal business systems in PHP for a distributor of refrigeration, air-conditioning and electrical systems.",
          tags: ["PHP", "MySQL", "JavaScript"],
        },
      ],
    },

    education: {
      eyebrow: "Foundation",
      title: "Education",
      items: [
        {
          period: "",
          degree: "Informatics",
          place: "Burapha University · Faculty of Informatics",
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
      langSwitch: "TH",
      langSwitchTitle: "เปลี่ยนเป็นภาษาไทย",
      menu: "Menu",
      viewRepo: "Code",
      viewLive: "Live",
    },
  },
};
