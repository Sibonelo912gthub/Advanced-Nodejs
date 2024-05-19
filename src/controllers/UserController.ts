import User from "../models/User";
import { validationResult } from "express-validator";
import { utils } from "../utils/Utils";

export class UserController {
  static async signup(req, res, next) {
    const errors = validationResult(req);
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
    const type = req.body.type;
    const status = req.body.status;

    const data = {
      email,
      verification_token: utils.generateVerificationToken(5),
      verification_token_time: Date.now() + new utils().MAX_TOKEN_TIME,
      phone,
      password,
      name,
      type,
      status,
    };
    try {
      let user = await new User(data).save();
      res.send(user);
    } catch (error) {
      next(error);
    }
  }

  static async verify(req, res, next) {
    const verification_token = req.verification_token;
    const email = req.body.email;

    try {
      const user = await User.findOneAndUpdate(
        {
          email: email,
          verification_token: verification_token,
          verification_token_time: { $gt: Date.now() },
          type: "user",
        },

        {
          email_verified: true,
        },

        { new: true }
      );
      if (user) {
        res.send(user);
      } else {
        throw new Error("verification token expired, try again...");
      }
    } catch (e) {
      next(e);
    }
  }
}
