import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { createChannel, getMyChannel } from "../controllers/channel.controller.js";

const router = express.Router();

// Creating a channel
router.post("/create", authMiddleware, createChannel);

// Getting a channel
router.get("/my-channel", authMiddleware, getMyChannel);

export default router;