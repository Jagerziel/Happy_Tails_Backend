const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const {
    PORT = 4000,
    MONGODB_URL,
} = process.env


const app = express