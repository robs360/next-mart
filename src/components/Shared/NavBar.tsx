"use client";

import Logo from "@/app/assets/svgs/Logo";
import { Button } from "../ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Tsession } from "@/types/type";
import DropDown from "../modules/dropdown";

const Navbar = ({ session }: { session: Tsession | null }) => {
  return (
    <header className="border-b bg-white shadow-sm top-0 z-50 w-full">
      <div className="flex md:hidden p-3">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full px-5 py-2 rounded-full border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-gray-500"
        />
      </div>
      <div className="w-full px-4 flex justify-between items-center h-16 gap-4">


        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition">
          <Logo />
          <span className="text-2xl font-black">Next Mart</span>
        </Link>

        {/* Search Input */}
        <div className="hidden md:flex flex-grow  max-w-lg">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-5 py-2 rounded-full border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-gray-500"
          />
        </div>

        {/* Nav Buttons */}
        <nav className="flex items-center gap-3">
          {session ? (
            <DropDown />
          ) : (
            <Link href="/login">
              <Button className="rounded-full px-6">Login</Button>
            </Link>
          )}

          <Button
            variant="outline"
            className="rounded-full p-0 size-10 hover:bg-pink-100 transition"
          >
            <Heart className="text-pink-500" />
          </Button>

          <Button
            variant="outline"
            className="rounded-full p-0 size-10 hover:bg-yellow-100 transition"
          >
            <ShoppingBag className="text-yellow-500" />
          </Button>
        </nav>
      </div>
      
    </header>
  );
};

export default Navbar;
