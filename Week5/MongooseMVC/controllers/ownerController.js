//import the owner model
const Owner = require("../models/owner");

//get all owners
//you can add things to exports
//and then skip the exports statement
//GET - /api/owners
exports.getAllOwners = async (req, res) => {
  try {
    //find() takes a filter object and returns all records that match
    //if it is passed nothing it returns everything
    const owners = await Owner.find();
    res.json(owners);
  } catch (error) {
    //send them a 500(badRequest)
    res.status(500).json({ message: error.message });
  }
};
//GET - /api/owners/:id
exports.getOwnerById = async (req, res) => {
  try {
    const owner = await Owner.findById(req.params.id);
    if (!owner) {
      return res.status(404).json({ message: "Owner not found" });
    }
    res.json(owner);
  } catch (error) {
    //send them a 500(badRequest)
    res.status(500).json({ message: error.message });
  }
};
//Update a owner
//PUT - api/owners/:id
exports.updateOwner = async (req, res) => {
  const id = req.params.id;
  const input = req.body;
  try {
    const owner = await Owner.findByIdAndUpdate(id, input);
    res.json(owner);
  } catch (error) {
    //send them a 500(badRequest)
    res.status(500).json({ message: error.message });
  }
};

//Create a owner
//POST - /api/owner
exports.createOwner = async (req, res) => {
  console.log("Owner Create");
  console.log(req.body);
  const input = req.body;
  //create a new instance of Owner
  const owner = new Owner(input);
  try {
    const newOwner = await owner.save();
    res.status(201).json(newOwner);
  } catch (error) {
    //send them a 500(badRequest)
    res.status(500).json({ message: error.message });
  }
};
