import dotenv from "dotenv";
import connectDB from "./database/index.ts";
import { app } from "./app.ts";

dotenv.config({
  path: "../.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is runnig at port:${process.env.PORT}`);
    });
  })
  .catch((error) => console.log("MONGODB connection failed, error: ", error));
