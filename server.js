import mongoose from 'mongoose';
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
// const admin = require('firebase-admin');
// const { getAuth } = require('firebase-admin/auth');
import dotenv from 'dotenv'

dotenv.config()

const {
  PORT = 4000,
  MONGODB_URL,
  // PRIVATE_KEY_ID,
  // PRIVATE_KEY,
  // CLIENT_ID,
} = process.env;

const app = express();

// admin.initializeApp({
//   credential: admin.credential.cert({
//     type: 'service_account',
//     project_id: 'financial-hackathon',
//     private_key_id: PRIVATE_KEY_ID,
//     private_key: PRIVATE_KEY.replace('\n', ''),
//     client_email:
//       'firebase-adminsdk-jh4h3@financial-hackathon.iam.gserviceaccount.com',
//     client_id: CLIENT_ID,
//     auth_uri: 'https://accounts.google.com/o/oauth2/auth',
//     token_uri: 'https://oauth2.googleapis.com/token',
//     auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
//     client_x509_cert_url:
//       'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jh4h3%40financial-hackathon.iam.gserviceaccount.com',
//     universe_domain: 'googleapis.com',
//   }),
// });

// Database Connection //
const connectDB = async () => {
  try {
    const mongooseConnectionConfig = { useNewUrlParser: true, useUnifiedTopology: true}
    mongoose.set('strictQuery', true)
    const conn = await mongoose.connect(MONGODB_URL, mongooseConnectionConfig);
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
import userController from './controllers/user.js';
app.use('/user', userController);
app.use('/user/email', userController);

import petController from './controllers/pet.js';
app.use('/pet', petController);
app.use('/pet/user', petController);
app.use('/pet/pet', petController);

import vaccinationsController from './controllers/vaccinations.js';
app.use('/vaccinations', vaccinationsController);

import appointmentController from './controllers/appointment.js';
app.use('/appointment', appointmentController);
app.use('/appointment/user', appointmentController);
app.use('/appointment/pet', appointmentController);

// Test Route //
app.get('/', (req, res) => {
  res.send('Main Page - Testing');
});

// Listener //
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));