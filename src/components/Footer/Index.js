"use client"
import React from 'react'
import { useForm } from 'react-hook-form';

function Footer() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <footer className='mt-16 rounded-2xl bg-dark flex flex-col items-center text-light'>
            <h3 className='mt-16 font-medium text-center capitalize text-4xl'>
                Interesting Stories | Updates | Guides
            </h3>
            <p className='mt-5 px-4 text-center w-3/5 font-light text-base'>
                Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to date with latest news.
                © 2023 CodeBucks. All rights reserved.
            </p>
            <form
                className='mt-6 min-w-[384px] flex items-stretch bg-light p-2 rounded mx-4'
                onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />

                <input type="submit" />
            </form>

        </footer>
    )
}

export default Footer