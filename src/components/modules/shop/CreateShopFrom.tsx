"use client";
import Logo from "@/app/assets/svgs/Logo";
import { Button } from "@/components/ui/button";
import NMimageUploader from "@/components/ui/core/NMimageUploader";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createShop } from "@/services/Shop";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateShopForm = () => {
    const [image, setImage] = useState<File[] | []>([]);
    const [previmage, setprevImage] = useState<string[] | []>([]);

    const form = useForm();
    const {
        formState: { isSubmitting },
    } = form;

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const servicesOffered = data?.servicesOffered
            .split(",")
            .map((service: string) => service.trim())
            .filter((service: string) => service !== "");

        const modifiedData = {
            ...data,
            servicesOffered: servicesOffered,
            establishedYear: Number(data?.establishedYear),
        };
        console.log("it is modifiedData ",modifiedData)
        try {
            const formData = new FormData();
            formData.append("data", JSON.stringify(modifiedData));
            formData.append("logo", image[0] as File)
            console.log("it is form data",formData)
            const res = await createShop(formData);

            console.log("Res ",res);
            if (res.success) {
                toast.success(res.message, {
                    className: "bg-green-300 text-green-600",
                    position: "top-center", // or 'bottom-center'
                  });
            }
            if (!res.success) {
                toast.error('Something went wrong', {
                    className: "bg-green-300 text-green-600",
                    position: "top-center", // or 'bottom-center'
                  });
            }
        }
        catch (err) {
            toast.error('Something went wrong',{
                position:'top-center'
            })
        }
    };

    return (
        <div className="p-8 rounded-2xl shadow-2xl bg-white max-w-3xl mx-auto mt-10">
            {/* Header */}
            <div className="flex items-center space-x-4 mb-6">
                <Logo />
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Create Your Shop</h1>
                    <p className="text-base text-gray-600">
                        Join us today and start your journey!
                    </p>
                </div>
            </div>

            {/* Form */}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Main Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { name: "shopName", label: "Shop Name" },
                            { name: "businessLicenseNumber", label: "Business License Number" },
                            { name: "address", label: "Address" },
                            { name: "contactNumber", label: "Contact Number" },
                            { name: "website", label: "Website" },
                            { name: "establishedYear", label: "Established Year" },
                            { name: "taxIdentificationNumber", label: "Tax Identification Number" },
                        ].map(({ name, label }) => (
                            <FormField
                                key={name}
                                control={form.control}
                                name={name}
                                rules={{ required: "This field is required" }}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700 font-medium">{label}</FormLabel>
                                        <FormControl>
                                            <Input {...field} value={field.value || ""} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        ))}
                    </div>

                    {/* Social Media Fields */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            Social Media Links
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { name: "socialMediaLinks.facebook", label: "Facebook" },
                                { name: "socialMediaLinks.twitter", label: "Twitter" },
                                { name: "socialMediaLinks.instagram", label: "Instagram" },
                            ].map(({ name, label }) => (
                                <FormField
                                    key={name}
                                    control={form.control}
                                    name={name}
                                    rules={{ required: "This field is required" }}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-gray-700 font-medium">{label}</FormLabel>
                                            <FormControl>
                                                <Input {...field} value={field.value || ""} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Services Offered */}
                    <div>
                        <FormField
                            control={form.control}
                            name="servicesOffered"
                            rules={{ required: "This field is required" }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700 font-medium">Services Offered</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            className="h-36"
                                            value={field.value || ""}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Image Uploader */}
                    <NMimageUploader
                        previmage={previmage}
                        setprevImage={setprevImage}
                        setImage={setImage}
                    />

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="mt-5 w-full h-[42px] font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                        {isSubmitting ? "Creating..." : "Create Shop"}
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default CreateShopForm;
