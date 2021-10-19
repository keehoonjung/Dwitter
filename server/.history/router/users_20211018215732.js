import express from "express";
import "express-async-errors";
import * as userController from "../controller/user.js";

const router = express.Router();

router.post("/auth/signup", userController.createUser);

router.get("/auth/login", userController.getUser);

export default router;
