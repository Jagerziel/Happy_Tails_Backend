const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema(
  {
    uid: String,
    name: { type: String, require: true },
    dob: { type: String },
    breed: { type: String },
    image: { type: String },
    sex: { type: String },
    weight: { type: String },
    allergies: { type: String },
    medications: { type: String },
    laboratory: { type: String },
    microchip: { type: String },
    visit_history: { type: String },
    primary_color: { type: String },
    notes: { type: String },
    primary_vet: { type: String },
  },
  {
    timestamps: true,
  }
);

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;
