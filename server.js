import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import channelRoutes from "./routes/channel.routes.js";
import videoRoutes from "./routes/video.routes.js";
import commentRoutes from "./routes/comment.routes.js";

// dotenv config
dotenv.config();

// Database connection
connectDB();

// APP
const app = express();

// Middlewares
app.use(cors({
    origin: "https://youtube-clone-kk.vercel.app/",
    credentials: true
}));
app.use(express.json());

// Routes middleware
app.use("/api/auth", authRoutes);
app.use("/api/channel", channelRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

app.get("/", (req, res) => {
    res.send("API Running");
})
// Port
const PORT = process.env.PORT || 5110;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})