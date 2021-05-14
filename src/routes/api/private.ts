import { Router, Response, NextFunction } from "express";
import protect from "../../middleware/auth";
const router: Router = Router();

router.get("/", protect, (req, res: Response) => {
  try {
    res.status(200).json({
      success: true,
      data: "You got access to this private data",
    });
  } catch (error) {
    throw error;
  }
});

export default router;
