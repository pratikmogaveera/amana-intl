import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Wrapper from '@/components/util/Wrapper';
import type { Metadata } from "next";

import Image from 'next/image';

export const metadata: Metadata = {
    title: "Transmission And Timing Belts - Amana International Industrial Company",
};

const page = () => {
    return (
        <div>
            <Wrapper className='grid grid-cols-1 lg:grid-cols-[1fr_0.75fr] gap-8 xl:gap-16 w-screen py-16 mb-14'>
                <div className='flex lg:hidden gap-8 justify-center'>
                    <div className='w-full'>
                        <Carousel autoplay={true} buttonPos='outside' className='w-full'>
                            <CarouselContent className='items-center'>
                                {Array.from({ length: 4 }).map((_, index) =>
                                    <CarouselItem key={index} className=''>
                                        <div className='p-2 grid place-items-center'>
                                            <Card className='w-full max-w-md'>
                                                <CardContent className=''>
                                                    <div className='w-full h-[250px] relative rounded-lg overflow-hidden'>
                                                        <Image
                                                            src={`/assets/products/transmission-${index + 1}.jpg`}
                                                            alt={`transmission-${index + 1}.jpg`}
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
                        Enhance Your Operations with Transmission and Timing Belts
                    </h1>
                    <p className='text-lg text-justify mt-8'>
                        Discover a vast selection of Transmission and Timing Belts, featuring leading brands renowned for their reliability and performance. Our range encompasses a variety of options tailored to meet your specific needs.
                    </p>
                    <p className='text-lg text-justify'>
                        From standard transmission belts to specialized timing belts with coatings such as fiberglass, polyester, Kevlar, and perforated designs, we provide solutions for a wide range of applications.
                    </p>
                    <p className='text-lg text-justify'>
                        Trust in our belts to deliver exceptional performance and durability, ensuring smooth and efficient operation in any setting.
                    </p>
                </div>

                <div className='hidden lg:block w-full h-full pt-14'>
                    <div className='grid grid-cols-[repeat(3,_170px)] grid-rows-[repeat(3,_95px)] gap-4'>
                        <div className='relative col-span-2 row-span-3 w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/transmission-4.jpg' alt='transmission-4.jpg' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/transmission-2.jpg' alt='transmission-2.jpg' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/transmission-3.jpg' alt='transmission-3.jpg' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/transmission-1.jpg' alt='transmission-1.jpg' fill className='object-cover' /></div>
                        <></>
                        <></>
                    </div>
                </div>
            </Wrapper >
        </div>
    )
}

export default page