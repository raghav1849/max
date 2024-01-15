import dotenv from "dotenv";
import { main } from "./app";
import connectDb from "./database";

// DOTENV SETUP
dotenv.config();

connectDb()
    .then(() => {
        main()
            .then(() => {
                console.log("server has started! on http://localhost:8000");
            })
            .catch((err) => {
                console.log("graphql error: " + err);
            });
    })
    .catch((error) => "MONGO ERROR: " + error);
