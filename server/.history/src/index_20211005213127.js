import express from "express";

const data = [
  {
    id: "12345",
    text: "Hello",
    createdAt: Date.now(),
    name: "JK",
    useranme: "SONG",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
  {
    id: "12345",
    text: "Hello",
    createdAt: Date.now(),
    name: "JK",
    useranme: "SONG",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
  {
    id: "12345",
    text: "Hello",
    createdAt: Date.now(),
    name: "JK",
    useranme: "SONG",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
];

const app = express();

app.get("/tweets", (req, res) => {});

app.listen(8080);
console.log("hello");
