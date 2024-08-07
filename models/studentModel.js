import mongoose, { Schema } from "mongoose";

const studentsSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
});

const Student = mongoose.model("Student", studentsSchema);

export default Student;
