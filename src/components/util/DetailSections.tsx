import React from 'react'

export const Heading = ({ heading, children }: { heading: string, children: React.ReactNode }) => {
    return (
        <div className='flex items-center gap-2 md:gap-4 text-company'>
            {children}
            <h1 className='font-bold text-company text-3xl leading-tight leading-5 md:text-4xl md:leading-[1.125]'>
                {heading}
            </h1 >
        </div>
    )
}

export const Title = ({ title }: { title: string }) => {
    return (
        <h2 className='font-bold text-black text-2xl leading-tight leading-5 md:text-4xl'>
            {title}
        </h2>

    )
}

export const Details = ({ children }: { children: React.ReactNode }) => {
    return (<p className='text-black leading-tight text-base md:text-lg'>
        {children}
    </p>)
}