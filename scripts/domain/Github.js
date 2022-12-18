import NetworkError from '../errors/NetworkError.js';

export default class GitHub {
  static baseURL = 'https://api.github.com';

  static async getInfoByLogin(login) {
    const URL = `${this.baseURL}/users/${login}`;
    const response = await fetch(URL);
    if (response.ok) {
      return await response.json();
    }

    throw new NetworkError(response.statusText, response.status);
  }
}