/* سيرتي v2 - صفحة بناء السيرة الذاتية */
const C = window.CV_CONFIG || {};
const $ = id => document.getElementById(id);

const UI = {
  ar: {
    brand:"سيرتي", navHome:"الرئيسية", navTemplates:"القوالب", navContact:"اتصل بينا",
    h1:"اعمل سيرتك الذاتية", hint:"املا البيانات والمعاينة بتتحدث على طول. بياناتك محفوظة على جهازك بس.",
    cvAr:"السيرة: بالعربي", cvEn:"السيرة: بالإنجليزي", download:"تحميل PDF",
    name:"الاسم الكامل", title:"المسمى الوظيفي", email:"البريد الإلكتروني", phone:"الموبايل", city:"المدينة",
    summary:"نبذة عنك", exp:"الخبرات", addExp:"+ أضف خبرة", edu:"التعليم", addEdu:"+ أضف مؤهل",
    skillsT:"المهارات واللغات", skills:"المهارات (افصل بينها بفاصلة)", langs:"اللغات (افصل بينها بفاصلة)",
    proTitle:"تحميل بدون علامة مائية", unlock:"فعّل", buy:"اطلب كود", reset:"مسح البيانات", backHome:"رجوع للرئيسية",
    role:"الوظيفة", company:"الشركة", period:"الفترة", desc:"الوصف", degree:"المؤهل", school:"الجامعة / المدرسة",
    remove:"حذف", ok:"تم التفعيل ✔", bad:"الكود غير صحيح",
    previewNote:"معاينة مباشرة — هتطبع بالشكل ده بالظبط",
    footNote:"اتعمل بحب في مصر 🇪🇬 — بياناتك على جهازك بس.",
    toggle:"English", tplNames:{classic:"كلاسيك", modern:"مودرن", elegant:"أنيق", sidebar:"سايدبار"},
    pageTitle:"اعمل سيرتك | سيرتي"
  },
  en: {
    brand:"My CV", navHome:"Home", navTemplates:"Templates", navContact:"Contact us",
    h1:"Build your CV", hint:"Fill in the form and the preview updates live. Your data stays on your device.",
    cvAr:"CV: Arabic", cvEn:"CV: English", download:"Download PDF",
    name:"Full name", title:"Job title", email:"Email", phone:"Phone", city:"City",
    summary:"Summary", exp:"Experience", addExp:"+ Add experience", edu:"Education", addEdu:"+ Add education",
    skillsT:"Skills & languages", skills:"Skills (comma separated)", langs:"Languages (comma separated)",
    proTitle:"Download without watermark", unlock:"Unlock", buy:"Get a code", reset:"Clear data", backHome:"Back to home",
    role:"Role", company:"Company", period:"Period", desc:"Description", degree:"Degree", school:"School / University",
    remove:"Remove", ok:"Unlocked ✔", bad:"Invalid code",
    previewNote:"Live preview — it prints exactly like this",
    footNote:"Made with love in Egypt 🇪🇬 — your data stays on your device.",
    toggle:"العربية", tplNames:{classic:"Classic", modern:"Modern", elegant:"Elegant", sidebar:"Sidebar"},
    pageTitle:"Build your CV | My CV"
  }
};
const CVL = {
  ar:{exp:"الخبرات", edu:"التعليم", skills:"المهارات", langs:"اللغات", sum:"نبذة"},
  en:{exp:"Experience", edu:"Education", skills:"Skills", langs:"Languages", sum:"Summary"}
};
const SAMPLE = {
  name:"أحمد محمد", title:"مهندس برمجيات", email:"ahmed@example.com", phone:"+20 100 000 0000", city:"القاهرة، مصر",
  summary:"مهندس برمجيات بخبرة 3 سنين في بناء تطبيقات الويب. بحب حل المشاكل والتعلم المستمر.",
  exp:[{a:"مطور ويب", b:"شركة المستقبل", c:"2023 - الآن", d:"بناء وصيانة مواقع وتطبيقات ويب.\nتحسين سرعة الصفحات بنسبة 40%."}],
  edu:[{a:"بكالوريوس هندسة حاسبات", b:"جامعة القاهرة", c:"2018 - 2023", d:""}],
  skills:"JavaScript, React, SQL, Git", langs:"العربية, English", tpl:"classic", cvlang:"ar"
};
const BLANK = {name:"", title:"", email:"", phone:"", city:"", summary:"", exp:[{a:"",b:"",c:"",d:""}], edu:[{a:"",b:"",c:"",d:""}], skills:"", langs:"", tpl:"classic", cvlang:"ar"};

let S = JSON.parse(localStorage.getItem("cv") || "null") || JSON.parse(JSON.stringify(SAMPLE));
if (!UI.ar.tplNames[S.tpl]) S.tpl = "classic";
const qsTpl = new URLSearchParams(location.search).get("tpl");
if (qsTpl && UI.ar.tplNames[qsTpl]) S.tpl = qsTpl;
let ui = new URLSearchParams(location.search).get("ui") || localStorage.getItem("ui") || "ar";
if (ui !== "en") ui = "ar";
let pro = localStorage.getItem("pro") === "1";

const esc = s => String(s||"").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

