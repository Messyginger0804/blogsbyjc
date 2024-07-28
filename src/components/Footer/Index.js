"use client"
import React from 'react'
import Linkedin from '../Header/svgs/LinkedIn';

import GitHub from '../Header/svgs/GitHub';
import Profile from '../Header/svgs/Profile';
import siteMetadata from '@/utils/metaData';

function Footer() {
    console.log(errors);
    return (
        <footer className="mt-6 rounded-2xl bg-dark/90 dark:bg-accentDark/80 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
            <h3 className="mt-6 font-medium dark:font-bold text-center capitalize text-2xl md:text-4xl px-4">
                Interesting Stories | Updates | Guides
            </h3>
            <p className="mt-2 md:mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm">
                Please connect with me on <a target='_blank' className='underline' href={siteMetadata.linkedin}>LinkedIn</a> for updates on when the next blog post will be published. 🌚
            </p>
            <div className='flex items-center mt-2 md:mt-6 border-2 border-light dark:bg-light rounded-xl mb-2 p-2 dark:fill-dark'>
                <a className='w-6 h-6 mx-4 inline-block bg-dark' href={siteMetadata.linkedin}>
                    <Linkedin
                        className="hover:scale-125 transition-all ease duration-200 text-dark"
                    />
                </a>
                <a className="inline-block w-6 h-6 mr-4 dark:bg-light" href={siteMetadata.github}>
                    <GitHub
                        className="hover:scale-125 transition-all ease duration-200 fill-light dark:fill-dark"
                    /></a>
                <a className="fill-light inline-block w-6 h-6 mr-4 dark:bg-light " href='/portfolio/#portfolio'>
                    <Profile
                        className="fill-light hover:scale-125 transition-all ease duration-200 dark:fill-dark"
                    /></a>
            </div>
            <div className="w-full mt-6 md:mt-10 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
                <span className="text-center">
                    © 2023 JC Software. All rights reserved. 😜
                </span>
                <div className='text-center'>
                    Made with &hearts; by <a href={siteMetadata.portfolio} target="_blank" className='underline hover:font-bold'>JC Ashley </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer