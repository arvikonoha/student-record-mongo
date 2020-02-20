const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const certFileBuf = [
  fs.readFileSync(path.join(__dirname, "rds-combined-ca-bundle.pem"))
];

mongoose
  .connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch(err => console.log(err));

module.exports = mongoose;
