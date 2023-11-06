import { Router } from "express";
const pet = Router();
import Pet from "../models/petModel.js";
import isAuthenticated from "../utils/isAuthenticated.js";

// Get All Pets
pet.get("/", isAuthenticated, async (req, res) => {
  try {
    res.json(await Pet.find());
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get data" });
  }
});

// Get All Pets of a Specific User
pet.get("/user/:user_id", isAuthenticated, async (req, res) => {
  try {
    res.json(await Pet.find({ "user_id": req.params.user_id }));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get Pet data by User" });
  }
});

// Add New Pet
pet.post("/", isAuthenticated, async (req, res) => {
  try {
    const newPet = await Pet.create(req.body);
    res.json(newPet);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// Edit Existing Pet
pet.put("/:id", isAuthenticated, async (req, res) => {
  try {
    const updatedPet = await Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
    res.json(updatedPet);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Delete a Pet
pet.delete("/:id", isAuthenticated, async (req, res) => {
  try {
    res.json(await Pet.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

// Delete an All Pets By User ID
pet.delete('/user/:id', isAuthenticated, async (req, res) => {
  try {
    res.json(await Pet.deleteMany({"user_id": req.params.id}));
  } catch (error) {
    res.status(400).json(error);
  }
});

export default pet;
