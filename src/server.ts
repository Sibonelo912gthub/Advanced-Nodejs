// import * as express from "express";
// import * as mongoose from "mongoose";
// import { getEnvVariables } from "./environments/environment";
// import UserRouter from "./routers/UserRouter";

// export class Server {
//   public app: express.Application = express();
//   constructor() {
//     this.setConfigs();
//     this.setRoutes();
//   }

//   setConfigs() {
//     this.connectMongoDB();
//   }

//   connectMongoDB() {
//     mongoose.connect(getEnvVariables().db_uri).then(() => {
//       console.log("connetced for real to");
//     });
//   }

//   setRoutes() {
//     this.app.use("/api/user", UserRouter);
//   }
// }

import * as express from "express";
import * as cors from "cors";
import mongoose from "mongoose";
import { getEnvVariables } from "./environments/environment";
import UserRouter from "./routers/UserRouter";

export class Server {
  public app: express.Application = express();

  constructor() {
    this.setConfigs();
    this.setRoutes();
    this.error404Handler();
  }

  async setConfigs() {
    this.connectMongoDB();
    this.allowCors();
    this.configureBodyParser();
  }

  connectMongoDB() {
    mongoose.connect(getEnvVariables().db_uri).then(() => {
      console.log("Connected to MongoDB");
    });
  }

  configureBodyParser() {
    this.app.use(
      bodyParser.urlencoded({
        extends: true,
      })
    );
    //this.app.use(bodyParser.json)
  }

  allowCors() {
    this.app.use(cors());
  }

  setRoutes() {
    this.app.use("/api/user", UserRouter);
  }

  start(port: number) {
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }

  async stop() {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
  error404Handler() {
    this.app.use((req, res) => {
      res.status(404).json({
        message: " Never Found",
        status_code: 404,
      });
    });
  }
}
