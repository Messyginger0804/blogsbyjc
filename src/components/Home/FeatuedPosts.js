import { sortBlogs } from '@/utils';
import React from 'react'
import BlogLayoutOne from '../Blog/BlogLayoutOne';
import BlogLayoutTwo from '../Blog/BlogLayoutTwo';
import BlogLayoutThree from '../Blog/BlogLayoutThree';

function FeatuedPosts({ blogs }) {
    const sortedBlogs = sortBlogs(blogs);

    return (
        <section className='w-full mt-32 px-32 flex flex-col items-center justify-center text-dark'>
            <h2 className='w-full inline-block font-bold capitalize text-4xl'>Featued Posts</h2>

            <div className="grid grid-cols-2 grid-rows-2 gap-6  mt-10 sm:mt-16">
                <article className=" col-span-2  sxl:col-span-1 row-span-2 relative">
                    <BlogLayoutOne blog={sortedBlogs[1]} />
                </article>
                <article className=" col-span-2 sm:col-span-1 row-span-1 relative">
                    <BlogLayoutTwo blog={sortedBlogs[2]} />

                </article>
                <article className="col-span-2 sm:col-span-1 row-span-1 relative">
                    <BlogLayoutTwo blog={sortedBlogs[3]} />

                </article>
            </div>

        </section>
    )
}

export default FeatuedPosts