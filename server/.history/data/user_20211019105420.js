import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//password: abcd1234, hashed: $2b$10$CDdC9ioSc/oLCYQBGhqR5ee9.pG8fgFZBAsChbvLHkYcp2xwGNafq

let users = [
  {
    username: "JK",
    password: "$2b$10$CDdC9ioSc/oLCYQBGhqR5ee9.pG8fgFZBAsChbvLHkYcp2xwGNafq",
    name: "JK",
    email: "kuku6471@naver.com",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
  {
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

export async function create(userData) {
  const username = userData.username;
  if (users[username]) {
    return;
  }
  const password = await bcrypt.hash(userData.password, 10);
  const token = jwt.sign({ username }, secretKey);
  users[username] = { ...userData, password };
  return { username, token };
}

export async function login(username, password) {
  const user = users[username];
  if (!user) {
    return;
  }
  const check = await bcrypt.compare(password, user.password);
  if (!check) {
    return;
  }
  const token = jwt.sign({ username }, secretKey);
  return { username, token };
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
