import mongoose from "mongoose";
import { nanoid } from "nanoid";

const Schema = mongoose.Schema;

export const CnhSchema = new Schema({
  _id: {
    type: String,
    default: () => nanoid(),
  },
  number: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    minlength: 11,
    maxlength: 11
  },
  expires_at: {
    type: Date,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
  category: {
    type: String,
    uppercase: true,
    trim: true,
    required: true,
    enum: ['A', 'B']
  },
});

// export const Cnh = mongoose.model("Cnh", CnhSchema);
