import mongoose from "mongoose";
import { nanoid } from "nanoid";

const Schema = mongoose.Schema;

export const DocumentSchema = new Schema({
  _id: {
    type: String,
    default: () => nanoid(),
  },
  doc_type: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    enum: ["cnpj", "cpf", "rg"],
  },
  number: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
});

// export const Document = mongoose.model("Document", DocumentSchema);
