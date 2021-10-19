import express from "express";
import "express-async-errors";
import * as userRepository from "../data/user.js";

export async function createUser(req, res) {
  const userData = req.body;
  const user = await userRepository.create(userData);
  if (!user) {
    return res.status(409).send("aleady exist Id");
  }
  res.status(201).json(user);
}

export async function loginUser(req, res) {
  const { username, password } = req.body;
  const user = await userRepository.login(username, password);
  if (!user) {
    return res.status(404).json(`Not found Id${id}`);
  }
  return res.status(200).json(user);
}

export async function Me(req, res) {
  const { token } = req.headers;
  console.log(req.headers.token);
  await userRepository.check(token);
  res.status(200).json("check");
}
