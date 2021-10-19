import express from "express";
import "express-async-errors";
import * as userController from "../controller/user.js";

const router = express.Router();

router.post("/", userController.createUser);

router.get("/:id", userController.getUser);

export default router;
