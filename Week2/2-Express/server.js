console.log("Hello Nodemon");
console.log("Hot Reload");
//1. import express
const express = require("express");
const os = require("os");
const path = require("path");
//2. next we create an instance of express - app
const app = express();

//3. Setup middleware (middleware is code that runs on every request)
app.use(express.json());

//4. define our routes- we use the app object
app.get("/", (req, res) => {
  //This is the function that runs when a get request comes into the root
  //req contains information from the user, res send information back
  console.log("Hit the root");
  res.send("Hello from the root");
});
//lets try to send some json
app.get("/system", (req, res) => {
  const sysObject = {
    platform: os.platform(),
    freemem: os.freemem(),
    release: os.release(),
    arch: os.arch(),
  };
  res.json(sysObject);
});
//sendfile()
app.get("/index", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "html", "index.html"));
});
//the query object inside of request and contains information passed in the url (querystring)
app.get("/query", (req, res) => {
  //you can destructure query object
  const { fname, lname, phone } = req.query;
  console.log(`Phone is ${phone}`);
  res.json(req.query);
});
//5. listen on port
app.listen(5001, () => {
  console.log(`Server started on port 5001`);
});
