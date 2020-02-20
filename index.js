const express = require("express");
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});
require("dotenv").config();

app.use(express.static("public"));
app.use("/", require("./routes/api/student/student"));
app.use("/", require("./routes/api/images/image-updates"));
app.use("/", require("./routes/view-students"));
app.use("/", require("./routes/edit-student"));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening to the port ${process.env.PORT || 3000}`);
});
