import mongoose from "mongoose";
import { nanoid } from "nanoid";
import { AddressSchema } from "./Address";
import { CnhSchema } from "./Cnh";

const Schema = mongoose.Schema;

export const DeliverymanSchema = new Schema(
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
    rg: {
      number: {
        type: String,
        required: true,
        trim: true,
        minLength: 9
      }
    },
    cpf: {
      number: {
        type: String,
        required: true,
        trim: true,
        minLength: 11,
        maxLength: 11
      }
    },
    phone_number: {
      type: String,
      trim: true,
      required: true
    },
    cnh: CnhSchema,
    address: AddressSchema,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export const Deliveryman = mongoose.model("Deliveryman", DeliverymanSchema);
