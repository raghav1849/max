import mongoose from "mongoose";
import { DB_NAME } from "../constants.ts";

const connectDb = async () => {
    try {

        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );

        console.log(
            `\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log("MONGODB connection error: ", error);
        process.exit(1);
    }
};

export default connectDb;