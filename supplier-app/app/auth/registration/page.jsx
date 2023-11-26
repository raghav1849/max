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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function page() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Business name</Label>
                <Input id="name" placeholder="Enter your business name" />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">First name</Label>
                <Input id="name" placeholder="Enter your first name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Last name</Label>
                <Input id="name" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="grid grid-cols-1 w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Moblie</Label>
                <Input id="name" placeholder="Enter your mobile" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Register</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
