"use client";
import Nav from "./Nav";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={36} className="text-white" />
      </SheetTrigger>
      <SheetContent className="bg-body text-white border-gray-secondary" side="left">
        <div className="flex flex-col justify-between h-full p-12">
          <Nav
            containerStyles="text-white"
            listStyles="flex flex-col gap-y-6 text-xl"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;