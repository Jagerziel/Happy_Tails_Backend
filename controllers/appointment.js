import { Router } from 'express';
const appointment = Router();
import Appointment from '../models/appointmentModel.js';
import isAuthenticated from '../utils/isAuthenticated.js';

// Get All Appointments
appointment.get('/', isAuthenticated, async (req, res) => {
  try {
    // console.log('hi')
    if (req.appointment) {
      res.json(await Appointment.find({ uid: req.appointment.uid }));
    } else {
      res.json(await Appointment.find({ uid: null }));
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to get data' });
  }
});

// Get All Appointments by User ID
appointment.get('/user/:user_id', isAuthenticated, async (req, res) => {
  try {
    res.json(await Appointment.find({ "user_id": req.params.user_id }));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to get data' });
  }
});

// Get All Appointments by Pet ID
appointment.get('/pet/:pet_id', isAuthenticated, async (req, res) => {
  try {
    res.json(await Appointment.find({"pet_id": req.params.pet_id }));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to get data' });
  }
});

// Add a New Appointment
appointment.post('/', isAuthenticated, async (req, res) => {
  try {
    // req.body.uid = req.appointment.uid;
    const newAppointment = await Appointment.create(req.body);
    res.json(newAppointment);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// Edit an Existing Appointment
appointment.put('/:id', isAuthenticated, async (req, res) => {
  try {
    const filter = { uid: req.body.uid }; // Filter based on uid
    const update = { $set: req.body }; // Update with the entire req.body content
    const options = { new: true };

    const updatedAppointment = await Appointment.findOneAndUpdate(filter, update, options);
    res.json(updatedAppointment);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Delete an Appointment
appointment.delete('/:id', isAuthenticated, async (req, res) => {
  try {
    res.json(await Appointment.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

export default appointment;