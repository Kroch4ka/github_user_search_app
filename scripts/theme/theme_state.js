const LIGHT = Symbol('light')
const DARK = Symbol('dark')

let currentTheme = LIGHT

const switchTheme = () => {
  switch(currentTheme) {
    case LIGHT:
      currentTheme = DARK
      break
    case DARK:
      currentTheme = LIGHT
      break
    default:
      throw new Error('Undefined behavour!')
  }
}

const getCurrentTheme = () => currentTheme

export default {
  switchTheme,
  getCurrentTheme,
  LIGHT,
  DARK
}