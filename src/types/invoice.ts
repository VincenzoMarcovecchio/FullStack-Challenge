import { Document } from "mongoose";

export interface IInvoice extends Document {
  user: string;
  email: string;
  name: number;
  description: string;
  quantity: number;
  subtotal: string;
}
