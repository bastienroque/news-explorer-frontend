export class NewsApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async _checkRes(res) {
    if (res.ok) return res.json();
    throw new Error("Request failed");
  }

  async getNewsData(searchQuery) {
    try {
      const url = `${this.baseUrl}/news?q=${searchQuery}`;

      const response = await fetch(url);

      const data = await this._checkRes(response);

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
