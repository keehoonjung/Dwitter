import express from "express";
import "express-async-errors";

const tweets = [
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

router.post("/", (req, res, next) => {
  const { text, username, name } = req.body;
});

export default router;
