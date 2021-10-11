export const getTweets = async () => {
  const tweets = await fetch("http://localhost:8080/tweets")
    .then((res) => res.json())
    .then((res) => res);

  return tweets;
};

export const getTweetById = async (id) => {
  const tweet = await fetch(`http://localhost:8080/tweets/${id}`) //
    .then((res) => res.json())
    .then((res) => res);

  return tweet;
};

export const postTweet = async (text, name, username) => {
  const tweet = await fetch("http://localhost:8080/tweets", {
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
  await fetch(`http://localhost:8080/tweets/${id}`, {
    method: "delete",
  }) //
    .then((response) => response.json())
    .then((data) => console.log(data));
};
