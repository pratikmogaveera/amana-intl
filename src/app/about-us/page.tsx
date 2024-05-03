import Wrapper from '@/components/util/Wrapper';
import { MoveRight } from 'lucide-react';
import type { Metadata } from "next";
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
    title: "About Us - Amana International Industrial Company",
};

const page = () => {

    return (
        <div>
            <Wrapper className='grid grid-cols-1 lg:grid-cols-[1fr_0.75fr] gap-8 xl:gap-16 w-screen py-16'>
                <div className='w-full h-full flex flex-col px-2 gap-4 order-2 lg:order-1'>
                    <h1 className='text-4xl font-bold text-company-secondary'>
                        Discover Our Commitment to Excellence
                    </h1>
                    <p className='text-lg mt-4 text-justify'>
                        Amana is a leading and reputable industrial supplies company dedicated to providing hassle-free access to original parts for all makes and brands of process and utility equipment. With our extensive range of components and vast OEM network, we cater to a wide variety
                    </p>
                    <p className='text-lg mt-4 text-justify'>
                        At Amana, we pride ourselves on our ability to ship clearly specified parts, including those hard-to-find items. We understand the urgency of emergency requirements and respond swiftly to minimize downtime. Moreover, our competitive pricing sets us apart from OEMs, offering you cost-effective solutions without compromising on quality.
                    </p>
                    <div className='flex flex-col flex-1 justify-center gap-4 h-full'>
                        <div className='flex flex-col gap-4 mt-8'>
                            <h1 className='text-4xl font-bold text-company-secondary'>
                                Why Choose Us?
                            </h1>

                            <ul className='flex flex-col gap-4 mt-4 text-black leading-tight'>
                                <ListItem>
                                    Leveraging over 30 years of industry expertise, our seasoned team is poised to meet your every need.
                                </ListItem>
                                <ListItem>
                                    Our customer-centric approach ensures tailored solutions that precisely match your unique requirements.
                                </ListItem>
                                <ListItem>
                                    Trust in our unwavering support team for swift and dependable assistance whenever you need it.
                                </ListItem>
                                <ListItem>
                                    Our commitment to excellence guarantees the delivery of top-quality spares and components, customized for the diverse needs of Food Industries and Processing Plants.
                                </ListItem>
                                <ListItem>
                                    Elevate the efficiency of your food and processing operations with our seamless supply services by partnering with Amana today.
                                </ListItem>
                                <ListItem>
                                    Unlock the full potential of your business with our unparalleled spare parts supply services, meticulously designed to optimize your operations.
                                </ListItem>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='w-full h-full flex justify-center order-1 lg:order-2 lg:pt-14'>
                    <div className='w-[370px] h-[250px] lg:w-[550px] lg:h-[300px] relative rounded-lg overflow-hidden'>
                        <Image src='/assets/about-us.webp' alt='about-us.webp' fill className='object-cover' />
                    </div>
                </div>

            </Wrapper >
        </div >
    )
}

const ListItem = ({ children }: { children: React.ReactNode }) => {
    return (
        <li className='flex gap-3 items-start'>
            <MoveRight size={20} className='flex-grow-0 flex-shrink-0 mt-[0.3] stroke-1' />
            <p className='text-justify'>
                {children}
            </p>
        </li>

    )
}

export default page