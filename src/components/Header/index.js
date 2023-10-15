import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';


// FaLinkedin
// ImProfile
// SiGithub
const Header = () => {
    return (
        <header className='w-full p-4 px-0 flex items-center justify-between'>
            <Logo />
            <nav className='w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm'>
                <Link className='mr-2' href='/'>Home</Link>
                <Link className='mx-2' href='/about'>About</Link>
                <Link className='mr-2' href='/contact'>Contact</Link>
                <button>T</button>
            </nav>
            <div className='text-5xl flex justify-end '>
                <a className='mx-4' href='http://example.com'><FaLinkedin size='2.5rem' /></a>
                <a className='mx-4' href='http://example.com'><AiFillGithub size='2.5rem' /></a>
                <a className='mx-4' href='http://example.com'><ImProfile size='2.5rem' /></a>
            </div>
        </header>
    )
}

export default Header