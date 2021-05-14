import { model, Schema } from "mongoose";
import { Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  countInStock: number;
  imageUrl: string;
}

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
