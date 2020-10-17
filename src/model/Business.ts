import mongoose from "mongoose";
import { nanoid } from "nanoid";
import { DocumentSchema } from "./DocumentSchema";

const Schema = mongoose.Schema;

export const BusinessSchema = new Schema(
  {
    _id: {
      type: String,
      default: () => nanoid(),
    },
    company_name: {
      type: String,
      required: true,
      trim: true,
    },
    trade_name: {
      type: String,
      required: true,
      trim: true,
    },
    document: DocumentSchema,
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    addresses: [String],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export const Business = mongoose.model("Business", BusinessSchema);
