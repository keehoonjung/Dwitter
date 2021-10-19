import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//password: abcd1234, hashed: $2b$10$CDdC9ioSc/oLCYQBGhqR5ee9.pG8fgFZBAsChbvLHkYcp2xwGNafq

let users = [
  {
    id: "1",
    username: "JK",
    password: "$2b$10$CDdC9ioSc/oLCYQBGhqR5ee9.pG8fgFZBAsChbvLHkYcp2xwGNafq",
    name: "JK",
    email: "kuku6471@naver.com",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
  {
    id: "2",
    username: "SONG",
    password: "$2b$10$CDdC9ioSc/oLCYQBGhqR5ee9.pG8fgFZBAsChbvLHkYcp2xwGNafq",
    name: "songsong",
    email: "kuku6471@naver.com",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
];

const secretKey = "KMduSUkyCVrT0WWWE!rlqzH2rOxK^li8";

export async function findByUsername(username) {
  return users.find((user) => user.username === username);
}

export async function findById(id) {
  return users.find((user) => user.id === id);
}

export async function create({ username, password, name, email, url }) {
  const user = {
    id: Date.now().toString(),
    username,
    password,
    name,
    email,
    url,
  };
  users.push(user);
  return user.id;
}

export async function check(token) {
  const username = jwt.verify(token, secretKey, (error, decoded) => {
    if (error) {
      throw new Error(error);
    }
    return decoded.username;
  });
  return { username, token };
}
