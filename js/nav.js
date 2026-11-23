(function() {
  // Inject mobile menu HTML
  var NAV_HTML = `
<div class="mobile-menu" id="mobileMenu">
  <div class="mob-panel" id="mobMainPanel">
    <div class="mob-panel-scroll">
    <a class="mob-main-link" href="index.html" data-i18n="nav.home">Home</a>
    <button class="mob-main-link" onclick="mobOpenSub('mobSubLaminaat', this)"><span data-i18n="nav.laminaat">Laminaat</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <button class="mob-main-link" onclick="mobOpenSub('mobSubPvc', this)"><span data-i18n="nav.pvc">PVC-Böden</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <button class="mob-main-link" onclick="mobOpenSub('mobSubVisgraat', this)"><span data-i18n="nav.visgraat">Fischgrätboden</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <a class="mob-main-link" href="producten.html" data-i18n="nav.parkett">Parkett</a>
    <button class="mob-main-link" onclick="mobOpenSub('mobSubZubehor', this)"><span data-i18n="nav.zubehor">Zubehör</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <button class="mob-main-link" onclick="mobOpenSub('mobSubInspiratie', this)"><span data-i18n="nav.inspiratie">Inspiratie</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <button class="mob-main-link" onclick="mobOpenSub('mobSubContact', this)"><span data-i18n="nav.kontakt">Contact</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    </div>
    <div class="mob-lang-toggle">
      <button class="mob-lang-btn" id="mobLangDe" onclick="setLang('de'); mobUpdateLang()">DE</button>
      <span class="mob-lang-divider">|</span>
      <button class="mob-lang-btn" id="mobLangEn" onclick="setLang('en'); mobUpdateLang()">EN</button>
    </div>
  </div>

  <div class="mob-panel mob-panel--sub" id="mobSubLaminaat">
    <div class="mob-panel-scroll">
    <button class="mob-back-btn" onclick="mobGoBack()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-i18n="nav.back.laminaat"> Laminaat</span></button>
    <div class="mob-sub-group"><span class="mob-sub-group-label" data-i18n="nav.label.sorten">Sorten</span>
      <div class="mob-sub-group-links">
        <a href="producten.html?cat=laminaat" data-i18n="nav.laminaat.laminat">Laminat</a>
        <a href="producten.html?cat=laminaat&amp;tag=klick" data-i18n="nav.laminaat.klick">Klick-Laminat</a>
        <a href="producten.html?cat=laminaat&amp;tag=xl" data-i18n="nav.laminaat.xl">XL Laminat</a>
        <a href="producten.html?cat=laminaat&amp;tag=xxl" data-i18n="nav.laminaat.xxl">XXL Laminat</a>
        <a href="producten.html?cat=laminaat&amp;tag=wasser" data-i18n="nav.laminaat.wasserfest">Wasserfestes Laminat</a>
        <a href="producten.html?cat=laminaat&amp;tag=fliesen" data-i18n="nav.laminaat.fliesen">Fliesen-Laminat</a>
        <a href="producten.html?cat=visgraat&amp;tag=laminat" data-i18n="nav.laminaat.fischgrat">Fischgrät-Laminat</a>
      </div>
    </div>
    <div class="mob-sub-group"><span class="mob-sub-group-label" data-i18n="nav.label.stile">Stile</span>
      <div class="mob-sub-group-links">
        <a href="producten.html?cat=laminaat&amp;tag=braun" data-i18n="nav.laminaat.braun">Braunes Laminat</a>
        <a href="producten.html?cat=laminaat&amp;tag=weiss" data-i18n="nav.laminaat.weiss">Weißes Laminat</a>
        <a href="producten.html?cat=laminaat&amp;tag=grau" data-i18n="nav.laminaat.grau">Graues Laminat</a>
        <a href="producten.html?cat=laminaat&amp;tag=eiche" data-i18n="nav.laminaat.eiche">Eichen-Laminat</a>
        <a href="producten.html?cat=laminaat&amp;tag=schwarz" data-i18n="nav.laminaat.schwarz">Schwarzes Laminat</a>
      </div>
    </div>
    <div class="mob-sub-group"><span class="mob-sub-group-label" data-i18n="nav.label.marken">Marken</span>
      <div class="mob-sub-group-links">
        <a href="producten.html?cat=laminaat&amp;brand=quick-step" data-i18n="nav.laminaat.quickstep">Quickstep Laminat</a>
        <a href="producten.html?cat=laminaat&amp;brand=egger" data-i18n="nav.laminaat.egger">Egger Laminat</a>
        <a href="producten.html?cat=laminaat&amp;brand=classen" data-i18n="nav.laminaat.classen">Classen</a>
        <a href="producten.html?cat=laminaat&amp;brand=kronoswiss" data-i18n="nav.laminaat.kronoswiss">Kronoswiss Laminat</a>
        <a href="producten.html?cat=laminaat&amp;brand=beautifloor" data-i18n="nav.laminaat.beautifloor">Beautifloor Laminat</a>
      </div>
    </div>
    <a href="producten.html?cat=laminaat" class="mob-sub-cta" data-i18n="nav.laminaat.alle">Alle laminaat</a>
    </div>
  </div>

  <div class="mob-panel mob-panel--sub" id="mobSubPvc">
    <div class="mob-panel-scroll">
    <button class="mob-back-btn" onclick="mobGoBack()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-i18n="nav.back.pvc"> PVC-Böden</span></button>
    <div class="mob-sub-group"><span class="mob-sub-group-label" data-i18n="nav.label.sorten">Sorten</span>
      <div class="mob-sub-group-links">
        <a href="producten.html?cat=pvc" data-i18n="nav.pvc.pvc">PVC-Böden</a>
        <a href="producten.html?cat=visgraat&amp;tag=pvc" data-i18n="nav.pvc.fischgrat">Fischgrät PVC</a>
        <a href="producten.html?cat=pvc&amp;tag=klick" data-i18n="nav.pvc.klick">Klick PVC</a>
        <a href="producten.html?cat=pvc&amp;tag=klebe" data-i18n="nav.pvc.klebe">Klebe PVC</a>
        <a href="producten.html?cat=pvc&amp;tag=fliesen" data-i18n="nav.pvc.fliesen">PVC-Fliesen</a>
      </div>
    </div>
    <div class="mob-sub-group"><span class="mob-sub-group-label" data-i18n="nav.label.stile">Stile</span>
      <div class="mob-sub-group-links">
        <a href="producten.html?cat=pvc&amp;tag=weiss" data-i18n="nav.pvc.weiss">Weißer PVC</a>
        <a href="producten.html?cat=pvc&amp;tag=schwarz" data-i18n="nav.pvc.schwarz">Schwarzer PVC</a>
        <a href="producten.html?cat=pvc&amp;tag=braun" data-i18n="nav.pvc.braun">Brauner PVC</a>
        <a href="producten.html?cat=pvc&amp;tag=beton" data-i18n="nav.pvc.beton">Beton-Optik PVC</a>
        <a href="producten.html?cat=pvc&amp;tag=eiche" data-i18n="nav.pvc.eiche">Helle Eiche PVC</a>
      </div>
    </div>
    <div class="mob-sub-group"><span class="mob-sub-group-label" data-i18n="nav.label.marken">Marken</span>
      <div class="mob-sub-group-links">
        <a href="producten.html?cat=pvc&amp;brand=moduleo" data-i18n="nav.pvc.moduleo">Moduleo PVC</a>
        <a href="producten.html?cat=pvc&amp;brand=mflor" data-i18n="nav.pvc.mflor">mFLOR PVC</a>
        <a href="producten.html?cat=pvc&amp;brand=quick-step" data-i18n="nav.pvc.quickstep">Quick-Step PVC</a>
        <a href="producten.html?cat=pvc&amp;brand=vtwonen" data-i18n="nav.pvc.vtwonen">Vtwonen PVC</a>
        <a href="producten.html?cat=pvc&amp;brand=belakos" data-i18n="nav.pvc.belakos">Belakos PVC</a>
      </div>
    </div>
    </div>
  </div>

  <div class="mob-panel mob-panel--sub" id="mobSubVisgraat">
    <div class="mob-panel-scroll">
    <button class="mob-back-btn" onclick="mobGoBack()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-i18n="nav.back.visgraat"> Fischgrätboden</span></button>
    <div class="mob-sub-group"><span class="mob-sub-group-label" data-i18n="nav.label.sorten">Sorten</span>
      <div class="mob-sub-group-links">
        <a href="producten.html?cat=visgraat&amp;tag=laminat" data-i18n="nav.visgraat.laminat">Fischgrät Laminat</a>
        <a href="producten.html?cat=visgraat&amp;tag=pvc" data-i18n="nav.visgraat.pvc">Fischgrät PVC</a>
        <a href="producten.html?cat=visgraat&amp;tag=klick" data-i18n="nav.visgraat.klick">Klick-PVC Fischgrät</a>
        <a href="producten.html?cat=visgraat&amp;tag=klebe" data-i18n="nav.visgraat.klebe">Klebe-PVC Fischgrät</a>
        <a href="producten.html?cat=visgraat&amp;tag=parkett" data-i18n="nav.visgraat.parkett">Fischgrät Parkett</a>
      </div>
    </div>
    <div class="mob-sub-group"><span class="mob-sub-group-label" data-i18n="nav.label.stile">Stile</span>
      <div class="mob-sub-group-links">
        <a href="producten.html?cat=visgraat&amp;tag=grau" data-i18n="nav.visgraat.grau">Grauer Fischgrät</a>
        <a href="producten.html?cat=visgraat&amp;tag=eiche" data-i18n="nav.visgraat.eiche">Eichen Fischgrät</a>
        <a href="producten.html?cat=visgraat&amp;tag=dunkel" data-i18n="nav.visgraat.dunkel">Dunkler Fischgrät</a>
      </div>
    </div>
    <div class="mob-sub-group"><span class="mob-sub-group-label" data-i18n="nav.label.marken">Marken</span>
      <div class="mob-sub-group-links">
        <a href="producten.html?cat=visgraat&amp;brand=egger" data-i18n="nav.visgraat.egger">Egger Fischgrät</a>
        <a href="producten.html?cat=visgraat&amp;brand=belakos" data-i18n="nav.visgraat.belakos">Belakos Fischgrät</a>
        <a href="producten.html?cat=visgraat&amp;brand=floorlife" data-i18n="nav.visgraat.floorlife">Floorlife Fischgrät</a>
        <a href="producten.html?cat=visgraat&amp;brand=mflor" data-i18n="nav.visgraat.mflor">mFLOR Fischgrät</a>
      </div>
    </div>
    </div>
  </div>

  <div class="mob-panel mob-panel--sub" id="mobSubZubehor">
    <div class="mob-panel-scroll">
    <button class="mob-back-btn" onclick="mobGoBack()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-i18n="nav.back.zubehor"> Zubehör</span></button>
    <div class="mob-sub-group">
      <div class="mob-sub-group-links">
        <a href="producten.html?cat=zubehor" data-i18n="nav.zubehor.unterlage">Unterlagsboden</a>
        <a href="producten.html?cat=zubehor" data-i18n="nav.zubehor.sockel">Sockelleisten</a>
        <a href="producten.html?cat=zubehor" data-i18n="nav.zubehor.treppe">Treppenrenovierung</a>
        <a href="producten.html?cat=zubehor" data-i18n="nav.zubehor.wand">Wandpaneele</a>
      </div>
    </div>
    </div>
  </div>

  <div class="mob-panel mob-panel--sub" id="mobSubInspiratie">
    <div class="mob-panel-scroll">
    <button class="mob-back-btn" onclick="mobGoBack()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-i18n="nav.back.inspiratie"> Inspiratie</span></button>
    <div class="mob-sub-group">
      <div class="mob-sub-group-links">
        <a href="inspiratie-kueche.html" data-i18n="nav.insp.kuche">Küche</a>
        <a href="inspiratie-flur.html" data-i18n="nav.insp.flur">Flur</a>
        <a href="inspiratie-wohnzimmer.html" data-i18n="nav.insp.wohnzimmer">Wohnzimmer</a>
        <a href="inspiratie-schlafzimmer.html" data-i18n="nav.insp.schlafzimmer">Schlafzimmer</a>
        <a href="inspiratie-kinderzimmer.html" data-i18n="nav.insp.kinderzimmer">Kinderzimmer</a>
        <a href="inspiratie-buero.html" data-i18n="nav.insp.buro">Büro</a>
      </div>
    </div>
    </div>
  </div>

  <div class="mob-panel mob-panel--sub" id="mobSubContact">
    <div class="mob-panel-scroll">
    <button class="mob-back-btn" onclick="mobGoBack()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-i18n="nav.back.contact"> Contact</span></button>
    <div class="mob-sub-group">
      <div class="mob-sub-group-links">
        <a href="over-ons.html" data-i18n="nav.contact.uber">Über uns</a>
        <a href="contact.html" data-i18n="nav.contact.kontakt">Kontakt</a>
        <a href="contact.html" data-i18n="nav.contact.showroom">Showroom</a>
        <a href="contact.html" data-i18n="nav.contact.beratung">Beratung</a>
      </div>
    </div>
    </div>
  </div>

  <div id="mobNavImg" class="mob-nav-img"><img id="mobNavImgEl" src="" alt=""></div>
</div>`;

  // ---- Search overlay HTML ----
  var SEARCH_HTML = `
<div class="search-overlay" id="searchOverlay" role="dialog" aria-modal="true">
  <button class="search-overlay__close" onclick="closeNavSearch()" aria-label="Close">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#444" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
  </button>
  <div class="search-overlay__inner">
    <div class="search-overlay__bar">
      <svg class="search-overlay__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-4.35-4.35"/></svg>
      <input class="search-overlay__input" id="searchOverlayInput" type="search" placeholder="Suchen…" data-i18n-ph="nav.search.placeholder" autocomplete="off" oninput="searchOverlayInput(this.value)">
    </div>
    <div class="search-overlay__results" id="searchOverlayResults"></div>
  </div>
</div>`;

  // ---- Search overlay CSS ----
  var SEARCH_CSS = `
.search-overlay{position:fixed;inset:0;background:#fff;z-index:9999;display:flex;flex-direction:column;align-items:center;opacity:0;pointer-events:none;transition:opacity .2s ease;}
.search-overlay.open{opacity:1;pointer-events:all;}
.search-overlay__close{position:absolute;top:20px;right:24px;background:none;border:none;cursor:pointer;color:#444;padding:8px;border-radius:50%;transition:background .15s;}
.search-overlay__close:hover{background:#f3f3f3;}
.search-overlay__inner{width:100%;max-width:640px;padding:80px 24px 32px;}
.search-overlay__bar{display:flex;align-items:center;gap:12px;border-bottom:2px solid #000;padding-bottom:12px;}
.search-overlay__icon{flex-shrink:0;color:#555;}
.search-overlay__input{flex:1;border:none;outline:none;font-size:16px;font-family:inherit;color:#111;background:transparent;}
.search-overlay__input::placeholder{color:#aaa;}
.search-overlay__input::-webkit-search-cancel-button{-webkit-appearance:none;appearance:none;width:14px;height:14px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='1.5' stroke-linecap='round'%3E%3Cpath d='M18 6L6 18M6 6l12 12'/%3E%3C/svg%3E") no-repeat center;cursor:pointer;opacity:1;}
.search-overlay__results{margin-top:24px;display:flex;flex-direction:column;gap:4px;}
.search-res-item{display:flex;align-items:center;gap:14px;padding:10px 4px;text-decoration:none;color:#111;border-radius:6px;transition:background .1s;}
.search-res-item:hover{background:#f5f5f5;}
.search-res-item img{width:44px;height:44px;object-fit:cover;border-radius:4px;border:1px solid #eee;flex-shrink:0;}
.search-res-item__name{font-size:14px;font-weight:500;}
.search-res-item__brand{font-size:12px;color:#888;margin-top:2px;}
.search-res-empty{font-size:14px;color:#888;padding:10px 4px;}
@media(max-width:600px){.search-overlay__input{font-size:18px;}.search-overlay__inner{padding-top:64px;}}`;

  document.addEventListener('DOMContentLoaded', function() {
    // Inject search CSS
    var style = document.createElement('style');
    style.textContent = SEARCH_CSS;
    document.head.appendChild(style);

    // Inject nav after navbar-wrap
    var navbarWrap = document.querySelector('.navbar-wrap');
    if (navbarWrap && !document.getElementById('mobileMenu')) {
      navbarWrap.insertAdjacentHTML('afterend', NAV_HTML);
    }

    // Inject search overlay
    if (!document.getElementById('searchOverlay')) {
      document.body.insertAdjacentHTML('beforeend', SEARCH_HTML);
    }

    // Overlay
    var overlay = document.getElementById('navOverlay');
    if (overlay) {
      overlay.addEventListener('click', function() {
        if (document.getElementById('mobileMenu').classList.contains('open')) toggleMenu();
      });
    }

    // Init lang
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'de');
    if (typeof setLang === 'function') setLang(localStorage.getItem('lang'));
    mobUpdateLang();
  });

  // ---- Nav functions ----
  window.toggleMenu = function() {
    var menu = document.getElementById('mobileMenu');
    if (!menu) return;
    var isOpen = menu.classList.toggle('open');
    var overlay = document.getElementById('navOverlay');
    if (isOpen) {
      document.body.classList.add('nav-open');
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      if (overlay) overlay.classList.add('active');
    } else {
      document.body.classList.remove('nav-open');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      if (overlay) overlay.classList.remove('active');
      document.querySelectorAll('.mob-main-link').forEach(function(l) { l.classList.remove('mob-link-active'); });
      var img = document.getElementById('mobNavImgEl');
      if (img) { img.classList.remove('visible'); img.src = ''; }
    }
    mobUpdateLang();
    var hamburger = document.querySelector('.hamburger');
    var navbar = document.querySelector('.navbar');
    if (hamburger) hamburger.classList.toggle('open');
    if (navbar) navbar.classList.toggle('nav-open');
    mobGoBack();
  };

  var mobNavImages = {
    'mobSubLaminaat':   'images/6855 1.png',
    'mobSubPvc':        'images/2505 1.png',
    'mobSubVisgraat':   'images/2240 1.png',
    'mobSubZubehor':    'images/793 1.png',
    'mobSubInspiratie': 'images/2240 1.png',
    'mobSubContact':    'images/2505 1.png'
  };

  window.mobOpenSub = function(panelId, btn) {
    var isDesktop = window.innerWidth >= 769;
    document.querySelectorAll('.mob-panel--sub').forEach(function(p) { p.classList.remove('mob-active'); });
    var panel = document.getElementById(panelId);
    if (!panel) return;
    panel.classList.add('mob-active');
    if (isDesktop) {
      document.querySelectorAll('.mob-main-link').forEach(function(l) { l.classList.remove('mob-link-active'); });
      if (btn) btn.classList.add('mob-link-active');
      var img = document.getElementById('mobNavImgEl');
      if (img) {
        var src = mobNavImages[panelId];
        if (src) { img.classList.remove('visible'); img.src = src; img.onload = function() { img.classList.add('visible'); }; if (img.complete) img.classList.add('visible'); }
        else { img.classList.remove('visible'); }
      }
    } else {
      var main = document.getElementById('mobMainPanel');
      if (main) main.classList.add('mob-hidden');
    }
  };

  window.mobGoBack = function() {
    document.querySelectorAll('.mob-panel--sub').forEach(function(p) {
      p.classList.remove('mob-active');
      var scroller = p.querySelector('.mob-panel-scroll');
      if (scroller) scroller.scrollTop = 0;
    });
    var main = document.getElementById('mobMainPanel');
    if (main) main.classList.remove('mob-hidden');
  };

  window.mobUpdateLang = function() {
    var lang = localStorage.getItem('lang') || 'de';
    var de = document.getElementById('mobLangDe');
    var en = document.getElementById('mobLangEn');
    if (de) de.classList.toggle('active', lang === 'de');
    if (en) en.classList.toggle('active', lang === 'en');
  };

  // ---- Full-page search overlay ----
  window.openNavSearch = function() {
    var el = document.getElementById('searchOverlay');
    if (!el) return;
    el.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(function() {
      var inp = document.getElementById('searchOverlayInput');
      if (inp) { inp.value = ''; inp.focus(); }
      document.getElementById('searchOverlayResults').innerHTML = '';
    }, 50);
  };

  window.closeNavSearch = function() {
    var el = document.getElementById('searchOverlay');
    if (!el) return;
    el.classList.remove('open');
    document.body.style.overflow = '';
  };

  window.searchOverlayInput = function(q) {
    var results = document.getElementById('searchOverlayResults');
    if (!results) return;
    q = (q || '').trim().toLowerCase();
    if (!q) { results.innerHTML = ''; return; }

    var products = window._navProducts || [];
    var matches = products.filter(function(p) {
      return (p.name||'').toLowerCase().includes(q) || (p.brand||'').toLowerCase().includes(q);
    }).slice(0, 8);

    if (!matches.length) {
      var lang = localStorage.getItem('lang') || 'de';
      var noRes = lang === 'en' ? 'No results found' : 'Keine Ergebnisse gefunden';
      results.innerHTML = '<div class="search-res-empty">' + noRes + '</div>';
      return;
    }
    results.innerHTML = matches.map(function(p) {
      var img = p.image ? '<img src="' + p.image + '" alt="" onerror="this.style.display=\'none\'">' : '';
      return '<a class="search-res-item" href="product.html?id=' + encodeURIComponent(p.id) + '">'
        + img
        + '<div><div class="search-res-item__name">' + p.name + '</div>'
        + (p.brand ? '<div class="search-res-item__brand">' + p.brand + '</div>' : '')
        + '</div></a>';
    }).join('');
  };

  // Load products for search (once)
  if (!window._navProducts) {
    fetch('https://raw.githubusercontent.com/wohnstyleboden/wohnstyleboden/main/products.json')
      .then(function(r) { return r.json(); })
      .then(function(d) { window._navProducts = Array.isArray(d) ? d : (d.products || []); })
      .catch(function() {});
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') window.closeNavSearch();
  });

  // Open search on any search button click (delegated)
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.nav-search-center');
    if (btn) { e.preventDefault(); window.openNavSearch(); }
  });

})();
