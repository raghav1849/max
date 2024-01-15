import { ApiError } from "../utils/ApiError.ts";
import { supplierCreateSchema } from "../validations/supplier.schema.ts";

export const supplierCreateMiddleware = (req: any, res: any, next: any) => {
    try {
        const body = req.body;
        supplierCreateSchema.parse(body);
        next();
    } catch (error: any) {
        // throw (new ApiError(400, "Invalid fields"), error);

        res.status(400).json(
            new ApiError(
                error.errors.map((err: Error) => err.message),
                "Validation failed!"
            )
        );
    }
};
