import mongoose, { Schema, Document } from "mongoose";

interface IDislike extends Document {
    dislikeId: string;
    videoId: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
}

const dislikeSchema = new Schema<IDislike>(
    {
        dislikeId: {
            type: String,
            default: () => `dis_${new mongoose.Types.ObjectId().toString()}`,
            unique: true,
        },
        videoId: {
            type: String,
            required: true,
            index: true,
            ref: "videos",
        },
        userId: {
            type: String,
            required: true,
            ref: "users",
        },
    },
    { timestamps: true }
);

const DislikeModel = mongoose.model<IDislike>("dislikes", dislikeSchema);

export default DislikeModel;
