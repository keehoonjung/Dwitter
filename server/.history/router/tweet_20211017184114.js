import express from "express";
import "express-async-errors";

let tweets = [
  {
    id: "12345",
    text: "Hello",
    createdAt: Date.now(),
    name: "SONG",
    username: "SONG",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
  {
    id: "34144",
    text: "Hello",
    createdAt: Date.now(),
    name: "JK",
    username: "JK",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
  {
    id: "12333345",
    text: "Hello2",
    createdAt: Date.now(),
    name: "JK",
    username: "JK",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
];

const router = express.Router();

router.get("/", (req, res, next) => {
  const username = req.query.username;
  const data = userane
    ? tweets.filter((tweet) => tweet.username === username)
    : tweets;
  res.status(200).send(data);
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    res.status(200).send(tweet);
  } else {
    res.status(404).send({ message: `tweet id${id} not found` });
  }
});

router.post("/", (req, res, next) => {
  const { text, username, name } = req.body;
  const tweet = {
    id: Date.now.toString(),
    text,
    createdAt: Date.now(),
    name,
    username,
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  };
  tweets = [tweet, ...tweets];
  res.status(201).send(tweet);
});

router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const { text } = req.body;
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text === text;
  } else {
    res.status(404).send({ message: `tweet id${id} not found` });
  }
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  tweets = tweets.filter((tweet) => tweet.id !== id);
});

export default router;
