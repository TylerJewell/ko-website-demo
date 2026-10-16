// Shared behaviour: mobile nav, harvest banner, photo fallback, demo-only forms.
(function () {
  // A photo that fails to load becomes a labelled placeholder rather than a broken image.
  function failPhoto(img) {
    var fig = img.closest('.photo');
    if (!fig) return;
    var span = document.createElement('span');
    span.textContent = 'Photo: ' + (img.alt || 'product');
    fig.classList.add('ph-fail');
    img.replaceWith(span);
  }
  document.addEventListener('error', function (e) {
    if (e.target && e.target.tagName === 'IMG') failPhoto(e.target);
  }, true);

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.photo img').forEach(function (img) {
      if (img.complete && img.naturalWidth === 0) failPhoto(img);
    });

    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.site-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    harvestBanner();
    demoForms();
  });

  // Harvest runs roughly July to October in northwest Iowa; outside it the banner
  // switches to an order-ahead message.
  function harvestBanner() {
    var el = document.getElementById('harvest-banner');
    if (!el) return;
    try { if (sessionStorage.getItem('harvestDismissed') === '1') return; } catch (e) {}
    var m = new Date().getMonth(); // 0 = January
    var msg = el.querySelector('.msg');
    if (m >= 6 && m <= 9) {
      msg.innerHTML = '<strong>Harvest is here.</strong> Pace Setter 400- and 450-bushel grain wagons, built in Hull. ' +
        '<a href="grain-wagons.html">See grain wagons</a> or call 712-439-2727 for build times.';
    } else {
      msg.innerHTML = '<strong>Planning next harvest?</strong> Order your Pace Setter grain wagon in the off-season. ' +
        '<a href="build.html?type=grain">Build yours</a> or call 712-439-2727.';
    }
    el.classList.add('show');
    el.querySelector('.close').addEventListener('click', function () {
      el.classList.remove('show');
      try { sessionStorage.setItem('harvestDismissed', '1'); } catch (e) {}
    });
  }

  // Forms on this demo never send data: they validate, then show the request back on screen.
  function demoForms() {
    var params = new URLSearchParams(location.search);
    document.querySelectorAll('form[data-demo-form]').forEach(function (form) {
      var product = form.querySelector('[name=product]');
      if (product && params.get('product')) product.value = params.get('product');
      var build = form.querySelector('[name=build]');
      if (build && params.get('build')) build.value = params.get('build');
      var trade = form.querySelector('[name=has_trade]');
      if (trade && params.get('trade') === '1') { trade.checked = true; }
      syncTrade(form);
      form.addEventListener('change', function () { syncTrade(form); });

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var phone = form.querySelector('[name=phone]');
        var email = form.querySelector('[name=email]');
        if (phone && email && !phone.value.trim() && !email.value.trim()) {
          phone.setCustomValidity('Give us a phone number or an email so the shop can reach you.');
          phone.reportValidity();
          phone.setCustomValidity('');
          return;
        }
        if (!form.reportValidity()) return;
        var lines = [];
        new FormData(form).forEach(function (v, k) {
          if (String(v).trim()) lines.push(labelFor(form, k) + ': ' + v);
        });
        var box = document.getElementById(form.getAttribute('data-demo-form'));
        box.querySelector('pre').textContent = lines.join('\n');
        box.classList.add('show');
        box.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });
  }

  function syncTrade(form) {
    var trade = form.querySelector('[name=has_trade]');
    var block = form.querySelector('.trade-fields');
    if (trade && block) block.hidden = !trade.checked;
  }

  function labelFor(form, name) {
    var el = form.querySelector('[name="' + name + '"]');
    if (!el) return name;
    var lab = el.id && form.querySelector('label[for="' + el.id + '"]');
    if (lab) return lab.textContent.replace(/\s*\*$/, '').trim();
    var fs = el.closest('fieldset');
    var lg = fs && fs.querySelector('legend');
    return lg ? lg.textContent.trim() : name;
  }
})();
