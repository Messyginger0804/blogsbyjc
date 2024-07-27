import Image from 'next/image';
import React from 'react';
import profileCharacter from "../../../public/bitmoji.png";

const AboutCover = () => {
    return (
        <section className='w-full h-full lg:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col lg:flex-row items-center justify-center text-dark dark:text-light'>
            <div className='w-full lg:w-1/2 h-full border-b-2 lg:border-b-0 lg:border-r-2 border-solid border-dark dark:border-light flex justify-center'>
                <Image
                    className='w-4/5 xs:w-3/4 lg:w-full h-full object-contain object-center'
                    src={profileCharacter}
                    alt="Jeremy Ashley"
                    priority
                    sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
                />
            </div>

            <div className='w-full lg:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
                <h2 className='font-bold capitalize text-4xl xs:text-5xl xl:text-6xl text-center lg:text-left'>
                    Hey I am JC 😏
                </h2>
                <p className='font-medium mt-4 text-xs md:text-lg tracking-widest leading-5 md:leading-8'>
                    I'm a dedicated and committed Software Engineer, passionate about delivering high-quality solutions. As a father of three, I believe in bringing fun and positivity into challenging situations. With a strong track record of success as a freelance developer and Lead Intern Engineer at iServiceWeb, I've developed a thirst for continuous learning and self-improvement. I aggressively seek out opportunities to enhance my skills and expertise, always looking for ways to improve myself and those around me. My passion lies in the process of creation, and I find joy in the journey of building innovative solutions. With a proven ability to lead teams and deliver results, I'm excited to continue growing as a professional and making meaningful contributions to the tech community.
                </p>
            </div>
        </section>
    )
}

export default AboutCover;
