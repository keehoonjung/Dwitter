import express from "express";
import "express-async-errors";
import * as userController from "../controller/user.js";

const router = express.Router();

router.post("/signup", userController.createUser);

router.post("/login", userController.loginUser);

router.post("/me", userController.Me);

export default router;
