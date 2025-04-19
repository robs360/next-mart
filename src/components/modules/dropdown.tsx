"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import user from "../../app/assets/user.png";
import Image from "next/image";
import { LogOut, User, LayoutDashboard, PlusSquare } from "lucide-react";

const DropDown = () => {
  const handleLogout = async () => {
    const response = await fetch("/api/logout", { method: "POST" });
    console.log("cookies removing", response);
  };

  return (
    <div className="mt-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="p-0 rounded-full">
            <Image
              src={user}
              width={32}
              height={32}
              alt="User Avatar"
              className="rounded-full border border-gray-300 hover:ring-2 hover:ring-primary transition-all"
            />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-48 p-1 shadow-lg rounded-xl">
          <DropdownMenuLabel className="text-gray-600 text-sm font-semibold">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem className="gap-2 hover:bg-muted">
            <User className="h-4 w-4" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 hover:bg-muted">
            <PlusSquare className="h-4 w-4" />
            Create Shop
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 hover:bg-muted">
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </DropdownMenuItem>

          <DropdownMenuItem className="gap-2 hover:bg-red-50 focus:bg-red-100">
            <LogOut className="h-4 w-4 text-red-600" />
            <Button
              variant="ghost"
              className="text-red-600 text-sm font-medium p-0"
              onClick={() => {
                handleLogout();
                signOut();
              }}
            >
              Logout
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDown;
