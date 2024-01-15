import mongoose, { Schema } from "mongoose";
import { sign, Secret } from "jsonwebtoken";
import bcrypt from "bcryptjs";

const supplierSchema = new Schema(
    {
        supplierId: {
            type: String,
            required: true,
            index: true,
            unique: true,
        },
        businessName: {
            type: String,
            trim: true,
        },
        firstName: {
            type: String,
            trim: true,
        },
        lastName: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String, // Cloudinary url
        },
        isRegistered: { type: Boolean, default: false },
    },
    { timestamps: true }
);

supplierSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

supplierSchema.methods.isPasswordCorrect = async function (password: string) {
    return await bcrypt.compare(password, this.password);
};

supplierSchema.methods.generateAccessToken = async function () {
    const secret: Secret | any = process.env.ACCESS_TOKEN_SECRET;
    return sign(
        {
            _id: this._id,
            suppliedId: this.ssupplierId,
            email: this.email,
            businessName: this.businessName,
        },
        secret,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
};

supplierSchema.methods.generateRefreshToken = async function () {
    const refreshToken: string | any = process.env.REFRESH_TOKEN_SECRET
    return sign(
        {
            _id: this._id,
        },
        refreshToken,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
};

const Supplier = mongoose.model("Supplier", supplierSchema);

export default Supplier;
