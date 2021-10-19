import express from "express";
import "express-async-errors";

let users = {
  JK: {
    username: "JK",
    password: "12345",
    name: "JK",
    email: "kuku6471@naver.com",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
  SONG: {
    username: "SONG",
    password: "12345",
    name: "songsong",
    email: "kuku6471@naver.com",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
};

const router = express.Router();

router.post("/", (req, res, next) => {
  const { username, password, name, email, url } = req.body;
  console.log(req.body);
  const user = { username, password, name, email, url };
  if (users[id]) {
    return res.status(409).send("aleady exist Id");
  }
  users[id] = user;
  res.status(201).json(user);
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const user = users[id];
  if (!user) {
    return res.status(404).json(`Not found Id${id}`);
  }
});

export default router;
