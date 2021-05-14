import { Router, Response, NextFunction } from "express";

import HttpStatusCodes from "http-status-codes";

//models
import User from "../../models/User";

//types
import { IUser } from "../../types/user";

const router: Router = Router();

// @route   GET api/auth/register
// @desc    Register
// @access  Public

router.post("/register", async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user: IUser = await User.create({ username, email, password });
    sendToken(user, 201, res);
  } catch (err) {
    next(err);
  }
});

// @route   POST api/auth/login
// @desc    Login
// @access  Public
router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    return next(
      res.status(HttpStatusCodes.UNAUTHORIZED).json({
        success: false,
        msg: "Please provide an email and password",
      })
    );
  }

  try {
    let user: IUser = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(
        res.status(HttpStatusCodes.NOT_FOUND).json({
          success: false,
          msg: "Incorrect Credentials",
        })
      );
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(
        res.status(HttpStatusCodes.NOT_FOUND).json({
          success: false,
          msg: "Incorrect Credentials",
        })
      );
    }

    sendToken(user, 201, res);
  } catch (err) {
    next(err);
  }
});

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();

  res.status(statusCode).json({
    success: true,
    token,
  });
};

// @route   GET api/auth/forgot/password
// @desc    Get forgot password
// @access  Public

// router.get("/forgotpassword", auth, async (req: Request, res: Response) => {
//   try {
//     const user: IUser = await User.findById(req.userId).select("-password");
//     res.json(user);
//   } catch (err) {
//     console.error(err.message);
//     res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
//   }
// });

// // @route   GET api/auth/reset/password
// // @desc    Get authenticated user given the token
// // @access  Private

// router.put(
//   "/resetpassword/:resetToken",
//   async (req: Request, res: Response) => {
//     try {
//       const user: IUser = await User.findById(req.userId).select("-password");
//       res.json(user);
//     } catch (err) {
//       console.error(err.message);
//       res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
//     }
//   }
// );

export default router;
