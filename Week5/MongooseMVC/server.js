//try to get the connection string
require("dotenv").config();
//console.log(process.env.CONNECTION_STRING);
const ownerRoutes = require("./routes/ownerRoutes");
const propeteryRoutes = require("./routes/propertyRoutes");
//bring in modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

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
app.use("/api/owners", ownerRoutes);
app.use("/api/properties", propeteryRoutes);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
