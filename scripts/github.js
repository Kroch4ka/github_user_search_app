const getUserInfoByLogin = async(login) => {
  const baseURL = `https://api.github.com/users/${login}`
  const response = await fetch(baseURL)
  if (response.ok) {
    return await response.json()
  }
  if (response.status === 404) {
    throw {
      status: response.status,
      message: 'No results'
    }
  }
  throw {
    status: response.status,
    message: 'Something went wrong'
  }
}


export default {
  getUserInfoByLogin
}