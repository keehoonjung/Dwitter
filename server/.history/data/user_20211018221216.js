import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

let users = {
  JK: {
    username: "JK",
    password: "12345",
    name: "JK",
    email: "kuku6471@naver.com",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
  SONG: {
    username: "SONG",
    password: "12345",
    name: "songsong",
    email: "kuku6471@naver.com",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
};

const secretKey = "KMduSUkyCVrT0WWWE!rlqzH2rOxK^li8";

export function create(userData) {
  const username = userData.username;
  if (users[username]) {
    return;
  }
  const token = jwt.sign({ username }, secretKey);
  users[username] = userData;
  return userData;
}

export function find(id) {
  return users[id];
}
