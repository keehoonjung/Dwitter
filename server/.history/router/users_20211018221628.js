import express from "express";
import "express-async-errors";
import * as userController from "../controller/user.js";

const router = express.Router();

router.post("/signup", userController.createUser);

router.post("/login", userController.getUser);

export default router;
