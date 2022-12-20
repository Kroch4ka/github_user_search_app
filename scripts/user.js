const githubUserInfoAdapter = (gitHubUserData) => {
  return {
    name: gitHubUserData.name,
    login: gitHubUserData.login,
    avatar_url: gitHubUserData.avatar_url,
    created_at: gitHubUserData.created_at,
    bio: gitHubUserData.bio,
    public_repos: gitHubUserData.public_repos,
    followers: gitHubUserData.followers,
    following: gitHubUserData.following,
    location: gitHubUserData.location,
    twitter_username: gitHubUserData.twitter_username,
    blog: gitHubUserData.blog,
    company: gitHubUserData.company
  }
}

const renderName = (userData) => {
  const name = userData.name || userData.login
  document.querySelector('[data-name]').textContent = name
}

const renderAvatar = (userData) => {
  const avatarUrl = userData.avatar_url
  const img = document.createElement('img')
  img.src = avatarUrl
  img.alt = 'User icon'
  document.querySelector('[data-icon]').replaceChildren(img)
}

const renderLogin = (userData) => {
  const login = userData.login
  document.querySelector('[data-login]').textContent = `@${login}`
}

const renderCreatedAt = (userData) => {
  const joinedAt = userData.created_at
  const [_, month, day, year] = new Date(joinedAt).toDateString().split(' ')
  const normalizedDate = `Joined ${day} ${month} ${year}`
  document.querySelector('[data-joined]').textContent = normalizedDate
}

const renderBio = (userData) => {
  const bio = userData.bio ?? 'This profile has no bio'
  document.querySelector('[data-bio]').textContent = bio
}

const renderStatistics = (userData) => {
  const repos = userData.public_repos
  const followers = userData.followers
  const following = userData.following
  document.querySelector('[data-repos-count]').textContent = repos
  document.querySelector('[data-followers-count]').textContent = followers
  document.querySelector('[data-following-count]').textContent = following
}

const renderNotAvailableSocialLink = (dataLinkAttribute) => {
  const linkNode = document.querySelector(`[data-link="${dataLinkAttribute}"]`)
  linkNode.querySelector('.content').textContent = 'Not available'
  linkNode.classList.add('not_available')
}

const renderSocialLink = (dataLinkAttribute, textContent, href = null) => {
  const linkNode = document.querySelector(`[data-link="${dataLinkAttribute}"]`)
  if (!href) {
    const span = document.createElement('span')
    span.textContent = textContent
    linkNode.querySelector('.content').replaceChildren(span)
  } else {
    const a = document.createElement('a')
    a.textContent = textContent
    a.href = href
    linkNode.querySelector('.content').replaceChildren(a)
  }
}

const renderLocationLink = (userData) => {
  const location = userData.location
  if (!location) {
    renderNotAvailableSocialLink('location')
  } else {
    renderSocialLink('location', location)
  }
}

const renderTwitterLink = (userData) => {
  const twitterUsername = userData.twitter_username
  if (!twitterUsername) {
    renderNotAvailableSocialLink('twitter')
  } else {
    const twitterLink = `https://twitter.com/${twitterUsername}`
    const twitterTitle = `@${twitterUsername}`
    renderSocialLink('twitter', twitterTitle, twitterLink)
  }
}

const renderBlogLink = (userData) => {
  const blog = userData.blog
  if (!blog) {
    renderNotAvailableSocialLink('website')
  } else {
    renderSocialLink('website', blog, blog)
  }
}

const renderCompanyLink = (userData) => {
  const company = userData.company
  if (!company) {
    renderNotAvailableSocialLink('company')
  } else {
    renderSocialLink('company', company)
  }
}

const renderUserInfo = (userData) => {
  renderName(userData)
  renderLogin(userData)
  renderAvatar(userData)
  renderCreatedAt(userData)
  renderBio(userData)
  renderStatistics(userData)
  renderLocationLink(userData)
  renderTwitterLink(userData)
  renderBlogLink(userData)
  renderCompanyLink(userData)
}

export default {
  githubUserInfoAdapter,
  renderUserInfo
}