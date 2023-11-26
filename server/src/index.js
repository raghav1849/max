import dotenv from "dotenv";
import connectDB from "./database/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is runnig at port:${process.env.PORT}`);
    });
  })
  .catch((error) => console.log("MONGODB connection failed, error: ", error));
