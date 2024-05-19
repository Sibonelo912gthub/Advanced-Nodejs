import * as express from "express";
import * as mongoose from "mongoose";

let app: express.Application = express();

app.listen(3000, () => {
  console.log("server is running at port 3000");
});

mongoose
  .connect(
    "mongodb+srv://ssmbambo912:mhlengwa1@cluster0.vuauodl.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to mdb");
  });

app.get("/api/user/login", (req, res) => {
  //   console.log(req.query.email);
  const data = [{ name: "technyks" }];
  res.send(data);
});

app.get(
  "api/user/test",
  (req, res, next) => {
    console.log("test");
    // next();
    res.send("test");
  }
  //   ,
  //   (req, res, next) => {
  //     console.log("middleware2");
  //     res.send("test");
  //   }
);

app.use((req, res, next) => {
  console.log("middleware1");
  next();
});
