import express from "express";
import "express-async-errors";
import * as userController from "../controller/auth.js";

const router = express.Router();

router.post("/signup", userController.createUser);

router.post("/login", userController.loginUser);

router.get("/me", userController.Me);

export default router;
