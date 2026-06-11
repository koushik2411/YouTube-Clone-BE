import UserModel from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// REGISTER USER
export const registerUser = async (req, res) => {
    try {
        const { username, email, password, } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        // Check for existing user
        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await UserModel.create({
            username,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            message: "Registration successful",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// LOGIN USER
export const loginUser = async (req, res) => {
    try {
        const { email, password, } = req.body;

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid Credentials",
            });
        }

        const isMatch = await bcrypt.compare( password, user.password );

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Credentials",
            });
        }


        // Token
        const token = jwt.sign(
            {id: user.id},
            process.env.JWT_SECRET,
            {expiresIn: "3d",},
        );

        res.status(200).json({
            token,

            user: {
                id: user.id,
                username: user.username,
                email: user.email,
            }
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
};