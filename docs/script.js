
AOS.init({ duration: 800, once: true });

particlesJS.load('particles-js', 'particles.json');

const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : '');
});
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}
