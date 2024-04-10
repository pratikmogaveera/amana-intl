import React from 'react'
import type { Metadata } from "next";
import Wrapper from '@/components/util/Wrapper';
import HomeContactUs from '@/components/HomeContactUs';
import Image from 'next/image';
import { CheckCircle, CheckCircle2, Factory } from 'lucide-react';
import PageHeading from '@/components/util/PageHeading';

export const metadata: Metadata = {
    title: "About Us - Amana International Industrial Company",
};

const page = () => {
    const pointers = [
        "Service",
        "Reliability",
        "Cost-effectiveness",
        "Quality",
        "Quick response",
    ];


    return (
        <div>
            <PageHeading heading='About Us' />
            <Wrapper className='grid grid-cols-1 lg:grid-cols-[1fr_0.75fr] gap-8 xl:gap-16 w-screen py-16'>
                <div className='w-full h-full flex flex-col px-2 gap-4 order-2 lg:order-1'>
                    <h1 className='text-4xl font-bold text-company-secondary'>
                        Discover Our Commitment to Excellence
                    </h1>
                    <p className='text-lg mt-8'>
                        Amana is a leading and reputable industrial supplies company dedicated to providing hassle-free access to original parts for all makes and brands of process and utility equipment. With our extensive range of components and vast OEM network, we cater to a wide variety
                    </p>
                    <p className='text-lg'>
                        At Amana, we pride ourselves on our ability to ship clearly specified parts, including those hard-to-find items. We understand the urgency of emergency requirements and respond swiftly to minimize downtime. Moreover, our competitive pricing sets us apart from OEMs, offering you cost-effective solutions without compromising on quality.
                    </p>
                    <h1 className='text-3xl text-company-secondary font-semibold'>Why Choose Amana?</h1>
                    <ul className='grid grid-cols-2 gap-3 text-black leading-tight'>
                        {pointers.map((sector, index) => <ListItem key={index}>{sector}</ListItem>)}
                    </ul>
                </div>

                <div className='w-full h-full flex justify-center order-1 lg:order-2 lg:pt-14'>
                    <div className='w-[370px] h-[250px] lg:w-[550px] lg:h-[300px] relative rounded-lg overflow-hidden'>
                        <Image src='/assets/about-us.jpg' alt='about-us.jpg' fill className='object-cover' />
                    </div>
                </div>

            </Wrapper >
            <HomeContactUs />
        </div >
    )
}

const ListItem = ({ children }: { children: React.ReactNode }) => {
    return (
        <li className='flex gap-3 items-start bg-muted p-2 md:p-4 rounded-lg'>
            <CheckCircle size={28} className='flex-grow-0 text-company flex-shrink-0' />
            <span className='h-fit font-semibold text-lg text-company-secondary leading-snug mt-0.5'>{children}</span>
        </li>

    )
}

export default page