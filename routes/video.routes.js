import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { createVideo, deleteVideo, getAllVideos, getMyVideos, updateVideo } from "../controllers/video.controller.js";

const router = express.Router();

// Get all videos
router.get("/", getAllVideos);

// Get channel videos
router.get("/my-videos", authMiddleware, getMyVideos);

// Create a video
router.post("/create", authMiddleware, createVideo);

// Update a video
router.put("/:id", authMiddleware, updateVideo);

// Delete a video
router.delete("/:id", authMiddleware, deleteVideo);

export default router;