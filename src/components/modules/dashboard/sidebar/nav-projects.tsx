// "use client"

// import {
//   Folder,
//   MoreHorizontal,
//   Share,
//   Trash2,
//   type LucideIcon,
// } from "lucide-react"

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// import {
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuAction,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   useSidebar,
// } from "@/components/ui/sidebar"

// export function NavProjects({
//   projects,
// }: {
//   projects: {
//     name: string
//     url: string
//     icon: LucideIcon
//   }[]
// }) {
//   const { isMobile } = useSidebar()

//   return (
//     <SidebarGroup className="group-data-[collapsible=icon]:hidden">
//       <SidebarGroupLabel className="text-muted-foreground tracking-wide text-sm font-medium uppercase px-3 pb-2">
//         Projects
//       </SidebarGroupLabel>

//       <SidebarMenu className="space-y-1">
//         {projects.map((item) => (
//           <SidebarMenuItem
//             key={item.name}
//             className="rounded-lg hover:bg-muted/40 transition-colors duration-200 ease-in-out"
//           >
//             <SidebarMenuButton
//               asChild
//               className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-foreground hover:text-primary"
//             >
//               <a href={item.url} className="flex items-center w-full">
//                 <item.icon className="size-4 text-muted-foreground" />
//                 <span className="ml-2 truncate">{item.name}</span>
//               </a>
//             </SidebarMenuButton>

//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <SidebarMenuAction showOnHover className="text-muted-foreground hover:text-primary">
//                   <MoreHorizontal className="size-4" />
//                   <span className="sr-only">More</span>
//                 </SidebarMenuAction>
//               </DropdownMenuTrigger>

//               <DropdownMenuContent
//                 className="w-48"
//                 side={isMobile ? "bottom" : "right"}
//                 align={isMobile ? "end" : "start"}
//               >
//                 <DropdownMenuItem className="flex items-center gap-2">
//                   <Folder className="size-4 text-muted-foreground" />
//                   <span>View Project</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem className="flex items-center gap-2">
//                   <Share className="size-4 text-muted-foreground" />
//                   <span>Share Project</span>
//                 </DropdownMenuItem>

//                 <DropdownMenuSeparator />

//                 <DropdownMenuItem className="flex items-center gap-2 text-destructive hover:text-destructive">
//                   <Trash2 className="size-4 text-muted-foreground" />
//                   <span>Delete Project</span>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </SidebarMenuItem>
//         ))}

//         <SidebarMenuItem className="rounded-lg hover:bg-muted/40 transition-colors duration-200 ease-in-out">
//           <SidebarMenuButton className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-foreground hover:text-primary">
//             <MoreHorizontal className="size-4 text-muted-foreground" />
//             <span className="ml-2 truncate">More</span>
//           </SidebarMenuButton>
//         </SidebarMenuItem>
//       </SidebarMenu>
//     </SidebarGroup>
//   )
// }
