import express from "express";
import "express-async-errors";
import * as tweetController from "../controller/tweet.js";

const router = express.Router();

router.get("/", tweetController.getTweets);

router.get("/:id", tweetController.getTweet);

router.post("/", tweetController.createTweet);

router.put("/:id", tweetController.updateTweet);

router.delete("/:id", tweetController.deleteTweet);

export default router;
