export default class TweetService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }
  getTweets = async (username = "") => {
    return await this.http.fetch(`/tweets?username=${username}`, {
      method: "GET",
      headers: this.getHeaders(),
    });
  };

  getTweetsById = async (id) => {
    return await this.http.fetch(`/tweets/${id}`, {
      method: "GET",
      headers: this.getHeaders(),
    });
  };

  postTweet = async ({ text, name, username }) => {
    return await this.http.fetch("/tweets", {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify({ text, name, username }),
    });
  };

  deleteTweet = async (id) => {
    await this.http.fetch(`/tweets/${id}`, {
      method: "DELETE",
      headers: this.getHeaders(),
    });
  };

  updateTweet = async ({ id, text }) => {
    return await this.http.fetch(`/tweets/${id}`, {
      method: "PUT",
      headers: this.getHeaders(),
      body: JSON.stringify({
        text,
      }),
    });
  };

  getHeaders() {
    const token = this.tokenStorage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
