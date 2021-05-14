import { IProduct } from "../types/product";
import { model, Schema } from "mongoose";

const productSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32,
    },

    description: {
      type: String,
      required: true,
    },

    countInStock: {
      type: Number,
      required: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

const Product = model<IProduct>("Product", productSchema);
export default Product;
