import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Wrapper from '@/components/util/Wrapper';
import type { Metadata } from "next";

import Image from 'next/image';

export const metadata: Metadata = {
    title: "Spares For Packaging Machines - Amana International Industrial Company",
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
                                                            src={`/assets/products/parts-${index + 1}.jpg`}
                                                            alt={`parts-${index + 1}.jpg`}
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
                        Discover Spares For Packaging Machines
                    </h1>
                    <p className='text-lg text-justify mt-8'>
                        Delve into our extensive selection of spare parts, encompassing a wide array of essential components such as Heaters, Slip ring collectors, Carbon brush holders, Mercotac collectors, Film pulling & Vacuum belts, and more.
                    </p>
                    <p className='text-lg text-justify'>
                        These parts are meticulously sourced to meet the diverse needs of various Process and Packaging machines from leading industry brands.
                    </p>
                    <p className='text-lg text-justify'>
                        You can rely on us for high-quality spares compatible with machines from Bosch, Ilapak, AMP Rose, Autowrapper, Endoline, Fuji, Hayssen, Ishida, Krones, Multivac, Omori, Rovema, TetraPak, Wrights, Woodman Yamato, and numerous others.
                    </p>
                </div>

                <div className='hidden lg:block w-full h-full'>
                    <div className='grid grid-cols-[repeat(3,_170px)] grid-rows-[repeat(6,_95px)] gap-4'>
                        <div className='relative col-span-2 row-span-3 w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/parts-1.jpg' alt='parts-1.jpg' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/parts-2.jpg' alt='parts-2.jpg' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/parts-3.jpg' alt='parts-3.jpg' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/parts-4.jpg' alt='parts-4.jpg' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/parts-5.jpg' alt='parts-5.jpg' fill className='object-cover' /></div>
                        <div className='relative col-span-2 row-span-3 w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/parts-6.jpg' alt='parts-6.jpg' fill className='object-cover' /></div>
                        <></>
                        <></>
                    </div>
                </div>
            </Wrapper >
        </div>
    )
}

export default page