import mongoose from "mongoose";
import { nanoid } from "nanoid";
import documentSchema from "./DocumentSchema";

const Schema = mongoose.Schema;

const DeliverymanSchema = new Schema(
  {
    _id: {
      type: String,
      default: () => nanoid(),
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
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
    document: documentSchema,
    phone_number: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Deliveryman = mongoose.model("Deliveryman", DeliverymanSchema);

export default Deliveryman;
