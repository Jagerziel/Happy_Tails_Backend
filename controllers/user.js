import { Router } from 'express';
const user = Router();
import { find, create, findOneAndUpdate, findByIdAndRemove, findOne } from '../models/userModel.js';
import isAuthenticated from '../utils/isAuthenticated.js';

user.get('/', isAuthenticated, async (req, res) => {
  try {
    // console.log('hi')
    if (req.user) {
      res.json(await find({ uid: req.user.uid }));
    } else {
      res.json(await find({ uid: null }));
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to get data' });
  }
});

user.post('/',isAuthenticated, async (req, res) => {
  try {
    req.body.uid = req.user.uid;
    const newUser = await create(req.body);
    res.json(newUser);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

user.put('/',isAuthenticated, async (req, res) => {
  try {
    const filter = { uid: req.body.uid }; // Filter based on uid
    const update = { $set: req.body }; // Update with the entire req.body content
    const options = { new: true };

    const updatedUser = await findOneAndUpdate(filter, update, options);
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json(error);
  }
});

user.delete('/:id', isAuthenticated, async (req, res) => {
  try {
    res.json(await findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

user.get('/:id',isAuthenticated,  async (req, res) => {
  try {
    const userUid = req.params.id; // Get the UID from the URL parameter
    const userUser = await findOne({ uid: userUid });

    if (userUser) {
      res.json({ exists: true }); // Send true response if user data exists
    } else {
      res.json({}); // Send false response if user data doesn't exist
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

export default user;