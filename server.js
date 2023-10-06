const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const {
    PORT = 4000,
    MONGODB_URL,
} = process.env


const app = express()

// Database Connection //
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// Establish Connect //
connectDB();

mongoose.connection
  .on('open', () => console.log('You are connected to mongoose'))
  .on('close', () => console.log('You are disconnected from mongoose'))
  .on('error', (error) => console.log(error));

mongoose.set('strictQuery', true);

// Middleware //
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


// Auth Middleware //
// app.use(async function (req, res, next) {
//   try {
//     const token = req.get('Authorization');
//     // console.log(token);
//     if (token) {
//       const user = await getAuth().verifyIdToken(token.replace('Bearer ', ''));
//       // console.log(user);
//       req.user = user;
//     } else {
//       req.user = null;
//     }
//   } catch (error) {
//     // perform additional tasks to follow up after and error
//     req.user = null;
//   }
//   next(); // this function invokes the next middleware function
//   //in the middleware stack/pipeline/conveyerbelt
// });

// Controller //
const userController = require('./controllers/user.js');
app.use('/user', userController);
const petController = require('./controllers/pet.js');
app.use('/pet', petController);
const vaccinationsController = require('./controllers/vaccinations.js');
app.use('/vaccinations', vaccinationsController);
const appointmentController = require('./controllers/appointment.js');
app.use('/appointment', appointmentController);

// Test Route //
app.get('/', (req, res) => {
  res.send('Hello World');
});


// Listener //
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

