export default class TweetService {
  constructor(http) {
    this.http = http;
  }
  getTweets = async (username = "") => {
    return await this.http.fetch(`/tweets?username=${username}`, {
      method: "GET",
    });
  };

  getTweetsById = async (id) => {
    return await this.http.fetch(`/tweets/${id}`, {
      method: "GET",
    });
  };

  postTweet = async ({ text, name, username }) => {
    return await this.http.fetch("/tweets", {
      method: "POST",
      body: JSON.stringify({ text, name, username }),
    });
  };

  deleteTweet = async (id) => {
    return await this.http.fetch(`/tweets/${id}`, {
      method: "DELETE",
    });
  };

  updateTweet = async ({ id, text }) => {
    return await this.http.fetch(`/tweets/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        text,
      }),
    });
  };
}
