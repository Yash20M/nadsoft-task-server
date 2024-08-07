import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/nadsoft")
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.error("MongoDB connection error: ", err));
};

export default connectDB;
