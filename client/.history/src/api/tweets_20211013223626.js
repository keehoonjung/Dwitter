const url = "http://localhost:8080/tweets";

export const getTweets = async (username) => {
  const tweets = await fetch(url / username)
    .then((res) => res.json())
    .then((res) => res);

  return tweets;
};

export const getTweetsByUsername = async (username) => {
  const tweets = await fetch(`url/${username}`) //
    .then((res) => res.json())
    .then((res) => res);

  return tweets;
};

export const getTweetById = async (id) => {
  const tweet = await fetch(`${url}/${id}`) //
    .then((res) => res.json())
    .then((res) => res);

  return tweet;
};

export const postTweet = async ({ text, name, username }) => {
  const tweet = await fetch(url, {
    method: "post",
    body: JSON.stringify({
      text,
      name,
      username,
    }),
  }) //
    .then((res) => res.json())
    .then((res) => res);

  return tweet;
};

export const deleteTweet = async (id) => {
  await fetch(`${url}/${id}`, {
    method: "delete",
  }); //
};

export const updateTweet = async ({ id, text }) => {
  const tweet = await fetch(`${url}/${id}`, {
    method: "put",
    body: JSON.stringify({
      text,
    }),
  }) //
    .then((res) => res.json())
    .then((res) => res);
  return tweet;
};
