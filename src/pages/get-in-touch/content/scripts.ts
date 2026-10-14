/**
 * Replaces the look of the contact form's <select>s with a custom glass
 * dropdown (chevron that turns, staggered option list, check on the chosen
 * option). The native <select> stays in place, invisible, under the new button:
 * it still carries the value for submit and still receives reportValidity()'s
 * focus and message, so validation keeps working as before.
 */
export const glassSelectScript = `
(function () {
  var selects = document.querySelectorAll('.is-contact-hero select.select-field');
  if (!selects.length) return;
  var CHEVRON = '<svg class="glass-select__chevron" viewBox="0 0 12 8" aria-hidden="true" focusable="false"><path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var CHECK = '<svg class="glass-select__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var openOne = null;

  Array.prototype.forEach.call(selects, function (select) {
    var wrap = document.createElement('div');
    wrap.className = 'glass-select';
    select.parentNode.insertBefore(wrap, select);
    wrap.appendChild(select);
    select.tabIndex = -1;

    var listId = select.id + '-listbox';
    var trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'text-field glass-select__trigger';
    trigger.setAttribute('role', 'combobox');
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', listId);
    if (select.required) trigger.setAttribute('aria-required', 'true');
    trigger.innerHTML = '<span class="glass-select__value"></span>' + CHEVRON;
    var valueEl = trigger.firstChild;

    var menu = document.createElement('ul');
    menu.className = 'glass-select__menu';
    menu.id = listId;
    menu.setAttribute('role', 'listbox');

    var placeholder = '';
    var items = [];
    Array.prototype.forEach.call(select.options, function (option) {
      if (option.value === '') {
        placeholder = option.textContent;
        return;
      }
      var item = document.createElement('li');
      item.className = 'glass-select__option';
      item.id = listId + '-' + items.length;
      item.setAttribute('role', 'option');
      item.dataset.value = option.value;
      item.style.setProperty('--i', String(items.length));
      item.innerHTML = '<span class="glass-select__label"></span>' + CHECK;
      item.firstChild.textContent = option.textContent;
      menu.appendChild(item);
      items.push(item);
    });

    wrap.appendChild(trigger);
    // The list lives on <body> so the hero card's overflow clip can't cut it
    // off; it is positioned against the field whenever it opens.
    document.body.appendChild(menu);

    var active = -1;
    var api = { close: close, place: place, owns: owns };

    function isOpen() {
      return menu.classList.contains('is-open');
    }

    function owns(node) {
      return wrap.contains(node) || menu.contains(node);
    }

    // Below the field, or above it when there is more room there (never under
    // the fixed navbar). Page coordinates, so the list scrolls with the page.
    function place() {
      var box = trigger.getBoundingClientRect();
      var navbar = document.querySelector('.navbar');
      var top = navbar ? navbar.getBoundingClientRect().bottom : 0;
      menu.style.minWidth = box.width + 'px';
      var height = menu.offsetHeight;
      var width = menu.offsetWidth;
      var below = window.innerHeight - box.bottom - 12;
      var above = box.top - top - 12;
      var up = height > below && above > below;
      menu.classList.toggle('opens-up', up);
      var row = wrap.parentElement.getBoundingClientRect();
      var left = box.left + width > row.right ? box.right - width : box.left;
      menu.style.left = left + window.scrollX + 'px';
      menu.style.top = (up ? box.top - 6 - height : box.bottom + 6) + window.scrollY + 'px';
    }

    function sync() {
      var option = select.options[select.selectedIndex];
      var chosen = select.value ? option.textContent : '';
      valueEl.textContent = chosen || placeholder;
      wrap.classList.toggle('is-placeholder', !chosen);
      trigger.setAttribute('aria-label', placeholder + (chosen ? ': ' + chosen : ''));
      items.forEach(function (item) {
        item.setAttribute('aria-selected', String(item.dataset.value === select.value));
      });
      if (chosen) wrap.classList.remove('is-invalid');
    }

    function setActive(index) {
      active = index;
      items.forEach(function (item, i) {
        item.classList.toggle('is-active', i === index);
      });
      if (index >= 0) {
        trigger.setAttribute('aria-activedescendant', items[index].id);
      } else {
        trigger.removeAttribute('aria-activedescendant');
      }
    }

    function open(fromKeyboard) {
      if (openOne && openOne !== api) openOne.close();
      place();
      wrap.classList.add('is-open');
      menu.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
      var selected = items.findIndex(function (item) { return item.dataset.value === select.value; });
      // Highlight only for keyboard use; on click/tap a highlight reads as selected.
      setActive(fromKeyboard ? Math.max(selected, 0) : -1);
      openOne = api;
    }

    function close() {
      wrap.classList.remove('is-open');
      menu.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
      setActive(-1);
      if (openOne === api) openOne = null;
    }

    function choose(item) {
      select.value = item.dataset.value;
      select.dispatchEvent(new Event('change', { bubbles: true }));
      close();
      trigger.focus();
    }

    trigger.addEventListener('click', function () {
      isOpen() ? close() : open(false);
    });

    trigger.addEventListener('keydown', function (event) {
      var key = event.key;
      if (key === 'ArrowDown' || key === 'ArrowUp') {
        event.preventDefault();
        if (!isOpen()) return open(true);
        var step = key === 'ArrowDown' ? 1 : -1;
        if (active < 0) setActive(step > 0 ? 0 : items.length - 1);
        else setActive((active + step + items.length) % items.length);
      } else if ((key === 'Home' || key === 'End') && isOpen()) {
        event.preventDefault();
        setActive(key === 'Home' ? 0 : items.length - 1);
      } else if (key === 'Enter' || key === ' ') {
        // Handled here (not by the button's click) so Space's keyup can't reopen it.
        event.preventDefault();
        if (isOpen() && active >= 0) choose(items[active]);
        else if (!isOpen()) open(true);
      } else if (key === 'Escape' && isOpen()) {
        event.preventDefault();
        close();
      } else if (key === 'Tab') {
        close();
      }
    });
    trigger.addEventListener('keyup', function (event) {
      if (event.key === ' ') event.preventDefault();
    });

    menu.addEventListener('mousemove', function (event) {
      var item = event.target.closest('.glass-select__option');
      if (item) setActive(items.indexOf(item));
    });
    menu.addEventListener('click', function (event) {
      var item = event.target.closest('.glass-select__option');
      if (item) choose(item);
    });

    select.addEventListener('change', sync);
    select.addEventListener('invalid', function () {
      wrap.classList.add('is-invalid');
    });

    sync();
  });

  document.addEventListener('click', function (event) {
    if (openOne && !openOne.owns(event.target)) openOne.close();
  });
  window.addEventListener('resize', function () {
    if (openOne) openOne.place();
  });
})();
`

/**
 * Phones only: a second copy of the background clip, shown whole at the bottom
 * of the card so the mascots are never cropped (see maddy-theme.css). Desktop
 * and tablet never need it, so it is not loaded there (preload="none"); it
 * starts when the viewport is phone-sized and stops if it grows past that.
 */
export const wholeVideoScript = `
(function () {
  var video = document.querySelector('.hero-media__video-whole');
  if (!video || !window.matchMedia) return;
  var phone = window.matchMedia('(max-width: 767px)');
  function sync() {
    if (phone.matches) {
      var started = video.play();
      if (started && started.catch) started.catch(function () {});
    } else {
      video.pause();
    }
  }
  if (phone.addEventListener) phone.addEventListener('change', sync);
  else phone.addListener(sync);
  sync();
})();
`
