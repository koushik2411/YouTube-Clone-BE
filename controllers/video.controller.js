import VideoModel from "../models/Video.model.js";
import ChannelModel from "../models/Channel.model.js";

// CREATE VIDEO
export const createVideo = async (req, res) => {
    try {
        const channel = await ChannelModel.findOne({
            owner: req.user.id,
        });

        // Check for channel
        if (!channel) {
            return res.status(404).json({
                message: "Create channel first",
            });
        }

        const video = await VideoModel.create({
            ...req.body,
            channel: channel.id,
            uploader: req.user.id,
        });

        res.status(201).json(video);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// GET CHANNEL VIDEOS
export const getMyVideos = async (req, res) => {
    try {
        const videos = await VideoModel.find({
            uploader: req.user.id,
        });

        res.status(200).json(videos);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// UPDATE VIDEO
export const updateVideo = async (req, res) => {
    try {
        const video = await VideoModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );

        res.status(200).json(video);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// DELETE VIDEO
export const deleteVideo = async (req, res) => {
    try {
        await VideoModel.findByIdAndDelete(
            req.params.id
        );

        res.status(200).json({
            message: "Video Deleted",
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// GET ALL VIDEOS
export const getAllVideos = async (req, res) => {
    try {
        const videos = await VideoModel.find().populate("channel", "channelName");

        res.status(200).json(videos);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// GET VIDEO BY ID
export const getVideoById = async (req, res) => {
    try {
        const video = await VideoModel.findById(req.params.id).populate("channel", "channelName");

        res.status(200).json(video);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};