import menu from './menu.json';
import menuCardTemplate from './templates/menu-card.hbs';

const menuList = document.querySelector('ul.js-menu');
const menuCardMarkup = createMenuCardsMarkup(menu);

menuList.insertAdjacentHTML('beforeend', menuCardMarkup);

function createMenuCardsMarkup(menu) {
    return menu.map(menuCardTemplate).join('');
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitch = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

console.log(body);

themeSwitch.addEventListener('change', onBodyThemeChange);

function onBodyThemeChange(e) {
    if (themeSwitch.hasAttribute('checked')) {
        themeSwitch.removeAttribute('checked');
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        return;
    }
    else {
        themeSwitch.setAttribute('checked', true);
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        return;
    }
}