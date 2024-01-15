import { asyncHandler } from "../utils/asyncHandler.ts";
import { ApiError } from "../utils/ApiError.ts";
import Supplier from "../models/supplier.model.ts";
import { ApiResponse } from "../utils/ApiResponse.ts";
import { generateUniqueId } from "../utils/getUniqueString.ts";

// Creating a new supplier
export const createSupplier = asyncHandler(async (req : any, res : any) => {
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

        const response : Object = await Supplier.findOne({ email }).select(
            "-isRegistered -password"
        );

        res.status(201).json(
            new ApiResponse(response, "Supplier created successfully!")
        );
    } catch (error : any) {
        res.status(400).json(new ApiError(error.message));
    }
});

// Register a new supplier
