import theme from './theme_state.js'

const themeTitleNode = document.querySelector('.theme_toggler .theme_title')
const themeIconNode = document.querySelector('.theme_toggler .theme_icon')

const switchToDarkTheme = () => {
  themeTitleNode.textContent = 'Light'
  themeIconNode.querySelector('[data-theme-dark]').style.display = 'none'
  themeIconNode.querySelector('[data-theme-light]').style.display = 'block'
  document.body.classList.add('dark')
}

const switchToLightTheme = () => {
  themeTitleNode.textContent = 'Dark'
  themeIconNode.querySelector('[data-theme-dark]').style.display = 'block'
  themeIconNode.querySelector('[data-theme-light]').style.display = 'none'
  document.body.classList.remove('dark')
}

const renderCurrentTheme = () => {
  if (theme.getCurrentTheme() === theme.LIGHT) {
    switchToLightTheme()
  } else if (theme.getCurrentTheme() === theme.DARK) {
    switchToDarkTheme()
  }
}

const bindSwitchThemeHandlers = () => {
  document.querySelector('.theme_toggler').addEventListener('click', () => {
    theme.switchTheme()
    renderCurrentTheme()
  })
}


export default {
  renderCurrentTheme,
  bindSwitchThemeHandlers
}