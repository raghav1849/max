import { ApiError } from "../utils/ApiError.js";
import { supplierCreateSchema } from "../validations/supplier.schema.js";

export const supplierCreateMiddleware = (req, res, next) => {
    try {
        const body = req.body;
        supplierCreateSchema.parse(body);
        next();
    } catch (error) {
        // throw (new ApiError(400, "Invalid fields"), error);

        res.status(400).json(
            new ApiError(
                error.errors.map((err) => err.message),
                "Validation failed!"
            )
        );
    }
};
