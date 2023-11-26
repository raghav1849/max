import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import signInWallpaper from "../../../public/signInWallpaper1.jpg";
import SignupRedirectLink from "./SignupRedirectLink";

export default function SignIn() {
  return (
    <div className="w-full h-screen flex justify-center items-center p-4 lg:p-0 md:p-0">
      <div className="flex items-center justify-center">
        <div className="border h-[500px] lg:h-[600px] md:h-[500px] lg:w-[450px] w-[370px] md:w-[430px]">
          <Card className="border-0 h-full pt-6">
            <CardHeader>
              <CardTitle>Sign in</CardTitle>
              <CardDescription>
                Sign in with your supplier account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Email</Label>
                    <Input
                      type="email"
                      id="name"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Password</Label>
                    <Input
                      type="password"
                      id="name"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardContent className="flex justify-between">
              <Button>Sign in</Button>
            </CardContent>
            <div className="w-full flex items-center justify-center">
              <Separator className="my-4 w-[90%]" />
            </div>
            <CardFooter className="flex text-center justify-center items-center">
              <SignupRedirectLink />
            </CardFooter>
          </Card>
        </div>
        <div className="lg:block hidden md:hidden">
          <Image width={480} height={600} src={signInWallpaper} />
        </div>
      </div>
    </div>
  );
}
