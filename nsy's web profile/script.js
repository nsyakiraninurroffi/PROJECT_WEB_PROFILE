ScrollReveal().reveal('.section__title, .home__title, .home__subtitle, .about__data, .skills__data, .work__card, .contact__form, .contact__socials', {
  delay: 200,
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  reset: true
});

gsap.from('.nav__logo', { opacity: 0, y: -20, duration: 1, delay: 0.2 });
gsap.from('.nav__list li', {
  opacity: 0,
  y: -20,
  duration: 0.5,
  delay: 0.3,
  stagger: 0.1
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  this.reset();
});