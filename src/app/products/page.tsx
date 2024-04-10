import React from 'react'
import type { Metadata } from "next";
import Wrapper from '@/components/util/Wrapper';
import { productList } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import PageHeading from '@/components/util/PageHeading';

export const metadata: Metadata = {
    title: "Products - Amana International Industrial Company",
};

const page = () => {
    return (
        <div>
            <PageHeading heading='Products' />
            <Wrapper className='md:w-[70%]'>
                <div className='w-full py-16'>
                    <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
                        {productList.map((item, index) =>
                            <div key={item.id} className='flex justify-between items-center h-24 p-2 md:py-4 md:pl-6 md:pr-4 rounded-lg border-2 border-muted md:hover:bg-muted/50'>
                                <div className='flex items-center gap-4'>
                                    <div className='relative h-16 w-16 rounded-full border-4 border-company-secondary overflow-hidden flex-shrink-0'>
                                        <Image
                                            src={item.banner}
                                            alt={item.id}
                                            fill
                                            className='object-cover'
                                        />
                                    </div>
                                    <h1 className='font-medium text-lg text-company-secondary leading-tight'>{item.title}</h1>
                                </div>

                                <Link href={item.href} className={buttonVariants({ variant: 'outline' })}>
                                    <span className='flex items-center gap-2'>
                                        <span className='hidden lg:block'>View Products</span>
                                        <span><ArrowRight /></span>
                                    </span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default page