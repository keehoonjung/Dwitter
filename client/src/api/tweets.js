export default class TweetService {
  constructor(http, tokenStorage, socket) {
    this.http = http;
    this.tokenStorage = tokenStorage;
    this.socket = socket;
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

  postTweet = async ({ text }) => {
    return await this.http.fetch("/tweets", {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify({ text }),
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

  createOnSync(callback) {
    return this.socket.onSync("createTweet", callback);
  }

  deleteOnSync(callback) {
    return this.socket.onSync("deleteTweet", callback);
  }

  updateOnSync(callback) {
    return this.socket.onSync("updateTweet", callback);
  }
}
