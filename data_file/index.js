const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 3781;
const url = "mongodb://localhost/RemarkDB";
const CodeLab = require("./Router/router");
const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log(`Everything is working fine!`);
});

app.use(cors());
app.use(express.json());
app.use("/", CodeLab);

app.listen(PORT, () => {
  console.log(`This  is the PORT: ${PORT}`);
});
