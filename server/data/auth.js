import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { db } from "../db/database.js";

export async function findByUsername(username) {
  return db
    .execute("SELECT * FROM users WHERE username=?", [username]) //
    .then((result) => result[0][0]);
}

export async function findById(id) {
  return db
    .execute("SELECT * FROM users WHERE id=?", [id]) //
    .then((result) => result[0][0]);
}

export async function create({ username, password, name, email, url }) {
  return db
    .execute(
      "INSERT INTO users (username, password, name, email, url) VALUES (?,?,?,?,?)",
      [username, password, name, email, url]
    )
    .then((result) => {
      return result[0].insertId;
    });
}
