import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import profileCharacter from "../../../public/bitmoji.png"

// export const profileCharacter = 'https://t4.ftcdn.net/jpg/05/79/67/83/360_F_579678392_4Bh9vMB1DP4QXNzE0E2pUHJYLOYpBgwO.jpg'

const AboutCover = () => {
    return (
        <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
            <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'>
                <Image
                    className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
                    src={profileCharacter}
                    alt="CodeBucks"
                    priority
                    sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
                />
                {/* <img
                    src={profileCharacter}
                    className='w-4/5 p-9 xs:w-3/4 md:w-full h-full object-contain object-center'
                /> */}
            </div>

            <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
                <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left'>
                    This is me JC 😏
                </h2>
                <p className='font-medium mt-4 text-base'>
                    Welcome to my corner of the digital world! I'm a software engineer with a unique journey that led me to this exciting and ever-evolving field. Before diving into the tech world 🌎, I spent several years as a store manager for Aldi. This experience instilled in me a strong work ethic, exceptional organizational skills, and the ability to thrive in a fast-paced, results-oriented environment.
                </p>
                <p className='font-medium mt-4 text-base'>
                    My transition to the world of software engineering wasn't just a career change; it was a pursuit of my true passion. I'm a firm believer that the key to success is continuous growth and challenge. As a software engineer, I've embraced this philosophy wholeheartedly. Each day, I strive to hone my craft, push the boundaries of what I know, and explore the endless possibilities within the world of technology. In this fast-paced, ever-changing field, I've found my true calling. I invite you to join me on this exciting adventure through the world of software development, where every line of code is a step toward innovation and progress.</p>
                <p className='font-medium mt-4 text-base'>
                    Feel free to explore my work, thoughts, and projects, and don't hesitate to get <Link href='/contact' className='hover:underline font-bold'>in touch</Link> if you'd like to collaborate or share your own experiences. Together, we can continue to learn, grow, and shape the future of technology.
                </p>

            </div>
        </section>
    )
}

export default AboutCover