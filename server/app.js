const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = 8000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Example at http://localhost:${port}`);
});
