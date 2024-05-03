import Wrapper from '@/components/util/Wrapper';
import { MoveRight } from 'lucide-react';
import type { Metadata } from "next";
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
    title: "Industries - Amana International Industrial Company",
};

const page = () => {
    const sectors = [
        "Beverage Industry",
        "Date Processing Plants",
        "Canned Food Manufacturing",
        "Food Industries (Bakeries, Snack Production)",
        "Glass Industries",
        "Juice Production",
        "Poultry Farming",
        "Water Bottling Plants"
    ];

    return (
        <div>
            <Wrapper className='grid grid-cols-1 lg:grid-cols-[1fr_0.75fr] gap-8 xl:gap-16 w-screen py-16'>
                <div className='w-full h-full flex flex-col px-2 gap-4 order-2 lg:order-1'>
                    <h1 className='text-4xl font-bold text-company-secondary'>
                        Our Expertise Across Industries
                    </h1>
                    <p className='text-lg mt-4 text-justify'>
                        With a team boasting over 30 years of collective experience in process industries, Amana is adept at understanding our clients&apos; requirements with precision and efficiency. Our professionals possess a deep understanding of various sectors, allowing us to cater to a diverse range of industries seamlessly.
                    </p>
                    <p className='text-lg text-justify'>
                        Currently, we proudly serve clients across the following sectors:
                    </p>
                    <ul className='flex flex-col gap-3 text-black leading-tight'>
                        {sectors.map((sector, index) => <ListItem key={index}>{sector}</ListItem>)}
                    </ul>
                    <p className='text-lg text-justify'>
                        Partner with Amana for reliable industrial solutions tailored to your specific industry needs.
                    </p>
                </div>

                <div className='w-full h-full lg:pt-14 order-1 lg:order-2 flex justify-center'>
                    <div className='w-[370px] h-[250px] lg:w-[550px] lg:h-[300px] relative rounded-lg overflow-hidden'>
                        <Image src='/assets/industries.webp' alt='industries.webp' fill className='object-cover' />
                    </div>
                </div>

            </Wrapper >
        </div >
    )
}

const ListItem = ({ children }: { children: React.ReactNode }) => {
    return (
        <li className='flex gap-1 items-start text-company-secondary'>
            <span className='p-1 flex-grow-0 flex-shrink-0'>
                <MoveRight size={20} />
            </span>
            <span className='h-fit font-semibold text-lg leading-snug mt-0.5'>{children}</span>
        </li>
    )
}

export default page