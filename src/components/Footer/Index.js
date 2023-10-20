"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import Linkedin from '../Header/svgs/LinkedIn';
// import { FaLinkedinIn } from 'react-icons/fa';
// import { GrLinkedinOption } from 'react-icons/gr';


import GitHub from '../Header/svgs/GitHub';
import Profile from '../Header/svgs/Profile';
import Link from 'next/link';

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
                <input
                    type="email"
                    placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                    className='w-full bg-transparent text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 mb-1'
                />

                <input type="submit" className='bg-dark text-light cursor-pointer font-medium rounded px-5 py-1' />
            </form>

            <div className='flex items-center mt-8 border-2 border-light bg-light rounded-xl mb-2 p-12'>
                <a className='w-6 h-6 mx-4 inline-block bg-dark' href='https://www.linkedin.com/in/jeremy-ashley-webdev/'>
                    <Linkedin
                        className="hover:scale-125 transition-all ease duration-200 text-dark"
                    />
                    {/* <GrLinkedinOption /> */}
                </a>
                <a className="inline-block w-6 h-6 mr-4 bg-light" href='http://example.com'>
                    <GitHub
                        className="hover:scale-125 transition-all ease duration-200 fill-light"
                    /></a>
                <a className="fill-light inline-block w-6 h-6 mr-4 bg-light" href='http://example.com '>
                    <Profile
                        className="fill-light hover:scale-125 transition-all ease duration-200 "
                    /></a>
            </div>
            <div className='w-full mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex items-center justify-between'>
                <span>
                    © 2023 JC Software. All rights reserved.
                </span>
                {/* <Link href='/sitemap.xml' className='text-center underline hover:font-bold'>
                    sitemap.xm
                </Link> */}
                <div className='text-center'>
                    Made with &hearts; by <a href='https://jcashleyportfolio.netlify.app/' target="_blank" className='underline hover:font-bold'>JC Ashley </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer