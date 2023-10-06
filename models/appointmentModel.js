const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema(
  {
    uid: String,
    type: { type: String },
    date: { type: String, require: true },
    time: { type: String },
    status: { type: String },
    notes: { type: String },
  },
  {
    timestamps: true,
  }
);
const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;