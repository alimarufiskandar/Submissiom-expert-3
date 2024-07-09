const menu = document.getElementById('menu');
const drawer = document.getElementById('drawer');
const hero = document.getElementById('hero');
const main = document.getElementById('main');

menu.addEventListener('click', (e) => {
  drawer.classList.toggle('open');
  e.stopPropagation();
});
hero.addEventListener('click', () => {
  drawer.classList.remove('open');
});
main.addEventListener('click', () => {
  drawer.classList.remove('open');
});
