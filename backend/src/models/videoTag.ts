import mongoose, { Schema, Document } from "mongoose";

interface IVideoTag extends Document {
    tagId: string;
    videoId: string;
    videoTagId: string;
    createdAt: string;
    updatedAt: string;
}

const videoTagSchema = new Schema<IVideoTag>(
    {
        videoTagId: {
            type: String,
            default: () => `vtag_${new mongoose.Types.ObjectId().toString()}`,
            unique: true,
        },
        tagId: {
            type: String,
            ref: "tags",
            required: true,
        },
        videoId: {
            type: String,
            ref: "videos",
            index: true,
            required: true,
        },
    },
    { timestamps: true }
);

const VideoTagModel = mongoose.model<IVideoTag>("videoTags", videoTagSchema);

export default VideoTagModel;
