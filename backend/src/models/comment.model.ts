import mongoose, { Schema, Document } from "mongoose";

interface IComment extends Document {
    commentId: string;
    videoId: string;
    userId: string;
    content: string;
    parentId: string;
    createdAt: Date;
    updatedAt: Date;
}

const commentSchema = new Schema<IComment>(
    {
        commentId: {
            type: String,
            default: () => `com_${new mongoose.Types.ObjectId().toString()}`,
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
        parentId: {
            type: String,
            ref: "comments",
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const CommentModel = mongoose.model<IComment>("comments", commentSchema);

export default CommentModel;
