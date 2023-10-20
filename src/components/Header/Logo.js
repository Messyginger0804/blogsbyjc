import Link from 'next/link'
import React from 'react'
import profileImg from 'public/profile.jpg'
import Image from 'next/image'



const Logo = () => {
    return (
        <Link href='/' className='flex items-center text-dark'>
            <div className='object-cover w-16 rounded-full overflow-hidden border border-color-dark mr-4'>
                <Image src={profileImg} alt='JC' className='flex justify-center w-full h-full rounded-full' />
            </div>
            <span className='font-bold text-6xl'>Jeremy "JC" Ashley</span>

        </Link>
    )
}

export default Logo