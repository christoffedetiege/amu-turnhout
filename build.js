#!/usr/bin/env node
/* ============================================================
   AMU TURNHOUT — SEO PRE-RENDER BUILD SCRIPT
   ============================================================
   Bakt JSON-data in index.html zodat crawlers zonder JS
   de content kunnen lezen. De JS render engine overschrijft
   deze content bij het laden met innerHTML.

   Gebruik:  node build.js
   ============================================================ */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const read = (f) => JSON.parse(fs.readFileSync(path.join(ROOT, f), 'utf8'));

// --- Load data ---
const menu = read('data/menu.json');
const info = read('data/info.json');

// --- Render helpers ---
function renderFormules(formules) {
  return formules.map(f => {
    const price = f.prijs % 1 === 0 ? f.prijs : f.prijs.toFixed(2).replace('.', ',');
    return '<div class="formula-card glass-card">' +
      '<h4>' + f.naam + '</h4>' +
      '<div class="price">\u20AC ' + price + '</div>' +
      '<div class="detail">' + f.detail + '</div>' +
      (f.detail2 ? '<div class="detail">' + f.detail2 + '</div>' : '') +
      (f.wijn ? '<div class="wine-pairing">' + f.wijn + '</div>' : '') +
      (f.wijn2 ? '<div class="wine-pairing">' + f.wijn2 + '</div>' : '') +
    '</div>';
  }).join('\n      ');
}

function renderGerechten(producten) {
  return producten.map(g =>
    '<div class="gerecht-item">' + g.product + '</div>'
  ).join('\n      ');
}

function renderNagerechten(nagerechten) {
  return nagerechten.map(n =>
    '<div class="gerecht-item">' + n.titel + ' &mdash; &euro;' + n.prijs + '</div>'
  ).join('\n      ');
}

function renderUren(uren) {
  return uren.map(u => {
    const gesloten = u.tijd === 'gesloten';
    const cls = gesloten ? ' uren-gesloten' : '';
    return '<span class="uren-dag' + cls + '">' + u.dag + '</span>' +
           '<span class="uren-tijd' + cls + '">' + u.tijd + '</span>';
  }).join('\n          ');
}

function renderVakantie(v) {
  if (!v) return '';
  return ['lijn1', 'lijn2', 'lijn3'].map(k =>
    v[k] ? '<p>' + v[k] + '</p>' : ''
  ).filter(Boolean).join('\n      ');
}

function renderParking(parking) {
  return parking.map(p =>
    '<div class="parking-card glass-card">' +
      '<h4>' + p.naam + '</h4>' +
      '<div class="distance">' + p.afstand + '</div>' +
      '<div class="tarief">' + p.tarief + '</div>' +
    '</div>'
  ).join('\n      ');
}

// --- Inject into HTML ---
let html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

const replacements = [
  { id: 'formules-grid',    html: renderFormules(menu.formules) },
  { id: 'gerechten-list',   html: renderGerechten(menu.menuproducten) },
  { id: 'nagerechten-grid', html: renderNagerechten(menu.nagerechten) },
  { id: 'uren-grid',        html: renderUren(info.uren) },
  { id: 'parking-grid',     html: renderParking(info.parking) },
  // { id: 'vakantie-content', html: renderVakantie(info.vakantie) }, // uitgeschakeld — zie vakantie-card comment in index.html
];

let count = 0;
replacements.forEach(r => {
  // Use a marker-based approach: find the line with id="...", then find the
  // next closing </div> that sits on its own line (the container's closing tag).
  const startRegex = new RegExp('([ \\t]*<[^>]+ id="' + r.id + '"[^>]*>)([\\s\\S]*?)(\\n[ \\t]*</div>)');
  const match = html.match(startRegex);
  if (match) {
    // Use split/join to avoid regex replacement backreference issues with $ and \
    const idx = html.indexOf(match[0]);
    html = html.slice(0, idx) + match[1] + '\n      ' + r.html + '\n    ' + match[3] + html.slice(idx + match[0].length);
    count++;
  } else {
    console.warn('  WARN: Container #' + r.id + ' niet gevonden');
  }
});

fs.writeFileSync(path.join(ROOT, 'index.html'), html, 'utf8');

// --- Update sitemap lastmod ---
const today = new Date().toISOString().slice(0, 10);
const sitemapPath = path.join(ROOT, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  sitemap = sitemap.replace(/<lastmod>[^<]+<\/lastmod>/, '<lastmod>' + today + '</lastmod>');
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log('  Sitemap lastmod -> ' + today);
}

console.log('  ' + count + '/' + replacements.length + ' secties pre-rendered in index.html');
console.log('  Build klaar!');
