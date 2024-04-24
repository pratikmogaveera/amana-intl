import React from 'react'
import Wrapper from './util/Wrapper'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { productList } from '@/lib/constants'
import { Button, buttonVariants } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

const HomeProducts = () => {
    return (
        <div className='blue-gradient'>
            <Wrapper>
                <div className='flex flex-col gap-8 items-center py-16'>
                    <h1 className='font-semibold text-white text-3xl md:text-4xl text-center'>
                        Our Products
                    </h1>
                    <Carousel autoplay={true} buttonPos='outside' className='w-full'>
                        <CarouselContent className='items-center'>
                            {productList.map((item, index) =>
                                <CarouselItem key={index} className='md:basis-1/3'>
                                    <div className='p-2 grid place-items-center'>
                                        <Card className='w-[280px] md:w-[350px] max-w-sm'>
                                            <CardContent className=''>
                                                <div className='w-full h-[150px] relative rounded-lg overflow-hidden'>
                                                    <Image
                                                        src={item.banner}
                                                        alt=""
                                                        fill
                                                    />
                                                </div>
                                            </CardContent>
                                            <CardHeader className='h-[96px]'>
                                                <CardTitle className=''>
                                                    {item.title}
                                                </CardTitle>
                                            </CardHeader>

                                            <CardFooter>
                                                <Link
                                                    href={item.href}
                                                    className='text-primary-foreground bg-company-secondary hover:bg-company-secondary/90 h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
                                                >
                                                    Read More
                                                </Link>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </CarouselItem>)}
                        </CarouselContent>
                        <CarouselNext></CarouselNext>
                        <CarouselPrevious></CarouselPrevious>
                    </Carousel>
                </div>
            </Wrapper>
        </div>
    )
}

export default HomeProducts