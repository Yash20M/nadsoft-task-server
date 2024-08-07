import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import studentRouter from "./routes/studentRoute.js";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", studentRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
