import { Router } from 'express';
const vaccinations = Router();
import Vaccinations from '../models/vaccinationsModel.js';
import isAuthenticated from '../utils/isAuthenticated.js';

vaccinations.get('/', isAuthenticated, async (req, res) => {
  try {
    // console.log('hi')
    if (req.vaccinations) {
      res.json(await Vaccinations.find({ uid: req.vaccinations.uid }));
    } else {
      res.json(await Vaccinations.find({ uid: null }));
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to get data' });
  }
});

vaccinations.post('/',isAuthenticated, async (req, res) => {
  try {
    req.body.uid = req.vaccinations.uid;
    const newVaccinations = await Vaccinations.create(req.body);
    res.json(newVaccinations);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

vaccinations.put('/',isAuthenticated, async (req, res) => {
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

vaccinations.delete('/:id', isAuthenticated, async (req, res) => {
  try {
    res.json(await Vaccinations.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

vaccinations.get('/:id',isAuthenticated,  async (req, res) => {
  try {
    const vaccinationsUid = req.params.id; // Get the UID from the URL parameter
    const vaccinationsVaccinations = await Vaccinations.findOne({ uid: vaccinationsUid });

    if (vaccinationsVaccinations) {
      res.json({ exists: true }); // Send true response if vaccinations data exists
    } else {
      res.json({}); // Send false response if vaccinations data doesn't exist
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

export default vaccinations;