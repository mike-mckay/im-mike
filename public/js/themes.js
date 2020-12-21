import {get_cookie, set_cookie} from './cookies.js';

let themes = [
  { href: '/css/dark.css', icon: 'dark_mode' },
  { href: '/css/light.css', icon: 'light_mode' }
];
let theme_tag = document.getElementById('theme');
let theme_icon = document.getElementById('theme_icon');
let theme_index = 0;


function setup() {
  theme_index = get_cookie("theme") == "" ? 0 : parseInt(get_cookie("theme"))
  set_theme(theme_index)
} setup();


function set_theme(index) {
  theme_tag.setAttribute('href', themes[theme_index].href);
  theme_icon.innerHTML = themes[theme_index].icon;
  set_cookie("theme", theme_index, 365)
}


function swap_theme() {
  theme_index = theme_index + 1 == themes.length ? 0 : theme_index + 1
  set_theme(theme_index)
} window.swap_theme = swap_theme;
