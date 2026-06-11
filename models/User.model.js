import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            minlength: 3,
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            required: true,
            minlength: 6,
        },

        avatar: {
            type: String,
            default: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        },

        channels: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Channel",
            },
        ],
    },

    {
        timestamps: true,
    }
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;