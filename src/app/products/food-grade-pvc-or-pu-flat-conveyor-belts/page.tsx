import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Wrapper from '@/components/util/Wrapper';
import type { Metadata } from "next";

import Image from 'next/image';

export const metadata: Metadata = {
    title: "Food Grade PVC / PU Flat Conveyor Belts - Amana International Industrial Company",
};

const page = () => {
    return (
        <div>
            <Wrapper className='grid grid-cols-1 lg:grid-cols-[1fr_0.75fr] gap-8 xl:gap-16 w-screen min-h-[calc(100vh-4rem)] py-16'>
                <div className='flex lg:hidden gap-8 justify-center'>
                    <div className='w-full'>
                        <Carousel autoplay={true} buttonPos='outside' className='w-full'>
                            <CarouselContent className='items-center'>
                                {Array.from({ length: 2 }).map((_, index) =>
                                    <CarouselItem key={index} className=''>
                                        <div className='p-2 grid place-items-center'>
                                            <Card className='w-full max-w-md'>
                                                <CardContent className=''>
                                                    <div className='w-full h-[250px] relative rounded-lg overflow-hidden'>
                                                        <Image
                                                            src={`/assets/products/pvc-${index + 1}.jpg`}
                                                            alt={`pvc-${index + 1}.jpg`}
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
                        Explore Premium Food Grade PVC / PU Flat Conveyor Belts
                    </h1>
                    <p className='text-lg text-justify mt-8'>
                        Benefit from our years of unrivaled experience as a leading supplier of PVC / PU belts, primarily serving the dynamic and demanding needs of the Food Industry.
                    </p>
                    <p className='text-lg text-justify'>
                        Our steadfast commitment to excellence and unwavering dedication to customer satisfaction have solidified our position as a trusted partner for numerous businesses in GCC. From conceptualization to delivery, we meticulously craft these belts to precisely match the requirements of the process and our esteemed customers.
                    </p>
                </div>

                <div className='hidden lg:block w-full h-full pt-14'>
                    <div className='grid grid-cols-[repeat(3,_170px)] grid-rows-[repeat(6,_95px)] gap-4'>
                        <div className='relative col-span-3 row-span-3 w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/pvc-1.jpg' alt='pvc-1.jpg' fill className='object-cover' /></div>
                        <div className='relative col-span-3 row-span-3 w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/pvc-2.jpg' alt='pvc-2.jpg' fill className='object-cover' /></div>                    </div>
                </div>
            </Wrapper >
        </div>
    )
}

export default page