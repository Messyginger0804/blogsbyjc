import React from 'react'
import Link from 'next/link'
import { cssFunc } from '@/utils'

function Tag({ link = '#', name, ...props }) {
    return (
        <Link
            href={link}
            className={cssFunc(
                "inline-block py-3 px-10 bg-dark text-light rounded-full font-semibold border-solid border-2 border-light hover:scale-125 transition-all ease duration-200",
                props.className)}
        >
            {name}
        </Link>
    )
}

export default Tag