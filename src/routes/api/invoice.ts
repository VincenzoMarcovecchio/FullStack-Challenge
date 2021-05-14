import { Router, Request, Response } from "express";
import { IProduct } from "../../types/product";
import Product from "../../models/product";

const router: Router = Router();

// @route   GET api/invoice/
// @desc    save an invoice
// @access  Private

router.post("/", async (req: Request, res: Response): Promise<void> => {
  console.log(req.body);
  try {

  } catch (error) {
    throw error;
  }
});
