import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TypographyH4 } from "@/typography";
import AddProductImage from "./AddProductImage";
import AddProductDetails from "./AddProductDetails";
import AddProductStockDetails from "./AddProductStockDetails";
import AddProductPricingDetails from "./AddProductPricingDetails";

const page = () => {
  return (
    <div className="w-full bg-gray-100 p-2 rounded-md">
      <Card>
        <CardHeader>
          <CardTitle>Add product</CardTitle>
          <CardDescription className="flex justify-between">
            <TypographyH4>Add product details</TypographyH4>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-3">
              <AddProductImage />
              <AddProductStockDetails />
            </div>
            <div className="grid gap-3">
              <AddProductDetails />
              <AddProductPricingDetails />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
