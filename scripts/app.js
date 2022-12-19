import theme from './theme/theme.js'
import search from './search.js'
import user from './user.js'
import github from './github.js'

const preloadUserLogin = 'octocat'

const initialize = () => {
  theme.bindSwitchThemeHandlers()
  search.bindSearchHandlers()
  theme.renderCurrentTheme()
  github.getUserInfoByLogin(preloadUserLogin)
    .then(user.renderUserInfo)
    .catch(console.log)
}

initialize()