console.log("Hello Express");
console.log("Hello Nodemon");
//We are now ready to use express
const express = require("express");
const os = require("os");
const path = require("path");
//Call the express constructor to create an app
const app = express();

//use the app to create endpoints
//app.reqType(path, callbackfunction)
//get request = Reading Data (the default request)
app.get("/", (req, res) => {
  //This function will run when a get request comes into the root
  //req contains information that came from the user
  //res is how you send things back
  console.log("Hit root endpoint");
  res.send("Hello from the root");
});
//lets use the os module to show some info about our machine
app.get("/system", (req, res) => {
  const sysObect = {
    platform: os.platform(),
    freemom: os.freemem(),
    release: os.release(),
    arch: os.arch(),
  };
  res.send(sysObect);
});
app.get("/query", (req, res) => {
  //If the user passes you any data in the url (query paramaters)
  //they will be in the req.query object
  console.log(req.query);
  const { firstName, lastName, phone } = req.query;
  res.send(
    `Your first name is ${firstName}, lastname: ${lastName}, phone: ${phone}`
  );
});
app.get("/index", (req, res) => {
  //sendFile(path of the file to send)
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
//listen on a port
app.listen(5001, () => {
  console.log(`Server started on http://localhost:5001`);
});
