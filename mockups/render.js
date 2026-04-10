/* ============================================================
   AMU TURNHOUT — RENDER HELPERS
   ============================================================
   Dynamische rendering van alle content.
   Vereist: data.js moet eerst geladen zijn.
   ============================================================ */

/* ── FOTO'S ──────────────────────────────────────────────── */
AMU.fotos = [
  "../docs/food.jpg",
  "../docs/interieur 1.jpg",
  "../docs/food2.jpg",
  "../docs/foto wine bar.jpg",
  "../docs/food 3.jpg",
  "../docs/interieur 2.jpg",
  "../docs/food 4.jpg",
  "../docs/foto zaal beneden.jpg",
  "../docs/foto brood bar.jpg",
  "../docs/interieur 3.jpg",
  "../docs/foto tafel beneden.jpg",
  "../docs/foto grappa.jpg",
  "../docs/foto ham1.jpg",
  "../docs/foto brood bar 1.jpg",
  "../docs/foto ham 2.jpg",
  "../docs/foto zaal beneden (1).jpg"
];

/* ── DRANKEN CATEGORIEËN (volgorde tabs) ─────────────────── */
AMU.drankenCategorieen = [
  { id: "wijnsuggesties", label: "Wijnsuggesties", data: function(){ return AMU.wijnsuggesties; }, type: "wine" },
  { id: "wijnkaart",      label: "Wijnkaart",      data: function(){ return AMU.wijnkaart; },      type: "wine" },
  { id: "aperitief",      label: "Aperitief & Bier",data: function(){ return AMU.aperoBierFris; },  type: "drink" },
  { id: "dessertwijnen",  label: "Dessertwijnen",   data: function(){ return AMU.dessertwijnen; },  type: "wine" },
  { id: "digestieven",    label: "Digestieven",     data: function(){ return AMU.digestieven; },    type: "drink" },
  { id: "whisky",         label: "Whisky",          data: function(){ return AMU.whisky; },         type: "detail" },
  { id: "gins",           label: "Gin & Tonic",     data: function(){ return AMU.gins; },           type: "detail" },
  { id: "warmedranken",   label: "Warme Dranken",   data: function(){ return AMU.warmeDranken; },   type: "drink" }
];


/* ============================================================
   RENDER FUNCTIONS
   ============================================================ */

function renderFormules(container) {
  var el = document.getElementById(container);
  if (!el) return;
  el.innerHTML = AMU.formules.map(function(f) {
    if (!f.prijs) {
      return '<div class="formula-card glass-card">' +
        '<h4>' + f.naam + '</h4>' +
        '<div class="detail">' + f.detail + '</div>' +
      '</div>';
    }
    return '<div class="formula-card glass-card' + (f.featured ? ' featured' : '') + '">' +
      (f.featured ? '<span class="badge">Populair</span>' : '') +
      '<h4>' + f.naam + '</h4>' +
      '<div class="price">&euro;' + f.prijs + '<small> p.p.</small></div>' +
      '<div class="detail">' + f.gangen + ' gangen &mdash; ' + f.detail + '</div>' +
      (f.wijn ? '<div class="wine-pairing">' + f.wijn + '</div>' : '') +
    '</div>';
  }).join('');
}

function renderGerechten(container) {
  var el = document.getElementById(container);
  if (!el) return;
  el.innerHTML = AMU.menuproducten.map(function(g) {
    return '<div class="gerecht-item">' + g.product + '</div>';
  }).join('');
}

function renderNagerechten(container) {
  var el = document.getElementById(container);
  if (!el) return;
  el.innerHTML = AMU.nagerechten.map(function(n) {
    return '<div class="dessert-card glass-card">' +
      '<h4>' + n.titel + '</h4>' +
      '<div class="price">&euro;' + n.prijs + '</div>' +
    '</div>';
  }).join('');
}

function renderUren(container) {
  var el = document.getElementById(container);
  if (!el) return;
  el.innerHTML = AMU.info.uren.map(function(u) {
    var gesloten = u.tijd === 'gesloten';
    var cls = gesloten ? ' uren-gesloten' : '';
    return '<span class="uren-dag' + cls + '">' + u.dag + '</span>' +
           '<span class="uren-tijd' + cls + '">' + u.tijd + '</span>';
  }).join('');
}

function renderParking(container) {
  var el = document.getElementById(container);
  if (!el) return;
  el.innerHTML = AMU.parking.map(function(p) {
    return '<div class="parking-card glass-card">' +
      '<h4>' + p.naam + '</h4>' +
      '<div class="distance">' + p.afstand + '</div>' +
      '<div class="tarief">' + p.tarief + '</div>' +
    '</div>';
  }).join('');
}

function renderGallery(container) {
  var el = document.getElementById(container);
  if (!el) return;
  el.innerHTML = AMU.fotos.map(function(f) {
    return '<img src="' + f + '" alt="Amu Turnhout" loading="lazy">';
  }).join('');
}

/* ── Dranken renderers ──────────────────────────────────── */
function formatPrice(prijs) {
  if (!prijs) return '';
  var p = parseFloat(prijs);
  if (isNaN(p)) return '';
  var formatted = p.toFixed(2);
  if (formatted.endsWith('.00')) formatted = formatted.slice(0, -3);
  return '\u20AC' + formatted;
}

