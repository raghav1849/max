import mongoose, { Schema, Document } from "mongoose";

interface IView extends Document {
    viewId: string;
    videoId: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
}

const viewSchema = new Schema<IView>(
    {
        viewId: {
            type: String,
            default: () => `vie_${new mongoose.Types.ObjectId().toString()}`,
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
            ref: "users",
            required: true,
        },
    },
    { timestamps: true }
);

const ViewModel = mongoose.model<IView>("views", viewSchema);

export default ViewModel;
