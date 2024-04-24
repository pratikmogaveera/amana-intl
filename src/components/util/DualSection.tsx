import React from 'react'
import Wrapper from './Wrapper'

interface Props {
    children: React.ReactNode
    imgSide: "left" | "right"
}

const DualSection = ({ children, imgSide }: Props) => {
    return (
        <Wrapper>
            <div className='w-full lg:min-h-[calc(100vh-5rem)] grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 px-2 pt-8 pb-16 md:px-8 md:py-20'>
                {children}
            </div>
        </Wrapper>
    )
}

export default DualSection