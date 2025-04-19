"use client"

import Logo from "@/app/assets/svgs/Logo"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RegisterUser } from '@/services/Authservices'
import { TUser } from '@/types/type'

import Link from 'next/link'
import { useRouter } from "next/navigation"
import {  FieldValues, SubmitHandler, useForm } from "react-hook-form"

import { toast } from 'sonner'

const RegisterPage = () => {
    const router=useRouter()
    const form = useForm()
    const {formState:{isSubmitting}}=form
    const onSubmit:SubmitHandler<FieldValues> =async (data) => {
        
        try{
             const res=await RegisterUser(data as TUser)
             if(res.success){
                toast.success(res.message,{
                    style:{
                        background:"white",
                        color:"green"
                    },
                    position:"top-left"
                })
                router.push('/login')
             }
             else{
                toast.error("Something went wrong",{
                    style:{
                        background:"white",
                        color:"red"
                    },
                    position:"top-left"
                })
             }
        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <div className="p-6 rounded-[8px] shadow-2xl w-[360px] md:w-[575px] lg:w-[400px]">
            <div className="flex items-center space-x-4 ">
                <Logo />
                <div>
                    <h1 className="text-2xl font-semibold">Register</h1>
                    <p className="text-sm font-medium text-gray-600">
                        Join us today and start your journey!
                    </p>
                </div>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mt-3">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input className="h-[42px] rounded-none" {...field} value={field.value || ""} />
                                </FormControl>
                                
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                    <Button className="cursor-pointer w-full text-[18px] h-[43px] rounded-none" type="submit">{isSubmitting?"Registering...":"Register"}</Button>
                </form>
            </Form>
            <div>
                <Link href={'/login'} className='text-center block mt-2'>Already have account?</Link>
            </div>
        </div>
    )
}
export default RegisterPage