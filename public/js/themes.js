let theme_tag = document.getElementById('theme')
let themes = [
  '/css/dark.css',
  '/css/light.css',
]
let theme_index = 0


function main() {
} main();


function swap_theme() {
  theme_index = theme_index + 1 == themes.length ? 0 : theme_index + 1
  theme_tag.setAttribute('href', themes[theme_index]);
}
