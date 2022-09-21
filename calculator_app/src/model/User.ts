import mongoose, { Schema } from "mongoose";

const { Types } = Schema;

const User = mongoose.model('users', new mongoose.Schema({
  id: Types.ObjectId,
  username: Types.String,
  password: Types.String,
  email: Types.String,
}));

export default User;