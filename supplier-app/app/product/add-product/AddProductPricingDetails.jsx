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

const AddProductPricingDetails = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-normal">Pricing details</CardTitle>
        <CardDescription className="flex justify-between">
          <TypographyH4>Manage product pricing</TypographyH4>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2"></div>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default AddProductPricingDetails;
