import Footer from "@/components/Shared/Footer"
import Navbar from "@/components/Shared/NavBar"


const CommonLayout=({children}:{children:React.ReactNode})=>{
    return(
        <div>
            <Navbar></Navbar>
            <main className="min-h-screen">
                {children}
            </main>
           <Footer></Footer>
        </div>
    )
}
export default CommonLayout