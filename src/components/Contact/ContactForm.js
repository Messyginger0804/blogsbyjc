"use client";
import React, { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';


// import { useForm } from "react-hook-form";

export default function ContactForm() {
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm();
    // const onSubmit = (data) => console.log(data);
    // console.log(errors);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0fdj2mx', 'template_s2t184g', form.current, '_0eJeVE_0upDw61qU')
            // .then(toast('Thank you for your message, I will get back to you ASAP!'))
            .then(toast(
                <h3 className='text-center text-4xl'>Thank you for your message, I will get back to you ASAP!</h3>
            ))
        // .then(toast(''))
        e.target.reset();

    };

    return (

        // <form
        //           ref={form} onSubmit={sendEmail}
        //           className='flex-col gap-11 px-15 md:px-20 lg:mx-32'
        //         // ref={form} onSubmit={sendEmail(e)}
        //         >
        //           <div className='shadow-lg shadow-blue-50'>

        //             <input className='resize-none w-full p-1 border-2 border-blue-700 bg-transparent' type='text' name='name' placeholder='full name' required />
        //             <input className='resize-none w-full p-1 border-2 bg-transparent border-blue-700' type='email' name='email' placeholder='youremail@email.com' required />
        //             <textarea className='resize-none w-full p-1 border-2 border-blue-700 bg-transparent' name='message' rows='7' placeholder='your message' required></textarea>
        //           </div>
        //           <button type="submit" className='hover:bg-white bg-sky-300 p-2 text-gray-800 border-2 border-sky-400'>Send Message</button>
        //         </form>

        <>

            <form
                ref={form}
                onSubmit={sendEmail}
                className="mt-6 text-base xs:text-lg bg-accent/50 dark:bg-accentDark p-4 rounded-xl sm:text-xl font-medium leading-relaxed font-in dark:text-dark"
            >
                Hello! My name is{" "}
                <input
                    type="text"
                    placeholder="your name"
                    required
                    className="bg-red-100/20 rounded-2xl outline-none border-0 text-center p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray"
                />
                You can reach me at
                <input type={"tel" || 'email'} placeholder="email or cell#"
                    required
                    className="bg-red-100/20 rounded-2xl outline-none border-0 p-0 mx-2 text-center focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray"/>

                <textarea
                    required
                    placeholder="My project is about..."
                    rows={3}
                    className="bg-red-100/20 rounded-2xl pl-4 w-full outline-none border-0 p-0 mx-0 focus:ring-0  placeholder:text-lg border-b border-gray 
        focus:border-gray" />
                <input type="submit" value="send request"
                    className="bg-red-100/80 mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer" />
            </form>
            <ToastContainer
                lt
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover
                theme="dark" />
        </>
    );
}