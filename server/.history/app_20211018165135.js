import express from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import tweetsRoute from "./router/tweet.js";
import usersRoute from "./router/users.js";

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

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));

app.use("/tweets", tweetsRoute);
app.use("/users", usersRoute);

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

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(8080);
