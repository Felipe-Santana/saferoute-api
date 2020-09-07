import mongoose from "mongoose";
import { nanoid } from "nanoid";

const Schema = mongoose.Schema;

const documentSchema = new Schema({
  _id: {
    type: String,
    default: () => nanoid(),
  },
  doc_type: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    enum: ["cnpj", "cpf"],
  },
  number: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
});

export default documentSchema;
