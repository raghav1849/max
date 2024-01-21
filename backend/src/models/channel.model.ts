import mongoose, { Schema, Document } from "mongoose";

interface IChannel extends Document {
    channelId: string;
    userId: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const channelSchema = new Schema<IChannel>(
    {
        channelId: {
            type: String,
            unique: true,
            default: () => `cha_${new mongoose.Types.ObjectId().toString()}`,
        },
        userId: {
            type: String,
            required: true,
            ref: "users",
},
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const ChannelModel = mongoose.model<IChannel>("channels", channelSchema);

export default ChannelModel;
