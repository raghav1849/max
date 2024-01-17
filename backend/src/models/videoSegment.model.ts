import mongoose, { Schema, Document } from "mongoose";

interface IVideoSegment extends Document {
    segmentId: string;
    videoId: string;
    segmentNumber: number;
    url: string;
    bitrate: number;
    resolution: string;
}

const videoSegmentSchema = new Schema<IVideoSegment>(
    {
        segmentId: {
            type: String,
            default: () => `seg_${new mongoose.Types.ObjectId().toString()}`,
            unique: true,
        },
        videoId: {
            type: String,
            ref: "videos",
            required: true,
            index: true,
        },
        segmentNumber: {
            type: Number,
            required: true,
            index: true,
        },
        url: {
            type: String,
            required: true,
        },
        bitrate: {
            type: Number,
            required: true,
            min: 0, // Minimum bitrate
            max: 100000,
        },
        resolution: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const VideoSegmentModel = mongoose.model<IVideoSegment>(
    "videoSegments",
    videoSegmentSchema
);

export default VideoSegmentModel;
