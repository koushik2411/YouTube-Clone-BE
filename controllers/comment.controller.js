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

// DELETE COMMENT
export const deleteComment = async (req, res) => {
    try {
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