import * as userRepository from "../data/auth.js";

let tweets = [
  {
    id: "12345",
    text: "Hello",
    createdAt: Date.now(),
    userId: "2",
  },
  {
    id: "34144",
    text: "Hello",
    createdAt: Date.now(),
    userId: "1",
  },
  {
    id: "12333345",
    text: "Hello2",
    createdAt: Date.now(),
    userId: "1",
  },
];

export async function getAll() {
  return Promise.all(
    tweets.map(async (tweet) => {
      const { username, name, url } = await userRepository.findById(
        tweet.userId
      );
      return { ...tweet, username, name, url };
    })
  );
}

export async function getAllByUsername(username) {
  return getAll().then((tweets) =>
    tweets.filter((tweet) => tweet.username === username)
  );
}

export async function getById(id) {
  const found = tweets.find((tweet) => tweet.id === id);
  if (!found) {
    return null;
  }
  const { username, name, url } = await userRepository.findById(found.userId);
  return { ...found, username, name, url };
}

export async function create(text, userId) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: Date.now(),
    userId,
  };
  tweets = [tweet, ...tweets];
  return getById(tweet.id);
}

export async function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return getById(tweet.id);
}

export async function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
}
