import mongoose, { Schema } from "mongoose";

const { Types } = Schema;

const Figure = mongoose.model('figure', new mongoose.Schema({
  id: Types.ObjectId,
  label: Types.String
}));

export default Figure;