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
    website: "https://golfcnt19.github.io",

    // ใช้เฉพาะหน้าเรซูเม่ (resume.html) — ช่องไหนเว้นว่างไว้ บรรทัดนั้นจะไม่แสดง
    // รูป ID ที่คีย์พื้นหลังฟ้าออกเป็นขาวและย่อเหลือ 720px แล้ว (87 KB)
    // ต้นฉบับ 1200x1800 ไม่ได้อยู่ใน repo เพราะหนัก 930 KB — เก็บไว้นอก repo
    photo: "image/chanathip-white.jpg",  // ลบทิ้งหรือเว้นว่าง = ไม่มีรูปบนเรซูเม่
    phone: "097-298-7957",
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
        "Full stack software engineer ประสบการณ์ 12 ปี ทำงานได้ทั้งสายตั้งแต่ schema " +
        "ของฐานข้อมูลจนถึงปุ่มที่ผู้ใช้กดจริง — เขียน service ด้วย Java และ Kotlin บน Spring " +
        "ทำเว็บด้วย Angular และ TypeScript ทำแอปมือถือด้วย Flutter และ Kotlin " +
        "ห้าปีแรกเขียน PHP ทำระบบธุรกิจที่แสงชัยกรุ๊ป เจ็ดปีหลังอยู่ที่ธนาคารกรุงศรีอยุธยา",

        "งานธนาคารตั้งมาตรฐานเรื่องความถูกต้องของข้อมูลและความต่อเนื่องของระบบให้ผม " +
        "และสอนว่าการส่งงานขึ้นระบบไม่ใช่เส้นชัย — ผมทำ load test ด้วย JMeter " +
        "ไล่หาคอขวดจาก trace ใน Dynatrace และเขียนสคริปต์ regression อัตโนมัติด้วย Appium " +
        "ในโปรเจคของตัวเองผมวัดออกมาแล้วว่าวินัยแบบนี้มีค่าแค่ไหน — index ที่ออกแบบ " +
        "ตามคิวรีที่โค้ดเรียกจริง ดัน throughput จาก 194 เป็น 2,675 req/s " +
        "และลด p99 จาก 528 ms เหลือ 32 ms",
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
          // points ใช้เฉพาะบนเรซูเม่ (แทน desc) เพราะหัวข้อย่อยอ่านง่ายกว่าบนกระดาษ
          points: [
            "พัฒนาและดูแล API ฝั่งหลังบ้านด้วย Java, Kotlin และ Spring บนฐานข้อมูล Oracle",
            "ทำงานข้ามฝั่งในฟีเจอร์เดียวกัน — เว็บด้วย Angular แอปมือถือด้วย Flutter และ Kotlin",
            "ทำ load test ด้วย JMeter แล้วไล่หาคอขวดจาก trace ใน Dynatrace",
            "เขียนสคริปต์ทดสอบอัตโนมัติด้วย Appium ลดงาน regression ที่ต้องทำมือ",
            "ทำงานแบบ Agile ตั้งแต่เก็บ requirement จนส่งมอบ",
          ],
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
          points: [
            "งานแรก พัฒนาระบบภายในองค์กรด้วย PHP ให้ธุรกิจจัดจำหน่าย " +
            "ระบบทำความเย็น ปรับอากาศ และไฟฟ้า",
            "ดูแลฟีเจอร์ครบวงจร ตั้งแต่ schema บน MySQL จนถึงหน้าจอที่ผู้ใช้ใช้งาน",
          ],
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

    /* หน้าเรซูเม่ resume.html — หัวข้อและข้อความเฉพาะของหน้านั้น
       เนื้อหาจริง (ประวัติ ทักษะ การศึกษา ผลงาน) ใช้ร่วมกับเว็บ ไม่ต้องเขียนซ้ำ */
    resume: {
      docTitle: "เรซูเม่",
      contact: "ติดต่อ",
      education: "การศึกษา",
      skills: "ทักษะ",
      languages: "ภาษา",
      profile: "โปรไฟล์",
      experience: "ประสบการณ์ทำงาน",
      how: "วิธีทำงาน",
      /* หัวข้อปิดท้ายคอลัมน์ขวาของเรซูเม่ ต้องยาวเท่ากับฝั่ง en
         เว้น array ว่าง = ซ่อนหัวข้อนี้ทั้งหัวข้อ */
      howPoints: [
        "Agile — เก็บ requirement กับทีมผ่าน Jira, Miro, Figma แล้วส่งมอบเป็นรอบ",
        "วัดก่อนเดา — load test ด้วย JMeter อ่าน trace ใน Dynatrace แล้วค่อยแก้",
        "ใช้คอนเทนเนอร์และ CI/CD ประกอบงานพัฒนา — Podman, Kubernetes, Jenkins",
        "ใช้ AI เป็นเครื่องมือประจำวัน — Claude, GitHub Copilot, Codex",
      ],
      download: "ดาวน์โหลด PDF",
      downloadHint: "เปิดหน้าต่างพิมพ์ แล้วเลือกปลายทางเป็น Save as PDF",
      backToSite: "กลับหน้าเว็บ",
      photoAlt: "รูปถ่ายชนาธิป ใจดี",
      location: "กรุงเทพมหานคร",
      langList: [
        "ไทย — เจ้าของภาษา",
        "อังกฤษ — ใช้งานได้",
      ],
    },

    ui: {
      langSwitch: "EN",
      langSwitchTitle: "Switch to English",
      resume: "เรซูเม่",
      resumeCta: "ดาวน์โหลดเรซูเม่ (PDF)",
      resumeTitle: "เปิดหน้าเรซูเม่ ที่นั่นมีปุ่มดาวน์โหลด PDF",
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
        "Full stack software engineer with 12 years across enterprise and banking systems. " +
        "I work the whole stack — Java and Kotlin services on Spring, Angular front ends, " +
        "Flutter and Kotlin on mobile, and the SQL schema underneath all of it. The first " +
        "five years were PHP business systems at Sangchai Group; the last seven have been " +
        "at Bank of Ayudhya (Krungsri).",

        "Banking work set my bar for correctness and uptime, and taught me that shipping is " +
        "not the finish line. I load test with JMeter, read traces in Dynatrace to find the " +
        "real bottleneck, and keep the regression pass automated with Appium. On my own " +
        "project I measured what that discipline is worth: indexes designed around the " +
        "queries the code actually runs took throughput from 194 to 2,675 req/s and cut " +
        "p99 latency from 528 ms to 32 ms.",
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
          // points is résumé-only (it replaces desc there) — bullets read better on paper
          points: [
            "Build and maintain backend APIs in Java, Kotlin and Spring over Oracle.",
            "Work across the stack within the same feature — Angular on the web, Flutter and Kotlin on mobile.",
            "Run load tests with JMeter and read traces in Dynatrace to find the bottleneck.",
            "Automate regression testing with Appium, cutting the manual pass.",
            "Work in Agile teams from requirement gathering through delivery.",
          ],
          tags: ["Java", "Spring", "Angular", "Flutter", "Kotlin", "Oracle", "JMeter", "Appium"],
        },
        {
          period: "2014 — 2019 · 5 years",
          role: "Developer",
          org: "Sangchai Group",
          desc: "First role. Built internal business systems in PHP for a distributor of refrigeration, air-conditioning and electrical systems.",
          points: [
            "First role. Built internal business systems in PHP for a distributor of refrigeration, air-conditioning and electrical products.",
            "Owned features end to end, from the MySQL schema to the screen people used.",
          ],
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

    // ต้องมีคีย์ตรงกับ th.resume ทุกตัว และ array ยาวเท่ากัน
    resume: {
      docTitle: "Résumé",
      contact: "Contact",
      education: "Education",
      skills: "Skills",
      languages: "Languages",
      profile: "Profile",
      experience: "Work Experience",
      how: "How I Work",
      // ต้องยาวเท่ากับฝั่ง th
      howPoints: [
        "Agile — requirements in Jira, Miro and Figma, delivered in iterations.",
        "Measure before guessing: JMeter for load, Dynatrace for traces, then fix.",
        "Containers and CI/CD alongside dev work — Podman, Kubernetes, Jenkins.",
        "AI as a daily tool — Claude, GitHub Copilot and Codex.",
      ],
      download: "Download PDF",
      downloadHint: "Opens the print dialog — choose Save as PDF as the destination",
      backToSite: "Back to site",
      photoAlt: "Photo of Chanathip Jaidee",
      location: "Bangkok, Thailand",
      langList: [
        "Thai — Native",
        "English — Working proficiency",
      ],
    },

    ui: {
      langSwitch: "TH",
      resume: "Résumé",
      resumeCta: "Download Résumé (PDF)",
      resumeTitle: "Opens the résumé page, which has a PDF download button",
      langSwitchTitle: "เปลี่ยนเป็นภาษาไทย",
      menu: "Menu",
      viewRepo: "Code",
      viewLive: "Live",
    },
  },
};
