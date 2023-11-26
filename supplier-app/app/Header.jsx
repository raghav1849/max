import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";
import { GoOrganization } from "react-icons/go";
import { RiBillLine } from "react-icons/ri";
import { TypographyBlockquote, TypographyH1, TypographyH4 } from "@/typography";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="w-[100%] h-[100px] flex justify-between border p-5 sticky top-0 bg-white z-50 shadow-md">
      <div className="flex md:flex lg:flex gap-5 items-center">
        <div>
          <TypographyH1>Welcome to supplier portal</TypographyH1>
          <TypographyBlockquote>we enhance your business.</TypographyBlockquote>
        </div>
        <div className="relative">
          <Input type="email" placeholder="Search" />
          <CiSearch className="absolute top-3 right-3" />
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <TypographyH4>Business name</TypographyH4>
        <HoverCard>
          <HoverCardTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </HoverCardTrigger>
          <HoverCardContent>
            <Command>
              <CommandList>
                <CommandGroup heading="Settings">
                  <CommandItem className="flex gap-2">
                    <BsPersonCircle />
                    <Link href={"/settings/profile"}>Profile</Link>
                  </CommandItem>
                  <CommandItem className="flex gap-2">
                    <RiBillLine />

                    <Link href={"/settings/billing"}>Billing</Link>
                  </CommandItem>
                  <CommandItem className="flex gap-2">
                    <GoOrganization />
                    <Link href={"/settings/organisation"}>Organisation</Link>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};

export default Header;
