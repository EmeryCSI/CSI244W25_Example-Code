//import the property model
const Property = require("../models/property");
const Owner = require("../models/owner");

//get all properties
//you can add things to exports
//and then skip the exports statement
//GET - /api/properties
exports.getAllProperties = async (req, res) => {
  try {
    //find() takes a filter object and returns all records that match
    //if it is passed nothing it returns everything
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    //send them a 500(badRequest)
    res.status(500).json({ message: error.message });
  }
};
//GET - /api/properties/:id
exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.json(property);
  } catch (error) {
    //send them a 500(badRequest)
    res.status(500).json({ message: error.message });
  }
};
//Update a property
//PUT - api/properties/:id
exports.updateProperty = async (req, res) => {
  const id = req.params.id;
  const input = req.body;
  try {
    const property = await Property.findByIdAndUpdate(id, input);
    res.json(property);
  } catch (error) {
    //send them a 500(badRequest)
    res.status(500).json({ message: error.message });
  }
};

//Create a property
//POST - /api/property/owner/:ownerid
exports.createProperty = async (req, res) => {
  console.log("Create Property");
  console.log(req.params);
  console.log(req.body);
  const input = req.body;
  //create a new instance of Property
  //object destructuring
  //make a new property with everything from input but add the ownerid to owner
  const property = new Property({ ...input, owner: req.params.ownerid });
  try {
    const newProperty = await property.save();
    res.status(201).json(newProperty);
  } catch (error) {
    //send them a 500(badRequest)
    res.status(500).json({ message: error.message });
  }
};

//Get properties by ownerId
//GET - /api/properties/owner/:ownerId
exports.getPropertiesByOwnerId = async (req, res) => {
  console.log("Getting properties by ownerId");
  const ownerId = req.params.ownerid;
  console.log("Owner ID:", ownerId);
  try {
    const owner = await Owner.findById(ownerId);
    const properties = await Property.find({ owner: owner }).populate("owner");
    if (properties.length === 0) {
      return res
        .status(404)
        .json({ message: "No properties found for this owner" });
    }
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
