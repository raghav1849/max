import mongoose, { Schema, Document } from "mongoose";

interface IPlaybackHistory extends Document {
    videoId: string;
    userId: string;
    title: string;
    description: string;
    thumbnail: string;
}

const videoSchema = new Schema<IPlaybackHistory>(
    {
        videoId: {
            type: String,
            unique: true,
            default: () => `vid_${new mongoose.Types.ObjectId().toString()}`,
        },
        userId: {
            type: String,
            ref: "users",
            required: true,
            index: true,
        },
        title: {
            type: String,
            required: true,
            index: true,
        },
        description: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const VideoModel = mongoose.model<IPlaybackHistory>("videos", videoSchema);

export default VideoModel;
