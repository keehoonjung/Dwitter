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
  body("password")
    .trim()
    .isLength({ min: 5 })
    .withMessage("password should be at least 5 characters"),
];

router.post("/signup", userController.createUser);

router.post("/login", userController.loginUser);

router.get("/me", userController.Me);

export default router;
