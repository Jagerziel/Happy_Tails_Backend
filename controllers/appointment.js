import { Router } from 'express';
const appointment = Router();
import { find, create, findOneAndUpdate, findByIdAndRemove, findOne } from '../models/appointmentModel.js';
// const isAuthenticated = require('../utils/isAuth');

appointment.get('/', async (req, res) => {
  try {
    // console.log('hi')
    if (req.appointment) {
      res.json(await find({ uid: req.appointment.uid }));
    } else {
      res.json(await find({ uid: null }));
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to get data' });
  }
});

appointment.post('/', async (req, res) => {
  try {
    req.body.uid = req.appointment.uid;
    const newAppointment = await create(req.body);
    res.json(newAppointment);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

appointment.put('/', async (req, res) => {
  try {
    const filter = { uid: req.body.uid }; // Filter based on uid
    const update = { $set: req.body }; // Update with the entire req.body content
    const options = { new: true };

    const updatedAppointment = await findOneAndUpdate(filter, update, options);
    res.json(updatedAppointment);
  } catch (error) {
    res.status(400).json(error);
  }
});

appointment.delete('/:id', async (req, res) => {
  try {
    res.json(await findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

appointment.get('/:id', async (req, res) => {
  try {
    const appointmentUid = req.params.id; // Get the UID from the URL parameter
    const appointmentAppointment = await findOne({ uid: appointmentUid });

    if (appointmentAppointment) {
      res.json({ exists: true }); // Send true response if appointment data exists
    } else {
      res.json({}); // Send false response if appointment data doesn't exist
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

export default appointment;