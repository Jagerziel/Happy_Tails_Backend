const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VaccinationsSchema = new Schema(
  {
    uid: String,
    vaccine: { type: String, require: true },
    last_vaccine_date: { type: String },
    expiration_data: { type: String, require: true },
    expiration_data: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);
const Vaccinations = mongoose.model('Vaccinations', VaccinationsSchema);

module.exports = Vaccinations;