import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Wrapper from '@/components/util/Wrapper';
import type { Metadata } from "next";

import Image from 'next/image';

export const metadata: Metadata = {
    title: "Automation - Amana International Industrial Company",
};

const page = () => {
    return (
        <div>
            <Wrapper className='grid grid-cols-1 lg:grid-cols-[1fr_0.75fr] gap-8 xl:gap-16 w-screen min-h-[calc(100vh-7rem)] py-16'>
                <div className='flex lg:hidden gap-8 justify-center'>
                    <div className='w-full'>
                        <Carousel autoplay={true} buttonPos='outside' className='w-full'>
                            <CarouselContent className='items-center'>
                                {Array.from({ length: 6 }).map((_, index) =>
                                    <CarouselItem key={index} className=''>
                                        <div className='p-2 grid place-items-center'>
                                            <Card className='w-full max-w-md'>
                                                <CardContent className=''>
                                                    <div className='w-full h-[250px] relative rounded-lg overflow-hidden'>
                                                        <Image
                                                            src={`/assets/products/auto-${index + 1}.webp`}
                                                            alt={`auto-${index + 1}.webp`}
                                                            fill
                                                            className='object-cover'
                                                        />
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>)}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>


                <div className='w-full h-full flex flex-col gap-4 px-2 lg:pt-14'>
                    <h1 className='text-4xl font-bold text-company-secondary'>
                        Explore Our Comprehensive Automation Solutions
                    </h1>
                    <p className='text-lg mt-8 text-justify'>
                        At Amana, we offer a wide range of automation solutions tailored to meet your industrial needs. Our specialized expertise includes supporting brand-new parts such as VFDs, HMIs, PLCs, Proximity Sensors, Multi Timers, and more, sourced from renowned brands like Siemens, Allen Bradley, ABB, Danfoss, Lenze, Mitsubishi, Omron, Yaskawa, and others.
                    </p>
                    <p className='text-lg text-justify'>
                        In addition to standard components, we excel in providing specialized process control components, ensuring a one-stop choice for our valued customers. Our sourcing strategy involves direct collaboration with factory-authorized distributors, guaranteeing fair and competitive pricing at all times.
                    </p>
                </div>

                <div className='hidden lg:block w-full h-full'>
                    <div className='grid grid-cols-[repeat(3,_170px)] grid-rows-[repeat(6,_95px)] gap-4'>
                        <div className='relative col-span-2 row-span-3 w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/auto-6.webp' alt='auto-6.webp' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/auto-2.webp' alt='auto-2.webp' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/auto-3.webp' alt='auto-3.webp' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/auto-4.webp' alt='auto-4.webp' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/auto-5.webp' alt='auto-5.webp' fill className='object-cover' /></div>
                        <div className='relative col-span-2 row-span-3 w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/auto-1.webp' alt='auto-1.webp' fill className='object-cover' /></div>
                        <></>
                        <></>
                    </div>
                </div>

            </Wrapper >
        </div>
    )
}

export default page