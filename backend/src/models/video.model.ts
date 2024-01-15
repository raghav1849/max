import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
    {
        videoId: {
            type: String,
            unique: true,
        },
        userId: {
            type: String,
            unique: true,
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
        }
    },
    {
        timestamps: true,
    }
);

videoSchema.pre("save", function () {
    const id = new mongoose.Types.ObjectId().toString();
    this.videoId = `vid_${id}`;
});

const VideoModel = mongoose.model("videos", videoSchema);

export default VideoModel;
