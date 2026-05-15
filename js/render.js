/* ============================================================
   AMU TURNHOUT — RENDER ENGINE (Production)
   ============================================================
   Laadt data uit JSON-bestanden en rendert alle content.
   ============================================================ */

var AMU = {};

/* ── DATA LADEN ────────────────���──────────────────────────── */
var _v = '?v=' + Date.now();
function loadJSON(url) {
  return fetch(url + _v).then(function(r) { return r.json(); });
}

function initAmu() {
  return Promise.all([
    loadJSON('data/info.json'),
    loadJSON('data/menu.json'),
    loadJSON('data/fotos.json'),
    loadJSON('data/aperitief-bier.json'),
    loadJSON('data/wijnkaart.json'),
    loadJSON('data/wijnsuggesties.json'),
    loadJSON('data/whisky.json'),
    loadJSON('data/digestieven.json'),
    loadJSON('data/dessertwijnen.json'),
    loadJSON('data/warme-dranken.json'),
    loadJSON('data/barfood.json')
  ]).then(function(results) {
    var info = results[0];
    var menu = results[1];
    var fotos = results[2];
    var aperoBierFris = results[3];
    var wijnkaart = results[4];
    var wijnsuggesties = results[5];
    var whisky = results[6];
    var digestieven = results[7];
    var dessertwijnen = results[8];
    var warmeDranken = results[9];
    var barfood = results[10];

    AMU.info = info;
    AMU.parking = info.parking;
    AMU.formules = menu.formules;
    AMU.menuproducten = menu.menuproducten;
    AMU.nagerechten = menu.nagerechten;
    AMU.aperoBierFris = aperoBierFris;
    AMU.wijnkaart = wijnkaart;
    AMU.wijnsuggesties = wijnsuggesties;
    AMU.whisky = whisky;
    AMU.digestieven = digestieven;
    AMU.dessertwijnen = dessertwijnen;
    AMU.warmeDranken = warmeDranken;
    AMU.barfood = barfood;
    AMU.fotos = fotos.fotos.map(function(f) {
      if (typeof f === 'string') return { src: f, alt: 'Amu Turnhout' };
      return f;
    });

    // Dessertwijnen toevoegen aan wijnkaart
    AMU.wijnkaartCompleet = { rubrieken: AMU.wijnkaart.rubrieken.concat(AMU.dessertwijnen.rubrieken) };

    AMU.drankenCategorieen = [
      { id: "aperitief",      label: "Aperitief, Bier & Frisdrank", data: function(){ return AMU.aperoBierFris; },    type: "drink" },
      { id: "wijnsuggesties", label: "Wijnsuggesties",   data: function(){ return AMU.wijnsuggesties; },  type: "wine" },
      { id: "wijnkaart",      label: "Wijnkaart",        data: function(){ return AMU.wijnkaartCompleet; }, type: "wine" },
      { id: "warmedranken",   label: "Warme Dranken",    data: function(){ return AMU.warmeDranken; },    type: "drink" },
      { id: "digestieven",    label: "Digestieven",      data: function(){ return AMU.digestieven; },     type: "drink" },
      { id: "whisky",         label: "Whisky",           data: function(){ return AMU.whisky; },          type: "detail" }
    ];

    return AMU;
  });
}

/* ============================================================
   RENDER FUNCTIONS
   ============================================================ */

