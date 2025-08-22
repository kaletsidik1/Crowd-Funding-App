import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { authRouter } from "./routes/auth.js";

config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
