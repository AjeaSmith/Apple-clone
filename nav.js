const menuButton = document.querySelector('#menu-btn');
const menu = document.querySelector('.mobile-menu');
addEventListener('click', () => {
	menu.style.display = menu.style.display !== 'block' ? 'block' : 'none';
});
