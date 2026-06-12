import CommentModel from "../models/Comment.model.js";

// ADD A COMMENT
export const addComment = async (req, res) => {
    try {
        const comment = await CommentModel.create({
            text: req.body.text,
            video: req.params.videoId,
            user: req.user.id,
        });

        res.status(201).json(comment);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// GET COMMENTS
export const getComments = async (req, res) => {
    try {
        const comments = await CommentModel.find({
            video: req.params.videoId,
        }).populate("user", "username");

        res.status(200).json(comments);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// EDIT COMMENT
export const updateComment = async (req, res) => {
    try {
        const comment = await CommentModel.findById(req.params.commentId);

        if (!comment) {
            return res.status(404).json({
                message: "Comment not found",
            });
        }

        if (comment.user.toString() !== req.user.id) {
            return res.status(403).json({
                message: "Unauthorized",
            })

        }

        comment.text = req.body.text;

        await comment.save();

        res.status(200).json(comment);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// DELETE COMMENT
export const deleteComment = async (req, res) => {
    try {

        const comment = await CommentModel.findById(req.params.commentId);

        if (!comment) {
            return res.status(404).json({
                message: "Comment not found",
            });
        }

        if (comment.user.toString() !== req.user.id) {
            return res.status(403).json({
                message: "Unauthorized",
            });
        }

        await CommentModel.findByIdAndDelete(
            req.params.commentId
        );

        res.status(200).json({
            message: "Comment deleted",
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};