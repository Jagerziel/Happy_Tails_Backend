const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    uid: { type: String },
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    phone: { type: String },
    password: { type: String },
    address: { type: String },
    state: { type: String },
    city: { type: String },
    zip: { type: String },
    ec_name: { type: String },
    ec_phone: { type: String },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
