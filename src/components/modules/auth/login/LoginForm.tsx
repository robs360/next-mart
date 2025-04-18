"use client"
import google from '../../../../app/assets/google.png'
import Logo from "@/app/assets/svgs/Logo"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { motion } from "motion/react"

import Image from 'next/image'
import Link from 'next/link'
import {  FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { FaFacebook } from "react-icons/fa"
import { toast } from 'sonner'

const LoginPage = () => {
    const form = useForm()
    const {formState:{isSubmitting}}=form
    const onSubmit:SubmitHandler<FieldValues> =async (data) => {
        
        try{
            console.log(data)
            //  const res=await RegisterUser(data as TUser)
            //  if(res.success){
            //     toast.success(res.message,{
            //         style:{
            //             background:"white",
            //             color:"green"
            //         },
            //         position:"top-left"
            //     })
            //  }
            //  else{
            //     toast.error("Something went wrong",{
            //         style:{
            //             background:"white",
            //             color:"red"
            //         },
            //         position:"top-left"
            //     })
            //  }
        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <motion.div initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.5,delay:0.3}} className="p-6 rounded-[8px] shadow-2xl w-[360px] md:w-[575px] lg:w-[400px]">
            <div className="flex items-center space-x-4 ">
                <Logo />
                <div>
                    <h1 className="text-2xl font-semibold">Login</h1>
                    <p className="text-sm font-medium text-gray-600">
                        Join us today and start your journey!
                    </p>
                </div>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mt-3">
                  
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input className="h-[42px] rounded-none" {...field} value={field.value || ""} />
                                </FormControl>
                                
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input className="h-[42px] rounded-none" {...field} value={field.value || ""} />
                                </FormControl>
                                
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="cursor-pointer w-full text-[18px] h-[43px] rounded-none" type="submit">{isSubmitting?"Loging...":"Login"}</Button>
                </form>
            </Form>
            <div>
                 
                 <div className="mt-4">
                     <button className="cursor-pointer w-full font-medium flex space-x-2 justify-center items-center h-[45px] border-2 border-blue-500">
                         <FaFacebook className="text-blue-500 text-[32px]"></FaFacebook>
                         <span className=''>Sign In With Facebook</span>
                     </button>
                     <button className="cursor-pointer w-full font-medium flex mt-4 space-x-2 justify-center items-center h-[45px] border-2 border-black">
                         <Image src={google} height={30} width={30} alt='Google'></Image>
                         <span className=''>Sign In With Facebook</span>
                     </button>
                 </div>
                 <Link href={'/register'} className='text-center mt-2 block'>Have not any account?</Link>
            </div>
        </motion.div>
    )
}
export default LoginPage