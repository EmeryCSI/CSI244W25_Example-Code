//import express
const express = require("express");
const ownerController = require("../controllers/ownerController");

//make a router object
const router = express.Router();

//define our routes
//Get api/owners
router.get("/", ownerController.getAllOwners);
//get api/owners/:id
router.get("/:id", ownerController.getOwnerById);
//post api/owners
//create an owner - data comes in through the req body
router.post("/", ownerController.createOwner);
//put and delete

module.exports = router;
