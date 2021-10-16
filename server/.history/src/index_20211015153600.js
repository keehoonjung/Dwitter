import express from "express";
import cors from "cors";

let users = {
  JK: {
    username: "JK",
    password: "12345",
    name: "JK",
    email: "kuku6471@naver.com",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
  song: {
    username: "song",
    password: "12345",
    name: "songsong",
    email: "kuku6471@naver.com",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
};

let tweets = [
  {
    id: "12345",
    text: "Hello",
    createdAt: Date.now(),
    name: "SONG",
    username: "SONG",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
  {
    id: "34144",
    text: "Hello",
    createdAt: Date.now(),
    name: "JK",
    username: "JK",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
  {
    id: "12333345",
    text: "Hello2",
    createdAt: Date.now(),
    name: "JK",
    username: "JK",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
];

const app = express();

app.use(cors());

app.get("/tweets", (req, res) => {
  res.writeHead(200, { "Contet-Type": "application/json" });
  res.end(JSON.stringify(tweets));
});

app.get("/tweets/:id", (req, res) => {
  const id = req.params.id;
  const tweet = tweets.filter((tweet) => tweet.username === id);
  res.writeHead(200, { "Contet-Type": "application/json" });
  res.end(JSON.stringify(tweet));
});

app.post("/tweets", (req, res) => {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const tweet = JSON.parse(Buffer.concat(body).toString());
    tweet["id"] = Date.now().toString();
    tweet["createAt"] = Date.now();
    tweet["url"] = users.JK.url;
    tweets.splice(0, 0, tweet);
    res.status(201).send(tweet);
  });
});

app.put("/tweets/:id", (req, res) => {
  const id = req.params.id;
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const textdata = JSON.parse(Buffer.concat(body).toString());
    tweets.forEach((tweet) => {
      if (tweet.id === id) {
        tweet.text = textdata.text;
        res.status(200).send(tweet);
      }
    });
  });
});

app.delete("/tweets/:id", (req, res) => {
  const id = req.params.id;
  const newTweets = tweets.filter((tweet) => tweet.id !== id);
  console.log(newTweets);
  tweets = newTweets;
  res.status(200).send("delete");
});

app.listen(8080);

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.writeHead(200, { "Contet-Type": "application/json" });
  res.end(JSON.stringify(user));
});

app.post("/users", (req, res) => {
  const body = [];
  req.on("data", (chunk) => body.push(chunk));
  req.on("end", () => {
    const user = JSON.parse(Buffer.concat(body).toString());
    const id = user.username;
    if (users[id]) {
      return res.status(409).send("aleady exist Id");
    }
    users[id] = user;
    res.status(201).send(user);
  });
});
