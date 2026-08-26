/* ============================================================================
   resume.js — วาดหน้าเรซูเม่จาก js/content.js
   ปกติไม่ต้องแก้ไฟล์นี้ ถ้าจะเปลี่ยนเนื้อหาให้ไปแก้ js/content.js
   ============================================================================ */
(function () {
  "use strict";

  var LANGS = ["en", "th"];
  var STORE_KEY = "portfolio.lang";   // ใช้คีย์เดียวกับเว็บหลัก เลือกภาษาแล้วจำข้ามหน้า

  /* เรซูเม่เอาไว้ส่งบริษัท เปิดมาต้องเป็นอังกฤษเสมอสำหรับคนที่ยังไม่เคยเลือกภาษา
     ไม่ได้ดูภาษาของเบราว์เซอร์ ใครอยากได้ไทยกดสลับได้แล้วระบบจำไว้ให้ */
  var DEFAULT_LANG = "en";

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function pick(obj, path) {
    return path.split(".").reduce(function (o, k) {
      return (o && o[k] !== undefined) ? o[k] : undefined;
    }, obj);
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function tags(list) {
    if (!list || !list.length) return "";
    return '<div class="tags">' +
      list.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") +
      "</div>";
  }

  function currentLang() {
    var saved;
    try { saved = localStorage.getItem(STORE_KEY); } catch (e) { /* private mode */ }
    if (LANGS.indexOf(saved) !== -1) return saved;
    return DEFAULT_LANG;
  }

  function saveLang(l) {
    try { localStorage.setItem(STORE_KEY, l); } catch (e) { /* ignore */ }
  }

  /* -- ไอคอนของแถวติดต่อ -------------------------------------------------- */
  var ICONS = {
    phone: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5.2 1.3a1.2 1.2 0 0 0-1.6-.2L2.3 2a2.3 2.3 0 0 0-.7 2.5c.6 2 1.9 4.2 3.6 5.9 1.7 1.7 3.9 3 5.9 3.6a2.3 2.3 0 0 0 2.5-.7l.9-1.3a1.2 1.2 0 0 0-.2-1.6l-2-1.6a1.2 1.2 0 0 0-1.5 0l-.9.7a.5.5 0 0 1-.6 0A12 12 0 0 1 6.4 6.3a.5.5 0 0 1 0-.6l.7-.9a1.2 1.2 0 0 0 0-1.5l-1.9-2Z"/></svg>',
    mail:  '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1.5 3h13c.3 0 .5.2.5.5v.3L8 8.6.9 3.8v-.3c0-.3.3-.5.6-.5Zm-.6 2.3V12c0 .3.3.6.6.6h13c.3 0 .5-.3.5-.6V5.3L8.3 9.8a.6.6 0 0 1-.6 0L.9 5.3Z"/></svg>',
    pin:   '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 .8a5 5 0 0 0-5 5c0 3.6 4.4 9.1 4.6 9.3a.5.5 0 0 0 .8 0C8.6 14.9 13 9.4 13 5.8a5 5 0 0 0-5-5Zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/></svg>',
    globe: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM6.2 1.6a12 12 0 0 0-1.4 3.6H2.3a6.5 6.5 0 0 1 3.9-3.6ZM1.6 6.7h2.9a15 15 0 0 0 0 2.6H1.6a6.6 6.6 0 0 1 0-2.6Zm.7 4.1h2.5a12 12 0 0 0 1.4 3.6 6.5 6.5 0 0 1-3.9-3.6Zm5.0 3.5a10 10 0 0 1-1.3-3.5h2.7a10 10 0 0 1-1.4 3.5Zm1.6-5H6.0a13 13 0 0 1 0-2.6h3.9a13 13 0 0 1 0 2.6ZM6.6 5.2A10 10 0 0 1 8 1.7a10 10 0 0 1 1.4 3.5H6.6Zm3.2 9.2a12 12 0 0 0 1.4-3.6h2.5a6.5 6.5 0 0 1-3.9 3.6Zm1.6-5.1a15 15 0 0 0 0-2.6h2.9a6.6 6.6 0 0 1 0 2.6h-2.9Zm-.2-3.9a12 12 0 0 0-1.4-3.6 6.5 6.5 0 0 1 3.9 3.6h-2.5Z"/></svg>',
    github:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.4 7.4 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>',
    link:  '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6.35 11.3a.75.75 0 0 1-.53-1.28l4.24-4.24a.75.75 0 1 1 1.06 1.06L6.88 11.08a.75.75 0 0 1-.53.22Z"/><path d="M4.4 14.5a3.6 3.6 0 0 1-2.55-6.15l2.12-2.12a.75.75 0 0 1 1.06 1.06L2.91 9.41A2.1 2.1 0 0 0 5.9 12.4l2.12-2.12a.75.75 0 0 1 1.06 1.06L6.95 13.45a3.58 3.58 0 0 1-2.55 1.05Z"/></svg>'
  };
  function icon(n) { return ICONS[n] || ICONS.link; }

  var strip = function (u) { return String(u).replace(/^https?:\/\//, "").replace(/\/$/, ""); };

  /* -- section ไหนไม่มีเนื้อหาก็ซ่อนทิ้ง เหมือนกติกาของเว็บหลัก ---------- */
  function toggle(sectionSel, hasContent) {
    var el = $(sectionSel);
    if (el) el.hidden = !hasContent;
  }

  /* ====================================================================== */
  /*  Render                                                                */
  /* ====================================================================== */
  function render(lang) {
    var d = CONTENT[lang];
    if (!d) return;
    var r = d.resume || {};
    var meta = CONTENT.meta || {};

    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);
    document.title = (meta.name || "") + " — " + (r.docTitle || "Resume");

    $$("[data-i18n]").forEach(function (el) {
      var v = pick(d, el.getAttribute("data-i18n"));
      if (typeof v === "string") el.textContent = v;
    });
    $$("[data-i18n-title]").forEach(function (el) {
      var v = pick(d, el.getAttribute("data-i18n-title"));
      if (typeof v === "string") el.title = v;
    });

    /* -- รูป -- */
    var photo = $("#photo");
    if (photo) {
      if (meta.photo) {
        photo.src = meta.photo;
        photo.alt = r.photoAlt || meta.name || "";
        // ถ้าไฟล์รูปหาย ให้ยุบกรอบทิ้งไปเลย ดีกว่าโชว์กรอบว่าง
        photo.onerror = function () { photo.closest(".photo").classList.add("is-off"); };
      } else {
        photo.closest(".photo").classList.add("is-off");
      }
    }

    /* -- ชื่อ: คำแรกหนา ที่เหลือบาง ตามแบบเรซูเม่ที่อ้างอิง -- */
    var parts = String(meta.name || "").trim().split(/\s+/);
    $("#name").innerHTML = parts.length > 1
      ? "<b>" + esc(parts[0]) + "</b> " + esc(parts.slice(1).join(" "))
      : "<b>" + esc(parts[0] || "") + "</b>";
    $("#role").textContent = (d.hero && d.hero.role) ? d.hero.role.replace(/\s*·\s*/g, " · ") : "";

    /* -- ติดต่อ -- */
    var rows = [];
    if (meta.phone)   rows.push({ i: "phone", t: meta.phone });
    if (meta.email)   rows.push({ i: "mail",  t: meta.email });
    if (r.location)   rows.push({ i: "pin",   t: r.location });
    if (meta.website) rows.push({ i: "globe", t: strip(meta.website) });
    (meta.links || []).forEach(function (l) {
      if (l.url) rows.push({ i: l.icon || "link", t: strip(l.url) });
    });
    $("#contactList").innerHTML = rows.map(function (x) {
      return "<li>" + icon(x.i) + "<span>" + esc(x.t) + "</span></li>";
    }).join("");
    toggle("#contactSec", rows.length > 0);

    /* -- การศึกษา -- */
    var edu = (d.education && d.education.items) || [];
    $("#eduList").innerHTML = edu.map(function (e) {
      return '<div class="edu">' +
        (e.period ? '<p class="edu__period">' + esc(e.period) + "</p>" : "") +
        '<p class="edu__degree">' + esc(e.degree) + "</p>" +
        '<p class="edu__place">' + esc(e.place) + "</p>" +
      "</div>";
    }).join("");
    toggle("#eduSec", edu.length > 0);

    /* -- ทักษะ -- */
    var groups = (d.skills && d.skills.groups) || [];
    $("#skillList").innerHTML = groups.map(function (g) {
      return '<div class="sk">' +
        '<p class="sk__name">' + esc(g.group) + "</p>" +
        '<p class="sk__items">' + esc((g.items || []).join(" · ")) + "</p>" +
      "</div>";
    }).join("");
    toggle("#skillSec", groups.length > 0);

    /* -- ภาษา -- */
    var langs = r.langList || [];
    $("#langList").innerHTML = langs.map(function (l) {
      return "<li>" + esc(l) + "</li>";
    }).join("");
    toggle("#langSec", langs.length > 0);

    /* -- โปรไฟล์ -- */
    var body = (d.about && d.about.body) || [];
    $("#profileBody").innerHTML = body.map(function (p) {
      return "<p>" + esc(p) + "</p>";
    }).join("");
    toggle("#profileSec", body.length > 0);

    /* -- ประสบการณ์ -- */
    var jobs = (d.experience && d.experience.items) || [];
    $("#expList").innerHTML = jobs.map(function (j) {
      return "<li>" +
        '<div class="job__top">' +
          '<span class="job__org">' + esc(j.org) + "</span>" +
          (j.period ? '<span class="job__period">' + esc(j.period) + "</span>" : "") +
        "</div>" +
        '<p class="job__role">' + esc(j.role) + "</p>" +
        // บนกระดาษหัวข้อย่อยอ่านง่ายกว่าย่อหน้ายาว ถ้ามี points ก็ใช้แทน desc ไปเลย
        // ส่วน desc ยังอยู่เพื่อให้ไทม์ไลน์บนเว็บหลักใช้ ไม่ได้ทิ้ง
        (j.points && j.points.length
          ? '<ul class="job__points">' + j.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>"
          : (j.desc ? '<p class="job__desc">' + esc(j.desc) + "</p>" : "")) +
        tags(j.tags) +
      "</li>";
    }).join("");
    toggle("#expSec", jobs.length > 0);

    /* -- วิธีทำงาน --
       ปิดท้ายคอลัมน์ขวา ผลงานไม่ได้อยู่ตรงนี้เพราะลิงก์อยู่ในคอลัมน์ซ้ายแล้ว */
    var how = r.howPoints || [];
    $("#howList").innerHTML = how.map(function (x) {
      return "<li>" + esc(x) + "</li>";
    }).join("");
    toggle("#howSec", how.length > 0);

    saveLang(lang);
  }

  /* ====================================================================== */
  /*  Start                                                                 */
  /* ====================================================================== */
  function init() {
    if (typeof CONTENT === "undefined") {
      console.error("content.js ไม่ได้ถูกโหลด หรือมี syntax error");
      return;
    }

    render(currentLang());

    $("#langBtn").addEventListener("click", function () {
      render(document.documentElement.getAttribute("data-lang") === "th" ? "en" : "th");
    });

    // ชื่อไฟล์ที่เบราว์เซอร์เสนอตอนเซฟมาจาก document.title
    var slug = String(CONTENT.meta.name || "resume").trim().replace(/\s+/g, "-");
    var saved;
    window.addEventListener("beforeprint", function () {
      saved = document.title;
      document.title = slug + "-Resume";
    });
    window.addEventListener("afterprint", function () {
      if (saved) document.title = saved;
    });

    $("#dlBtn").addEventListener("click", function () { window.print(); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
