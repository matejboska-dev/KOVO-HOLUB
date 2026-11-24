/*
  KOVO-HOLUB — sdílené skripty stránek (CZ + EN).
  Delegace na document, aby vše fungovalo i po přechodech stránek přes Taxi.js
  (inline skripty ve vyměněném obsahu se nespouští).
*/
(function () {
  function isEnglish() {
    var lang = (document.documentElement.getAttribute('lang') || '').toLowerCase();
    return lang.indexOf('en') === 0 || window.location.pathname.indexOf('/en/') !== -1;
  }

  function trackEvent(name, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params || {});
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(Object.assign({ event: name }, params || {}));
    }
  }

  // 0. Responsivní 720p mobilní zdroj + spolehlivý autoplay po načtení i Taxi navigaci
  function initLoopVideos() {
    var isMobile = window.matchMedia && window.matchMedia('(max-width: 767px)').matches;
    var saveData = navigator.connection && navigator.connection.saveData;
    var videos = document.querySelectorAll('video[autoplay]');
    videos.forEach(function (v) {
      var mobileSrc = v.getAttribute('data-mobile-src');
      if (mobileSrc && (isMobile || saveData) && !v.dataset.mobileApplied) {
        v.dataset.mobileApplied = '1';
        while (v.firstChild) v.removeChild(v.firstChild);
        var src = document.createElement('source');
        src.src = mobileSrc;
        src.type = 'video/mp4';
        v.appendChild(src);
        v.load();
      }
      if (v.muted) {
        var p = v.play();
        if (p && typeof p.catch === 'function') p.catch(function () {});
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLoopVideos);
  } else {
    initLoopVideos();
  }
  var taxiRoot = document.querySelector('[data-taxi]');
  if (taxiRoot && window.MutationObserver) {
    new MutationObserver(function () { initLoopVideos(); }).observe(taxiRoot, { childList: true });
  }

  // 1. Filtrace karet a galerií ([data-filter]) — podporuje jednu i více kategorií v data-cat
  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('[data-filter]');
    if (!btn) return;
    e.preventDefault();

    var target = document.querySelector(btn.getAttribute('data-filter-target'));
    if (!target) return;
    var cat = btn.getAttribute('data-filter');

    target.querySelectorAll('[data-cat]').forEach(function (el) {
      var raw = (el.getAttribute('data-cat') || '').trim();
      var cats = raw ? raw.split(/[\s,]+/) : [];
      el.hidden = !(cat === '*' || cats.indexOf(cat) !== -1);
    });

    var group = btn.closest('.newsFilter');
    if (group) {
      group.querySelectorAll('[data-filter]').forEach(function (b) {
        b.classList.toggle('btn--active', b === btn);
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
    }
  });

  // 2. Předvyplnění poptávkového modalu z produktových karet ([data-inquiry-category] / [data-inquiry-item])
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest && e.target.closest('[data-inquiry-category], [data-inquiry-item]');
    if (!trigger) return;

    var cat = trigger.getAttribute('data-inquiry-category');
    var item = trigger.getAttribute('data-inquiry-item');
    var modal = document.getElementById('skipHireModal');
    if (!modal) return;

    var select = modal.querySelector('select[name="radiogroup1"]');
    if (select && cat) {
      for (var i = 0; i < select.options.length; i++) {
        if (select.options[i].value === cat) {
          select.selectedIndex = i;
          break;
        }
      }
    }

    var msg = modal.querySelector('textarea[name="message"]');
    if (msg && item && (!msg.value.trim() || msg.dataset.prefilled === '1')) {
      msg.value = isEnglish()
        ? 'Inquiry regarding: ' + item + '\nPlease provide pricing and estimated lead time.'
        : 'Poptávka: ' + item + '\nProsím o cenovou nabídku a předběžný termín výroby.';
      msg.dataset.prefilled = '1';
    }
  });

  // 3. Zachycení odeslání formulářů (#skip-form, #contact-form, #media-form) před starým JLM WP endpointem v app.js
  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form || (form.id !== 'skip-form' && form.id !== 'contact-form' && form.id !== 'media-form')) return;

    e.preventDefault();
    e.stopPropagation();
    if (typeof e.stopImmediatePropagation === 'function') {
      e.stopImmediatePropagation();
    }

    var isValid = true;
    if (window.jQuery && window.jQuery.fn && typeof window.jQuery.fn.validate === 'function') {
      var $form = window.jQuery(form);
      $form.validate({ rules: {}, messages: {}, errorPlacement: function () {}, ignore: [] });
      isValid = $form.valid();
    } else if (typeof form.checkValidity === 'function') {
      isValid = form.checkValidity();
    }

    if (!isValid) return;

    var btn = form.querySelector('button[type="submit"]');
    var label = btn ? btn.querySelector('.btn__label') : null;
    var sendingText = isEnglish() ? 'Sending…' : 'Odesílám…';
    if (btn) btn.disabled = true;
    if (label) {
      label.setAttribute('data-label', sendingText);
      label.textContent = sendingText;
    }

    var titleInput = form.querySelector('input[name="title"]');
    var typeInput = form.querySelector('[name="radiogroup1"]:checked, select[name="radiogroup1"]');
    trackEvent('generate_lead', {
      page_title: titleInput ? titleInput.value : document.title,
      inquiry_type: typeInput ? typeInput.value : 'general',
      language: isEnglish() ? 'en' : 'cs'
    });

    var thankYouUrl = form.getAttribute('data-redirect') || (isEnglish() ? 'thank-you.html' : 'dekujeme.html');
    var endpoint = form.getAttribute('data-endpoint');

    if (endpoint) {
      fetch(endpoint, { method: 'POST', body: new FormData(form) })
        .then(function () { window.location.href = thankYouUrl; })
        .catch(function () { window.location.href = thankYouUrl; });
    } else {
      setTimeout(function () {
        window.location.href = thankYouUrl;
      }, 150);
    }
  }, true);

  // 4. Bezpečnostní pojistka úvodního loaderu (max 1,1 s na 1. návštěvě)
  setTimeout(function () {
    var pt = document.querySelector('.pageTransition');
    if (pt && getComputedStyle(pt).visibility !== 'hidden' && parseFloat(getComputedStyle(pt).opacity) > 0.05) {
      pt.style.transition = 'opacity 0.25s ease';
      pt.style.opacity = '0';
      pt.style.visibility = 'hidden';
      pt.style.pointerEvents = 'none';
    }
  }, 1100);

  // 5. Lightbox galerie epoch (O firmě / 100 let / archivní fotky)
  var lbEl = null;
  var lbItems = [];
  var lbIndex = 0;

  function ensureLightbox() {
    if (lbEl) return lbEl;
    lbEl = document.createElement('div');
    lbEl.id = 'khLightbox';
    lbEl.className = 'khLightbox';
    lbEl.setAttribute('role', 'dialog');
    lbEl.setAttribute('aria-modal', 'true');
    lbEl.setAttribute('aria-hidden', 'true');
    lbEl.innerHTML =
      '<div class="khLightbox__backdrop" data-lb-close></div>' +
      '<div class="khLightbox__dialog">' +
      '  <div class="khLightbox__top">' +
      '    <div class="khLightbox__meta"><span class="khLightbox__era"></span><span class="khLightbox__count"></span></div>' +
      '    <button type="button" class="khLightbox__close" data-lb-close aria-label="' + (isEnglish() ? 'Close gallery' : 'Zavřít galerii') + '">&times;</button>' +
      '  </div>' +
      '  <figure class="khLightbox__stage">' +
      '    <button type="button" class="khLightbox__nav khLightbox__nav--prev" data-lb-prev aria-label="' + (isEnglish() ? 'Previous photo' : 'Předchozí fotka') + '">&#8592;</button>' +
      '    <img class="khLightbox__img" src="" alt="">' +
      '    <button type="button" class="khLightbox__nav khLightbox__nav--next" data-lb-next aria-label="' + (isEnglish() ? 'Next photo' : 'Další fotka') + '">&#8594;</button>' +
      '    <figcaption class="khLightbox__caption"></figcaption>' +
      '  </figure>' +
      '  <div class="khLightbox__thumbs"></div>' +
      '</div>';
    document.body.appendChild(lbEl);

    lbEl.addEventListener('click', function (ev) {
      if (ev.target.closest && ev.target.closest('[data-lb-close]')) { closeLightbox(); return; }
      if (ev.target.closest && ev.target.closest('[data-lb-prev]')) { showLightboxAt(lbIndex - 1); return; }
      if (ev.target.closest && ev.target.closest('[data-lb-next]')) { showLightboxAt(lbIndex + 1); return; }
      var thumb = ev.target.closest && ev.target.closest('[data-lb-idx]');
      if (thumb) { showLightboxAt(parseInt(thumb.getAttribute('data-lb-idx'), 10) || 0); }
    });
    return lbEl;
  }

  function showLightboxAt(idx) {
    if (!lbItems.length) return;
    lbIndex = ((idx % lbItems.length) + lbItems.length) % lbItems.length;
    var item = lbItems[lbIndex];
    var img = lbEl.querySelector('.khLightbox__img');
    var cap = lbEl.querySelector('.khLightbox__caption');
    var era = lbEl.querySelector('.khLightbox__era');
    var cnt = lbEl.querySelector('.khLightbox__count');
    img.src = item.src;
    img.alt = item.caption || '';
    cap.textContent = item.caption || '';
    era.textContent = item.era || '';
    cnt.textContent = (lbIndex + 1) + ' / ' + lbItems.length;
    lbEl.querySelectorAll('.khLightbox__thumb').forEach(function (t, i) {
      t.classList.toggle('is-active', i === lbIndex);
    });
  }

  function closeLightbox() {
    if (!lbEl) return;
    lbEl.classList.remove('is-open');
    lbEl.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('kh-lightbox-open');
  }

  document.addEventListener('click', function (e) {
    var trigger = e.target.closest && e.target.closest('[data-lightbox-group]');
    if (!trigger) return;
    e.preventDefault();
    var group = trigger.getAttribute('data-lightbox-group');
    var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox-item="' + group + '"]'));
    if (!nodes.length) return;
    lbItems = nodes.map(function (n) {
      return {
        src: n.getAttribute('data-lightbox-src') || '',
        caption: n.getAttribute('data-lightbox-caption') || '',
        era: n.getAttribute('data-lightbox-era') || ''
      };
    });
    ensureLightbox();
    var thumbs = lbEl.querySelector('.khLightbox__thumbs');
    thumbs.innerHTML = lbItems.map(function (it, i) {
      return '<button type="button" class="khLightbox__thumb" data-lb-idx="' + i + '"><img src="' + it.src + '" alt="" loading="lazy"></button>';
    }).join('');
    var startIdx = parseInt(trigger.getAttribute('data-lightbox-index'), 10) || 0;
    showLightboxAt(startIdx);
    lbEl.classList.add('is-open');
    lbEl.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('kh-lightbox-open');
  });

  document.addEventListener('keydown', function (e) {
    if (!lbEl || !lbEl.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') showLightboxAt(lbIndex - 1);
    else if (e.key === 'ArrowRight') showLightboxAt(lbIndex + 1);
  });

  // 6. Horizontální Facebook slider z JSON feedu (window.KH_FB_FEED_URL nebo [data-fb-feed])
  function initFacebookFeedSlider() {
    var root = document.getElementById('facebook');
    if (!root || root.dataset.fbLoaded === '1') return;
    var feedUrl = window.KH_FB_FEED_URL || root.getAttribute('data-fb-feed');
    if (!feedUrl) return;
    root.dataset.fbLoaded = '1';

    fetch(feedUrl)
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data) return;
        var rawItems = Array.isArray(data.items) ? data.items : (Array.isArray(data.data) ? data.data : []);
        if (!rawItems.length) return;

        var host = root.querySelector('[data-fb-slider-slot]');
        var fallback = root.querySelector('.fbShowcase');
        if (!host) return;

        var wrap = document.createElement('div');
        wrap.className = 'fbHorizontal';

        var bar = document.createElement('div');
        bar.className = 'fbHorizontal__bar';
        var cta = document.createElement('a');
        cta.className = 'btn btn--primary';
        cta.href = 'https://www.facebook.com/kovoholub';
        cta.target = '_blank';
        cta.rel = 'noopener';
        cta.innerHTML = '<span class="btn__label" data-label="' + (isEnglish() ? 'Follow @kovoholub' : 'Sledovat @kovoholub') + '">' + (isEnglish() ? 'Follow @kovoholub' : 'Sledovat @kovoholub') + '</span>';

        var controls = document.createElement('div');
        controls.className = 'fbHorizontal__controls';
        var prevBtn = document.createElement('button');
        prevBtn.type = 'button';
        prevBtn.className = 'fbHorizontal__nav';
        prevBtn.setAttribute('aria-label', isEnglish() ? 'Previous posts' : 'Předchozí příspěvky');
        prevBtn.textContent = '←';
        var nextBtn = document.createElement('button');
        nextBtn.type = 'button';
        nextBtn.className = 'fbHorizontal__nav';
        nextBtn.setAttribute('aria-label', isEnglish() ? 'Next posts' : 'Další příspěvky');
        nextBtn.textContent = '→';
        controls.appendChild(prevBtn);
        controls.appendChild(nextBtn);
        bar.appendChild(cta);
        bar.appendChild(controls);

        var track = document.createElement('div');
        track.className = 'fbHorizontal__track';

        rawItems.slice(0, 10).forEach(function (item) {
          var url = item.url || item.permalink_url || 'https://www.facebook.com/kovoholub';
          var text = (item.content_text || item.message || item.title || '').trim();
          var imgUrl = item.image || item.full_picture || (item.attachments && item.attachments[0] && item.attachments[0].url) || '';
          var rawDate = item.date_published || item.created_time || '';
          var dateStr = '';
          if (rawDate) {
            try {
              dateStr = new Date(rawDate).toLocaleDateString(isEnglish() ? 'en-GB' : 'cs-CZ', { day: 'numeric', month: 'numeric', year: 'numeric' });
            } catch (e) { dateStr = rawDate.slice(0, 10); }
          }

          var card = document.createElement('a');
          card.className = 'fbHorizontal__card';
          card.href = url;
          card.target = '_blank';
          card.rel = 'noopener';

          if (imgUrl) {
            var media = document.createElement('div');
            media.className = 'fbHorizontal__media';
            var img = document.createElement('img');
            img.src = imgUrl;
            img.alt = text ? text.slice(0, 80) : 'KOVO-HOLUB Facebook';
            img.loading = 'lazy';
            media.appendChild(img);
            card.appendChild(media);
          }

          var body = document.createElement('div');
          body.className = 'fbHorizontal__body';
          if (dateStr) {
            var dEl = document.createElement('div');
            dEl.className = 'fbHorizontal__date';
            dEl.textContent = dateStr;
            body.appendChild(dEl);
          }
          var pEl = document.createElement('p');
          pEl.className = 'fbHorizontal__text';
          pEl.textContent = text || (isEnglish() ? 'Workshop update from KOVO-HOLUB Nepomuk.' : 'Novinka z dílny KOVO-HOLUB Nepomuk.');
          var moreEl = document.createElement('span');
          moreEl.className = 'fbHorizontal__more';
          moreEl.textContent = isEnglish() ? 'Open on Facebook →' : 'Otevřít na Facebooku →';

          body.appendChild(pEl);
          body.appendChild(moreEl);
          card.appendChild(body);
          track.appendChild(card);
        });

        prevBtn.addEventListener('click', function () {
          track.scrollBy({ left: -Math.max(300, track.clientWidth * 0.7), behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', function () {
          track.scrollBy({ left: Math.max(300, track.clientWidth * 0.7), behavior: 'smooth' });
        });

        wrap.appendChild(bar);
        wrap.appendChild(track);
        host.innerHTML = '';
        host.appendChild(wrap);
        if (fallback) fallback.style.display = 'none';
      })
      .catch(function () {});
  }
  initFacebookFeedSlider();
  if (taxiRoot && window.MutationObserver) {
    new MutationObserver(function () { initFacebookFeedSlider(); }).observe(taxiRoot, { childList: true });
  }

  // 7. Volitelná inicializace Google Analytics (nastavením window.KH_GA_ID = 'G-...')
  if (window.KH_GA_ID && !document.getElementById('kh-ga-script')) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    var gaScript = document.createElement('script');
    gaScript.id = 'kh-ga-script';
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(window.KH_GA_ID);
    document.head.appendChild(gaScript);
    window.gtag('js', new Date());
    window.gtag('config', window.KH_GA_ID);
  }
})();
