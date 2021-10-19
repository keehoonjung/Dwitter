import express from "express";
import "express-async-errors";
import { body } from "express-validator";
import * as tweetController from "../controller/tweet.js";
import { validate } from "../middleware/validator.js";

const router = express.Router();

const validateTweet = [
  body("text").trim().notEmpty().withMessage("type message"),
  validate,
];

router.get("/", tweetController.getTweets);

router.get("/:id", tweetController.getTweet);

router.post("/", validateTweet, tweetController.createTweet);

router.put("/:id", validateTweet, tweetController.updateTweet);

router.delete("/:id", tweetController.deleteTweet);

export default router;
