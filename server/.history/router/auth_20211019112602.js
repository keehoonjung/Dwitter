import express from "express";
import "express-async-errors";
import { body } from "express-validator";
import * as userController from "../controller/auth.js";

const router = express.Router();

const validateLogin = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("username should be at least 1 characters"),
];

router.post("/signup", userController.createUser);

router.post("/login", userController.loginUser);

router.get("/me", userController.Me);

export default router;
