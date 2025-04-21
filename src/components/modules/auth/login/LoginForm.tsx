"use client";
import { signIn } from "next-auth/react";
import google from '../../../../app/assets/google.png';
import Logo from "@/app/assets/svgs/Logo";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

import Image from 'next/image';
import Link from 'next/link';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { toast } from 'sonner';
import { LoginUser } from "@/services/Authservices";
import { TLogin } from "@/types/type";
import { useRouter, useSearchParams } from "next/navigation";

const LoginPage = () => {
    const search=useSearchParams()
    const redirect=search.get('redirectPath')
    const router = useRouter();
    const form = useForm();
    const { formState: { isSubmitting } } = form;

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const res = await LoginUser(data as TLogin);

            if (res.success) {
                toast.success(res.message, {
                    style: {
                        background: "white",
                        color: "green"
                    },
                    position: "top-left"
                });
                if(redirect){
                    router.push(redirect)
                }
                else{
                    router.push('/')
                }
            } else {
                toast.error("Something went wrong", {
                    style: {
                        background: "white",
                        color: "red"
                    },
                    position: "top-left"
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-2xl w-[360px] md:w-[475px] lg:w-[420px] mx-auto space-y-6"
        >
            {/* Header */}
            <div className="flex items-center space-x-4">
                <Logo />
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Login</h1>
                    <p className="text-sm text-gray-500">
                        Welcome back! Please enter your credentials.
                    </p>
                </div>
            </div>

            {/* Form */}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        className="h-[44px] rounded-md px-3 text-base"
                                        {...field}
                                        value={field.value || ""}
                                    />
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
                                    <Input
                                        type="password"
                                        className="h-[44px] rounded-md px-3 text-base"
                                        {...field}
                                        value={field.value || ""}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        className="w-full h-[44px] font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                        type="submit"
                    >
                        {isSubmitting ? "Logging in..." : "Login"}
                    </Button>
                </form>
            </Form>

            {/* OAuth Section */}
            <div className="space-y-3">
                <button
                    onClick={() => signIn('facebook', { callbackUrl: 'http://localhost:3000/' })}
                    className="flex items-center justify-center w-full h-[45px] border border-blue-500 rounded-md space-x-3 hover:bg-blue-50 transition"
                >
                    <FaFacebook className="text-blue-500 size-6" />
                    <span className="font-medium text-blue-600">Continue with Facebook</span>
                </button>

                <button
                    onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000/' })}
                    className="flex items-center justify-center w-full h-[45px] border border-gray-400 rounded-md space-x-3 hover:bg-gray-50 transition"
                >
                    <Image src={google} height={24} width={24} alt="Google" />
                    <span className="font-medium text-gray-700">Continue with Google</span>
                </button>
            </div>

            {/* Link to Register */}
            <p className="text-center text-sm text-gray-600 mt-2">
                Don't have an account?{" "}
                <Link href="/register" className="text-blue-600 hover:underline font-medium">
                    Register here
                </Link>
            </p>
        </motion.div>
    );
};

export default LoginPage;
