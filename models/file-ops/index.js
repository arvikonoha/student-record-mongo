const fs = require("fs");

module.exports.fileDelete = async fileLocation =>
  new Promise((resolve, reject) => {
    fs.unlink(fileLocation, err => {
      if (err) reject(err);
      resolve({ success: true });
    });
  });
