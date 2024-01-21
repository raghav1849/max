import mongoose, { Schema, Document } from "mongoose";

interface IPlaybackHistory extends Document {
    playbackHistoryId: string;
    userId: string;
    videoId: string;
    durationWatched: number;
    createdAt: Date;
    updatedAt: Date;
}

const playbackHistorySchema = new Schema<IPlaybackHistory>(
    {
        playbackHistoryId: {
            type: String,
            default: () => `his_${new mongoose.Types.ObjectId().toString()}`,
            unique: true,
        },
        userId: {
            type: String,
            ref: "users",
            required: true,
            index: true,
        },
        videoId: {
            type: String,
            ref: "videos",
            required: true,
        },
        durationWatched: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const PlaybackHistoryModel = mongoose.model<IPlaybackHistory>(
    "playbackHistory",
    playbackHistorySchema
);

export default PlaybackHistoryModel;