function renderFormules(container) {
  var el = document.getElementById(container);
  if (!el) return;
  el.innerHTML = AMU.formules.map(function(f) {
    var priceStr = f.prijs % 1 === 0 ? f.prijs : f.prijs.toFixed(2).replace('.', ',');
    return '<div class="formula-card glass-card">' +
      '<h4>' + f.naam + '</h4>' +
      '<div class="price">\u20AC ' + priceStr + '</div>' +
      '<div class="detail">' + f.detail + '</div>' +
      (f.detail2 ? '<div class="detail">' + f.detail2 + '</div>' : '') +
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
    return '<div class="gerecht-item">' + n.titel + ' &mdash; &euro;' + n.prijs + '</div>';
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

function thumbPath(src, ext) {
  var base = src.replace(/\.[^.]+$/, '');
  return base.replace('img/fotos/', 'img/fotos/thumb/') + '.' + ext;
}
function largePath(src, ext) {
  var base = src.replace(/\.[^.]+$/, '');
  return base.replace('img/fotos/', 'img/fotos/large/') + '.' + ext;
}

function renderGallery(container) {
  var el = document.getElementById(container);
  if (!el) return;
  el.innerHTML = AMU.fotos.map(function(f, i) {
    var cls = f.featured ? 'gallery-item featured' : 'gallery-item';
    var alt = f.alt || 'Amu Turnhout';
    return '<div class="' + cls + '" data-index="' + i + '">' +
      '<img src="' + thumbPath(f.src, 'jpg') + '" alt="' + alt + '" loading="lazy" decoding="async">' +
    '</div>';
  }).join('');

  // Lightbox setup
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML =
    '<button class="lightbox-close" aria-label="Sluiten">&times;</button>' +
    '<button class="lightbox-nav lightbox-prev" aria-label="Vorige">&#8249;</button>' +
    '<img src="" alt="">' +
    '<button class="lightbox-nav lightbox-next" aria-label="Volgende">&#8250;</button>' +
    '<div class="lightbox-counter"></div>';
  document.body.appendChild(overlay);

  var lbImg = overlay.querySelector('img');
  var lbCounter = overlay.querySelector('.lightbox-counter');
  var currentIndex = 0;

  function showPhoto(idx) {
    currentIndex = (idx + AMU.fotos.length) % AMU.fotos.length;
    var f = AMU.fotos[currentIndex];
    lbImg.src = largePath(f.src, 'jpg');
    lbImg.alt = f.alt || 'Amu Turnhout';
    lbCounter.textContent = (currentIndex + 1) + ' / ' + AMU.fotos.length;
  }

  function openLightbox(idx) {
    showPhoto(idx);
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  el.addEventListener('click', function(e) {
    var item = e.target.closest('.gallery-item');
    if (item) openLightbox(parseInt(item.dataset.index, 10));
  });

  overlay.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  overlay.querySelector('.lightbox-prev').addEventListener('click', function() { showPhoto(currentIndex - 1); });
  overlay.querySelector('.lightbox-next').addEventListener('click', function() { showPhoto(currentIndex + 1); });
  overlay.addEventListener('click', function(e) { if (e.target === overlay) closeLightbox(); });

  document.addEventListener('keydown', function(e) {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPhoto(currentIndex - 1);
    if (e.key === 'ArrowRight') showPhoto(currentIndex + 1);
  });

  // Touch swipe support
  var touchStartX = 0;
  overlay.addEventListener('touchstart', function(e) { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
  overlay.addEventListener('touchend', function(e) {
    var diff = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(diff) > 50) showPhoto(currentIndex + (diff > 0 ? -1 : 1));
  }, { passive: true });
}

function renderBarfood(container) {
  var el = document.getElementById(container);
  if (!el || !AMU.barfood || !AMU.barfood.rubrieken) return;
  var items = AMU.barfood.rubrieken[0].items[0].items;
  el.innerHTML = items.map(function(item) {
    var price = (item.glas && item.glas.prijs) ? formatPrice(item.glas.prijs) : '';
    return '<div class="drink-item">' +
      '<div class="drink-item-info">' +
        '<div class="drink-item-name">' + item.titel + '</div>' +
      '</div>' +
      '<div class="drink-item-price">' + price + '</div>' +
    '</div>';
  }).join('');
}

/* ── Dranken renderers ──────────────────────��───────────── */
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
  var glasPrice = (item.glas && item.glas.prijs) ? '<span class="wine-price-tag"><svg class="wine-price-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 21h8M12 3v18M7 8h10l-1.5-5h-7L7 8z"/></svg>' + formatPrice(item.glas.prijs) + '</span>' : '';
  var flesPrice = (item.fles && item.fles.prijs) ? '<span class="wine-price-tag"><svg class="wine-price-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2h4v4l2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10l2-4V2z"/></svg>' + formatPrice(item.fles.prijs) + '</span>' : '';
  var prices = [glasPrice, flesPrice].filter(Boolean).join('');
  return '<div class="wine-item">' +
    '<div class="wine-item-header">' +
      '<h4>' + item.titel + '</h4>' +
      '<span class="price wine-prices">' + prices + '</span>' +
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

function smartRenderItem(defaultRenderer) {
  return function(item) {
    if (defaultRenderer !== renderDetailItem && defaultRenderer !== renderWineItem && (item.omschrijving2 || item.omschrijving3)) {
      return renderDetailItem(item);
    }
    return defaultRenderer(item);
  };
}

function renderDrankenPanel(cat) {
  var data = cat.data();
  if (!data || !data.rubrieken) return '<p>Geen data beschikbaar</p>';
  var baseRenderer = cat.type === 'wine' ? renderWineItem : cat.type === 'detail' ? renderDetailItem : renderDrinkItem;
  var renderItem = smartRenderItem(baseRenderer);
  var panelId = cat.id;

  var subnav = '';
  if (data.rubrieken.length > 1) {
    subnav = '<div class="dranken-subnav">' +
      data.rubrieken.map(function(rubriek, i) {
        return '<a href="#sub-' + panelId + '-' + i + '" class="dranken-subnav-link">' + rubriek.titel + '</a>';
      }).join('') +
    '</div>';
  }

  var content = data.rubrieken.map(function(rubriek, i) {
    var html = '<div class="drink-section-title" id="sub-' + panelId + '-' + i + '">' + rubriek.titel +
      ' <a href="#dranken-accordion" class="dranken-terug">&#9650; terug</a></div>';
    if (rubriek.volume) {
      html += '<div style="color:var(--text-secondary);font-size:var(--text-xs);margin:-0.5rem 0 0.5rem;font-style:italic;">' + rubriek.volume + '</div>';
    }
    rubriek.items.forEach(function(sub) {
      if (sub.titel) html += '<div class="drink-subsection">' + sub.titel + '</div>';
      if (sub.items) html += sub.items.map(renderItem).join('');
    });
    return html;
  }).join('');

  return subnav + content;
}

/* ── Cirkel-navigatie dranken (voor Dark Luxe) ─────────── */
function initDrankenAccordion(container) {
  var el = document.getElementById(container);
  if (!el) return;

  var navHtml = '<div class="formula-grid dranken-cirkel-nav">' +
    AMU.drankenCategorieen.map(function(cat, i) {
      return '<div class="formula-card glass-card dranken-cirkel' + (i === 0 ? ' active' : '') + '" data-cat="' + cat.id + '">' +
        '<h4>' + cat.label + '</h4>' +
      '</div>';
    }).join('') +
  '</div>';

  var panelsHtml = AMU.drankenCategorieen.map(function(cat, i) {
    return '<div class="dranken-cirkel-panel' + (i === 0 ? ' active' : '') + '" id="cpanel-' + cat.id + '">' +
      renderDrankenPanel(cat) +
    '</div>';
  }).join('');

  el.innerHTML = navHtml + panelsHtml;

  el.querySelectorAll('.dranken-cirkel').forEach(function(circle) {
    circle.addEventListener('click', function() {
      el.querySelectorAll('.dranken-cirkel').forEach(function(c) { c.classList.remove('active'); });
      el.querySelectorAll('.dranken-cirkel-panel').forEach(function(p) { p.classList.remove('active'); });
      circle.classList.add('active');
      var panel = document.getElementById('cpanel-' + circle.dataset.cat);
      panel.classList.add('active');
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}
