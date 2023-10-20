import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Tag from '../Elements/Tag'
import { format } from 'date-fns'

function BlogLayoutTwo({ blog }) {
    return (
        <div className='group grid grid-cols-12 gap-4 items-center text-dark'>
            <Link
                className='col-span-4 h-full rounded-xl overflow-hidden'
                href={blog.url}
            >
                <Image
                    src={blog.image.filePath.replace("../public", "")}
                    // placeholder='blur'
                    // blurDataURL={blog.image.blurhashUrl}
                    alt={blog.title}
                    width={blog.image.width}
                    height={blog.image.height}
                    className='aspect-square w-full object-cover object-center group-hover:scale-105 transition-all ease duration-300'
                />
            </Link>
            <div className='col-span-8 w-full'>
                <span className='uppercase text-accent font-semibold text-sm '>{blog.tags[0]}</span>
                <Link href={blog.url} className='inline-block my-1 '>

                    <h2 className='capitalize mt-4 font-semibold text-lg '>
                        <span className='group-hover: bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-700 text-dark'>
                            {blog.title}
                        </span>
                    </h2>
                </Link>
                <span className=''>
                    {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
                </span>
            </div>
        </div>
    )
}

export default BlogLayoutTwo