
import { getCurrentUser } from "./services/Authservices"

import { NextRequest, NextResponse } from "next/server"
type Role = keyof typeof roleBasedPrivateRoutes;
export const authRoute = ['/login', '/register']
const roleBasedPrivateRoutes = {
   user: [/^\/user/, /^\/create-shop/],
   admin: [/^\/admin/],
 };
export const middleware = async (request: NextRequest) => {
   const { pathname } = request.nextUrl
   const user = await getCurrentUser()
   console.log(user)
   if (!user) {
      if (authRoute.includes(pathname)) {
         return NextResponse.next()
      }
      else {
         return NextResponse.redirect(new URL(`/login?redirectPath=${pathname}`, request.url));

      }
   }
   if(user.role&& roleBasedPrivateRoutes[user.role as Role]){
         const routes=roleBasedPrivateRoutes[user.role as Role]
         if (routes.some((route) => pathname.match(route))) {
            return NextResponse.next();
          }
   }
}
export const config = {
   matcher: [
     "/login",
     "/create-shop",
     "/admin",
     "/admin/:page",
     "/user",
     "/user/:page",
   ],
 };