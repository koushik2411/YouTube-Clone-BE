import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { addComment, deleteComment, getComments } from "../controllers/comment.controller.js";

const router = express.Router();

// Get comments
router.get("/:videoId", getComments);

// Add comment
router.post("/:videoId", authMiddleware, addComment);

// Delete comment
router.delete("/:commentId", authMiddleware, deleteComment);

export default router;