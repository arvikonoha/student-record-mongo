const express = require("express");
const route = express.Router();
const path = require("path");
const upload = require("../../../util/file-config");
const modifyStudent = require("../../../models/db-operations/student/modifyStudent");
const viewStudent = require("../../../models/db-operations/student/viewStudent");
const updateFiles = require("../../../models/file-ops/index");

route.post("/api/image/:usn", upload.single("stdimg"), async (req, res) => {
  try {
    let { usn } = req.params;
    let { filename } = req.file;
    let [{ imageurl }] = await viewStudent.findFile(usn);
    let isDeleted = await updateFiles.fileDelete(path.join("public", imageurl));
    if (isDeleted.success) {
      let isUpdated = await modifyStudent.updateImage(
        path.join("uploads", filename),
        usn
      );
      if (isUpdated) return res.redirect("/students");
    }
  } catch (err) {
    console.log(err);
    res.render("errors", {
      message: err.sqlMessage
    });
  }
});

module.exports = route;
