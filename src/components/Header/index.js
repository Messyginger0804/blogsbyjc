'use client'
import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

// import { FaLinkedin } from 'react-icons/fa';
// import { AiFillGithub } from 'react-icons/ai';
// import { ImProfile } from 'react-icons/im';
import { MdLightMode } from 'react-icons/md';
import Linkedin from './svgs/LinkedIn';
import Profile from './svgs/Profile';
import GitHub from './svgs/GitHub';
import LightMode from './svgs/LightMode';


// MdLightMode
// FaLinkedin
// GrLinkedinOption
// ImProfile
// SiGithub


const Header = () => {

    return (
        <header className='w-full p-4 px-0 flex items-center justify-between'>
            <Logo />
            <nav className='mx-2 w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm text-dark z-50'>
                <Link className='mr-2' href='/'>Home</Link>
                <Link className='mx-2' href='/about'>About</Link>
                <Link className='mr-2' href='/contact'>Contact</Link>
                <button>
                    <MdLightMode size={23} />
                </button>
            </nav>
            <div className='text-5xl flex justify-end items-center'>
                <a className='w-6 h-6 mr-4 inline-block ' target='_blank' href='https://www.linkedin.com/in/jeremy-ashley-webdev/'>
                    <Linkedin
                        className="hover:scale-125 transition-all ease duration-200"
                    /></a>
                <a className="inline-block w-6 h-6 mr-4" target='_blank' href='https://github.com/Messyginger0804'>
                    <GitHub
                        className="hover:scale-125 transition-all ease duration-200"
                    /></a>
                <a className="inline-block w-6 h-6 mr-4" target='_blank' href='https://jcashleyportfolio.netlify.app/'>
                    <Profile
                        className="hover:scale-125 transition-all ease duration-200"
                    /></a>
            </div>
        </header>
    )
}

export default Header