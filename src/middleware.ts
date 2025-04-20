import { getServerSession } from "next-auth"
import { getCurrentUser } from "./services/Authservices"
import { authOptions } from "./utils/authOption"
import { NextRequest, NextResponse } from "next/server"

export const authRoute=['/login','/register']
export const middleware=async (request:NextRequest)=>{
   const {pathname}=request.nextUrl
   const user=await getCurrentUser()
   const session=await getServerSession(authOptions)
   if(!user&&!session){
       if(authRoute.includes(pathname)){
          return NextResponse.next()
       }
       else{
        return NextResponse.redirect(new URL(`/login?redirectPath=${pathname}`, request.url));

       }
   }
}
export const config = {
    matcher: ['/login', '/create-shop'],
  }