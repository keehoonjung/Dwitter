import express from "express";
import "express-async-errors";
import * as userRepository from "../data/user.js";

export function createUser(req, res) {
  const userData = req.body;
  console.log(userData);
  const user = userRepository.create(userData);
  if (!user) {
    return res.status(409).send("aleady exist Id");
  }
  res.status(201).json(user);
}

export function getUser(req, res) {
  const id = req.params.id;
  const user = userRepository.find(id);
  if (!user) {
    return res.status(404).json(`Not found Id${id}`);
  }
  return res.status(200).json(user);
}
