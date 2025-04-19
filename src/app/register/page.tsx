import RegisterPage from "@/components/modules/auth/regsiter/RegisteForm"
import img from '../assets/register3.jpg'
import Image from "next/image"
const Register = () => {
    return (
        <div className="min-h-screen gap-x-8 flex justify-center items-center">
            <Image className="hidden lg:flex"
             src={img} alt="My image" width={640} height={20}/>
            <RegisterPage></RegisterPage>
        </div>
    )
}
export default Register