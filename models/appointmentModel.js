const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema(
  {
    pid: { type: String },
    type: { type: String },
    date: { type: String },
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