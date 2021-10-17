const url = "http://localhost:8080/tweets";

export default class TweetService {
  constructor(http) {
    this.http = http;
  }
  getTweets = async (username = "") => {
    const response = await fetch(`${url}?username=${username}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    }
    return data;
  };

  getTweetsById = async (id) => {
    const response = await fetch(`${url}/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    }
    return data;
  };

  postTweet = async ({ text, name, username }) => {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, name, username }),
    });
    const data = await response.json();
    if (response.status !== 201) {
      throw new Error(data.message);
    }

    return data;
  };

  deleteTweet = async (id) => {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.status !== 204) {
      throw new Error("not deleted");
    }
  };

  updateTweet = async ({ id, text }) => {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
      }),
    });
    const data = response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    }
    return data;
  };
}
