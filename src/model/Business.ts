import mongoose from "mongoose";
import { nanoid } from "nanoid";

const Schema = mongoose.Schema;

const documentSchema = new Schema({
  doc_type: String,
  number: {
    type: String,
    unique: true,
  },
});

const BusinessSchema = new Schema(
  {
    _id: {
      type: String,
      default: () => nanoid(),
    },
    companyName: String,

    tradeName: String,
    document: documentSchema,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    addresses: [String],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Business = mongoose.model("Business", BusinessSchema);

export default Business;
