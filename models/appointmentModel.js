import { Schema, model } from 'mongoose';

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
const Appointment = model('Appointment', AppointmentSchema);

export default Appointment;