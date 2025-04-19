"use server"

import { TLogin, TUser } from "@/types/type"
import { cookies } from "next/headers"
import { jwtDecode } from "jwt-decode";
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

export const LoginUser=async (userData:TLogin)=>{
       try{
        const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(userData)
        })
        const result=await res.json()
        if(result.success){
            (await cookies()).set('accessToken',result.data.accessToken)
        }
        return result
       }
       catch(err){
        return null
       }
}

export const getCurrentUser=async ()=>{
    const accessToken=(await cookies()).get('accessToken')?.value
    let decodedData=null

    if(accessToken){
        decodedData=await jwtDecode(accessToken)
        console.log(decodedData)
        return decodedData
    }
    else{
        return null
    }
}