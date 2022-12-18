export default class NetworkError extends Error {
  constructor(message, code) {
    super(`Code: ${code}. Status: ${message}`);
  }
}