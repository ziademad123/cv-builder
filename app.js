/* سيرتي v2 - الصفحة الرئيسية */
const C = window.CV_CONFIG || {};
const $ = id => document.getElementById(id);

const UI = {
  ar: {
    brand:"سيرتي", navHome:"الرئيسية", navTemplates:"القوالب", navBuilder:"اعمل سيرتك", navContact:"اتصل بينا", navCta:"ابدأ مجانًا",
    badge:"مجاني وسريع — من غير تسجيل",
    heroTitle:'اعمل سيرة ذاتية <span class="grad">تفتحلك أبواب الشغل</span> في دقيقتين',
    heroSub:"اختار قالب يعجبك، املا بياناتك، وحمل PDF جاهز تبعته لأي شركة. بالعربي أو بالإنجليزي، وبياناتك بتفضل على جهازك إنت بس.",
    ctaStart:"ابدأ سيرتك دلوقتي", ctaSee:"شوف القوالب",
    statTpl:"قوالب احترافية", statLang:"لغتين للسيرة", statFree:"مجاني للتجربة",
    featTitle:"ليه تختار سيرتي؟", featSub:"كل اللي محتاجه عشان تطلع بسيرة ذاتية شيك ومرتبة من غير مصاريف ولا برامج.",
    f1t:"جاهزة في دقيقتين", f1d:"املا البيانات والمعاينة بتتحدث قدامك على طول، ومن غير ما تعمل حساب.",
    f2t:"قوالب لكل ذوق", f2d:"8 أشكال من الكلاسيك للمبتكر، ومع كل قالب ألوان تختارها بنفسك.",
    f3t:"عربي وإنجليزي", f3d:"اعمل سيرتك بالعربي أو بالإنجليزي بضغطة واحدة، والاتجاه بيتظبط لوحده.",
    f4t:"خصوصية كاملة", f4d:"بياناتك متتحفظش على أي سيرفر — كل حاجة بتفضل على جهازك إنت.",
    tplTitle:"اختار شكل سيرتك", tplSub:"8 قوالب مصممة بعناية وبألوان تختارها بنفسك. دوس على أي قالب وابدأ على طول.",
    howTitle:"إزاي بتشتغل؟", howSub:"3 خطوات بس وتبقى جاهز تقدم على أي شغلانة.",
    s1t:"اختار القالب", s1d:"شوف الأشكال الأربعة واختار اللي يعجبك.",
    s2t:"املا بياناتك", s2d:"خبراتك وتعليمك ومهاراتك — والمعاينة شغالة قدامك.",
    s3t:"حمل PDF", s3d:"دوس تحميل وخد سيرتك جاهزة للتقديم فورًا.",
    bandTitle:"جاهز تبهرهم بسيرتك؟", bandSub:"ابدأ دلوقتي — مجاني ومن غير تسجيل.", bandCta:"اعمل سيرتك الذاتية",
    footNote:"اتعمل بحب في مصر 🇪🇬 — بياناتك على جهازك بس.",
    useTpl:"استخدم القالب", toggle:"English",
    tplNames:{classic:"كلاسيك", modern:"مودرن", elegant:"أنيق", sidebar:"سايدبار", minimal:"بسيط", executive:"تنفيذي", creative:"مبتكر", compact:"مضغوط"},
    smpTitle:"سير اتعملت بسيرتي", smpSub:"أمثلة لسير ذاتية معمولة بالموقع — كل البيانات تجريبية للعرض بس.",
    sampleBadge:"بيانات تجريبية",
    title:"سيرتي | اعمل سيرة ذاتية احترافية بالعربي والإنجليزي مجانًا"
  },
  en: {
    brand:"My CV", navHome:"Home", navTemplates:"Templates", navBuilder:"Build your CV", navContact:"Contact us", navCta:"Start free",
    badge:"Free & fast — no sign-up",
    heroTitle:'Build a CV that <span class="grad">opens doors</span> in 2 minutes',
    heroSub:"Pick a template you like, fill in your details, and download a PDF ready to send to any company. In Arabic or English, and your data stays on your device only.",
    ctaStart:"Start your CV now", ctaSee:"See templates",
    statTpl:"Pro templates", statLang:"CV languages", statFree:"Free to try",
    featTitle:"Why choose us?", featSub:"Everything you need to walk away with a clean, polished CV. No fees, no software.",
    f1t:"Ready in 2 minutes", f1d:"Fill in your details and the preview updates live in front of you — no account needed.",
    f2t:"Templates for every taste", f2d:"8 designs from classic to creative, each with colors you pick yourself.",
    f3t:"Arabic & English", f3d:"Build your CV in Arabic or English with one click, and the direction adjusts by itself.",
    f4t:"Full privacy", f4d:"Your data is never stored on any server — everything stays on your own device.",
    tplTitle:"Pick your CV style", tplSub:"8 carefully designed templates, with colors you pick yourself. Tap any one and start right away.",
    howTitle:"How it works", howSub:"3 simple steps and you are ready to apply anywhere.",
    s1t:"Pick a template", s1d:"Browse the four designs and choose your favorite.",
    s2t:"Fill in your details", s2d:"Experience, education and skills — with a live preview.",
    s3t:"Download PDF", s3d:"Hit download and get your CV ready to send instantly.",
    bandTitle:"Ready to impress them?", bandSub:"Start now — free, no sign-up.", bandCta:"Build your CV",
    footNote:"Made with love in Egypt 🇪🇬 — your data stays on your device.",
    useTpl:"Use this template", toggle:"العربية",
    tplNames:{classic:"Classic", modern:"Modern", elegant:"Elegant", sidebar:"Sidebar", minimal:"Minimal", executive:"Executive", creative:"Creative", compact:"Compact"},
    smpTitle:"CVs made with My CV", smpSub:"Real-looking examples built with the site — all data is fictional, for display only.",
    sampleBadge:"Sample data",
    title:"My CV | Free professional Arabic & English CV builder"
  }
};

