import { Router, Request, Response } from "express";
import { IProduct } from "../../types/product";
import Product from "../../models/product";

const router: Router = Router();
// @route   GET api/products/
// @desc    Get list of products
// @access  Public
router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const products: IProduct[] = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    throw error;
  }
});

// @route   GET api/products/:id
// @desc    Get a product
// @access  Public
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const product: IProduct | null = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    throw error;
  }
});

export default router;
