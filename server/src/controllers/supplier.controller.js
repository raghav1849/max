import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import Supplier from "../models/supplier.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { generateUniqueId } from "../utils/getUniqueString.js";

// Creating a new supplier
export const createSupplier = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if ([email, password].some((item) => item.trim() === "")) {
        res.status(400).json(new ApiError("Invalid email or password"));
    }

    // Generating unique supplierId
    const supplierId = generateUniqueId([email], 32);
    try {
        // Checking is supplier already exists
        const existedSupplier = await Supplier.findOne({ email });

        // Checking if supplier already exists and is registered
        if (existedSupplier && existedSupplier.isRegistered) {
            res.status(400).json(
                new ApiError(null, "Supplier already exists with this email.")
            );
        } else {
            await Supplier.findOneAndDelete({ email });
        }

        await Supplier.create({ supplierId, email, password });

        const response = await Supplier.findOne({ email }).select(
            "-isRegistered -password"
        );

        res.status(201).json(
            new ApiResponse(response, "Supplier created successfully!")
        );
    } catch (error) {
        res.status(400).json(new ApiError(error));
    }
});

// Register a new supplier
