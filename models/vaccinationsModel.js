const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VaccinationsSchema = new Schema(
  {
    pid: { type: String },
    vaccine: { type: String },
    last_vaccine_date: { type: String },
    expiration_data: { type: String },
  },
  {
    timestamps: true,
  }
);
const Vaccinations = mongoose.model('Vaccinations', VaccinationsSchema);

module.exports = Vaccinations;