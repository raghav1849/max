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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { VscGraph } from "react-icons/vsc";

const page = () => {
  const arr = [1, 2, 3, 4];
  const stockArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className="w-full bg-gray-100 p-2 rounded-md ">
      <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-2 mb-2">
        {arr.map((item) => {
          return (
            <Card>
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
      <div className="grid lg:grid-cols-5 grid-cols-1 col-span-full gap-2">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-[#66FF00]">Overview</CardTitle>
            <CardDescription>Monthly and weekly overview</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex justify-between">
              <div>
                <CardTitle className="text-[#66FF00]">Recent Sales</CardTitle>
                <CardDescription>overview of your recent sales</CardDescription>
              </div>
              <div>
                <VscGraph color="#66FF00" size={40} />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] w-[100%] rounded-md border p-4">
              <ul>
                {stockArr.map((stock) => {
                  return (
                    <li className="flex justify-between border-b mb-3">
                      <div className="flex gap-2 items-center">
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                          <TypographyH4>Buyer name</TypographyH4>

                          <div>email</div>
                        </div>
                      </div>
                      <TypographyH4>$2,000.00</TypographyH4>
                    </li>
                  );
                })}
              </ul>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
