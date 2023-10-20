import { sortBlogs } from '@/utils';
import Link from 'next/link';
import React from 'react'
import BlogLayoutThree from '../Blog/BlogLayoutThree';
// import BlogLayoutOne from '../Blog/BlogLayoutOne';
// import BlogLayoutTwo from '../Blog/BlogLayoutTwo';
// import BlogLayoutThree from '../Blog/BlogLayoutThree';

function RecentPosts({ blogs }) {
    const sortedBlogs = sortBlogs(blogs);

    return (
        <section className='w-full mt-32 px-32 flex flex-col items-center justify-center text-dark'>
            <div className='flex w-full justify-between'>
                <h2 className=' inline-block font-bold capitalize text-4xl'>Recent Posts</h2>
                <Link
                    className='inline-block font-medium text-accent underline underline-offset-2 text-lg'
                    href='/categories/all'
                >view all</Link>

            </div>
            <div className='grid grid-cols-3 grid-rows-2 gap-16 mt-16'>
                {
                    sortedBlogs.slice(4, 11).map((blog, index) => {
                        return <article key={index} className='col-span-1 row-span-1 relative'>
                            <BlogLayoutThree blog={blog} />
                        </article>
                    })
                }
            </div>

        </section>
    )
}

export default RecentPosts