const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
const form = document.getElementById('contact-form');

navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
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
