import mongoose from "mongoose";
import { nanoid } from "nanoid";

const Schema = mongoose.Schema;

const AddressSchema = new Schema(
  {
    _id: {
      type: String,
      default: () => nanoid(),
    },
    title: String,
    street_name: String,
    number: Number,
    postal_code: String,
    references: String,
    complement: String,
    state: String,
    city: String,
    district: String,
    country: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Address = mongoose.model("Address", AddressSchema);

export default Address;
