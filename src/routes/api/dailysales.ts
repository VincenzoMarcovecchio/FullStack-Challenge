import { Router, Request, Response } from "express";
import { IInvoice } from "../../types/invoice";
import Invoice from "../../models/invoice";

const router: Router = Router();
// @route   GET api/dailysales/
// @desc    Get list of sales
// @access  Private
router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const invoices: IInvoice[] = await Invoice.find();
    res.status(200).json(invoices);
  } catch (error) {
    throw error;
  }
});
