import { Schema, model } from 'mongoose';

const AppointmentSchema = new Schema(
  {
    uid: String,
    type: { type: String },
    date: { type: String, require: true },
    time: { type: String },
    status: { type: String },
    notesTitle: { type: String },
    notes: { type: String },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    pet_id: {
        type: Schema.Types.ObjectId,
        ref: 'Pet',
    }
  },
  {
    timestamps: true,
  }
);
const Appointment = model('Appointment', AppointmentSchema);

export default Appointment;