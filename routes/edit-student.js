const express = require('express')
const route = express.Router()
const viewStudent = require('../models/db-operations/student/viewStudent')

route.get("/student/:usn", async (req, res) => {
  try {
    let {
      usn
    } = req.params
    let student = await viewStudent.displayStudent(usn)
    let [fetchedStudent] = student
    return res.render("edit-student", {
      student: fetchedStudent
    })
  } catch (err) {
    console.log(err);
    res.render("errors", {
      message: err.sqlMessage
    });
  }
})

module.exports = route