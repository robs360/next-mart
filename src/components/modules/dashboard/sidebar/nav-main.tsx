"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <SidebarGroup className="bg-white border-4">
      <SidebarGroupLabel className="text-muted-foreground tracking-wide text-sm font-medium uppercase px-3 pb-2">
        Platforml
      </SidebarGroupLabel>
      <SidebarMenu className="space-y-1 bg-white">
        {items.map((item) => (
          <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
            <SidebarMenuItem className="rounded-lg hover:bg-muted/40 transition-colors duration-200 ease-in-out">
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-foreground hover:text-primary"
              >
                <a href={item.url} className="flex items-center w-full">
                  <item.icon className="size-4 text-muted-foreground" />
                  <span className="ml-2 truncate">{item.title}</span>
                </a>
              </SidebarMenuButton>

              {item.items?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className="text-muted-foreground hover:text-primary data-[state=open]:rotate-90 transition-transform duration-200">
                      <ChevronRight className="size-4" />
                      <span className="sr-only">Toggle</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub className="ml-7 mt-1 space-y-1">
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            asChild
                            className="block text-muted-foreground hover:text-foreground text-sm transition-colors"
                          >
                            <a href={subItem.url}>
                              <span className="truncate">{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
