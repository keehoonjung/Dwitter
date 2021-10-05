import express from "express";

let users = {
  JK: {
    name: "JK",
    useranme: "JK",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
  song: {
    name: "songsong",
    useranme: "song",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
};

let tweets = [
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
    id: "12333345",
    text: "Hello2",
    createdAt: Date.now(),
    name: "JK",
    useranme: "JK",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
];

const app = express();

app.get("/tweets", (req, res) => {
  const username = req.query.username;
  if (username) {
    const userTweet = tweets.filter((tweet) => tweet.useranme === username);
    return res.end(JSON.stringify(userTweet));
  }
  res.writeHead(200, { "Contet-Type": "application/json" });
  res.end(JSON.stringify(tweets));
});

app.get("/tweets/:id", (req, res) => {
  const id = req.params.id;
  const tweet = tweets.filter((tweet) => tweet.id === id);
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
    tweet["id"] = Date.now();
    tweet["createAt"] = Date.now();
    tweet["url"] = users.JK.url;
    tweets.push(tweet);
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
console.log("hello");
