import { API_BASE_URL } from "./config";

export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers || {};
  }

  _getHeaders() {
    const token = localStorage.getItem("jwt");
    const headers = { ...this._headers };
    if (token) headers.Authorization = `Bearer ${token}`;
    return headers;
  }

  async _checkResponse(res) {
    if (res.ok) return res.json();
    const text = await res.text();

    let serverMessage = text;
    try {
      const parsed = JSON.parse(text);
      serverMessage = parsed.error || text;
    } catch (_) {}

    const error = new Error(`API error: ${res.status}`);
    error.status = res.status;
    error.serverMessage = serverMessage;
    throw error;
  }

  async signup(email, password, username) {
    const res = await fetch(`${this._baseUrl}/users/signup`, {
      method: "POST",
      headers: { ...this._getHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, username }),
    });
    return this._checkResponse(res);
  }

  async signin(email, password) {
    const res = await fetch(`${this._baseUrl}/users/signin`, {
      method: "POST",
      headers: { ...this._getHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return this._checkResponse(res);
  }

  async getUserInfo() {
    const res = await fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._getHeaders(),
    });
    return this._checkResponse(res);
  }
}

export const mainApi = new Api({
  baseUrl: API_BASE_URL,
});
