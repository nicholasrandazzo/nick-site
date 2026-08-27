(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      toggle.textContent = isOpen ? 'Menu' : 'Close';
      nav.classList.toggle('open', !isOpen);
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
        nav.classList.remove('open');
      });
    });
  }

  document.querySelectorAll('[data-year]').forEach(function (element) {
    element.textContent = String(new Date().getFullYear());
  });
})();
