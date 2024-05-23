const express = require("express");
const cors = require("cors");
const router = require("./routes/indexs.routes");
const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/todos";

mongoose.connect(url);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(3000);
