import menu from './menu.json';
import menuCardTemplate from './templates/menu-card.hbs';

const refs = {
    menuList: document.querySelector('ul.js-menu'),
    themeSwitch: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuCardMarkup = createMenuCardsMarkup(menu);

refs.menuList.insertAdjacentHTML('beforeend', menuCardMarkup);

function createMenuCardsMarkup(menu) {
    return menu.map(menuCardTemplate).join('');
}

refs.themeSwitch.addEventListener('change', onBodyThemeChange);

function onBodyThemeChange(e) {
    e.preventDefault();
    if (refs.themeSwitch.hasAttribute('checked')) {
        refs.themeSwitch.removeAttribute('checked');
        refs.body.classList.remove(Theme.DARK);
        refs.body.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
        return;
    }
    else {
        refs.themeSwitch.setAttribute('checked', true);
        refs.body.classList.remove(Theme.LIGHT);
        refs.body.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
        return;
    }
}

themeChooser();

function themeChooser() {
    const themeColor = localStorage.getItem('theme');

    if (themeColor && themeColor === Theme.DARK) {
        refs.themeSwitch.setAttribute('checked', true);
        refs.body.classList.add(Theme.DARK);
        return;
    }
}
