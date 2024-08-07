import Marks from "../models/marks.js";
import Student from "../models/studentModel.js";

const createStudent = async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const student = await Student.create({ name, age, email });
    res.status(201).send(student);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

const addMarks = async (req, res) => {
  try {
    const { studentId, english, math, science } = req.body;
    const marksEntry = await Marks.create({
      studentId,
      english,
      math,
      science,
    });

    res.status(201).send(marksEntry);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const { page = 1, limit = 3 } = req.query;

    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 3);

    const skip = (pageNumber - 1) * limitNumber;

    const totalCount = await Student.countDocuments();

    const students = await Student.find().skip(skip).limit(limitNumber);

    res.send({
      totalCount,
      totalPages: Math.ceil(totalCount / limitNumber),
      currentPage: pageNumber,
      students,
    });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};
const student = async (req, res) => {
  try {
    const studentId = req.params.id;

    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).send({ error: "Student not found" });
    }

    const marks = await Marks.find({ studentId });

    const studentWithMarks = {
      student,
      marks,
    };

    res.send(studentWithMarks);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, email } = req.body;

    
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, age, email },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).send({ error: "Student not found" });
    }

    res.send(updatedStudent);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const studentId = req.params.id;

    await Marks.deleteMany({ studentId });

    const result = await Student.findByIdAndDelete(studentId);

    if (!result) {
      return res.status(404).send({ error: "Student not found" });
    }

    res.send({ message: "Student and associated marks deleted successfully" });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

export {
  createStudent,
  addMarks,
  getAllStudents,
  student,
  updateStudent,
  deleteStudent,
};
