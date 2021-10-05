import express from "express";

const data = [
  {
    id: "12345",
    text: "Hello",
    createdAt: Date.now(),
    name: "SONG",
    useranme: "SONG",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
  {
    id: "34144",
    text: "Hello",
    createdAt: Date.now(),
    name: "JK",
    useranme: "JK",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
  {
    id: "12345",
    text: "Hello2",
    createdAt: Date.now(),
    name: "JK",
    useranme: "JK",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
];

const app = express();

app.get("/tweets", (req, res) => {
  res.writeHead(200, { "Contet-Type": "application/json" });
  res.end(JSON.stringify(data));
});

app.get("/tweets/:username", (req, res) => {
  const username = req.params;
  console.log(username);
});

app.listen(8080);
console.log("hello");
