(() => {
  'use strict';
  const button = document.querySelector('.mobile-menu');
  const nav = document.querySelector('.site-nav');
  if (!button || !nav) return;
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open', !expanded);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
  }));
})();

(() => {
  const carousel = document.querySelector('.photo-carousel');
  if (carousel) {
    const photos = ["DSCN0332.JPG", "DSCN0333.JPG", "DSCN0340.JPG", "DSCN0341.JPG", "DSCN0343.JPG", "DSCN0345.JPG", "DSCN0346.JPG", "DSCN0347.JPG", "DSCN0353.JPG", "DSCN0357.JPG", "DSCN0358.JPG", "DSCN0363.JPG", "DSCN0373.JPG", "DSCN0376.JPG", "DSCN0384.JPG", "DSCN0385.JPG", "DSCN0389.JPG", "DSCN0390.JPG", "DSCN0398.JPG", "DSCN0399.JPG", "DSCN0400.JPG", "DSCN0403.JPG", "DSCN0406.JPG", "DSCN0407.JPG", "DSCN0432.JPG"];
    const image = carousel.querySelector('img');
    const link = carousel.querySelector('.carousel-photo-link');
    const count = carousel.querySelector('.carousel-count');
    let current = 0;
    function showPhoto(index) {
      current = (index + photos.length) % photos.length;
      const path = 'imagens/casa/otimizadas/' + photos[current].replace('.JPG', '.webp');
      image.src = path;
      image.alt = `Foto ${current + 1} da casa da República Adega`;
      link.href = path;
      count.textContent = `${current + 1} / ${photos.length}`;
    }
    carousel.querySelector('.prev').addEventListener('click', () => showPhoto(current - 1));
    carousel.querySelector('.next').addEventListener('click', () => showPhoto(current + 1));
  }

  const map = document.querySelector('#location-map');
  if (!map) return;
  let selected = '';
  function showPlace(button) {
    const query = button.dataset.mapQuery;
    if (query === selected) return;
    selected = query;
    map.src = 'https://www.google.com/maps?q=' + encodeURIComponent(query) + '&output=embed';
    map.title = 'Mapa: ' + button.querySelector('strong').textContent + ' em Ouro Preto';
  }
  document.querySelectorAll('[data-map-query]').forEach(button => {
    button.addEventListener('mouseenter', () => showPlace(button));
    button.addEventListener('focus', () => showPlace(button));
    button.addEventListener('click', () => showPlace(button));
  });
})();

(() => {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const selectors = [
    '.site-header', '.sidebar-inner', '.page-main .section-kicker', '.page-main h1',
    '.page-main .section-title', '.page-main .section-intro', '.page-main .lead',
    '.about-description p', '.hero-actions', '.modern-timeline article', '.photo-carousel',
    '.vacancy-content p', '.vacancy-seal', '.map-frame', '.nearby-hint',
    '.nearby-grid > button', '.person-card', '.link-strip', '.footer-note',
    '.page-main > section > p:not(.section-intro):not(.lead)'
  ];
  const items = document.querySelectorAll(selectors.join(','));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('entrance-ready');
      entry.target.classList.remove('entrance-pending');
      observer.unobserve(entry.target);
    });
  }, {threshold: 0, rootMargin: '0px 0px -30px 0px'});
  items.forEach(item => { item.classList.add('entrance-pending'); observer.observe(item); });
})();
