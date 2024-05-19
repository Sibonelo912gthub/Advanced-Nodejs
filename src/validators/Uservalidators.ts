import { UserController } from "../controllers/UserController";
import { Router } from "express";
import { body, validationResult } from "express-validator";

export class UserValidators {
  static signup() {
    return [
      body("name", "Name is required").isString(),
      body("phone", "phone number is required").isString(),
      body("email", "Email is required").isEmail(),
      body("password", "Password is required")
        .isAlphanumeric()
        .isLength({ min: 8 })
        .withMessage("password must be 8 or more characters "),
      body("type", "user file type required").isEmail(),
      body("status", "user status is required"),
      // .custom((value, { req }) => {
      //   if (req.body.email) return true;
      //   else {
      //     throw new Error("Email not available for validation");
      //   }
      // }),
    ];
  }

  static verifyUserEmail() {
    return [
      body(
        "verification_token",
        "Email verification token required"
      ).isNumeric(),

      body("email", "Email is required").isEmail(),
    ];
  }
}
