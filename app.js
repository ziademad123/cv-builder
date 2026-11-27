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
    f2t:"قوالب لكل ذوق", f2d:"كلاسيك، مودرن، أنيق، وسايدبار — اختار الشكل اللي يناسب شغلك.",
    f3t:"عربي وإنجليزي", f3d:"اعمل سيرتك بالعربي أو بالإنجليزي بضغطة واحدة، والاتجاه بيتظبط لوحده.",
    f4t:"خصوصية كاملة", f4d:"بياناتك متتحفظش على أي سيرفر — كل حاجة بتفضل على جهازك إنت.",
    tplTitle:"اختار شكل سيرتك", tplSub:"4 قوالب مصممة بعناية. دوس على أي قالب وابدأ على طول.",
    howTitle:"إزاي بتشتغل؟", howSub:"3 خطوات بس وتبقى جاهز تقدم على أي شغلانة.",
    s1t:"اختار القالب", s1d:"شوف الأشكال الأربعة واختار اللي يعجبك.",
    s2t:"املا بياناتك", s2d:"خبراتك وتعليمك ومهاراتك — والمعاينة شغالة قدامك.",
    s3t:"حمل PDF", s3d:"دوس تحميل وخد سيرتك جاهزة للتقديم فورًا.",
    bandTitle:"جاهز تبهرهم بسيرتك؟", bandSub:"ابدأ دلوقتي — مجاني ومن غير تسجيل.", bandCta:"اعمل سيرتك الذاتية",
    footNote:"اتعمل بحب في مصر 🇪🇬 — بياناتك على جهازك بس.",
    useTpl:"استخدم القالب", toggle:"English",
    tplNames:{classic:"كلاسيك", modern:"مودرن", elegant:"أنيق", sidebar:"سايدبار"},
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
    f2t:"Templates for every taste", f2d:"Classic, Modern, Elegant and Sidebar — pick the look that fits your field.",
    f3t:"Arabic & English", f3d:"Build your CV in Arabic or English with one click, and the direction adjusts by itself.",
    f4t:"Full privacy", f4d:"Your data is never stored on any server — everything stays on your own device.",
    tplTitle:"Pick your CV style", tplSub:"4 carefully designed templates. Tap any one and start right away.",
    howTitle:"How it works", howSub:"3 simple steps and you are ready to apply anywhere.",
    s1t:"Pick a template", s1d:"Browse the four designs and choose your favorite.",
    s2t:"Fill in your details", s2d:"Experience, education and skills — with a live preview.",
    s3t:"Download PDF", s3d:"Hit download and get your CV ready to send instantly.",
    bandTitle:"Ready to impress them?", bandSub:"Start now — free, no sign-up.", bandCta:"Build your CV",
    footNote:"Made with love in Egypt 🇪🇬 — your data stays on your device.",
    useTpl:"Use this template", toggle:"العربية",
    tplNames:{classic:"Classic", modern:"Modern", elegant:"Elegant", sidebar:"Sidebar"},
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

function miniCV(tpl){
  const S = SAMPLE, ar = ui === "ar";
  const L = ar ? {exp:"الخبرات", edu:"التعليم", skills:"المهارات", langs:"اللغات", sum:"نبذة"} : {exp:"Experience", edu:"Education", skills:"Skills", langs:"Languages", sum:"Summary"};
  const contact = [S.email, S.phone, S.city].map(x=>`<span>${esc(x)}</span>`).join("");
  const head = `<h1>${esc(S.name)}</h1><div class="ttl">${esc(S.title)}</div><div class="contact">${contact}</div>`;
  const secs = `<h3>${L.sum}</h3><p>${esc(S.summary)}</p><h3>${L.exp}</h3>${entries(S.exp)}<h3>${L.edu}</h3>${entries(S.edu)}<h3>${L.skills}</h3><div class="tags">${tags(S.skills)}</div>`;
  let inner;
  if (tpl === "modern") inner = `<div class="head">${head}</div><div class="body">${secs}</div>`;
  else if (tpl === "sidebar") inner = `<div class="side"><h1>${esc(S.name)}</h1><div class="ttl">${esc(S.title)}</div><div class="contact">${contact}</div><h3>${L.skills}</h3><div class="tags">${tags(S.skills)}</div><h3>${L.langs}</h3><div class="tags">${tags(S.langs)}</div></div><div class="main"><h3>${L.sum}</h3><p>${esc(S.summary)}</p><h3>${L.exp}</h3>${entries(S.exp)}<h3>${L.edu}</h3>${entries(S.edu)}</div>`;
  else inner = head + secs;
  return `<div class="cv ${tpl}" dir="${ar?"rtl":"ltr"}">${inner}</div>`;
}

function renderGallery(){
  const grid = $("tplGrid"); if (!grid) return;
  grid.innerHTML = "";
  ["classic","modern","elegant","sidebar"].forEach(tpl => {
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
