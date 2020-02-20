const mongoose = require("../../util/db-config");

const StudentSchema = mongoose.Schema({
  usn: {
    type: String,
    required: true,
    unique: true
  },
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  sem: {
    type: Number,
    required: true
  },
  imageurl: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Student", StudentSchema);
