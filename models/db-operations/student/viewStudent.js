// const dbConn = require('../../../util/db-config')
const Student = require("../../Schema/Student");

module.exports.displayStudents = async function() {
  try {
    return await Student.find({});
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.findFile = async function(usn) {
  try {
    return await Student.find({ usn }).select({ imageurl: 1, _id: 0 });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.displayStudent = async function(usn) {
  try {
    return await Student.find({ usn });
  } catch (error) {
    throw new Error(error);
  }
};
