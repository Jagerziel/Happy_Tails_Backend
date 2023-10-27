import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    // uid: String,
    first_name: { type: String, require: true },
    last_name: { type: String },
    email: { type: String, require: true},
    phone: { type: String },
    password: { type: String, require: true  },
    address: { type: String },
    state: { type: String },
    city: { type: String },
    zip: { type: String },
    ec_name: { type: String },
    ec_phone: { type: String },
    ec_relationship: { type: String },
    ec_notes: { type: String },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = model('User', UserSchema);

export default User;
