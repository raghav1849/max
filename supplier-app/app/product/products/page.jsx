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
import { LuDollarSign } from "react-icons/lu";
import MuiProductsTable from "./MuiProductsTable";
import { Button } from "@/components/ui/button";

const page = () => {
  const arr = [1, 2, 3, 4];

  return (
    <div className="w-full bg-gray-100 p-2 rounded-md">
      <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-2 mb-2">
        {arr.map((item, idx) => {
          return (
            <Card key={idx}>
              <CardHeader>
                <CardDescription className="flex justify-between">
                  <TypographyH4>Card Description</TypographyH4>
                  <LuDollarSign />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <div className="flex justify-end gap-2 p-5">
        <Button className="bg-white text-black shadow-md hover:bg-slate-100">
          Bulk import
        </Button>
        <Button className="bg-white text-black shadow-md hover:bg-slate-100">
          Add product
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-[#66FF00]">Products</CardTitle>
          <CardDescription>Total 40 active products</CardDescription>
        </CardHeader>
        <CardContent>
          <MuiProductsTable />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
