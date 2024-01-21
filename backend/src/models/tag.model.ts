import mongoose, { Schema, Document } from "mongoose";

interface ITag extends Document {
    tagId: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

const tagSchema = new Schema<ITag>(
    {
        tagId: {
            type: String,
            unique: true,
            default: () => `tag_${new mongoose.Types.ObjectId().toString()}`,
        },
        name: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const TagModel = mongoose.model<ITag>("tags", tagSchema);

export default TagModel;
