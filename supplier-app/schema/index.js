"use client";

import * as z from "zod";

export const addProductDetailsSchema = z.object({
  title: z
    .string({
      required_error: "Title required for a product.",
      invalid_type_error: "Enter a valid title for a product",
    })
    .min(2, {
      message: "Title must be more than 2 characters",
    }),
  brand: z.string({
    required_error: "Brand name is required for a product",
  }),
  baseUnitMeasure: z.string({
    required_error: "Please select a base unit.",
  }),
  innerUnitMeasure: z.string({
    required_error: "Please select a inner unit.",
  }),
  configuration: z.string(),
  description: z.string(),
});
