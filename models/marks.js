import mongoose from "mongoose";

const marksSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  english: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  math: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  science: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
});

const Marks = mongoose.model("Marks", marksSchema);

export default Marks;