/* لغة الواجهة: ?ui=en في اللينك، أو آخر اختيار محفوظ */
let ui = new URLSearchParams(location.search).get("ui") || localStorage.getItem("ui") || "ar";
if (ui !== "en") ui = "ar";

function applyUI(){
  document.documentElement.lang = ui;
  document.documentElement.dir = ui === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-t]").forEach(e => { e.textContent = UI[ui][e.dataset.t] || e.textContent; });
  document.querySelectorAll("[data-t-html]").forEach(e => { e.innerHTML = UI[ui][e.dataset.tHtml] || e.innerHTML; });
  const tg = $("uiToggle"); if (tg) tg.textContent = UI[ui].toggle;
  document.title = UI[ui].title;
  renderGallery();
  renderSamples();
}

/* معاينات مصغرة للقوالب */
const SAMPLE = {
  name:"أحمد محمد", title:"مهندس برمجيات",
  email:"ahmed@example.com", phone:"+20 100 000 0000", city:"القاهرة، مصر",
  summary:"مهندس برمجيات بخبرة 3 سنين في بناء تطبيقات الويب.",
  exp:[{a:"مطور ويب", b:"شركة المستقبل", c:"2023 - الآن", d:"بناء وصيانة مواقع وتطبيقات ويب."}],
  edu:[{a:"بكالوريوس هندسة حاسبات", b:"جامعة القاهرة", c:"2018 - 2023", d:""}],
  skills:"JavaScript, React, SQL", langs:"العربية, English"
};
const esc = s => String(s||"").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const tags = s => String(s||"").split(/[,،]/).map(x=>x.trim()).filter(Boolean).map(x=>`<span>${esc(x)}</span>`).join("");
const entries = a => a.filter(e=>e.a||e.b).map(e=>`<div class="entry"><b>${esc(e.a)}</b>${e.b?" , "+esc(e.b):""}<div class="meta">${esc(e.c)}</div><p>${esc(e.d)}</p></div>`).join("");