function renderDrinkItem(item) {
  var price = (item.glas && item.glas.prijs) || (item.fles && item.fles.prijs) || '';
  var vol = (item.fles && item.fles.volume) ? ' <small>(' + item.fles.volume + ')</small>' : '';
  var desc = item.omschrijving1 || '';
  return '<div class="drink-item">' +
    '<div class="drink-item-info">' +
      '<div class="drink-item-name">' + item.titel + '</div>' +
      (desc ? '<div class="drink-item-desc">' + desc + '</div>' : '') +
    '</div>' +
    '<div class="drink-item-price">' + formatPrice(price) + vol + '</div>' +
  '</div>';
}

function renderWineItem(item) {
  var glasPrice = (item.glas && item.glas.prijs) ? formatPrice(item.glas.prijs) + ' /glas' : '';
  var flesPrice = (item.fles && item.fles.prijs) ? formatPrice(item.fles.prijs) + ((item.fles.volume) ? ' ' + item.fles.volume : ' /fles') : '';
  var prices = [glasPrice, flesPrice].filter(Boolean).join(' \u2014 ');
  return '<div class="wine-item">' +
    '<div class="wine-item-header">' +
      '<h4>' + item.titel + '</h4>' +
      '<span class="price">' + prices + '</span>' +
    '</div>' +
    (item.omschrijving1 ? '<div class="grape">' + item.omschrijving1 + '</div>' : '') +
    (item.omschrijving2 ? '<div class="origin">' + item.omschrijving2 + '</div>' : '') +
    (item.omschrijving3 ? '<div class="desc">' + item.omschrijving3 + '</div>' : '') +
  '</div>';
}

function renderDetailItem(item) {
  var price = (item.glas && item.glas.prijs) || (item.fles && item.fles.prijs) || '';
  return '<div class="wine-item">' +
    '<div class="wine-item-header">' +
      '<h4>' + item.titel + '</h4>' +
      '<span class="price">' + formatPrice(price) + '</span>' +
    '</div>' +
    (item.omschrijving1 ? '<div class="grape">' + item.omschrijving1 + '</div>' : '') +
    (item.omschrijving2 ? '<div class="desc">' + item.omschrijving2 + '</div>' : '') +
    (item.omschrijving3 ? '<div class="origin" style="margin-top:0.3rem;color:var(--text-accent);font-style:italic;">Suggestie: ' + item.omschrijving3 + '</div>' : '') +
  '</div>';
}

function renderDrankenPanel(cat) {
  var data = cat.data();
  if (!data || !data.rubrieken) return '<p>Geen data beschikbaar</p>';
  var renderItem = cat.type === 'wine' ? renderWineItem : cat.type === 'detail' ? renderDetailItem : renderDrinkItem;

  return data.rubrieken.map(function(rubriek) {
    var html = '<div class="drink-section-title">' + rubriek.titel + '</div>';
    if (rubriek.volume) {
      html += '<div style="color:var(--text-secondary);font-size:var(--text-xs);margin:-0.5rem 0 0.5rem;font-style:italic;">' + rubriek.volume + '</div>';
    }
    rubriek.items.forEach(function(sub) {
      if (sub.titel) html += '<div class="drink-subsection">' + sub.titel + '</div>';
      if (sub.items) html += sub.items.map(renderItem).join('');
    });
    return html;
  }).join('');
}

/* ── Tabbed dranken (voor Intimate Elegance) ────────────── */
function initDrankenTabs(navContainer, contentContainer) {
  var nav = document.getElementById(navContainer);
  var content = document.getElementById(contentContainer);
  if (!nav || !content) return;

  nav.innerHTML = AMU.drankenCategorieen.map(function(cat, i) {
    return '<button class="dranken-tab' + (i === 0 ? ' active' : '') + '" data-tab="' + cat.id + '">' + cat.label + '</button>';
  }).join('');

  content.innerHTML = AMU.drankenCategorieen.map(function(cat, i) {
    return '<div class="dranken-panel' + (i === 0 ? ' active' : '') + '" id="panel-' + cat.id + '">' +
      renderDrankenPanel(cat) +
    '</div>';
  }).join('');

  nav.querySelectorAll('.dranken-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      nav.querySelectorAll('.dranken-tab').forEach(function(t) { t.classList.remove('active'); });
      content.querySelectorAll('.dranken-panel').forEach(function(p) { p.classList.remove('active'); });
      tab.classList.add('active');
      document.getElementById('panel-' + tab.dataset.tab).classList.add('active');
    });
  });
}

/* ── Accordion dranken (voor Dark Luxe) ─────────────────── */
function initDrankenAccordion(container) {
  var el = document.getElementById(container);
  if (!el) return;

  el.innerHTML = AMU.drankenCategorieen.map(function(cat, i) {
    return '<div class="accordion' + (i === 0 ? ' open' : '') + '">' +
      '<div class="accordion-header" onclick="this.parentElement.classList.toggle(\'open\')">' +
        '<h3>' + cat.label + '</h3>' +
        '<span class="chevron">&#9660;</span>' +
      '</div>' +
      '<div class="accordion-body">' +
        '<div class="accordion-content">' +
          renderDrankenPanel(cat) +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');
}
