const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const topButton = document.getElementById('top-button');

hamburger?.addEventListener('click', () => {
  const isOpen = navbar.classList.toggle('show');
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

navbar?.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    navbar.classList.remove('show');
    hamburger?.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('click', (event) => {
  if (!navbar?.classList.contains('show')) return;
  if (navbar.contains(event.target) || hamburger?.contains(event.target)) return;

  navbar.classList.remove('show');
  hamburger?.setAttribute('aria-expanded', 'false');
});

topButton?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
