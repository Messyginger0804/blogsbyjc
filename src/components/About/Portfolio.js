import React from 'react'
import Projects from './Projects'
import { projects } from '../../data/projects';


function Portfolio() {
    return (
        <div className='p-4'>
            <h5 className='text-center mt-4'>My Experience</h5>
            <h3 className='text-center text-3xl py-1 text-sky-300'>Projects</h3>

            <div className='hidden md:block'>
                <Projects projects={projects} />
            </div>
        </div>
    )
}

export default Portfolio