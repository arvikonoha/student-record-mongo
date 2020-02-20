const Student = require("../../Schema/Student");

module.exports.insertStudent = async function(
  usn,
  fname,
  lname,
  department,
  sem,
  filename
) {
  try {
    return await Student.create({
      usn,
      fname,
      lname,
      department,
      sem,
      imageurl: filename
    });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.updateStudent = async function(
  usn,
  fname,
  lname,
  department,
  sem,
  oldusn
) {
  try {
    return await Student.updateOne(
      { usn: oldusn },
      {
        usn,
        fname,
        lname,
        department,
        sem
      }
    );
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.updateImage = async function(imageurl, usn) {
  try {
    return await Student.updateOne(
      { usn },
      {
        imageurl
      }
    );
  } catch (error) {
    throw new Error(error);
  }
};
