import React from 'react';
import Image from 'next/image';
import { button, heading, truncateText } from '../../data/utilities';

export function ProjectCard({ proj }) {
    const maxDescLength = 150;

    return (
        <div className='text-center p-10 rounded-xl w-[280px] h-[400px] my-6 max-w-sm relative shadow-accent dark:shadow-accentDark
         hover:shadow-xl text-black bg-accent/60 dark:bg-accentDark dark:border-light dark:text-black border-2 border-black hover:scale-105 duration-200'>

            {/* Title at the top */}
            <h3 className='text-lg font-medium dark:text-black absolute top-4 left-0 right-0 mx-4'>{proj.title}</h3>

            <div className='flex flex-col justify-center h-[400px]'>
                <div className='flex justify-center mb-0'>
                    <Image
                        className='fit object-center rounded'
                        src={proj.image}
                        width={100}
                        height={100}
                        alt={proj.title}
                    />
                    {heading(proj.inProgress)}
                </div>

                {/* Description container */}
                <div className='h-[150px] my-2'>
                    <h3 className='text-lg font-medium pt-1 pb-1'>{proj.descTitle}</h3>
                    <p className='text-xs'>{truncateText(proj.desc, maxDescLength)}</p>
                </div>
            </div>

            {/* Buttons container */}
            <div className='flex justify-evenly absolute bottom-0 left-0 w-full p-6 z-20'>
                <a href={proj.rep} className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>
                    github
                </a>
                {button(proj.isPublished, proj.live)}
            </div>
        </div>
    );
}

export default ProjectCard;
