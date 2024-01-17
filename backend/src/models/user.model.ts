import mongoose, { Schema, Document } from "mongoose";
import { Secret, sign } from "jsonwebtoken";
import bcrypt from "bcryptjs";

interface IUser extends Document {
    userId: string;
    username: string;
    email: string;
    password: string;
    refreshToken: string;
    generateAccessToken: () => string;
    generateRefreshToken: () => string;
}

const userSchema = new Schema<IUser>(
    {
        userId: {
            type: String,
            default:() =>  `use_${(new mongoose.Types.ObjectId().toString())}`,
            unique: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
        password: {
            type: String,
            required: true,
        },
        refreshToken: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

// Convert password to hash string
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const id = new mongoose.Types.ObjectId().toString();
    this.userId = `use_${id}`;
    this.password = await bcrypt.hash(this.password, 10);
});

// Generate access token
userSchema.methods.generateAccessToken = function (): string {
    const secret: Secret = process.env.ACCESS_TOKEN_SECRET ?? "";

    return sign(
        {
            userId: this.userId,
            username: this.username,
            email: this.email,
        },
        secret,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    );
};

// Generate refresh token
userSchema.methods.generateRefreshToken = function () {
    const secret: Secret = process.env.REFRESH_TOKEN_SECRET ?? "";

    return sign(
        {
            userId: this.userId,
        },
        secret,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }
    );
};

const UserModel = mongoose.model<IUser>("users", userSchema);

export default UserModel;
