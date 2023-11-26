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
import { Avatar } from "antd";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import signInWallpaper from "../../../public/signInWallpaper1.jpg";
import { CiImageOff } from "react-icons/ci";

const AddProductImage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-normal">Product image</CardTitle>
        <CardDescription className="flex justify-between">
          <TypographyH4>Add upto 5 images</TypographyH4>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-2">
          <div className="flex justify-center">
            <Avatar
              shape="square"
              icon={<Image src={signInWallpaper} />}
              size={300}
            />
          </div>
          <div className="flex justify-center gap-5">
            <Avatar
              shape="square"
              size={75}
              icon={<Image src={signInWallpaper} />}
            />
            <Avatar shape="square" icon={<CiImageOff />} size={75} />
            <Avatar shape="square" size={75} />
            <Avatar shape="square" size={75} />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className="bg-white text-black shadow-md hover:bg-slate-100 w-[350px]">
          Add product
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AddProductImage;
