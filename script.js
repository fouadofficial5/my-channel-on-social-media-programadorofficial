/* 1) ضع روابطك هنا.
   - املأ الروابط التي تريدها.
   - اترك "" لإخفاء أي منصة.
*/
const LINKS = {
  tiktok: "https://www.tiktok.com/@programadorofficial?is_from_webapp=1&sender_device=pc",            // ✅ TikTok (أنت وفّرته)
  facebook: "https://www.facebook.com/programadorofficial",       // ✅ Facebook (أنت وفّرته)
  youtube: "https://www.youtube.com/@programadorofficial1",       // ← ضع رابط قناتك على YouTube هنا
  x: "",             // ← ضع رابط حساب X (Twitter) هنا
  instagram: "https://www.instagram.com/programadorofficial/",     // ← ضع رابط إنستغرام
  whatsapp: "https://wa.me/212642138756",      // ← مثال: https://wa.me/2126XXXXXXXX
  snapchat: "",      // ← رابط سناب شات
  telegram: "",      // ← مثال: https://t.me/username
  discord: ""        // ← مثال: https://discord.gg/yourInvite
};

/* 2) اختياري: غيّر الاسم، الوصف، والصورة */
document.getElementById("displayName").textContent = "Programador | Bio Websites";
document.getElementById("tagline").textContent = "@programadorofficial • Creator";
// لتغيير الصورة: أزل التعليق وضع رابطك
// document.getElementById("avatar").src = "https://YOUR-IMAGE-URL.jpg";

/* ——— SVG ICONS (تعريف الدوال قبل الاستخدام) ——— */
function tiktokSVG(){ return `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
<path d="M20 8.7a7.2 7.2 0 0 1-4-1.1v6.2c0 3.9-3.1 7.1-7 7.2A7.2 7.2 0 0 1 1.8 13a7.2 7.2 0 0 1 11.7-5.5v3.5A3.7 3.7 0 1 0 8.3 15c2 0 3.6-1.6 3.6-3.6V1.8h3.5a7.1 7.1 0 0 0 4 4v2.9z"/>
</svg>`;}
function facebookSVG(){ return `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
<path d="M13.4 22v-8h2.7l.4-3.1h-3.1V8.4c0-.9.3-1.6 1.6-1.6h1.7V4a22 22 0 0 0-2.4-.2c-2.4 0-4 1.5-4 4.2v2.4H8.2V14h2.9v8h2.3z"/>
</svg>`;}
function youtubeSVG(){ return `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
<path d="M23 7.1a3.8 3.8 0 0 0-2.7-2.7C18.4 4 12 4 12 4s-6.4 0-8.3.4A3.8 3.8 0 0 0 1 7.1 40 40 0 0 0 .6 12 40 40 0 0 0 1 16.9a3.8 3.8 0 0 0 2.7 2.7C5.6 20 12 20 12 20s6.4 0 8.3-.4a3.8 3.8 0 0 0 2.7-2.7A40 40 0 0 0 23.4 12 40 40 0 0 0 23 7.1zM9.8 15V9l6 3-6 3z"/>
</svg>`;}
function xSVG(){ return `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
<path d="M18.9 2H22l-7 8.1L23.4 22H16l-5-6.4L5 22H2l7.5-8.7L.9 2H8l4.6 6L18.9 2zM16.9 20h1.9L7.2 4H5.2l11.7 16z"/>
</svg>`;}
function instaSVG(){ return `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
<path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.8A6.2 6.2 0 1 0 18.2 14 6.2 6.2 0 0 0 12 7.8zm0 10.1A3.9 3.9 0 1 1 15.9 14 3.9 3.9 0 0 1 12 17.9zm6.3-10.9a1.4 1.4 0 1 0-1.4-1.4 1.4 1.4 0 0 0 1.4 1.4z"/>
</svg>`;}
function waSVG(){ return `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
<path d="M20.5 3.5A11.3 11.3 0 0 0 2.6 18.4L2 22l3.7-1.2A11.3 11.3 0 0 0 12 23.3 11.3 11.3 0 0 0 20.5 3.5zM12 20.9a8.8 8.8 0 0 1-4.5-1.2l-.3-.2-2.6.9.9-2.5-.2-.3a8.8 8.8 0 1 1 6.7 3.3zm5.1-6.5c-.3-.2-1.7-.8-1.9-.9s-.4-.1-.6.1l-.8 1c-.2.2-.4.2-.6.1a7.2 7.2 0 0 1-2.4-1.5 7.2 7.2 0 0 1-1.5-2.4c-.1-.2 0-.4.1-.6l1-1c.2-.2.2-.4.1-.6s-.7-1.6-.9-1.9c-.2-.3-.4-.3-.6-.3h-.5c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 3s1.2 3.5 1.4 3.7 2.4 3.5 5.8 4.9c.8.4 1.5.5 2 .5.8 0 1.6-.4 1.8-.9s.2-1.1.1-1.2-.2-.2-.5-.3z"/>
</svg>`;}
function snapSVG(){ return `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
<path d="M12 2c3.1 0 5.5 2.7 5.5 6 0 1.6-.5 3.1-1.3 4 .5 1.6 1.6 2.7 3.3 3v1.8c-1.6.3-2.7 1-3.2 1.6a3.6 3.6 0 0 1-2.5 1c-.8 0-1.5-.2-2-.5a4.2 4.2 0 0 1-2 .5 3.6 3.6 0 0 1-2.5-1c-.5-.6-1.6-1.3-3.2-1.6v-1.8c1.7-.3 2.8-1.4 3.3-3-.8-.9-1.3-2.4-1.3-4C6.5 4.7 8.9 2 12 2z"/>
</svg>`;}
function tgSVG(){ return `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
<path d="M21.5 3.5 2.9 11.2c-1.3.5-1.3 1.2-.2 1.5l4.7 1.5 1.8 5.7c.2.5.4.7.8.7.3 0 .5-.1.7-.3l2.6-2.5 4.8 3.6c.9.5 1.6.2 1.8-.8L23.9 5c.3-1-.4-1.5-1.4-1.5zM8.7 13.8l8.6-5.3c.4-.3.8-.1.5.2l-7.3 6.6-.3 3.1-1.5-4.6z"/>
</svg>`;}
function discSVG(){ return `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
<path d="M19.2 4.7a16 16 0 0 0-3.9-1.2l-.2.5a14 14 0 0 1 3.6 1.3c-1.6-.8-3.3-1.1-5-1.1s-3.4.3-5 1.1a13.6 13.6 0 0 1 3.6-1.3l-.2-.5a15.5 15.5 0 0 0-3.9 1.2C5 7 4 9.7 4 12.5c0 0 1.1 1.9 4.1 2l.9-1.3c-2.1-.7-2.9-2.1-2.9-2.1s.2.1.7.3c.1 0 .1 0 .2.1l.1.1c.7.3 1.5.5 2.3.7 1.2.3 2.5.5 3.9.5s2.7-.2 3.9-.5c.8-.2 1.6-.4 2.3-.7l.1-.1.2-.1.7-.3s-.7 1.4-2.9 2.1l.9 1.3c3-.1 4.1-2 4.1-2 0-2.8-1-5.5-2.8-7.8zM9.7 13.8a1.4 1.4 0 1 1-1.4-1.4 1.4 1.4 0 0 1 1.4 1.4zm6 0a1.4 1.4 0 1 1-1.4-1.4 1.4 1.4 0 0 1 1.4 1.4z"/>
</svg>`;}

