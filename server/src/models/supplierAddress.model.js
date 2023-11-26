import mongoose, { Schema } from "mongoose";

const supplierAddressSchema = new Schema({
  supplierId: {
    type: Schema.Types.String,
    ref: "Supplier",
    required: true,
    index: true,
  },
  apartment: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const SupplierAddress = mongoose.model(
  "SupplierAddress",
  supplierAddressSchema
);

export default SupplierAddress;
