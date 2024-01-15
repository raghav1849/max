import express from "express";
import { createSupplier } from "../controllers/supplier.controller.js";
import { supplierCreateMiddleware } from "../middlewares/supplier.middleware.js";

const router = express.Router();

router.route("/api/v1/create").post(supplierCreateMiddleware,createSupplier);

export default router;
