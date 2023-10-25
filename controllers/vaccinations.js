import { Router } from 'express';
const vaccinations = Router();
import Vaccinations from '../models/vaccinationsModel.js';
import isAuthenticated from '../utils/isAuthenticated.js';

// Get All Vaccinations
vaccinations.get('/', isAuthenticated, async (req, res) => {
  try {
    res.json(await Vaccinations.find());
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to get data' });
  }
});

// Get All Vaccinations by User ID
vaccinations.get('/user/:user_id', isAuthenticated, async (req, res) => {
  try {
    res.json(await Vaccinations.find({ "user_id": req.params.user_id }));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to get data' });
  }
});

// Get All Vaccinations by Pet ID
vaccinations.get('/pet/:pet_id', isAuthenticated, async (req, res) => {
  try {
    res.json(await Vaccinations.find({ "pet_id": req.params.pet_id }));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to get data' });
  }
});

// Create New Vaccination Entry
vaccinations.post('/',isAuthenticated, async (req, res) => {
  try {
    const newVaccinations = await Vaccinations.create(req.body);
    res.json(newVaccinations);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// Edit Existing Vaccination Entry
vaccinations.put('/:id',isAuthenticated, async (req, res) => {
  try {
    const filter = { uid: req.body.uid }; // Filter based on uid
    const update = { $set: req.body }; // Update with the entire req.body content
    const options = { new: true };

    const updatedVaccinations = await Vaccinations.findOneAndUpdate(filter, update, options);
    res.json(updatedVaccinations);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Delete a Vaccination Entry
vaccinations.delete('/:id', isAuthenticated, async (req, res) => {
  try {
    res.json(await Vaccinations.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

export default vaccinations;