const PEOPLE = {
  ar: [
    {tpl:"modern", avatar:"a1", chip:"مودرن", name:"سارة أحمد", title:"مصممة جرافيك", email:"sara@example.com", phone:"+20 111 000 0000", city:"الجيزة، مصر", summary:"مصممة جرافيك بخبرة 4 سنين في الهوية البصرية وموشن جرافيك.", exp:[{a:"مصممة أولى", b:"استوديو إبداع", c:"2022 - الآن", d:"تصميم هويات بصرية لأكتر من 30 براند."}], edu:[{a:"بكالوريوس فنون جميلة", b:"جامعة حلوان", c:"2017 - 2021", d:""}], skills:"Photoshop, Illustrator, Figma", langs:"العربية, English"},
    {tpl:"classic", avatar:"a2", chip:"كلاسيك", name:"محمود حسن", title:"محاسب", email:"mahmoud@example.com", phone:"+20 122 000 0000", city:"الإسكندرية، مصر", summary:"محاسب بخبرة 5 سنين في الحسابات العامة والضرائب.", exp:[{a:"محاسب أول", b:"شركة النيل للتجارة", c:"2021 - الآن", d:"إدارة الحسابات الشهرية وإعداد التقارير المالية."}], edu:[{a:"بكالوريوس تجارة", b:"جامعة الإسكندرية", c:"2015 - 2019", d:""}], skills:"Excel, SAP, التحليل المالي", langs:"العربية, English"},
    {tpl:"sidebar", avatar:"a3", chip:"سايدبار", name:"منى خالد", title:"مهندسة برمجيات", email:"mona@example.com", phone:"+20 100 000 0000", city:"القاهرة، مصر", summary:"مهندسة برمجيات بخبرة 3 سنين في تطبيقات الموبايل.", exp:[{a:"مطورة Flutter", b:"تك بوينت", c:"2023 - الآن", d:"تطوير تطبيقات موبايل بأكتر من 100 ألف مستخدم."}], edu:[{a:"بكالوريوس علوم حاسب", b:"جامعة عين شمس", c:"2018 - 2022", d:""}], skills:"Flutter, Dart, Firebase", langs:"العربية, English"}
  ],
  en: [
    {tpl:"modern", avatar:"a1", chip:"Modern", name:"Sara Ahmed", title:"Graphic Designer", email:"sara@example.com", phone:"+20 111 000 0000", city:"Giza, Egypt", summary:"Graphic designer with 4 years in branding and motion graphics.", exp:[{a:"Senior Designer", b:"Ibdaa Studio", c:"2022 - Present", d:"Designed brand identities for 30+ brands."}], edu:[{a:"BFA, Fine Arts", b:"Helwan University", c:"2017 - 2021", d:""}], skills:"Photoshop, Illustrator, Figma", langs:"Arabic, English"},
    {tpl:"classic", avatar:"a2", chip:"Classic", name:"Mahmoud Hassan", title:"Accountant", email:"mahmoud@example.com", phone:"+20 122 000 0000", city:"Alexandria, Egypt", summary:"Accountant with 5 years in general ledger and tax.", exp:[{a:"Senior Accountant", b:"Nile Trading Co.", c:"2021 - Present", d:"Own monthly books and financial reporting."}], edu:[{a:"B.Com, Accounting", b:"Alexandria University", c:"2015 - 2019", d:""}], skills:"Excel, SAP, Financial analysis", langs:"Arabic, English"},
    {tpl:"sidebar", avatar:"a3", chip:"Sidebar", name:"Mona Khaled", title:"Software Engineer", email:"mona@example.com", phone:"+20 100 000 0000", city:"Cairo, Egypt", summary:"Software engineer with 3 years in mobile apps.", exp:[{a:"Flutter Developer", b:"TechPoint", c:"2023 - Present", d:"Shipped apps with 100k+ users."}], edu:[{a:"B.Sc. Computer Science", b:"Ain Shams University", c:"2018 - 2022", d:""}], skills:"Flutter, Dart, Firebase", langs:"Arabic, English"}
  ]
};

