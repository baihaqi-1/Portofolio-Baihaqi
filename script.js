// Draw the waveform once on page load
const wave = document.querySelector('.wave path');
if (wave) wave.style.setProperty('--len', wave.getTotalLength());

// Header border on scroll
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile menu
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
const setMenu = (open) => {
  nav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
};
toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));

// Highlight the current section in the menu
const links = [...document.querySelectorAll('.nav-links a')];
links.forEach((a) => a.addEventListener('click', () => setMenu(false)));
const observer = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) {
      links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
    }
  }),
  { rootMargin: '-45% 0px -50% 0px' }
);
links.forEach((a) => {
  const section = document.querySelector(a.getAttribute('href'));
  if (section) observer.observe(section);
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
