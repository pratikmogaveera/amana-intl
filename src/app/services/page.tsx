import React from 'react'
import type { Metadata } from "next";
import Wrapper from '@/components/util/Wrapper';
import HomeContactUs from '@/components/HomeContactUs';
import Image from 'next/image';
import PageHeading from '@/components/util/PageHeading';

export const metadata: Metadata = {
    title: "Services - Amana International Industrial Company",
};

const page = () => {
    return (
        <div>
            <PageHeading heading='Services' />
            <Wrapper className='grid grid-cols-1 lg:grid-cols-[1fr_0.75fr] gap-8 xl:gap-16 w-screen py-16'>
                <div className='w-full h-full flex flex-col px-2 gap-4 order-2 lg:order-1'>
                    <h1 className='text-4xl font-bold text-company-secondary'>
                        Our Comprehensive Services
                    </h1>
                    <p className='text-lg mt-8'>
                        At Amana, we&apos;re dedicated to meeting the industrial spare parts and equipment needs of various industries. Our comprehensive suite of services is designed to streamline operations and reduce overseas purchasing costs for our clients. We handle all aspects of the procurement process, from packing and freight to insurance and local customs duties, ensuring seamless delivery to our clients&apos; specified locations.
                    </p>
                    <p className='text-lg'>
                        We understand the importance of client satisfaction, which is why we assess their needs thoroughly, considering factors such as product quality, pricing, delivery timeframe, and the safety of delivery. With our expertise and superior buying power, we negotiate with OEM suppliers to ensure that our clients&apos; specific requirements are met at the best terms and lowest possible prices. Experience peace of mind knowing that your industrial procurement needs are in capable hands with Amana.
                    </p>
                </div>

                <div className='w-full h-full lg:pt-14 order-1 lg:order-2 flex justify-center'>
                    <div className='w-[370px] h-[250px] lg:w-[550px] lg:h-[300px] relative rounded-lg overflow-hidden'>
                        <Image src='/assets/services.jpg' alt='services.jpg' fill className='object-cover' />
                    </div>
                </div>

            </Wrapper >
            <HomeContactUs />
        </div >
    )
}

export default page