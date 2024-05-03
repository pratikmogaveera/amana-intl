import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Wrapper from '@/components/util/Wrapper';
import type { Metadata } from "next";

import Image from 'next/image';

export const metadata: Metadata = {
    title: "BST Detectable Produts - Amana International Industrial Company",
};

const page = () => {
    return (
        <div>
            <Wrapper className='grid grid-cols-1 lg:grid-cols-[1fr_0.75fr] gap-8 xl:gap-16 w-screen py-16'>
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
                                                            src={`/assets/products/bst-${index + 1}.webp`}
                                                            alt={`bst-${index + 1}.webp`}
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
                        BST Detectable Products for Enhanced Safety
                    </h1>
                    <p className='text-lg text-justify mt-8'>
                        Explore our range of BST Detectable Products designed to elevate safety standards in your facility. Our specialized offerings include Suction Cups that are both metal detectable and x-ray visible, providing an added layer of protection against foreign object contamination.
                    </p>
                    <p className='text-lg text-justify'>
                        Additionally, we provide Retaining Clips tailored for Vacuum Depanner Belts, ensuring secure and efficient operation. From Catering Knives and Scissors to Seals and Pens, our comprehensive selection meets diverse needs across industries.
                    </p>
                    <p className='text-lg text-justify'>
                        Rest assured, our products are sourced directly from the BST factory, guaranteeing fair and competitive pricing for our customers at all times.
                    </p>
                </div>

                <div className='hidden lg:block w-full h-full pt-14'>
                    <div className='grid grid-cols-[repeat(3,_170px)] grid-rows-[repeat(6,_95px)] gap-4'>
                        <div className='relative col-span-2 row-span-3 w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/bst-1.webp' alt='bst-1.webp' fill className='object-cover object-right' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/bst-2.webp' alt='bst-2.webp' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/bst-3.webp' alt='bst-3.webp' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/bst-4.webp' alt='bst-4.webp' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/bst-5.webp' alt='bst-5.webp' fill className='object-cover' /></div>
                        <div className='relative col-span-2 row-span-3 w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/bst-6.webp' alt='bst-6.webp' fill className='object-cover' /></div>
                        <></>
                        <></>
                    </div>
                </div>
            </Wrapper >
        </div>
    )
}

export default page