import express from "express";
import "express-async-errors";
import * as userRepository from "../data/user.js";

router.post("/", (req, res, next) => {
  const { username, password, name, email, url } = req.body;
  console.log(req.body);
  const user = { username, password, name, email, url };
  if (users[username]) {
    return res.status(409).send("aleady exist Id");
  }
  users[username] = user;
  res.status(201).json(user);
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const user = users[id];
  if (!user) {
    return res.status(404).json(`Not found Id${id}`);
  }
  return res.status(200).json(user);
});
