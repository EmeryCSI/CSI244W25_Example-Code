//try to get the connection string
require("dotenv").config();
//console.log(process.env.CONNECTION_STRING);
//bring in modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user");

const PORT = process.env.PORT || 3000;

//create an app
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//establish connection with mongoose
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.error(`Error connecting ${err}`));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
