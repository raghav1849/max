import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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
            required: true,
            trim: true,
        },
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
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
            required: true,
        },
    },
    { timestamps: true }
);

supplierSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

supplierSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

supplierSchema.methods.generateAccessToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
            suppliedId: this.ssupplierId,
            email: this.email,
            businessName: this.businessName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
};

supplierSchema.methods.generateRefreshToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
};

const Supplier = mongoose.model("Supplier", supplierSchema);

export default Supplier;
