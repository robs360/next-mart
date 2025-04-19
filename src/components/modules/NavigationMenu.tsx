"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa";


const NavigationMenu = () => {
  const [open, setOpen] = useState(false);
  
  
  return (
    
      
      <div className="">
        <Button
          onClick={() => setOpen(true)}
          variant="outline"
          className="rounded-full p-0 size-10 hover:text-white hover:bg-black transition"
        >
          <Menu className="size-5" />
        </Button>
        <div
            className={`w-[350px] min-h-screen flex flex-col pt-10 py-2 gap-y-4 pl-3 text-[16px] font-semibold text-white overflow-hidden absolute top-0  z-50 bg-blue-600 h-[86vh] ${open ? "left-0" : "-left-[410px]"
              } transition-all duration-700`}
          >
            <p>Home</p>
            <p>Blog</p>
            <p>Content</p>
            <button
              onClick={() => {
                setOpen(false);
              }}
              className={`absolute top-0 right-0 w-[36px] h-[36px] rounded-[50%]  ${open ? "absolute" : "hidden"
                }`}
            >
              <FaPlus className="text-xl ml-[6px] rotate-45 text-white"></FaPlus>
            </button>
          </div>
      </div>

      
    
  );
};

export default NavigationMenu;
