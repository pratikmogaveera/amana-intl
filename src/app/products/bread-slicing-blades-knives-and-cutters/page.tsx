import HomeContactUs from '@/components/HomeContactUs';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import PageHeading from '@/components/util/PageHeading';
import Wrapper from '@/components/util/Wrapper';
import type { Metadata } from "next";

import Image from 'next/image';

export const metadata: Metadata = {
    title: "Bread Slicing Blades, Knives, and Cutters - Amana International Industrial Company",
};

const page = () => {
    return (
        <div>
            <PageHeading heading='Bread Slicing Blades, Knives, and Cutters' />

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
                                                            src={`/assets/products/blade-${index + 1}.jpg`}
                                                            alt={`blade-${index + 1}.jpg`}
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
                        Discover Bread Slicing Blades, Knives & Cutters For Packaging & Process Machines
                    </h1>
                    <p className='text-lg mt-8'>
                        Explore our comprehensive range of products, including all types of Band Slicer Blades for leading brands such as AMF, Hartmann, Lematic, UBE, Oshikiri, Gasparin Bread/Bun Slicers, and more.
                    </p>
                    <p className='text-lg'>
                        In addition to band slicer blades, we offer a diverse selection of fixed Slicer Blades for various reciprocating slicers.
                    </p>
                    <p className='text-lg'>
                        Our specialization extends to providing quality Knives, Anvils & Sealing Jaws suitable for both Horizontal & Vertical Flow Pack machines.
                    </p>
                    <p className='text-lg'>
                        Furthermore, we supply a wide array of cutters & blades tailored to the unique needs of the Process & Paper/Corrugated Industries.
                    </p>
                </div>

                <div className='hidden lg:block w-full h-full'>
                    <div className='grid grid-cols-[repeat(3,_170px)] grid-rows-[repeat(6,_95px)] gap-4'>
                        <div className='relative col-span-2 row-span-3 w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/blade-1.jpg' alt='blade-1.jpg' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/blade-2.jpg' alt='blade-2.jpg' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/blade-3.jpg' alt='blade-3.jpg' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/blade-4.jpg' alt='blade-4.jpg' fill className='object-cover' /></div>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/blade-5.jpg' alt='blade-5.jpg' fill className='object-cover' /></div>
                        <div className='relative col-span-2 row-span-3 w-full h-full rounded-lg overflow-hidden'><Image src='/assets/products/blade-6.jpg' alt='blade-6.jpg' fill className='object-cover' /></div>
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