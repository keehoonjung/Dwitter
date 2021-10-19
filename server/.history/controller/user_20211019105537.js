import express from "express";
import "express-async-errors";
import * as userRepository from "../data/user.js";

export async function createUser(req, res) {
  const { username, password, name, email, url } = req.body;
  const user = await userRepository.findByUsername(username);
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
  const username = await userRepository.check(token);
  res.status(200).json(username);
}
