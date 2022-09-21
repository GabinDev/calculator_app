import mongoose, { Schema } from "mongoose";

const { Types } = Schema;

const Unity = mongoose.model('unity', new mongoose.Schema({
  id: Types.ObjectId,
  value: Types.String,
  label: Types.String,
}));

export default Unity;