function miniCV(tpl, person){
  const S = person || SAMPLE, ar = ui === "ar";
  const L = ar ? {exp:"الخبرات", edu:"التعليم", skills:"المهارات", langs:"اللغات", sum:"نبذة"} : {exp:"Experience", edu:"Education", skills:"Skills", langs:"Languages", sum:"Summary"};
  const contact = [S.email, S.phone, S.city].map(x=>`<span>${esc(x)}</span>`).join("");
  const head = `<h1>${esc(S.name)}</h1><div class="ttl">${esc(S.title)}</div><div class="contact">${contact}</div>`;
  const secs = `<h3>${L.sum}</h3><p>${esc(S.summary)}</p><h3>${L.exp}</h3>${entries(S.exp)}<h3>${L.edu}</h3>${entries(S.edu)}<h3>${L.skills}</h3><div class="tags">${tags(S.skills)}</div>`;
  const w = S.name.trim().split(/\s+/);
  const ini = (((w[0] || "?")[0]) + ((w[1] || "")[0] || "")).toUpperCase();
  const photo = `<span class="ph ini">${esc(ini)}</span>`;
  const headrow = `<div class="headrow">${photo}<div class="htxt">${head}</div></div>`;
  let inner;
  if (tpl === "modern" || tpl === "creative") inner = `<div class="head">${photo}<div class="htxt">${head}</div></div><div class="body">${secs}</div>`;
  else if (tpl === "elegant") inner = photo + head + secs;
  else if (tpl === "sidebar" || tpl === "executive") inner = `<div class="side">${photo}<h1>${esc(S.name)}</h1><div class="ttl">${esc(S.title)}</div><div class="contact">${contact}</div><h3>${L.skills}</h3><div class="tags">${tags(S.skills)}</div><h3>${L.langs}</h3><div class="tags">${tags(S.langs)}</div></div><div class="main"><h3>${L.sum}</h3><p>${esc(S.summary)}</p><h3>${L.exp}</h3>${entries(S.exp)}<h3>${L.edu}</h3>${entries(S.edu)}</div>`;
  else if (tpl === "minimal" || tpl === "compact") inner = headrow + secs;
  else inner = head + secs;
  return `<div class="cv ${tpl}" dir="${ar?"rtl":"ltr"}">${inner}</div>`;
}

function renderSamples(){
  const grid = $("samplesGrid"); if (!grid) return;
  grid.innerHTML = "";
  PEOPLE[ui].forEach(p => {
    const ini = p.name.trim().split(/\s+/).map(x => x[0]).slice(0, 2).join("").toUpperCase();
    const card = document.createElement("div");
    card.className = "sample-card reveal in";
    card.innerHTML = `<div class="tpl-thumb">${miniCV(p.tpl, p)}</div>
      <div class="sample-person"><span class="avatar ${p.avatar}">${esc(ini)}</span>
      <span><b>${esc(p.name)}</b><small>${esc(p.title)}</small></span>
      <span class="chip">${UI[ui].sampleBadge}</span></div>`;
    grid.appendChild(card);
  });
}

function renderGallery(){
  const grid = $("tplGrid"); if (!grid) return;
  grid.innerHTML = "";
  Object.keys(UI.ar.tplNames).forEach(tpl => {
    const card = document.createElement("div");
    card.className = "tpl-card reveal in";
    card.innerHTML = `<div class="tpl-thumb">${miniCV(tpl)}</div>
      <div class="tpl-info"><b>${UI[ui].tplNames[tpl]}</b>
      <a class="btn btn-primary" href="builder.html?tpl=${tpl}">${UI[ui].useTpl}</a></div>`;
    grid.appendChild(card);
  });
}

/* حركات الظهور مع التمرير */
function setupReveal(){
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }), {threshold:.12});
  document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
}

/* عدادات الأرقام في الهيرو */
function setupCounters(){
  document.querySelectorAll("[data-count]").forEach(el => {
    const end = +el.dataset.count, suffix = el.dataset.suffix || "";
    const t0 = performance.now(), dur = 1400;
    const tick = t => {
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(end * e) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

$("uiToggle").onclick = () => { ui = ui === "ar" ? "en" : "ar"; localStorage.setItem("ui", ui); applyUI(); setupReveal(); };

applyUI();
setupReveal();
setupCounters();
