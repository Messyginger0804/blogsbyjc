"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 text-base xs:text-lg bg-accent/50 p-4 rounded-xl sm:text-xl font-medium leading-relaxed font-in"
        >
            Hello! My name is{" "}
            <input
                type="text"
                placeholder="your name"
                {...register("name", { required: true, maxLength: 80 })}
                className="bg-red-100/20 rounded-2xl outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray"
            />
            and I want to discuss a potential project. You can email me at
            <input type="email" placeholder="your@email" {...register("email", {})}
                className="bg-red-100/20 rounded-2xl outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray"/>
            or reach out to me on
            <input
                type="tel"
                placeholder="your phone"
                {...register("phone number", {})}
                className="bg-red-100/20 rounded-2xl outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray"
            />
            Here are some details about my project: <br />
            <textarea {...register("project details", {})}
                placeholder="My project is about..."
                rows={3}
                className="bg-red-100/20 rounded-2xl pl-4 w-full outline-none border-0 p-0 mx-0 focus:ring-0  placeholder:text-lg border-b border-gray 
        focus:border-gray" />
            <input type="submit" value="send request"
                className="bg-red-100/80 rounded-2xl mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer" />
        </form>
    );
}