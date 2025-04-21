"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/modules/dashboard/sidebar/nav-main"
// import { NavProjects } from "@/components/modules/dashboard/sidebar/nav-projects"
// import { NavSecondary } from "@/components/modules/dashboard/sidebar/nav-secondary"
import { NavUser } from "@/components/modules/dashboard/sidebar/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Logo from "@/app/assets/svgs/Logo"

const data = {
    navMain: [
      {
        title: "Dashboard",
        url: "/user/dashboard",
        icon: SquareTerminal,
        isActive: true,
      },
      {
        title: "Shop",
        url: "/user/shop/all-products",
        icon: Bot,
        items: [
          {
            title: "Manage Products",
            url: "/user/shop/all-products",
          },
          {
            title: "Manage Categories",
            url: "/user/shop/category",
          },
          {
            title: "Manage Brands",
            url: "/user/shop/brand",
          },
        ],
      },
  
      {
        title: "Settings",
        url: "#",
        icon: Settings,
        items: [
          {
            title: "Profile",
            url: "/profile",
          },
        ],
      },
    ],
    navSecondary: [
      {
        title: "Support",
        url: "#",
        icon: LifeBuoy,
      },
      {
        title: "Feedback",
        url: "#",
        icon: Send,
      },
    ],
    projects: [
      {
        name: "Design Engineering",
        url: "#",
        icon: Frame,
      },
      {
        name: "Sales & Marketing",
        url: "#",
        icon: PieChart,
      },
      {
        name: "Travel",
        url: "#",
        icon: Map,
      },
    ],
  };

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      variant="inset"
      className="border-r border-gray-200 shadow-sm text-gray-800"
      {...props}
    >
      {/* Header Section */}
      <SidebarHeader className="p-4 border-b border-gray-200">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#" className="flex items-center gap-3">
                
                <div className="text-left leading-tight flex items-center space-x-1.5">
                 <Logo></Logo>
                  <div className="">
                    <h1 className="text-2xl font-bold">NEXTMART</h1>
                  </div>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Content Area */}
      <SidebarContent className="p-4 space-y-6">
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="pt-4 border-t border-gray-200" /> */}
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="p-4 border-t border-gray-200">
        <NavUser user={{name:'Shahadat',email:"Shahadat@gmail.com",avatar:''}} />
      </SidebarFooter>
    </Sidebar>
  )
}
