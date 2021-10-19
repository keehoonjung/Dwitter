import { body, validationResult } from "express-validator";
import * as tweetRepository from "../data/tweet.js";

export async function getTweets(req, res) {
  const username = req.query.username;
  const data = await (username
    ? tweetRepository.getAllByUsername(username)
    : tweetRepository.getAll());
  res.status(200).json(data);
}

export async function getTweet(req, res) {
  const id = req.params.id;
  const tweet = await tweetRepository.getById(id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `tweet id${id} not found` });
  }
}

export async function createTweet(req, res) {
  const { text, name, username } = req.body;
  const tweet = await tweetRepository.create(text, name, username);
  res.status(201).json(tweet);
}

export async function updateTweet(req, res) {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = await tweetRepository.update(id, text);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `tweet id${id} not found` });
  }
}
export async function deleteTweet(req, res) {
  const id = req.params.id;
  await tweetRepository.remove(id);
  res.sendStatus(204);
}

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array() });
};

const createTweetValidator = [
  body("username").trim().isLength({ min: 2 }).withMessage("minimum 2 words"),
  body("password").trim().isLength({ min: 5 }).withMessage("minimum 5 words"),
  body("name").trim().isLength({ min: 2 }).withMessage("minimum 2 words"),
  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("use email form")
    .normalizeEmail(),
  body("url").isURL().withMessage("using URL form"),
];
