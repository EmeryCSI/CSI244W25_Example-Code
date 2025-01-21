//import our libraries
const express = require("express");
const cors = require("cors");
const path = require("path");
const apiKeyMiddleware = require("./myMiddleware");

//next we make an app
const app = express();
const PORT = 3000;

//Define Middleware
//middleware is simply functions that run on every request
app.use(express.json());
//This middleware is needed to get data from the request body
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//if you are middleware here it fires on EVERY request
//app.use(apiKeyMiddleware);

//sample data

let courses = [
  { id: 1, name: "CSI-100", teacher: "Lhoucine" },
  { id: 2, name: "CSI-144", teacher: "Dimpy" },
  { id: 3, name: "CSI-300", teacher: "Naser" },
];

//define endpoints
//GET is for retrieving data
//GET is the default request type
//GET pass data in the query string (req.query object)
//A GET request should NOT change or create any data
app.get("/", (req, res) => {
  res.send("Working");
});

//GET All Courses
app.get("/courses", (req, res) => {
  res.json(courses);
});
//GET just one course by id
//route parameter :param
//if a parameter is passed it will be available in req.params
//middleware can also be added to specific endpoints
app.get("/courses/:id", apiKeyMiddleware, (req, res) => {
  const id = req.params.id;
  console.log(id);
  const course = courses.find((c) => c.id === parseInt(id));
  //how do we check to see if we found anything
  //truthy falsy values
  if (!course) {
    return res.status(404).send("Course not found");
  }
  //we know we found a course
  res.json(course);
});

//GET request to serve a form
app.get("/courseform", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "courseForm.html"));
});

//POST request typically used to create a new record
//POST request passes data in the body
app.post("/courses", (req, res) => {
  console.log(req.body);
  const course = {
    id: courses.length + 1,
    name: req.body.name,
    teacher: req.body.teacher,
  };
  //add the course to the array
  courses.push(course);
  //after its added we send back a 201 (record created)
  res.status(201).json(course);
});

//Update a record - PUT Request (A combination of GetByID and Create)
//Put request takes in the ID of the record to be updated in the querystring(params)
//Put request takes in the data to update in the BODY
app.put("/courses/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  //get the record from the "database"
  const course = courses.find((c) => c.id === parseInt(id));
  //how do we check to see if we found anything
  //truthy falsy values
  if (!course) {
    return res.status(404).send("Course not found");
  }
  //update the record
  //Where is the new data?
  course.name = req.body.name;
  course.teacher = req.body.teacher;
  //send back the updated record
  res.json(course);
});

//First thing about delete: BE VERY CAREFUL WITH DELETE
//In the real world you have a simulated DELETE
//With delete an ID (primary key) comes in the query string
app.delete("/courses/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const course = courses.find((c) => c.id === parseInt(id));
  //how do we check to see if we found anything
  //truthy falsy values
  if (!course) {
    return res.status(404).send("Course not found");
  }
  const index = courses.indexOf(course);
  //remove one element from the array at the index
  courses.splice(index, 1);
  //send back a response letting them know it worked.
  res.send("Course Deleted");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