/* 3) بيانات المنصات: اسم+ألوان+دالة الأيقونة */
const PLATFORMS = {
  tiktok:   { label: "TikTok",      c1:"#ff0050", c2:"#00f2ea", svg: tiktokSVG },
  facebook: { label: "Facebook",    c1:"#1877F2", c2:"#4aa3ff", svg: facebookSVG },
  youtube:  { label: "YouTube",     c1:"#ff2d2d", c2:"#ff7a7a", svg: youtubeSVG },
  x:        { label: "X (Twitter)", c1:"#0f0f10", c2:"#3a3a3a", svg: xSVG },
  instagram:{ label: "Instagram",   c1:"#F56040", c2:"#833AB4", svg: instaSVG },
  whatsapp: { label: "WhatsApp",    c1:"#25D366", c2:"#5BE881", svg: waSVG },
  snapchat: { label: "Snapchat",    c1:"#FFFC00", c2:"#FFD400", svg: snapSVG },
  telegram: { label: "Telegram",    c1:"#2AABEE", c2:"#229ED9", svg: tgSVG },
  discord:  { label: "Discord",     c1:"#5865F2", c2:"#8EA1E1", svg: discSVG }
};

/* 4) إنشاء الأزرار تلقائيًا للروابط غير الفارغة */
const container = document.getElementById("buttons");
Object.entries(LINKS).forEach(([key, url]) => {
  if (!url) return;                    // لو الرابط فاضي، لا نعرض الزر
  const meta = PLATFORMS[key];
  if (!meta) return;

  const btn = document.createElement("a");
  btn.className = "link-btn";
  btn.href = url;
  btn.target = "_blank";
  btn.rel = "noopener noreferrer";
  btn.style.setProperty("--c1", meta.c1);
  btn.style.setProperty("--c2", meta.c2);
  btn.setAttribute("aria-label", meta.label);

  btn.innerHTML = `
    <div class="icon">${meta.svg()}</div>
    <div class="label">${meta.label}</div>
    <div class="arrow">➜</div>
  `;

  container.appendChild(btn);
});
