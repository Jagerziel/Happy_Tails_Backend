const express = require('express');
const pet = express.Router();
const Pet = require('../models/petModel.js');
const isAuthenticated = require('../utils/isAuthenticated.js');

pet.get('/', isAuthenticated, async (req, res) => {
  try {
    // console.log('hi')
    if (req.pet) {
      res.json(await Pet.find({ uid: req.pet.uid }));
    } else {
      res.json(await Pet.find({ uid: null }));
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to get data' });
  }
});

pet.post('/', isAuthenticated, async (req, res) => {
  try {
    req.body.uid = req.pet.uid;
    const newPet = await Pet.create(req.body);
    res.json(newPet);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

pet.put('/', isAuthenticated, async (req, res) => {
  try {
    const filter = { uid: req.body.uid }; // Filter based on uid
    const update = { $set: req.body }; // Update with the entire req.body content
    const options = { new: true };

    const updatedPet = await Pet.findOneAndUpdate(filter, update, options);
    res.json(updatedPet);
  } catch (error) {
    res.status(400).json(error);
  }
});

pet.delete('/:id', isAuthenticated,async (req, res) => {
  try {
    res.json(await Pet.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

pet.get('/:id',isAuthenticated, async (req, res) => {
  try {
    const petUid = req.params.id; // Get the UID from the URL parameter
    const petPet = await Pet.findOne({ uid: petUid });

    if (petPet) {
      res.json({ exists: true }); // Send true response if pet data exists
    } else {
      res.json({}); // Send false response if pet data doesn't exist
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = pet;