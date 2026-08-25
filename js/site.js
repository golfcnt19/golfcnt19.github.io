/* ============================================================================
   site.js — ทำให้เว็บทำงาน
   ปกติไม่ต้องแก้ไฟล์นี้ ถ้าจะเปลี่ยนเนื้อหาให้ไปแก้ js/content.js
   ============================================================================ */
(function () {
  "use strict";

  var LANGS = ["en", "th"];
  var STORE_KEY = "portfolio.lang";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* -- อ่านค่าจาก path แบบ "about.title" ------------------------------- */
  function pick(obj, path) {
    return path.split(".").reduce(function (o, k) {
      return (o && o[k] !== undefined) ? o[k] : undefined;
    }, obj);
  }

  /* -- กัน HTML injection จากข้อความใน content.js ----------------------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function chips(list) {
    if (!list || !list.length) return "";
    return '<div class="chips">' +
      list.map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") +
      "</div>";
  }

  /* -- ภาษาปัจจุบัน ------------------------------------------------------ */
  function currentLang() {
    var saved;
    try { saved = localStorage.getItem(STORE_KEY); } catch (e) { /* private mode */ }
    if (LANGS.indexOf(saved) !== -1) return saved;
    return (navigator.language || "").toLowerCase().indexOf("th") === 0 ? "th" : "en";
  }

  function saveLang(l) {
    try { localStorage.setItem(STORE_KEY, l); } catch (e) { /* ignore */ }
  }

  /* -- ไอคอน ------------------------------------------------------------- */
  var ICONS = {
    github: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.4 7.4 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>',
    linkedin: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M13.63 13.63h-2.37V9.92c0-.89-.02-2.03-1.24-2.03-1.24 0-1.43.97-1.43 1.97v3.77H6.22V6h2.28v1.04h.03c.32-.6 1.09-1.24 2.25-1.24 2.4 0 2.85 1.58 2.85 3.64v4.19ZM3.55 4.96a1.38 1.38 0 1 1 0-2.75 1.38 1.38 0 0 1 0 2.75Zm1.19 8.67H2.36V6h2.38v7.63ZM14.82 0H1.18C.53 0 0 .52 0 1.16v13.68C0 15.48.53 16 1.18 16h13.64c.65 0 1.18-.52 1.18-1.16V1.16C16 .52 15.47 0 14.82 0Z"/></svg>',
    link: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6.35 11.3a.75.75 0 0 1-.53-1.28l4.24-4.24a.75.75 0 1 1 1.06 1.06L6.88 11.08a.75.75 0 0 1-.53.22Z"/><path d="M4.4 14.5a3.6 3.6 0 0 1-2.55-6.15l2.12-2.12a.75.75 0 0 1 1.06 1.06L2.91 9.41A2.1 2.1 0 0 0 5.9 12.4l2.12-2.12a.75.75 0 0 1 1.06 1.06L6.95 13.45a3.58 3.58 0 0 1-2.55 1.05ZM10.54 9.72a.75.75 0 0 1-.53-1.28l2.12-2.12a2.1 2.1 0 0 0-2.97-2.97L7.04 5.47a.75.75 0 1 1-1.06-1.06L8.1 2.29a3.6 3.6 0 0 1 5.09 5.09l-2.12 2.12a.75.75 0 0 1-.53.22Z"/></svg>'
  };
  function icon(name) { return ICONS[name] || ICONS.link; }

  /* ====================================================================== */
  /*  Render                                                                */
  /* ====================================================================== */

  function renderStatic(d) {
    // ข้อความที่เขียนไว้ใน HTML แล้วสลับตามภาษา
    $$("[data-i18n]").forEach(function (el) {
      var v = pick(d, el.getAttribute("data-i18n"));
      if (typeof v === "string") el.textContent = v;
    });
    $$("[data-i18n-title]").forEach(function (el) {
      var v = pick(d, el.getAttribute("data-i18n-title"));
      if (typeof v === "string") el.title = v;
    });
    // ค่าที่ใช้ร่วมทั้งสองภาษา
    $$("[data-bind]").forEach(function (el) {
      var v = pick(CONTENT, el.getAttribute("data-bind"));
      if (typeof v === "string") el.textContent = v;
    });
  }

  function renderAbout(d) {
    var body = $("#aboutBody");
    if (body && d.about && d.about.body) {
      body.innerHTML = d.about.body.map(function (p) {
        return "<p>" + esc(p) + "</p>";
      }).join("");
    }

    var facts = $("#factsList");
    if (facts && d.about && d.about.facts) {
      facts.innerHTML = d.about.facts.map(function (f) {
        return '<div class="facts__row"><dt>' + esc(f.k) + "</dt><dd>" + esc(f.v) + "</dd></div>";
      }).join("");
    }
  }

  function renderStats(d) {
    var grid = $("#statsGrid");
    if (!grid || !d.stats) return;
    grid.innerHTML = d.stats.items.map(function (s) {
      return '<div class="stat">' +
        // ใส่ "เลขจริง" ลง DOM เสมอ การนับขึ้นเป็นของแถมที่จะทำงานถ้าทำได้
        '<p class="stat__val"><span class="stat__num" data-to="' + Number(s.value) + '">' +
        Number(s.value) + "</span>" +
        (s.suffix ? '<span class="stat__suffix">' + esc(s.suffix) + "</span>" : "") +
        '</p><p class="stat__label">' + esc(s.label) + "</p></div>";
    }).join("");
    countUp();
  }

  function renderSkills(d) {
    var grid = $("#skillsGrid");
    if (!grid || !d.skills) return;
    grid.innerHTML = d.skills.groups.map(function (g, i) {
      return '<article class="skill reveal">' +
        '<div class="skill__head">' +
          '<span class="skill__num mono">' + String(i + 1).padStart(2, "0") + "</span>" +
          '<h3 class="skill__name">' + esc(g.group) + "</h3>" +
        "</div>" +
        '<p class="skill__note">' + esc(g.note) + "</p>" +
        chips(g.items) +
      "</article>";
    }).join("");
  }

  function renderProjects(d) {
    var grid = $("#projectsGrid");
    if (!grid || !d.projects) return;
    var ui = d.ui;
    grid.innerHTML = d.projects.items.map(function (p) {
      var links = "";
      if (p.repo) links += '<a class="proj__link" href="' + esc(p.repo) + '" target="_blank" rel="noopener noreferrer">' + esc(ui.viewRepo) + " &#8599;</a>";
      if (p.live) links += '<a class="proj__link" href="' + esc(p.live) + '" target="_blank" rel="noopener noreferrer">' + esc(ui.viewLive) + " &#8599;</a>";

      return '<article class="proj reveal' + (p.highlight ? " proj--hl" : "") + '">' +
        '<div class="proj__top">' +
          '<span class="proj__kind">' + esc(p.kind) + "</span>" +
          (p.highlight ? '<span class="proj__badge">FEATURED</span>' : "") +
        "</div>" +
        '<h3 class="proj__name">' + esc(p.name) + "</h3>" +
        '<p class="proj__desc">' + esc(p.desc) + "</p>" +
        '<div class="proj__tags">' + chips(p.tags) + "</div>" +
        (links ? '<div class="proj__links">' + links + "</div>" : "") +
      "</article>";
    }).join("");
  }

  function renderTimeline(sel, items, compactFields) {
    var list = $(sel);
    if (!list) return;
    if (!items || !items.length) { list.innerHTML = ""; return; }

    list.innerHTML = items.map(function (it) {
      if (compactFields) {
        return '<li class="tl reveal">' +
          '<p class="tl__period">' + esc(it.period) + "</p>" +
          '<h3 class="tl__role">' + esc(it.degree) + "</h3>" +
          '<p class="tl__org">' + esc(it.place) + "</p>" +
        "</li>";
      }
      return '<li class="tl reveal">' +
        '<p class="tl__period">' + esc(it.period) + "</p>" +
        '<h3 class="tl__role">' + esc(it.role) + "</h3>" +
        '<p class="tl__org">' + esc(it.org) + "</p>" +
        (it.desc ? '<p class="tl__desc">' + esc(it.desc) + "</p>" : "") +
        chips(it.tags) +
      "</li>";
    }).join("");
  }

  /* section ไหนไม่มีรายการเลย ให้ซ่อนทั้ง section พร้อมลิงก์ในเมนู
     จะได้ไม่เหลือหัวข้อลอย ๆ ที่ไม่มีเนื้อหา — พอเติมรายการใน content.js
     กลับเข้าไป section ก็โผล่มาเอง ไม่ต้องแก้ HTML */
  var COLLECTIONS = [
    { list: "#skillsGrid",     section: "#skills" },
    { list: "#projectsGrid",   section: "#projects" },
    { list: "#experienceList", section: "#experience" },
    { list: "#educationList",  section: "#education" },
  ];

  function syncEmptySections() {
    COLLECTIONS.forEach(function (c) {
      var list = $(c.list);
      var section = $(c.section);
      if (!list || !section) return;
      section.hidden = list.children.length === 0;
    });

    // ลิงก์ที่ชี้ไป section ที่ซ่อนอยู่จะกลายเป็นปุ่มกดแล้วไม่ไปไหน
    // ในเมนูให้ซ่อนลิงก์ทิ้ง ส่วนปุ่มอื่น (เช่น CTA ใน hero) ให้เบนไป
    // section ถัดไปที่ยังแสดงอยู่แทน
    var all = $$("main section[id]");

    // จำปลายทางเดิมไว้ครั้งแรก จะได้คืนค่าได้ถ้าภายหลัง section กลับมาแสดง
    $$('a[href^="#"]').forEach(function (a) {
      if (!a.dataset.target) a.dataset.target = a.getAttribute("href");
    });

    all.forEach(function (section) {
      var links = $$('a[data-target="#' + section.id + '"]');
      if (!links.length) return;

      if (!section.hidden) {
        links.forEach(function (a) {
          a.hidden = false;
          a.setAttribute("href", a.dataset.target);
        });
        return;
      }

      var fallback = nextVisibleAfter(section);
      links.forEach(function (a) {
        if (a.closest("#navLinks")) a.hidden = true;
        else if (fallback) a.setAttribute("href", "#" + fallback.id);
      });
    });

    function nextVisibleAfter(section) {
      var i = all.indexOf(section);
      for (var j = i + 1; j < all.length; j++) {
        if (!all[j].hidden) return all[j];
      }
      for (var k = i - 1; k >= 0; k--) {
        if (!all[k].hidden) return all[k];
      }
      return null;
    }
  }

  function renderContact(d) {
    var mail = CONTENT.meta.email || "";

    var mailEl = $("#contactMail");
    if (mailEl) mailEl.textContent = mail;

    var link = $("#mailLink");
    if (link) link.href = "mailto:" + mail;

    var list = $("#contactLinks");
    if (list) {
      list.innerHTML = (CONTENT.meta.links || [])
        .filter(function (l) { return l.url; })
        .map(function (l) {
          return "<li><a href=" + '"' + esc(l.url) + '"' +
            ' target="_blank" rel="noopener noreferrer">' +
            icon(l.icon) + "<span>" + esc(l.label) + "</span></a></li>";
        }).join("");
    }
  }

  /* ====================================================================== */
  /*  สลับภาษา                                                              */
  /* ====================================================================== */
  function applyLang(lang) {
    var d = CONTENT[lang];
    if (!d) return;

    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);

    renderStatic(d);
    renderAbout(d);
    renderStats(d);
    renderSkills(d);
    renderProjects(d);
    renderTimeline("#experienceList", d.experience && d.experience.items, false);
    renderTimeline("#educationList", d.education && d.education.items, true);
    renderContact(d);
    syncEmptySections();

    observeReveals();
    saveLang(lang);
  }

  /* ====================================================================== */
  /*  นับตัวเลข                                                             */
  /* ====================================================================== */
  /* เลขจริงถูกใส่ไว้ใน DOM ตั้งแต่ตอน render แล้ว ฟังก์ชันนี้แค่เพิ่มลูกเล่นนับขึ้น
     เงื่อนไขเดียวกับ reveal: ต้องรองรับ IO, ไม่ได้ขอลดการเคลื่อนไหว และแท็บถูกเปิดดูอยู่
     ถ้าเงื่อนไขไม่ครบก็ไม่เป็นไร ผู้ใช้เห็นเลขที่ถูกต้องอยู่ดี */
  function countUp() {
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    var nums = $$(".stat__num");
    if (!nums.length) return;

    if (document.visibilityState !== "visible") {
      document.addEventListener("visibilitychange", function onVis() {
        if (document.visibilityState !== "visible") return;
        document.removeEventListener("visibilitychange", onVis);
        countUp();
      });
      return;
    }

    var vh = window.innerHeight;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        animate(e.target);
      });
    }, { threshold: 0.4 });

    nums.forEach(function (n) {
      // ถ้าเลขอยู่ในจอไปแล้วตอนนี้ ปล่อยไว้เฉย ๆ จะได้ไม่กระตุกกลับไปเป็น 0
      var r = n.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) return;
      io.observe(n);
    });

    function animate(el) {
      var to = Number(el.getAttribute("data-to")) || 0;
      var dur = 1100;
      var t0 = null;
      el.textContent = "0";

      function step(ts) {
        if (t0 === null) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(to * eased);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = to;
      }
      requestAnimationFrame(step);
    }
  }

  /* ====================================================================== */
  /*  Reveal on scroll                                                      */
  /* ====================================================================== */
  var revealIO = null;
  var failsafeTimer = null;

  // ตาข่ายกันพลาด: ถ้าเลย 2.5 วินาทีแล้วยังมีบล็อกที่ไม่โผล่ ให้แสดงทั้งหมด
  // กันกรณี observer ไม่ยิง (แท็บพื้นหลัง, เบราว์เซอร์แปลก ๆ) แล้วหน้าว่างเปล่า
  function armFailsafe() {
    clearTimeout(failsafeTimer);
    failsafeTimer = setTimeout(function () {
      $$(".reveal:not(.is-in)").forEach(function (el) { el.classList.add("is-in"); });
    }, 2500);
  }

  /* เปิดอนิเมชัน reveal เฉพาะเมื่อ (ก) เบราว์เซอร์รองรับ IntersectionObserver
     (ข) ผู้ใช้ไม่ได้ขอลดการเคลื่อนไหว และ (ค) หน้าเว็บกำลังถูกมองเห็นอยู่จริง

     ข้อ (ค) สำคัญ: ถ้าเปิดลิงก์ทิ้งไว้ในแท็บพื้นหลัง เบราว์เซอร์จะหยุดวาดเฟรม
     ทำให้ transition ค้างที่ opacity 0 และเห็นเป็นหน้าว่างตอนสลับกลับมา
     จึงรอจนแท็บถูกเปิดดูก่อนค่อยเริ่ม แล้วให้บล็อกที่อยู่ในจอตอนนั้นโผล่ทันที */
  function enableRevealAnim() {
    if (!("IntersectionObserver" in window) || reduceMotion) return;

    if (document.visibilityState !== "visible") {
      document.addEventListener("visibilitychange", function onVis() {
        if (document.visibilityState !== "visible") return;
        document.removeEventListener("visibilitychange", onVis);
        enableRevealAnim();
      });
      return;
    }

    // บล็อกที่อยู่ในจอแล้วให้ถือว่าโผล่เรียบร้อย จะได้ไม่กะพริบ
    var vh = window.innerHeight;
    $$(".reveal").forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) el.classList.add("is-in");
    });

    document.documentElement.classList.add("js-anim");
    observeReveals();
  }

  function observeReveals() {
    if (!document.documentElement.classList.contains("js-anim")) return;

    var els = $$(".reveal:not(.is-in)");
    if (!els.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }

    armFailsafe();

    if (!revealIO) {
      revealIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            revealIO.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    }
    els.forEach(function (el) { revealIO.observe(el); });
  }

  /* ====================================================================== */
  /*  Nav                                                                   */
  /* ====================================================================== */
  function initNav() {
    var nav = $("#nav");
    var links = $("#navLinks");
    var burger = $("#burger");

    // เงาใต้ nav เมื่อเลื่อนลง
    var onScroll = function () {
      nav.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // เมนูมือถือ
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      }
    });

    // ไฮไลต์ section ปัจจุบัน
    var anchors = $$("#navLinks a");
    var sections = anchors
      .map(function (a) { return document.querySelector(a.getAttribute("href")); })
      .filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          anchors.forEach(function (a) {
            a.classList.toggle("is-active", a.getAttribute("href") === "#" + e.target.id);
          });
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      sections.forEach(function (s) { spy.observe(s); });
    }
  }

  /* ====================================================================== */
  /*  คัดลอกอีเมล                                                           */
  /* ====================================================================== */
  function initCopy() {
    var btn = $("#copyBtn");
    if (!btn) return;

    btn.addEventListener("click", function () {
      var mail = CONTENT.meta.email || "";
      var lang = document.documentElement.getAttribute("data-lang") || "en";
      var done = CONTENT[lang].contact.copiedLabel;
      var idle = CONTENT[lang].contact.copyLabel;

      var flash = function () {
        btn.textContent = done;
        setTimeout(function () { btn.textContent = idle; }, 1800);
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(mail).then(flash).catch(fallback);
      } else {
        fallback();
      }

      function fallback() {
        var ta = document.createElement("textarea");
        ta.value = mail;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); flash(); } catch (e) { /* ไม่รองรับ */ }
        document.body.removeChild(ta);
      }
    });
  }

  /* ====================================================================== */
  /*  Start                                                                 */
  /* ====================================================================== */
  function init() {
    if (typeof CONTENT === "undefined") {
      console.error("content.js ไม่ได้ถูกโหลด หรือมี syntax error");
      return;
    }

    enableRevealAnim();

    var yearEl = $("#year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    var lang = currentLang();
    applyLang(lang);

    $("#langBtn").addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-lang") === "th" ? "en" : "th";
      applyLang(next);
    });

    initNav();
    initCopy();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
