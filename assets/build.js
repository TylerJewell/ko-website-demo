// "Build your Pace Setter" chooser. Choices and fixed specs come from komfgco.com
// product pages; anything K&O has not published is shown as a [bracketed] placeholder.
(function () {
  var TYPES = {
    livestock: {
      label: 'Livestock trailer', page: 'livestock-horse-trailers.html#livestock',
      steps: [
        { id: 'material', label: 'Material', options: ['Steel', 'Aluminum'] },
        { id: 'hitch', label: 'Hitch', options: ['Bumper pull', 'Gooseneck'] },
        { id: 'length', label: 'Length', kind: 'number', unit: 'ft', min: 8, max: 40,
          hint: 'Built to your specifications. [K&O to list standard lengths]' },
        { id: 'height', label: 'Inside height', options: ['6′6″ (aluminum stock standard)', 'Other height — tell us'] },
        { id: 'axles', label: 'Axles', options: ['Tandem axle', 'Triple axle'], hint: '[K&O to confirm axle ratings]' },
        { id: 'floor', label: 'Floor', options: ['Tongue & groove pressure-treated wood', 'Aluminum', 'Rumber recycled-rubber composite'] },
        { id: 'extras', label: 'Features & options', kind: 'multi',
          hint: 'Several of these are standard on the aluminum stock trailer; the shop will confirm.',
          options: ['Double deck (aluminum)', 'Escape door', 'Sliding lower front vents', 'Combination slide & full-swing rear gate', 'Center gate', 'SlamLatch gates'] }
      ]
    },
    horse: {
      label: 'Horse trailer', page: 'livestock-horse-trailers.html#horse',
      steps: [
        { id: 'material', label: 'Material', options: ['Steel', 'Aluminum'] },
        { id: 'hitch', label: 'Hitch', options: ['Bumper pull', 'Gooseneck'] },
        { id: 'horses', label: 'Number of horses', kind: 'number', unit: 'horses', min: 1, max: 10,
          hint: '[K&O to list standard horse counts]' },
        { id: 'size', label: 'Horse size', options: ['Minis', 'Average', 'Drafts'] },
        { id: 'axles', label: 'Axles', options: ['Tandem axle', 'Triple axle'], hint: '[K&O to confirm axle ratings]' },
        { id: 'floor', label: 'Floor', options: ['Rumber recycled-rubber composite', 'Aluminum', 'Treated wood'] },
        { id: 'extras', label: 'Features & options', kind: 'multi',
          options: ['Straight load', 'Hay rack & outside storage', 'Padded stalls', 'Light bank', 'Saddle racks', 'Boot box', 'Carpeting',
            'Pull-out step', 'Horse-area access door', 'Fold-down feed doors', 'Special interior insulation', 'Rear ramp', 'Set up for interior finishing'] }
      ]
    },
    grain: {
      label: 'Grain wagon / Grain Express', page: 'grain-wagons.html',
      fixed: ['Gravity unload out the back, 30″ end gate', 'Electric brakes on both axles', 'Spread axles'],
      steps: [
        { id: 'capacity', label: 'Capacity', options: ['400-bushel class', '450-bushel class'],
          hint: 'Standard box holds about 410 bu; extensions take it to 450 bu. [K&O to confirm current model names]' },
        { id: 'axles', label: 'Axle rating', options: ['10,000 lb', '12,000 lb', '16,000 lb'] },
        { id: 'extras', label: 'Options', kind: 'multi',
          options: ['Rear seed-tender auger (16′ foldable poly cup)', 'Box extensions', 'Roll tarp [confirm availability]'] },
        { id: 'color', label: 'Color', kind: 'select',
          options: ['Sandstone (light silver/gold metallic)', 'Silver Metallic', 'Light Gray Metallic', 'Medium Gray Metallic', 'Dark Gray Metallic',
            'Midnight Sparkle (almost black metallic)', 'Brilliant Red', 'Dark Blue Metallic', 'Shiny Black', 'Brent Green or special color (added cost)'],
          hint: 'Colors as listed on the current K&O site. [confirm current color list]' }
      ]
    },
    flatbed: {
      label: 'Flatbed trailer', page: 'utility-flatbed.html#flatbed',
      fixed: ['Treated Southern Yellow Pine floor', '12″ channel neck', '12″ wide-flange I-beam', 'Spring-assisted ramps', 'Polyurethane paint, including underside'],
      steps: [
        { id: 'style', label: 'Style', options: ['Standard', 'Triple flip', 'Dual flip with fold-down center'] },
        { id: 'length', label: 'Length', kind: 'range', unit: 'ft', min: 16, max: 36, step: 2, value: 24 },
        { id: 'axles', label: 'Axles', options: ['Tandem axle', 'Other — tell us'], hint: '[K&O to list axle ratings]' }
      ]
    },
    utility: {
      label: 'Aluminum utility trailer', page: 'utility-flatbed.html#utility',
      fixed: ['All-aluminum framework', '6′4″ wide bed', '3,500 lb axle', 'Fold-forward treadplate ramp', 'LED lighting', '4″ channel tongue'],
      steps: [
        { id: 'length', label: 'Bed length', options: ['10 ft', '12 ft'] },
        { id: 'floor', label: 'Floor', options: ['Aluminum', 'Treated Southern Yellow Pine'] }
      ]
    },
    cargo: {
      label: 'Cargo / skid loader trailer', page: 'utility-flatbed.html#cargo',
      steps: [
        { id: 'material', label: 'Material', options: ['Steel', 'Aluminum'] },
        { id: 'hitch', label: 'Hitch', options: ['Bumper pull', 'Gooseneck'] },
        { id: 'use', label: 'Set up for', options: ['General cargo', 'Skid loader inside (enclosed)', 'Skid loader behind the cargo area'] },
        { id: 'length', label: 'Length', kind: 'number', unit: 'ft', min: 8, max: 40, hint: '[K&O to list standard lengths]' },
        { id: 'axles', label: 'Axles', options: ['Tandem axle', 'Triple axle'], hint: '[K&O to confirm axle ratings]' }
      ]
    }
  };

  var state = { type: null, values: {} };
  var stepsEl, summaryEl, quoteBtn;

  document.addEventListener('DOMContentLoaded', function () {
    stepsEl = document.getElementById('build-steps');
    summaryEl = document.getElementById('build-summary');
    quoteBtn = document.getElementById('build-quote');
    if (!stepsEl) return;

    document.querySelectorAll('input[name=btype]').forEach(function (r) {
      r.addEventListener('change', function () { selectType(r.value); });
    });
    var start = new URLSearchParams(location.search).get('type');
    if (start && TYPES[start]) {
      document.querySelector('input[name=btype][value="' + start + '"]').checked = true;
      selectType(start);
    }
    document.getElementById('build-reset').addEventListener('click', function () {
      state = { type: null, values: {} };
      document.querySelectorAll('input[name=btype]').forEach(function (r) { r.checked = false; });
      stepsEl.innerHTML = '';
      render();
    });
    render();
  });

  function selectType(t) {
    state.type = t;
    state.values = {};
    TYPES[t].steps.forEach(function (s) {
      if (s.kind === 'range') state.values[s.id] = s.value + ' ' + s.unit;
    });
    drawSteps();
    render();
  }

  function el(tag, attrs, text) {
    var e = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    if (text != null) e.textContent = text;
    return e;
  }

  function drawSteps() {
    stepsEl.innerHTML = '';
    var def = TYPES[state.type];
    def.steps.forEach(function (s, i) {
      var box = el('div', { 'class': 'step' });
      var h = el('h3');
      h.appendChild(el('span', { 'class': 'step-num' }, String(i + 2)));
      h.appendChild(document.createTextNode(s.label));
      box.appendChild(h);
      if (s.hint) box.appendChild(el('p', { 'class': 'hint' }, s.hint));

      if (s.kind === 'number') {
        var wrap = el('div', { 'class': 'field' });
        var inp = el('input', { type: 'number', min: s.min, max: s.max, inputmode: 'numeric', 'aria-label': s.label + ' in ' + s.unit, placeholder: s.unit });
        inp.addEventListener('input', function () {
          state.values[s.id] = inp.value ? inp.value + ' ' + s.unit : '';
          render();
        });
        wrap.appendChild(inp);
        box.appendChild(wrap);
      } else if (s.kind === 'range') {
        var out = el('div', { 'class': 'range-out' }, s.value + ' ' + s.unit);
        var rng = el('input', { type: 'range', min: s.min, max: s.max, step: s.step, value: s.value, 'aria-label': s.label });
        rng.addEventListener('input', function () {
          out.textContent = rng.value + ' ' + s.unit;
          state.values[s.id] = rng.value + ' ' + s.unit;
          render();
        });
        box.appendChild(out);
        box.appendChild(rng);
        box.appendChild(el('p', { 'class': 'hint' }, 'Available in ' + s.min + '′ to ' + s.max + '′ lengths.'));
      } else if (s.kind === 'select') {
        var sel = el('select', { 'aria-label': s.label });
        sel.appendChild(el('option', { value: '' }, 'Choose…'));
        s.options.forEach(function (o) { sel.appendChild(el('option', { value: o }, o)); });
        sel.addEventListener('change', function () { state.values[s.id] = sel.value; render(); });
        box.appendChild(sel);
      } else {
        var opts = el('div', { 'class': 'opts', role: s.kind === 'multi' ? 'group' : 'radiogroup', 'aria-label': s.label });
        s.options.forEach(function (o) {
          var lab = el('label', { 'class': 'opt' });
          var input = el('input', { type: s.kind === 'multi' ? 'checkbox' : 'radio', name: 'b_' + s.id, value: o });
          input.addEventListener('change', function () {
            if (s.kind === 'multi') {
              var picked = Array.prototype.map.call(box.querySelectorAll('input:checked'), function (x) { return x.value; });
              state.values[s.id] = picked.join(', ');
            } else {
              state.values[s.id] = o;
            }
            render();
          });
          lab.appendChild(input);
          lab.appendChild(el('span', null, o));
          opts.appendChild(lab);
        });
        box.appendChild(opts);
      }
      stepsEl.appendChild(box);
    });
  }

  function summaryText() {
    var def = TYPES[state.type];
    var lines = ['Pace Setter ' + def.label];
    def.steps.forEach(function (s) {
      if (state.values[s.id]) lines.push(s.label + ': ' + state.values[s.id]);
    });
    if (def.fixed) lines.push('Standard: ' + def.fixed.join('; '));
    return lines.join('\n');
  }

  function render() {
    summaryEl.innerHTML = '';
    if (!state.type) {
      summaryEl.appendChild(el('p', { 'class': 'muted' }, 'Pick a trailer or wagon type to start.'));
      quoteBtn.setAttribute('aria-disabled', 'true');
      quoteBtn.href = 'contact.html';
      return;
    }
    var def = TYPES[state.type];
    var dl = el('dl');
    dl.appendChild(el('dt', null, 'Type'));
    dl.appendChild(el('dd', null, def.label));
    def.steps.forEach(function (s) {
      dl.appendChild(el('dt', null, s.label));
      dl.appendChild(el('dd', null, state.values[s.id] || '—'));
    });
    summaryEl.appendChild(dl);
    if (def.fixed) {
      summaryEl.appendChild(el('p', { 'class': 'muted' }, 'Standard on this model:'));
      var ul = el('ul');
      def.fixed.forEach(function (f) { ul.appendChild(el('li', null, f)); });
      summaryEl.appendChild(ul);
    }
    var p = el('p');
    p.appendChild(el('a', { href: def.page }, 'See the ' + def.label.toLowerCase() + ' page →'));
    summaryEl.appendChild(p);
    quoteBtn.removeAttribute('aria-disabled');
    quoteBtn.href = 'contact.html?product=' + encodeURIComponent(def.label) + '&build=' + encodeURIComponent(summaryText());
  }
})();
