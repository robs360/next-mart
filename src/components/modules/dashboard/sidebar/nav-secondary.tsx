// import * as React from "react"
// import { type LucideIcon } from "lucide-react"

// import {
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar"

// export function NavSecondary({
//   items,
//   ...props
// }: {
//   items: {
//     title: string
//     url: string
//     icon: LucideIcon
//   }[]
// } & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
//   return (
//     <SidebarGroup {...props}>
//       <SidebarGroupContent>
//         <SidebarMenu>
//           {items.map((item) => (
//             <SidebarMenuItem key={item.title}>
//               <SidebarMenuButton asChild size="sm">
//                 <a
//                   href={item.url}
//                   className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
//                 >
//                   <item.icon className="size-4 text-muted-foreground" />
//                   <span className="truncate">{item.title}</span>
//                 </a>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//           ))}
//         </SidebarMenu>
//       </SidebarGroupContent>
//     </SidebarGroup>
//   )
// }
