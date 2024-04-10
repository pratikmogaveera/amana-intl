import HomeContactUs from '@/components/HomeContactUs';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Wrapper from '@/components/util/Wrapper';
import type { Metadata } from "next";

import Image from 'next/image';

export const metadata: Metadata = {
    title: "Roller, Oven, Tunnel, and Band Chains - Amana International Industrial Company",
};

const page = () => {
    return (
        <div>
            <div className='bg-company-secondary h-40 md:h-56 w-full'>
                <Wrapper className='h-full flex items-center'>
                    <h1 className='text-white font-bold text-3xl md:text-5xl pl-2'>Roller, Oven, Tunnel, and Band Chains</h1>
                </Wrapper>
            </div>
            <Wrapper className='grid grid-cols-1 lg:grid-cols-[1fr_0.75fr] gap-8 xl:gap-16 w-screen mb-14 py-16'>
                <div className='flex lg:hidden gap-8 justify-center'>
                    <div className='w-full'>
                        <Carousel autoplay={true} buttonPos='outside' className='w-full'>
                            <CarouselContent className='items-center'>
                                {Array.from({ length: 3 }).map((_, index) =>
                                    <CarouselItem key={index} className=''>
                                        <div className='p-2 grid place-items-center'>
                                            <Card className='w-full max-w-md'>
                                                <CardContent className=''>
                                                    <div className='w-full h-[250px] relative rounded-lg overflow-hidden'>
                                                        <Image
                                                            src={`/assets/products/chains-${index + 1}.jpg`}
                                                            alt={`chains-${index + 1}.jpg`}
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
                        Explore Roller Chains, Oven Chains, and Tunnel Oven Band Chains
                    </h1>
                    <p className='text-lg mt-8'>
                        Discover a wide selection of Roller chains, High-Temperature Oven Chains, and Tunnel Oven band chains. Our offerings include chains that withstand high temperatures, ideal for baking, drying, curing, or processing various products.
                    </p>
                    <p className='text-lg'>
                        Trust our quality chains for reliable performance in demanding industrial applications.
                    </p>
                </div>

                <div className='hidden lg:block w-full h-full'>
                    <div className='grid grid-cols-[repeat(3,_170px)] grid-rows-[repeat(4,_95px)] gap-4'>
                        <div className='relative col-span-3 row-span-3 w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/chains-1.jpg' alt='chains-1.jpg' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/chains-2.jpg' alt='chains-2.jpg' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/chains-3.jpg' alt='chains-3.jpg' fill className='object-cover' /></div>
                        <></>
                        <></>
                    </div>
                </div>
            </Wrapper >
            <HomeContactUs />
        </div>
    )
}

export default page