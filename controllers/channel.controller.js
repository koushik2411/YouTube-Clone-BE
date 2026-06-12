import ChannelModel from "../models/Channel.model.js";

// CREATE CHANNEL
export const createChannel = async (req, res) => {
    try {

        const existingChannel = await ChannelModel.findOne({
            owner: req.user.id,
        });
        
        if(existingChannel) {
            return res.status(400).json({
                message: "You already have a channel",
            });
        }

        const { channelName, description, channelBanner } = req.body;

        const channel = await ChannelModel.create({
            channelName,
            description,
            channelBanner,
            owner: req.user.id,
        });

        res.status(201).json(channel);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
};

// GET USER CHANNEL
export const getMyChannel = async (req, res) => {
    try {
        const channel = await ChannelModel.findOne({
            owner: req.user.id,
        });

        res.status(200).json(channel);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};