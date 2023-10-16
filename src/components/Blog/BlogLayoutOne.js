import Image from 'next/image'
import React from 'react'
import Tag from '../Elements/Tag'
import Link from 'next/link'

function BlogLayoutOne({ blog }) {
    return (
        <div className='inline-block overflow-hidden rounded-xl'>
            <div className='absolute top-0 left-0 bottom-0 right-0 h-full 
                bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-10 '
            />
            <Image
                src={blog.image.filePath.replace("../public", "")}
                // placeholder='blur'
                // blurDataURL={blog.image.blurhashUrl}
                alt={blog.title}
                width={blog.image.width}
                height={blog.image.height}
                className='w-full h-full object-center object-cover rounded-xl'
            />

            <div className='w-full absolute bottom-0 p-10 z-20'>
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

export default BlogLayoutOne