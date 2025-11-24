const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
const form = document.getElementById('contact-form');
const scrollLinks = document.querySelectorAll('a[href^="#"]');

navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

scrollLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href')?.substring(1);
    if (!targetId) return;

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navLinks?.classList.remove('open');

      if (targetId === 'contact-form') {
        const nameInput = document.getElementById('name');
        if (nameInput) {
          nameInput.focus({ preventScroll: true });
        }
      }
    }
  });
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = form.querySelector('#name');
  const name = nameInput && 'value' in nameInput ? nameInput.value : 'гость';

  const message = document.createElement('div');
  message.className = 'toast';
  message.textContent = `Спасибо, ${name}! Мы свяжемся с вами в ближайшее время.`;
  document.body.appendChild(message);

  setTimeout(() => message.classList.add('show'), 10);
  setTimeout(() => {
    message.classList.remove('show');
    setTimeout(() => message.remove(), 300);
  }, 3200);

  form.reset();
});
