const express = require('express')
const route = express.Router()

const viewStudent = require('../models/db-operations/student/viewStudent')

route.get('/students', async (req, res) => {
  try {
    let students = await viewStudent.displayStudents()
    return res.render('students', {
      students
    })
  } catch (err) {
    console.log(err)
  }
})

module.exports = route