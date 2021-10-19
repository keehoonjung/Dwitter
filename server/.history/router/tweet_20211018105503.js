import express from "express";
import "express-async-errors";
import * as tweetController from "../controller/tweet.js";
import { validate } from "../middleware/validator.js";

const router = express.Router();

const validateTweet = [
  body("text").trim().notEmpty().withMessage("type message"),
  body("username").trim().isLength({ min: 2 }).withMessage("minimum 2 words"),
  body("name").trim().isLength({ min: 2 }).withMessage("minimum 2 words"),
  validate,
];

router.get("/", tweetController.getTweets);

router.get("/:id", tweetController.getTweet);

router.post(
  "/",
  tweetController.createTweetValidator,
  tweetController.createTweet
);

router.put("/:id", tweetController.updateTweet);

router.delete("/:id", tweetController.deleteTweet);

export default router;
