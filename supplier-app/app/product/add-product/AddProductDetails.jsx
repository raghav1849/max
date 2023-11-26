"use client";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addProductDetailsSchema } from "@/schema";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const AddProductDetails = () => {
  const form = useForm({
    resolver: zodResolver(addProductDetailsSchema),
  });

  const {
    formState: { isValid, errors },
  } = form;

  if (!isValid) {
    console.log(errors);
  }

  const onSubmit = (values) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-normal">Product details</CardTitle>
        <CardDescription className="flex justify-between">
          <TypographyH4>Add product details</TypographyH4>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter title" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is product display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter brand" {...field} />
                  </FormControl>
                  <FormDescription>This is product brand name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-2">
              <FormField
                control={form.control}
                name="baseUnitMeasure"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Base unit measure</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a base unit" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="m@example.com">
                          m@example.com
                        </SelectItem>
                        <SelectItem value="m@google.com">
                          m@google.com
                        </SelectItem>
                        <SelectItem value="m@support.com">
                          m@support.com
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      This is base unit measure of product.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="innerUnitMeasure"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Inner unit measure</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a inner unit" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="m@example.com">
                          m@example.com
                        </SelectItem>
                        <SelectItem value="m@google.com">
                          m@google.com
                        </SelectItem>
                        <SelectItem value="m@support.com">
                          m@support.com
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      This is inner unit of product.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="configuration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Configuration</FormLabel>
                  <FormControl>
                    <Input placeholder="Product configuration" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the configuration of product.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Add description of product"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is the description about product.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Add</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AddProductDetails;
