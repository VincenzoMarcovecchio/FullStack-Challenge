import { Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  countInStock: number;
  imageUrl: string;
}
