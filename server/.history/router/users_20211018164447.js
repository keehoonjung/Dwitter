import express from "express";
import "express-async-errors";
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

const router = express.Router();
