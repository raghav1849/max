import mongoose, { Schema, Document } from "mongoose";

interface ISegment extends Document {
    segmentId: string;
    videoId: string;
    segmentNumber: number;
    url: string;
    bitrate: number;
    resolution: string;
    createdAt: Date;
    updatedAt: Date;
}

const videoSegmentSchema = new Schema<ISegment>(
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

const VideoSegmentModel = mongoose.model<ISegment>(
    "videoSegments",
    videoSegmentSchema
);

export default VideoSegmentModel;