function items(key, list, labels){
  const el = $(list); el.innerHTML = "";
  S[key].forEach((it, i) => {
    const d = document.createElement("div"); d.className = "item";
    d.innerHTML = ["a","b","c","d"].map((f, j) =>
      `<label><span>${UI[ui][labels[j]]}</span>${f === "d"
        ? `<textarea rows="2" data-k="${key}" data-i="${i}" data-f="${f}">${esc(it[f])}</textarea>`
        : `<input data-k="${key}" data-i="${i}" data-f="${f}" value="${esc(it[f])}">`}</label>`
    ).join("") + `<button class="rm" data-rm="${key}" data-i="${i}">${UI[ui].remove}</button>`;
    el.appendChild(d);
  });
}

function renderPills(){
  const el = $("tplPills"); el.innerHTML = "";
  Object.keys(UI.ar.tplNames).forEach(t => {
    const b = document.createElement("button");
    b.textContent = UI[ui].tplNames[t];
    b.className = t === S.tpl ? "on" : "";
    b.onclick = () => { S.tpl = t; renderPills(); render(); };
    el.appendChild(b);
  });
}

function renderForm(){
  ["name","title","email","phone","city","summary","skills","langs"].forEach(k => $(k).value = S[k] || "");
  $("cvlang").value = S.cvlang;
  items("exp", "expList", ["role","company","period","desc"]);
  items("edu", "eduList", ["degree","school","period","desc"]);
}

function applyUI(){
  document.documentElement.lang = ui;
  document.documentElement.dir = ui === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-t]").forEach(e => { e.textContent = UI[ui][e.dataset.t] || e.textContent; });
  $("uiToggle").textContent = UI[ui].toggle;
  $("buy").href = C.buyLink || "#";
  document.title = UI[ui].pageTitle;
  renderPills(); renderForm();
}

const tags = s => String(s||"").split(/[,،]/).map(x=>x.trim()).filter(Boolean).map(x=>`<span>${esc(x)}</span>`).join("");
const entries = a => a.filter(e=>e.a||e.b).map(e=>`<div class="entry"><b>${esc(e.a)}</b>${e.b?" , "+esc(e.b):""}<div class="meta">${esc(e.c)}</div><p>${esc(e.d)}</p></div>`).join("");

function render(){
  const L = CVL[S.cvlang], cv = $("cv");
  cv.className = "cv " + S.tpl;
  cv.dir = S.cvlang === "ar" ? "rtl" : "ltr";
  cv.lang = S.cvlang;
  const contact = [S.email, S.phone, S.city].filter(Boolean).map(x=>`<span>${esc(x)}</span>`).join("");
  const head = `<h1>${esc(S.name)}</h1><div class="ttl">${esc(S.title)}</div><div class="contact">${contact}</div>`;
  const sSum = S.summary ? `<h3>${L.sum}</h3><p>${esc(S.summary)}</p>` : "";
  const sExp = entries(S.exp) ? `<h3>${L.exp}</h3>${entries(S.exp)}` : "";
  const sEdu = entries(S.edu) ? `<h3>${L.edu}</h3>${entries(S.edu)}` : "";
  const sSk = tags(S.skills) ? `<h3>${L.skills}</h3><div class="tags">${tags(S.skills)}</div>` : "";
  const sLa = tags(S.langs) ? `<h3>${L.langs}</h3><div class="tags">${tags(S.langs)}</div>` : "";
  let inner;
  if (S.tpl === "modern") inner = `<div class="head">${head}</div><div class="body">${sSum}${sExp}${sEdu}${sSk}${sLa}</div>`;
  else if (S.tpl === "sidebar") inner = `<div class="side"><h1>${esc(S.name)}</h1><div class="ttl">${esc(S.title)}</div><div class="contact">${contact}</div>${sSk}${sLa}</div><div class="main">${sSum}${sExp}${sEdu}</div>`;
  else inner = head + sSum + sExp + sEdu + sSk + sLa;
  const wm = pro ? "" : `<div class="wm">${S.cvlang === "ar" ? "سيرتي<br>نسخة مجانية" : "My CV<br>Free version"}</div>`;
  cv.innerHTML = inner + wm;
  cv.classList.add("flick");
  clearTimeout(render._t);
  render._t = setTimeout(() => cv.classList.remove("flick"), 180);
  localStorage.setItem("cv", JSON.stringify(S));
}

document.addEventListener("input", e => {
  const t = e.target;
  if (t.dataset.k) S[t.dataset.k][t.dataset.i][t.dataset.f] = t.value;
  else if (t.id && (t.id in S)) S[t.id] = t.value;
  else return;
  render();
});
$("cvlang").onchange = e => { S.cvlang = e.target.value; render(); };
document.addEventListener("click", e => {
  const r = e.target.dataset && e.target.dataset.rm;
  if (r) { S[r].splice(+e.target.dataset.i, 1); renderForm(); render(); }
});
$("addExp").onclick = () => { S.exp.push({a:"",b:"",c:"",d:""}); renderForm(); };
$("addEdu").onclick = () => { S.edu.push({a:"",b:"",c:"",d:""}); renderForm(); };
$("print").onclick = () => window.print();
$("unlock").onclick = () => {
  if ((C.unlockCodes || []).includes($("code").value.trim())) {
    pro = true; localStorage.setItem("pro", "1"); $("proMsg").textContent = UI[ui].ok;
  } else $("proMsg").textContent = UI[ui].bad;
  render();
};
$("uiToggle").onclick = () => { ui = ui === "ar" ? "en" : "ar"; localStorage.setItem("ui", ui); applyUI(); };
$("reset").onclick = () => {
  localStorage.removeItem("cv");
  S = JSON.parse(JSON.stringify(BLANK));
  renderPills(); renderForm(); render();
};

applyUI();
render();
