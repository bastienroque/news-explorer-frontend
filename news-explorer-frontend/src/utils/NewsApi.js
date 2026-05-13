import { NEWS_API_BASE_URL, NEWS_API_KEY } from "./config";

export class NewsApi {
  constructor(options) {
    this._headers = options.headers || {};
  }

  _getHeaders() {
    return this._headers;
  }

  async _checkRes(res) {
    if (res.ok) return res.json();

    let userMessage = "Algo deu errado. Por favor, tente novamente.";

    switch (res.status) {
      case 401:
        userMessage =
          "Você não está autorizado. Por favor, faça login novamente.";
        break;
      case 404:
        userMessage = "Os dados solicitados não foram encontrados.";
        break;
      case 500:
        userMessage = "Erro no servidor. Por favor, tente mais tarde.";
        break;
    }

    throw new Error(userMessage);
  }

  async getNewsData(searchQuery) {
    try {
      const today = new Date();
      const pastDate = new Date();
      pastDate.setDate(today.getDate() - 7);
      const formatDate = (date) => date.toISOString().split("T")[0];
      const todayStr = formatDate(today);
      const pastStr = formatDate(pastDate);

      const params = new URLSearchParams({
        q: searchQuery,
        from: pastStr,
        to: todayStr,
        apiKey: NEWS_API_KEY,
        pageSize: 100,
      });

      const url = `${NEWS_API_BASE_URL}/everything?${params}`;

      const response = await fetch(url, {
        method: "GET",
        headers: this._getHeaders(),
      });

      const data = await this._checkRes(response);

      return data.articles;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export const newsApi = new NewsApi({});
