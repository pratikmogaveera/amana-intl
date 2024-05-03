import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Wrapper from '@/components/util/Wrapper';
import type { Metadata } from "next";

import Image from 'next/image';

export const metadata: Metadata = {
    title: "Conveying Systems - Amana International Industrial Company",
};

const page = () => {
    return (
        <div>
            <Wrapper className='grid grid-cols-1 lg:grid-cols-[1fr_0.75fr] gap-8 xl:gap-16 w-screen py-16 lg:mb-14'>
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
                                                            src={`/assets/products/conveying-${index + 1}.webp`}
                                                            alt={`conveying-${index + 1}.webp`}
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
                        Enhance Efficiency with Reliable Conveying Systems
                    </h1>
                    <p className='text-lg text-justify mt-8'>
                        Discover our extensive range, including Modular Belts, Table Top Conveyor Chains, Sprockets, Track & Wear Strips, and Bearings.
                    </p>
                    <p className='text-lg text-justify'>
                        Benefit from our expertise in providing premium Modular Belts tailored to the unique needs of the Food & Processing Industries. Our meticulous attention to technical details ensures that each belt meets the highest standards of quality and performance.
                    </p>
                    <p className='text-lg text-justify'>
                        Table Top Conveyor Chains offer versatility and find applications across various industries, including food and beverage, automotive, pharmaceuticals, and packaging. Customizable with different materials and configurations, they efficiently handle a wide range of loads, ensuring seamless operations in diverse settings.
                    </p>
                </div>

                <div className='hidden lg:block w-full h-full pt-14'>
                    <div className='grid grid-cols-[repeat(3,_170px)] grid-rows-[repeat(4,_95px)] gap-4'>
                        <div className='relative col-span-2 row-span-2 w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/conveying-1.webp' alt='conveying-1.webp' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/conveying-4.webp' alt='conveying-4.webp' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/conveying-3.webp' alt='conveying-3.webp' fill className='object-cover' /></div>
                        <div className='relative col-start-2 col-span-2 row-span-2 w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/conveying-2.webp' alt='conveying-2.webp' fill className='object-cover' /></div>                    </div>
                </div>
            </Wrapper >
        </div>
    )
}

export default page