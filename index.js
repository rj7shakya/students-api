const express = require("express");
const mongoose = require("mongoose");
const studentsRouter = require("./students");

const app = express();

app.use(express.json());
app.use("/", studentsRouter);

mongoose
  .connect(
    "mongodb+srv://rajad:acemmern@cluster0.tguvwip.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )

  .then((res) => {
    console.log("connected");
  })
  .catch((err) => console.log("err", err));

app.listen(3000, () => {
  console.log("listening at port 3000");
});
