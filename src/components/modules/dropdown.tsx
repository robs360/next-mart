"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { signOut } from "next-auth/react"
import user from '../../app/assets/user.png'
import Image from "next/image"
const DropDown = () => {
   
    return (
        <div className="mt-1">
            <DropdownMenu>
                <DropdownMenuTrigger>
                   <Image src={user} width={34} height={34} alt="My Image" 
                   className="rounded-full"></Image>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                    <DropdownMenuItem><Button onClick={()=>signOut()}>Logout</Button></DropdownMenuItem>
                   
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}

export default DropDown