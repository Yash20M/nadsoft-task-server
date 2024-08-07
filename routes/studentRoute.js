import express from "express";
import {
  addMarks,
  createStudent,
  deleteStudent,
  getAllStudents,
  student,
  updateStudent,
} from "../controller/studentController.js";

const router = express.Router();

router.post("/students", createStudent);
router.post("/marks", addMarks);

router.get("/all", getAllStudents);
router.get("/student/:id", student);

router.put("/update/:id", updateStudent);
router.delete("/delete/:id", deleteStudent)

export default router;
