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
  const { text } = req.body;
  const tweet = await tweetRepository.create(text, req.userId);
  res.status(201).json(tweet);
}

export async function updateTweet(req, res) {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = await tweetRepository.getById(id);
  if (!tweet) {
    res.status(404).json({ message: `tweet id${id} not found` });
  }
  if (tweet.userId !== req.userId) {
    res.sendstatus(403);
  }
  const updated = await tweetRepository.update(id, text, userId);
  res.status(200).json(updated);
}
export async function deleteTweet(req, res) {
  const id = req.params.id;
  const userId = req.userId;
  await tweetRepository.remove(id, userId);
  res.sendStatus(204);
}
