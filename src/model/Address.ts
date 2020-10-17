import mongoose from "mongoose";
import { nanoid } from "nanoid";

const Schema = mongoose.Schema;

export const AddressSchema = new Schema(
  {
    _id: {
      type: String,
      default: () => nanoid(),
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    street_name: {
      type: String,
      required: true,
      trim: true
    },
    number: {
      type: Number,
      required: true
    },
    postal_code: {
      type: String,
      required: true,
      trim: true,
      minlength: 8
    },
    references: String,
    complement: String,
    state: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
      minlength: 2,
      maxlength: 2
    },
    city: {
      type: String,
      required: true,
      trim: true
    },
    district: {
      type: String,
      required: true,
      trim: true
    },
    country: {
      type: String,
      required: true,
      trim: true,
      default: "Brasil"
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export const Address = mongoose.model("Address", AddressSchema);
