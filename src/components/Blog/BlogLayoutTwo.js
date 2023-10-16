import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Tag from '../Elements/Tag'

function BlogLayoutTwo({ blog }) {
    return (
        <div className='grid grid-cols-12 gap-4 items-center text-dark'>
            <Link href={blog.url} className='col-span-4 h-full rounded-xl overflow-hidden'>
                <Image
                    src={blog.image.filePath.replace("../public", "")}
                    // placeholder='blur'
                    // blurDataURL={blog.image.blurhashUrl}
                    alt={blog.title}
                    width={blog.image.width}
                    height={blog.image.height}
                    className='aspect-square w-full object-cover object-center'
                />
            </Link>
            <div className='col-span-8'>
                <Tag
                    href={`/categories/${blog.tags[0]}`}
                    name={blog.tags[0]}
                    className='px-6 text-sm py-2 !border'
                />
                <Link href={blog.url} className='mt-6'></Link>
                <h2 className='font-bold capitalize text-xl mt-4'>
                    <span className='bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-700 text-light'>
                        {blog.title}
                    </span>
                </h2>
            </div>
        </div>
    )
}

export default BlogLayoutTwo