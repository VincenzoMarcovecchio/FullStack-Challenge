import { IInvoice } from "../types/product";
import { model, Schema } from "mongoose";

const invoiceSchema: Schema = new Schema(
  {
    user: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    name: {
      //change names
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },
    subtotal: {
      type: Number,
      required: true,
    },
  },

  { timestamps: true }
);

const Invoice = model<IInvoice>("Invoice", invoiceSchema);
export default Invoice;
