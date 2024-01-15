import Supplier from "../models/supplier.model";

export class SupplierService {
    constructor() {}

    async getAllSuppliers() {
        try {
            const response = await Supplier.find();
            return response;
        } catch (error : any) {
            throw new Error(error.message);
        }
    }

    async getSupplierById(id : string) {
        try {
            const response = await Supplier.find({ supplierId: id });
            return response;
        } catch (error :any) {
            throw new Error(error.message);
        }
    }

    async updateSupplier(id : string, data : Object) {
        try {
            const response = await Supplier.updateOne(
                { supplierId: id },
                { ...data }
            );
            return response;
        } catch (error : any) {
            throw new Error(error.message);
        }
    }
}


