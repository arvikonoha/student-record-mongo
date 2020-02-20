const express = require("express");
const route = express.Router();
const path = require("path");
const upload = require("../../../util/file-config");
const modifyStudent = require("../../../models/db-operations/student/modifyStudent");

route.post("/api/student", upload.single("stdimg"), async (req, res) => {
  try {
    let { usn, fname, lname, department, sem } = req.body;
    let { filename } = req.file;
    let isInserted = await modifyStudent.insertStudent(
      usn,
      fname,
      lname,
      department,
      sem,
      path.join("uploads", filename)
    );
    if (isInserted) return res.redirect("/students");
  } catch (err) {
    console.log(err);
    res.render("errors", {
      message: err.sqlMessage
    });
  }
});

route.post("/api/student/:oldusn", async (req, res) => {
  try {
    let { usn, fname, lname, department, sem } = req.body;
    let { oldusn } = req.params;
    let isUpdated = await modifyStudent.updateStudent(
      usn,
      fname,
      lname,
      department,
      sem,
      oldusn
    );
    if (isUpdated) return res.redirect("/students");
  } catch (err) {
    console.log(err);
    res.render("errors", {
      message: err.sqlMessage
    });
  }
});

module.exports = route;
