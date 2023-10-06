const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    uid: { type: String , require: true},
    first_name: { type: String, require: true },
    last_name: { type: String },
    email: { type: String, require: true  },
    phone: { type: String },
    password: { type: String, require: true  },
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
