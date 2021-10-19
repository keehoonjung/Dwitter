import express from "express";
import "express-async-errors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as userRepository from "../data/user.js";

const jwtSecretKey = "KMduSUkyCVrT0WWWE!rlqzH2rOxK^li8";
const jwtExpiresInDays = "2d";
const bcryptSaltRounds = 12;

export async function createUser(req, res) {
  const { username, password, name, email, url } = req.body;
  const user = await userRepository.findByUsername(username);
  if (!user) {
    return res.status(409).json({ message: `${username} aleady exist Id` });
  }
  const user = await userRepository.create(userData);
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

function createJwtToken(userId) {
  const token = jwt.sign(userId, jwtSecretKey, { expiresIn: jwtExpiresInDays });
}
