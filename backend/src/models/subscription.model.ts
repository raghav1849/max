import mongoose, { Schema, Document } from "mongoose";

interface ISubscription extends Document {
    subscriptionId: string;
    channelId: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
}

const subscriptionSchema = new Schema<ISubscription>(
    {
        subscriptionId: {
            type: String,
            default: () => `sub_${new mongoose.Types.ObjectId().toString()}`,
            unique: true,
        },
        channelId: {
            type: String,
            ref: "channels",
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

const SubscriptionModel = mongoose.model<ISubscription>("subscriptions", subscriptionSchema);

export default SubscriptionModel;
