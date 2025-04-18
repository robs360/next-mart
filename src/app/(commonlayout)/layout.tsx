import Footer from "@/components/Shared/Footer"
import Navbar from "@/components/Shared/NavBar"
import { Tsession } from "@/types/type"
import { authOptions } from "@/utils/authOption"
import { getServerSession } from "next-auth"


const CommonLayout=async ({children}:{children:React.ReactNode})=>{
    const session:Tsession | null =await getServerSession(authOptions)
    console.log(session)
    return(
        <div>
            <Navbar session={session}></Navbar>
            <main className="min-h-screen">
                {children}
            </main>
           <Footer></Footer>
        </div>
    )
}
export default CommonLayout