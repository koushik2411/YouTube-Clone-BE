import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { addComment, deleteComment, getComments, updateComment } from "../controllers/comment.controller.js";

const router = express.Router();

// Get comments
router.get("/:videoId", getComments);

// Add comment
router.post("/:videoId", authMiddleware, addComment);

// Update comment
router.put("/:commentId", authMiddleware, updateComment);

// Delete comment
router.delete("/:commentId", authMiddleware, deleteComment);

export default router;