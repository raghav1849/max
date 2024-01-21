import mongoose, { Schema, Document } from "mongoose";

interface ILike extends Document {
    likeId: string;
    videoId: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
}

const likeSchema = new Schema<ILike>(
    {
        likeId: {
            type: String,
            default: () => `lik_${new mongoose.Types.ObjectId().toString()}`,
            unique: true,
        },
        videoId: {
            type: String,
            ref: "videos",
            index: true,
            required: true,
        },
        userId: {
            type: String,
            required: true,
            ref: "users",
        },
    },
    { timestamps: true }
);

const LikeModel = mongoose.model<ILike>("likes", likeSchema);

export default LikeModel;
