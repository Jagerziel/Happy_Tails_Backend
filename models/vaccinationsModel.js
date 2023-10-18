import { Schema, model } from 'mongoose';

const VaccinationsSchema = new Schema(
  {
    uid: String,
    vaccine: { type: String, require: true },
    last_vaccine_date: { type: String },
    expiration_date: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);
const Vaccinations = model('Vaccinations', VaccinationsSchema);

export default Vaccinations;