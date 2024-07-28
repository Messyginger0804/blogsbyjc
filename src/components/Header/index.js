'use client'
import React, { useState } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import Linkedin from './svgs/LinkedIn';
import Profile from './svgs/Profile';
import GitHub from './svgs/GitHub';
import siteMetadata from '@/utils/metaData';
import { useThemeSwitch } from '../Hooks/useThemeSwitch';
import { cssFunc } from '@/utils';


const Header = () => {

    const [mode, setMode] = useThemeSwitch();
    const [click, setClick] = useState(false);

    const toggle = () => {
        setClick(!click)
    }
    return (
        <header className="w-full p-4  px-5 sm:px-10 flex items-center justify-between">
            <Logo />

            <button className="inline-block sm:hidden z-50" onClick={toggle} aria-label="Hamburger Menu">
                <div className="w-6 cursor-pointer transition-all ease duration-300">
                    <div className="relative">
                        <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                            style={{
                                transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
                            }}

                        >&nbsp;</span>
                        <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                            style={{
                                opacity: click ? 0 : 1
                            }}
                        >&nbsp;</span>
                        <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                            style={{
                                transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
                            }}
                        >&nbsp;</span>
                    </div>

                </div>
            </button>

            <nav className=" w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex  sm:hidden
          fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
          transition-all ease duration-300
          "
                style={{
                    top: click ? "1rem" : "-5rem"
                }}

            >
                <Link href="/" className="mr-2">Blog</Link>
                <Link href="/portfolio" className="mx-2">Portfolio</Link>
                <Link href="/contact" className="mx-2">Contact</Link>
                <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    className={cssFunc("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" :
                        "bg-light text-dark")}
                    aria-label="theme-switcher"
                >
                    {
                        mode === "light" ? <MdDarkMode className={"fill-dark"} /> : <MdLightMode className={"fill-dark"} />
                    }
                </button>
            </nav>


            <nav className=" w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden sm:flex
          fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
                <Link href="/" className="mr-2">Blog</Link>
                <Link href="/portfolio" className="mx-2">Portfolio</Link>
                <Link href="/contact" className="mx-2">Contact</Link>
                <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    className={cssFunc("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" :
                        "bg-light text-dark")}
                    aria-label="theme-switcher"
                >
                    {
                        mode === "light" ? <MdDarkMode className={"fill-light"} /> : <MdLightMode className={"fill-dark"} />
                    }
                </button>
            </nav>
            {/* <div className='text-5xl flex justify-end items-center'> */}
            <div className=" hidden sm:flex items-center">
                <a className='w-6 h-6 mr-4 inline-block ' target='_blank' href={siteMetadata.linkedin}>
                    <Linkedin
                        className="hover:scale-125 transition-all ease duration-200"
                    /></a>
                <a className="inline-block w-6 h-6 mr-4" target='_blank' href={siteMetadata.github}>
                    <GitHub
                        className="hover:scale-125 transition-all ease duration-200 dark:fill-light"
                    /></a>
                <a className="inline-block w-6 h-6 mr-4" target='_blank' href={siteMetadata.portfolio}>
                    <Profile
                        className="hover:scale-125 transition-all ease duration-200 dark:fill-light"
                    /></a>
            </div>

        </header >
    )
}

export default Header