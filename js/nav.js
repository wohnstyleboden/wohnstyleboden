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
    <a class="mob-main-link" href="#" data-i18n="nav.parkett">Parkett</a>
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
        <a href="producten.html?cat=laminaat_click" data-i18n="nav.laminaat.klick">Klick-Laminat</a>
        <a href="producten.html?cat=laminaat_xl" data-i18n="nav.laminaat.xl">XL Laminat</a>
        <a href="producten.html?cat=laminaat_waterproof" data-i18n="nav.laminaat.wasserfest">Wasserfestes Laminat</a>
        <a href="producten.html?cat=laminaat_visgraat" data-i18n="nav.laminaat.fischgrat">Fischgrät-Laminat</a>
      </div>
    </div>
    <div class="mob-sub-group"><span class="mob-sub-group-label" data-i18n="nav.label.marken">Marken</span>
      <div class="mob-sub-group-links">
        <a href="producten.html?cat=laminaat" data-i18n="nav.laminaat.quickstep">Quickstep Laminat</a>
        <a href="producten.html?cat=laminaat" data-i18n="nav.laminaat.egger">Egger Laminat</a>
        <a href="producten.html?cat=laminaat" data-i18n="nav.laminaat.classen">Classen</a>
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
        <a href="producten.html?cat=pvc_visgraat" data-i18n="nav.pvc.fischgrat">Fischgrät PVC</a>
        <a href="producten.html?cat=pvc_click" data-i18n="nav.pvc.klick">Klick PVC</a>
        <a href="producten.html?cat=pvc_klebe" data-i18n="nav.pvc.klebe">Klebe PVC</a>
      </div>
    </div>
    <div class="mob-sub-group"><span class="mob-sub-group-label" data-i18n="nav.label.marken">Marken</span>
      <div class="mob-sub-group-links">
        <a href="producten.html?cat=pvc" data-i18n="nav.pvc.moduleo">Moduleo PVC</a>
        <a href="producten.html?cat=pvc" data-i18n="nav.pvc.mflor">mFLOR PVC</a>
        <a href="producten.html?cat=pvc" data-i18n="nav.pvc.quickstep">Quick-Step PVC</a>
      </div>
    </div>
    </div>
  </div>

  <div class="mob-panel mob-panel--sub" id="mobSubVisgraat">
    <div class="mob-panel-scroll">
    <button class="mob-back-btn" onclick="mobGoBack()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-i18n="nav.back.visgraat"> Fischgrätboden</span></button>
    <div class="mob-sub-group"><span class="mob-sub-group-label" data-i18n="nav.label.sorten">Sorten</span>
      <div class="mob-sub-group-links">
        <a href="producten.html?cat=visgraat" data-i18n="nav.visgraat.laminat">Fischgrät Laminat</a>
        <a href="producten.html?cat=visgraat" data-i18n="nav.visgraat.pvc">Fischgrät PVC</a>
        <a href="producten.html?cat=visgraat" data-i18n="nav.visgraat.klick">Klick-PVC Fischgrät</a>
        <a href="producten.html?cat=visgraat" data-i18n="nav.visgraat.parkett">Fischgrät Parkett</a>
      </div>
    </div>
    <div class="mob-sub-group"><span class="mob-sub-group-label" data-i18n="nav.label.marken">Marken</span>
      <div class="mob-sub-group-links">
        <a href="producten.html?cat=visgraat" data-i18n="nav.visgraat.egger">Egger Fischgrät</a>
        <a href="producten.html?cat=visgraat" data-i18n="nav.visgraat.belakos">Belakos Fischgrät</a>
        <a href="producten.html?cat=visgraat" data-i18n="nav.visgraat.mflor">mFLOR Fischgrät</a>
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
        <a href="#" data-i18n="nav.insp.kuche">Küche</a>
        <a href="#" data-i18n="nav.insp.flur">Flur</a>
        <a href="#" data-i18n="nav.insp.wohnzimmer">Wohnzimmer</a>
        <a href="#" data-i18n="nav.insp.schlafzimmer">Schlafzimmer</a>
        <a href="#" data-i18n="nav.insp.kinderzimmer">Kinderzimmer</a>
        <a href="#" data-i18n="nav.insp.buro">Büro</a>
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
        <a href="#" data-i18n="nav.contact.showroom">Showroom</a>
        <a href="#" data-i18n="nav.contact.beratung">Beratung</a>
      </div>
    </div>
    </div>
  </div>

  <div id="mobNavImg" class="mob-nav-img"><img id="mobNavImgEl" src="" alt=""></div>
</div>`;

  document.addEventListener('DOMContentLoaded', function() {
    // Inject nav after navbar-wrap
    var navbarWrap = document.querySelector('.navbar-wrap');
    if (navbarWrap && !document.getElementById('mobileMenu')) {
      navbarWrap.insertAdjacentHTML('afterend', NAV_HTML);
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

})();
