import { Router } from 'express';
const appointment = Router();
import Appointment from '../models/appointmentModel.js';
import isAuthenticated from '../utils/isAuthenticated.js';

// Get All Appointments
appointment.get('/', isAuthenticated, async (req, res) => {
  try {
    res.json(await Appointment.find());
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
    const updatedAppointment = await Appointment.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
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

// Delete an All Appointments By User ID
appointment.delete('/user/:id', isAuthenticated, async (req, res) => {
  try {
    res.json(await Appointment.deleteMany({"user_id": req.params.id}));
  } catch (error) {
    res.status(400).json(error);
  }
});

// Delete an All Appointments By Pet ID
appointment.delete('/pet/:id', isAuthenticated, async (req, res) => {
  try {
    res.json(await Appointment.deleteMany({"pet_id": req.params.id}));
  } catch (error) {
    res.status(400).json(error);
  }
});

export default appointment;