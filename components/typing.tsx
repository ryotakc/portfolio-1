'use client';

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export default function Typing(
    {
        word,
        children
    }: {
        word: string[],
        children: React.ReactNode
    }
) {

    const handleType = (count: number) =>{ {
        // access word count number
        console.log(count)}
    }

    return (
        <div className='flex items-center'>
            <h1 className='font-bold text-primary/80 text-4xl mb-5 lg:text-6xl'>
                <br />
                {children} {' '}
                <span className='text-teal-400 font-bold'>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                    words={word}
                    loop={false}
                    cursor
                    cursorStyle='|'
                    typeSpeed={90}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onType={handleType}
                />
                </span>
            </h1>
        </div>
    )
}


