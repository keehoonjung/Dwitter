export default class TweetService {
  constructor(http) {
    this.http = http;
  }
  getTweets = async (username = "") => {
    return await this.http.fetch(`/tweets?username=${username}`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2MzQ2MjIzNTExMTciLCJpYXQiOjE2MzQ2MjIzNTIsImV4cCI6MTYzNDc5NTE1Mn0.U29lRbr3-mXbRMh_pGrmkdZSIV1As0-lsk7BWB_greI",
      },
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
