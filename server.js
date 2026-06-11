import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import channelRoutes from "./routes/channel.routes.js";
import videoRoutes from "./routes/video.routes.js";

// dotenv config
dotenv.config();

// Database connection
connectDB();

// APP
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes middleware
app.use("/api/auth", authRoutes);
app.use("/api/channel", channelRoutes);
app.use("/api/videos", videoRoutes);

app.get("/", (req, res) => {
    res.send("API Running");
})
// Port
const PORT = process.env.PORT || 5110;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})