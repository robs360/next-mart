"use client";

import Logo from "@/app/assets/svgs/Logo";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RegisterUser } from "@/services/Authservices";
import { TUser } from "@/types/type";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const RegisterPage = () => {
  const router = useRouter();
  const form = useForm();
  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await RegisterUser(data as TUser);
      if (res.success) {
        toast.success(res.message, {
          style: {
            background: "white",
            color: "green",
          },
          position: "top-left",
        });
        router.push("/login");
      } else {
        toast.error("Something went wrong", {
          style: {
            background: "white",
            color: "red",
          },
          position: "top-left",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl w-[350px] md:w-[450px] mx-auto mt-16">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-6">
        <Logo />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Register</h1>
          <p className="text-sm text-gray-600">
            Join us today and start your journey!
          </p>
        </div>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-[45px] rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-[45px] rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
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
                <FormLabel className="text-gray-700 font-medium">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="h-[45px] rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="w-full h-[48px] font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
            type="submit"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </Button>
        </form>
      </Form>

      {/* Footer */}
      <p className="text-sm text-center mt-4 text-gray-600">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-blue-600 font-semibold hover:underline"
        >
          Log in here
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
