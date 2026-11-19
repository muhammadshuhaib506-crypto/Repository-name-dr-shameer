/* ===== Site settings: change these in one place ===== */
const SITE = {
  whatsapp: '919605860257',
  whatsappDisplay: '+91 96058 60257',
  waMessage: 'Hello Dr. Shameer, I would like to book a consultation.',
  phone2: '+919400860257',
  phone2Display: '+91 94008 60257',
  email: 'pshameer777@gmail.com',
  // GitHub repository that stores the posts (owner/name). Filled in when the site is hosted.
  repo: 'muhammadshuhaib506-crypto/Repository-name-dr-shameer',
  branch: 'main',
};
const IMG = {
  portrait: 'https://dr-bright-appeal-refresh.lovable.app/__l5e/assets-v1/5f11abfb-8fed-47cd-862f-2f787e87848e/doctor-portrait.avif',
  dermapen: 'assets/dermapen-certificate.jpg',
  azezia: 'https://dr-bright-appeal-refresh.lovable.app/__l5e/assets-v1/2d024724-23f5-4348-b04d-3a888bc4c9ff/award-azezia.avif',
  skin: 'https://dr-bright-appeal-refresh.lovable.app/assets/treatment-skin-BfKedVJg.jpg',
  hair: 'https://dr-bright-appeal-refresh.lovable.app/assets/treatment-hair-DpoctISq.jpg',
  laser: 'https://dr-bright-appeal-refresh.lovable.app/assets/treatment-laser-Coke6YnE.jpg',
  clinic: 'https://dr-bright-appeal-refresh.lovable.app/assets/clinic-interior-mXO0rWzE.jpg',
};
const waLink = (msg = SITE.waMessage) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

const ICON = {
  wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  menu: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
};

const NAV = [
  ['index.html#about', 'About'],
  ['index.html#treatments', 'Treatments'],
  ['index.html#clinics', 'Clinics'],
  ['index.html#awards', 'Awards'],
  ['index.html#gallery', 'Gallery'],
  ['posts.html', 'Posts'],
  ['index.html#contact', 'Contact'],
];

function renderChrome() {
  const header = document.getElementById('site-header');
  if (header) header.outerHTML = `
  <div class="topbar"><div class="container">
    <span class="hide-sm">Skinnova Skin, Hair &amp; Laser Clinic · Valanchery, Kerala</span>
    <span>Call or WhatsApp: <a href="tel:+${SITE.whatsapp}">${SITE.whatsappDisplay}</a></span>
  </div></div>
  <header class="site"><div class="container nav">
    <a class="brand" href="index.html"><b>Dr. Shameer P<span>.</span></b><small>Dermatologist · Skin, Hair &amp; Laser</small></a>
    <nav class="nav-links" aria-label="Main">${NAV.map(([h, t]) => `<a href="${h}">${t}</a>`).join('')}</nav>
    <div class="nav-cta">
      <a class="btn btn-wa" href="${waLink()}" target="_blank" rel="noopener">${ICON.wa}<span>WhatsApp</span></a>
      <a class="btn btn-primary" href="index.html#contact">Book Consultation</a>
      <button class="menu-btn" aria-label="Open menu" aria-expanded="false">${ICON.menu}</button>
    </div>
  </div>
  <nav class="mobile-nav" aria-label="Mobile">${NAV.map(([h, t]) => `<a href="${h}">${t}</a>`).join('')}<a href="${waLink()}" target="_blank" rel="noopener" style="color:var(--wa-dark)">Chat on WhatsApp</a></nav>
  </header>`;

  const footer = document.getElementById('site-footer');
  if (footer) footer.outerHTML = `
  <footer class="site"><div class="container">
    <div class="foot-grid">
      <div><a class="brand" href="index.html"><b>Dr. Shameer P<span>.</span></b><small>MBBS, MD (DVL)</small></a>
        <p class="foot-about">Dermatologist &amp; Skin Specialist. Founder, Skinnova Skin, Hair &amp; Laser Clinic, Valanchery. Senior consultant at Nila Hospital, Pattambi.</p></div>
      <div><h4>Explore</h4><ul>${NAV.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join('')}</ul></div>
      <div><h4>Treatments</h4><ul><li><a href="index.html#treatments">Skin Treatments</a></li><li><a href="index.html#treatments">Hair Treatments</a></li><li><a href="index.html#treatments">Cosmetology &amp; Laser</a></li></ul></div>
      <div><h4>Contact</h4><ul>
        <li><a href="${waLink()}" target="_blank" rel="noopener">WhatsApp: ${SITE.whatsappDisplay}</a></li>
        <li><a href="tel:+${SITE.whatsapp}">Skinnova: ${SITE.whatsappDisplay}</a></li>
        <li><a href="tel:${SITE.phone2}">Nila Hospital: ${SITE.phone2Display}</a></li>
        <li><a href="mailto:${SITE.email}">${SITE.email}</a></li></ul></div>
    </div>
    <div class="disclaimer">
      <p>Medical disclaimer: information on this website is for general awareness only and does not replace professional medical advice, diagnosis or treatment. Outcomes vary from person to person. In an emergency, please contact the nearest hospital.</p>
      <span>© ${new Date().getFullYear()} Dr. Shameer P. · Skinnova Skin, Hair &amp; Laser Clinic, Valanchery</span>
    </div>
  </div></footer>
  <a class="wa-float" href="${waLink()}" target="_blank" rel="noopener" aria-label="Chat with the clinic on WhatsApp">
    <span class="wa-ico">${ICON.wa}</span><span>Chat on WhatsApp<small>Usually replies within clinic hours</small></span>
  </a>`;

  const btn = document.querySelector('.menu-btn');
  const mnav = document.querySelector('.mobile-nav');
  if (btn && mnav) {
    btn.addEventListener('click', () => { const o = mnav.classList.toggle('open'); btn.setAttribute('aria-expanded', o); });
    mnav.addEventListener('click', e => { if (e.target.tagName === 'A') mnav.classList.remove('open'); });
  }
  document.querySelectorAll('[data-wa]').forEach(a => { a.href = waLink(a.dataset.wa || SITE.waMessage); a.target = '_blank'; a.rel = 'noopener'; });
  document.querySelectorAll('[data-img]').forEach(img => { img.src = IMG[img.dataset.img]; });
}

function reveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
  els.forEach(e => io.observe(e));
}

/* ===== Posts: each post is a Markdown file in the /posts folder ===== */
function parseFrontMatter(text) {
  const m = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  const meta = {};
  if (!m) return { meta, body: text };
  m[1].split('\n').forEach(line => {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, '');
  });
  return { meta, body: m[2] };
}
function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function inline(s) {
  return esc(s)
    .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, '<img src="$2" alt="$1" loading="lazy">')
    .replace(/\[([^\]]+)\]\((https?:[^)\s]+|[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}
function markdown(md) {
  const blocks = md.replace(/\r/g, '').trim().split(/\n\s*\n/);
  return blocks.map(b => {
    const lines = b.split('\n');
    if (/^###\s/.test(b)) return `<h3>${inline(b.replace(/^###\s/, ''))}</h3>`;
    if (/^##?\s/.test(b)) return `<h2>${inline(b.replace(/^##?\s/, ''))}</h2>`;
    if (lines.every(l => /^\s*[-*]\s/.test(l))) return `<ul>${lines.map(l => `<li>${inline(l.replace(/^\s*[-*]\s/, ''))}</li>`).join('')}</ul>`;
    if (lines.every(l => /^\s*\d+[.)]\s/.test(l))) return `<ol>${lines.map(l => `<li>${inline(l.replace(/^\s*\d+[.)]\s/, ''))}</li>`).join('')}</ol>`;
    if (/^>\s?/.test(b)) return `<blockquote>${inline(lines.map(l => l.replace(/^>\s?/, '')).join(' '))}</blockquote>`;
    return `<p>${lines.map(inline).join('<br>')}</p>`;
  }).join('\n');
}
function fmtDate(d) { const x = new Date(d); return isNaN(x) ? '' : x.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }); }

async function listPostFiles() {
  // 1) posts/index.json (optional, fastest)  2) GitHub API listing of /posts
  try {
    const r = await fetch(`https://api.github.com/repos/${SITE.repo}/contents/posts?ref=${SITE.branch}`, { headers: { Accept: 'application/vnd.github+json' } });
    if (r.ok) return (await r.json()).filter(f => f.name.endsWith('.md')).map(f => f.name);
  } catch (e) {}
  try { const r = await fetch('posts/index.json', { cache: 'no-store' }); if (r.ok) return await r.json(); } catch (e) {}
  return [];
}
async function loadPost(name) {
  const r = await fetch(`posts/${name}`, { cache: 'no-store' });
  if (!r.ok) throw new Error('not found');
  const { meta, body } = parseFrontMatter(await r.text());
  const slug = name.replace(/\.md$/, '');
  const words = body.split(/\s+/).filter(Boolean).length;
  return { slug, file: name, title: meta.title || slug, date: meta.date || slug.slice(0, 10), category: meta.category || 'Skin care', cover: meta.cover || '', excerpt: meta.excerpt || body.replace(/[#>*_\-\[\]()!]/g, '').slice(0, 150) + '…', draft: meta.draft === 'true', body, minutes: Math.max(1, Math.round(words / 200)) };
}
async function loadPosts() {
  const files = await listPostFiles();
  const posts = (await Promise.all(files.map(f => loadPost(f).catch(() => null)))).filter(p => p && !p.draft);
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
function postCard(p) {
  return `<a class="post-card reveal" href="post.html?p=${encodeURIComponent(p.slug)}">
    <div class="pc-img">${p.cover ? `<img src="${esc(p.cover)}" alt="" loading="lazy">` : `<img src="${IMG.clinic}" alt="" loading="lazy">`}</div>
    <div class="pc-body"><small>${esc(p.category)} · ${fmtDate(p.date)}</small><h3>${esc(p.title)}</h3><p>${esc(p.excerpt)}</p></div></a>`;
}
async function renderPostList(el, limit) {
  el.innerHTML = '<div class="empty">Loading posts…</div>';
  const posts = await loadPosts();
  el.innerHTML = posts.length ? posts.slice(0, limit || 999).map(postCard).join('') : '<div class="empty">New posts from Dr. Shameer are coming soon.</div>';
  reveal();
}

document.addEventListener('DOMContentLoaded', () => { renderChrome(); reveal(); });
