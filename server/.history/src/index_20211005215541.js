import express from "express";

const tweets = [
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
  const username = req.query.username;
  if (username) {
    const userTweet = tweets.filter((tweet) => tweet.useranme === username);
    return res.end(JSON.stringify(userTweet));
  }
  res.writeHead(200, { "Contet-Type": "application/json" });
  res.end(JSON.stringify(tweets));
});

app.get("/tweets", (req, res) => {
  const username = req.query.username;
  console.log(username);
  const userTweet = tweets.filter((tweet) => tweet.useranme === username);
  res.writeHead(200, { "Contet-Type": "application/json" });
  res.end(JSON.stringify(userTweet));
});

app.post("/tweets", (req, res) => {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const tweet = JSON.parse(Buffer.concat(body).toString()); //따라서 버퍼로 전송된 데이터를 다시 JSON으로 변경해서 우리가 원하는 곳에 추가해줘야한다.
    tweet["id"] = Date.now();
    tweet["createAt"] = Date.now();
    tweet["url"] =
      "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg";
    console.log(tweet);
    tweets.push(tweet);
    res.status(201).send(tweet);
  });
});

app.listen(8080);
console.log("hello");
