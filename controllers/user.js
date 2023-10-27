import { Router } from 'express';
const user = Router();
import User from '../models/userModel.js';
import isAuthenticated from '../utils/isAuthenticated.js';
import { ObjectId } from 'mongodb';

// Get All Users
user.get('/', isAuthenticated, async (req, res) => {
  try {
    res.json(await User.find());
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to get data' });
  }
});

// Add New User
user.post('/',isAuthenticated, async (req, res) => {
  try {
    // req.body.uid = req.user.uid;
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// Edit a User
user.put('/:id',isAuthenticated, async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Delete a User
user.delete('/:id', isAuthenticated, async (req, res) => {
  try {
    res.json(await User.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

// Find a User
user.get('/:id',isAuthenticated,  async (req, res) => {
  try {
    res.json(await User.findById(req.params.id));
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// Find a User by Email
user.get('/email/:email',isAuthenticated,  async (req, res) => {
  try {
    const emailExists = await User.findOne({"email": req.params.email})
    if (emailExists) {
      res.json([{ exists: true }, emailExists]); // Send true response if user data exists along with the user
    } else {
      res.json([{ exists: false }]); // Send false response if user data doesn't exist
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

export default user;