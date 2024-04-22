import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Wrapper from '@/components/util/Wrapper';
import type { Metadata } from "next";

import Image from 'next/image';

export const metadata: Metadata = {
    title: "Geared / Servo & AC Motors - Amana International Industrial Company",
};

const page = () => {
    return (
        <div>
            <Wrapper className='grid grid-cols-1 lg:grid-cols-[1fr_0.75fr] gap-8 xl:gap-16 w-screen min-h-[calc(100vh-4rem)] py-16'>
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
                                                            src={`/assets/products/motors-${index + 1}.jpg`}
                                                            alt={`motors-${index + 1}.jpg`}
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
                        Gear Up with Top-Quality Motors
                    </h1>
                    <p className='text-lg mt-8'>
                        We cater to a diverse range of needs, offering Gear units, Geared motors, Servo motors, Explosion-proof geared motors, AC Motors, and more.
                    </p>
                    <p className='text-lg'>
                        Choose from renowned brands such as SEW Euro Drive, Brevini, Motovario, Bonfiglioli, MGM, NORD, and numerous others, ensuring quality and reliability.
                    </p>
                    <p className='text-lg'>
                        We understand the urgency of our customers&apos; requirements and ensure prompt delivery, saving valuable time.
                    </p>
                </div>

                <div className='hidden lg:block w-full h-full'>
                    <div className='grid grid-cols-[repeat(3,_170px)] grid-rows-[repeat(6,_95px)] gap-4'>
                        <div className='relative col-span-2 row-span-3 w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/motors-1.jpg' alt='motors-1.jpg' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/motors-2.jpg' alt='motors-2.jpg' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/motors-3.jpg' alt='motors-3.jpg' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/motors-4.jpg' alt='motors-4.jpg' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/motors-5.jpg' alt='motors-5.jpg' fill className='object-cover' /></div>
                        <div className='relative col-span-2 row-span-3 w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/motors-6.jpg' alt='motors-6.jpg' fill className='object-cover' /></div>
                        <></>
                        <></>
                    </div>
                </div>
            </Wrapper >
        </div>
    )
}

export default page