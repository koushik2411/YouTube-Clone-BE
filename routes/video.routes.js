import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { createVideo, deleteVideo, dislikeVideo, getAllVideos, getMyVideos, getVideoById, likeVideo, updateVideo } from "../controllers/video.controller.js";

const router = express.Router();

// Get all videos
router.get("/", getAllVideos);

// Get channel videos
router.get("/my-videos", authMiddleware, getMyVideos);

// Get video by id
router.get("/:id", getVideoById);

// Create a video
router.post("/create", authMiddleware, createVideo);

// Update a video
router.put("/:id", authMiddleware, updateVideo);

// Delete a video
router.delete("/:id", authMiddleware, deleteVideo);

// Like
router.put("/like/:id", authMiddleware, likeVideo);

// Dislike
router.put("/dislike/:id", authMiddleware, dislikeVideo);

export default router;