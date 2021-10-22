import express from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import tweetsRoute from "./router/tweet.js";
import usersRoute from "./router/auth.js";
import { config } from "./config.js";
import { initSocket } from "./connection/socket.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));

app.use("/tweets", tweetsRoute);
app.use("/auth", usersRoute);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

const server = app.listen(config.host.port);
initSocket(server);
