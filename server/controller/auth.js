import express from "express";
import "express-async-errors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as userRepository from "../data/auth.js";
import { config } from "../config.js";

export async function signUp(req, res) {
  const { username, password, name, email, url } = req.body;
  const user = await userRepository.findByUsername(username);
  if (user) {
    return res.status(409).json({ message: `${username} aleady exist Id` });
  }
  const hashed = await bcrypt.hash(password, config.bcrypt.saltRounds);
  try {
    const userId = await userRepository.create({
      username,
      password: hashed,
      name,
      email,
      url,
    });
    const token = createJwtToken(userId);
    res.status(201).json({ token, username });
  } catch (error) {
    res.status(400).json(error);
  }
}

export async function loginUser(req, res) {
  const { username, password } = req.body;
  const user = await userRepository.findByUsername(username);
  if (!user) {
    return res.status(401).json({ message: "Invalid user or password" });
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ message: "Invalid user or password" });
  }
  const token = createJwtToken(user.id);
  return res.status(200).json({ token, username });
}

export async function Me(req, res) {
  const user = await userRepository.findById(req.userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ token: req.token, username: user.username });
}

function createJwtToken(id) {
  return jwt.sign({ id }, config.jwt.secret, {
    expiresIn: config.jwt.expiresInSec,
  });
}
