"use client";

import Logo from "@/app/assets/svgs/Logo";
import { Button } from "../ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Tsession } from "@/types/type";
import DropDown from "../modules/dropdown";
import NavigationMenu from "../modules/NavigationMenu";

const Navbar = ({ session,user }: { session: Tsession | null; user:any }) => {
  
  return (
    <header className="border-b bg-white shadow-sm top-0 z-50 w-full py-3">
      <div className="flex md:hidden p-3">
      <input
            type="text"
            placeholder="Search for products..."
            className="flex-grow px-5 py-2 rounded-l-full border border-blue-500 placeholder:text-gray-500"
          />
        <Button className="rounded-r-full py-[22px] bg-blue-600">Search</Button>
      </div>
     
      <div className="w-full px-4 flex justify-between items-center h-16 gap-4">


        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition">
          <Logo />
          <span className="text-xl md:text-2xl font-black">Next Mart</span>
        </Link>

        {/* Search Input */}
        <div className="hidden md:flex flex-grow  max-w-lg">
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-grow px-5 py-2 rounded-l-full border border-blue-500 placeholder:text-gray-500"
          />
          <Button className="rounded-r-full py-[22px] bg-blue-600">Search</Button>
        </div>

        {/* Nav Buttons */}
        <nav className="flex items-center gap-3">
          {session || user ? (
            <DropDown />
          ) : (
            <Link href="/login">
              <Button className="rounded-full px-6">Login</Button>
            </Link>
          )}


          <Button
            variant="outline"
            className="rounded-full p-0 size-9 hover:bg-orange-200 transition"
          >
            <ShoppingBag className="text-yellow-500 size-5" />
          </Button>
          <NavigationMenu></NavigationMenu>
        </nav>
      </div>
      
    </header>
  );
};

export default Navbar;
