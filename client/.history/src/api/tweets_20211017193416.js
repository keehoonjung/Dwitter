const url = "http://localhost:8080/tweets";

export const getTweets = async (username = "") => {
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

export const getTweetsById = async (id) => {
  const tweet = await fetch(`${url}/${id}`) //
    .then((res) => res.json())
    .then((res) => res);
  return tweet;
};

export const postTweet = async ({ text, name, username }) => {
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
