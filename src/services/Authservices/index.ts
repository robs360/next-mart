"use server"

import { TUser } from "@/types/type"

export const RegisterUser=async (userData:TUser)=>{
    try{
        const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
        })
        return res.json()
    }
    catch(error:any){
        return Error(error)
    }
}