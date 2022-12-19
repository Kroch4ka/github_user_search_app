import api from './github.js'
import user from './user.js'

const renderAlertInSearch = (text) => {
  document.querySelector('.search_alert').textContent = text
}

const bindSearchHandlers = () => {
  document.querySelector('.search_btn').addEventListener('click', (e) => {
    e.preventDefault()
    const searchInput = document.querySelector('.search_input')
    if (searchInput.value) {
      api.getUserInfoByLogin(searchInput.value)
        .then(user.githubUserInfoAdapter)
        .then(user.renderUserInfo)
        .catch(e => renderAlertInSearch(e?.message || 'Something went wrong'))
    }
  })
}

export default {
  bindSearchHandlers
}