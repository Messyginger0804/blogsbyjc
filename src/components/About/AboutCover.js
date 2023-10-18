import Image from 'next/image'
import React from 'react'
// import profileCharacter from "../../../public/character.png"

export const profileCharacter = 'https://t4.ftcdn.net/jpg/05/79/67/83/360_F_579678392_4Bh9vMB1DP4QXNzE0E2pUHJYLOYpBgwO.jpg'

const AboutCover = () => {
    return (
        <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
            <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'>
                {/* <Image src={profileCharacter} alt="CodeBucks"
                    className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
                    priority
                    width={100}
                    height={100}
                /> */}
                <img
                    src={profileCharacter}
                    className='w-4/5 p-9 xs:w-3/4 md:w-full h-full object-contain object-center'
                />
            </div>

            <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
                <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left'>
                    lorem Ips darken dfd on flexible dark background!!!!!!!!
                </h2>
                <p className='font-medium capitalize mt-4 text-base'>
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


                </p>
            </div>
        </section>
    )
}

export default AboutCover