import * as tweetRepository from "../data/tweet.js";

export function getTweets(req, res, next) {
    const username = req.query.username;
    const data = username
      ? tweetRepository.getAllByUsername(username)
      : tweetRepository.getAll();
    res.status(200).json(data);
  };
}
