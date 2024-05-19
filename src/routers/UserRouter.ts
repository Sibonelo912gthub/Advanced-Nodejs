import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { UserValidators } from "../validators/Uservalidators";
import { GlobalMidleWare } from "../middlewares/GlobalMiddleWare";

class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    // this.getRoutes();
    this.postRoutes();
    this.patchRoutes();
    this.putRoutes();
    this.deleteRoutes();
  }

  postRoutes() {
    this.router.post(
      "/signup",
      UserValidators.signup(),
      GlobalMidleWare.checkError,
      UserController.signup
    );
  }

  patchRoutes() {
    this.router.patch(
      "/verify",
      UserValidators.verifyUserEmail(),
      UserController.verify
    );
  }

  putRoutes() {}

  deleteRoutes() {}
}
export default new UserRouter().router;

// import { Router } from "express";
// import { UserController } from "../controllers/UserController";

// class UserRouter {
//   public router: Router;

//   constructor() {
//     this.router = Router();
//     this.getRoutes();
//     this.postRoutes();
//     this.patchRoutes();
//     this.putRoutes();
//     this.deleteRoutes();
//   }

//   getRoutes() {
//     // For single middleware function
//     this.router.get("/login", UserController.login);

//     // For multiple middleware functions
//     this.router.get("/test", [UserController.test1, UserController.test2]);
//   }

//   postRoutes() {}
//   patchRoutes() {}
//   putRoutes() {}
//   deleteRoutes() {}
// }

// export default new UserRouter().router;
