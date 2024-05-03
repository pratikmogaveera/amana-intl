import Wrapper from '@/components/util/Wrapper';
import type { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Services - Amana International Industrial Company",
};

const page = () => {
    return (
        <div>
            <Wrapper className='grid grid-cols-1 lg:grid-cols-[1fr_0.75fr] gap-8 xl:gap-16 w-screen py-16'>
                <div className='w-full h-full flex flex-col px-2 gap-4 order-2 lg:order-1'>
                    <h1 className='text-4xl font-bold text-company-secondary'>
                        Our Comprehensive Services
                    </h1>
                    <div className='text-lg flex flex-col gap-4 mt-4'>
                        <p className='leading-snug text-justify'>
                            At Amana, we&apos;re dedicated to meeting the industrial spare parts and equipment needs of various industries.
                        </p>
                        <p className='leading-snug text-justify'>
                            Our comprehensive suite of services is designed to streamline operations and reduce overseas purchasing costs for our clients.
                        </p>
                        <p className='leading-snug text-justify'>
                            We handle all aspects of the procurement process, from packing and freight to insurance and local customs duties, ensuring seamless delivery to our clients&apos; specified locations.
                        </p>
                        <p className='leading-snug text-justify'>
                            We understand the importance of client satisfaction, which is why we assess their needs thoroughly, considering factors such as product quality, pricing, delivery timeframe, and the safety of delivery.
                        </p>
                        <p className='leading-snug text-justify'>
                            With our expertise and superior buying power, we negotiate with OEM suppliers to ensure that our clients&apos; specific requirements are met at the best terms and lowest possible prices.
                        </p>
                        <p className='leading-snug text-justify'>
                            Experience peace of mind knowing that your industrial procurement needs are in capable hands with Amana.
                        </p>
                    </div>
                </div>

                <div className='w-full h-full lg:pt-14 order-1 lg:order-2 flex justify-center'>
                    <div className='w-[370px] h-[250px] lg:w-[550px] lg:h-[300px] relative rounded-lg overflow-hidden'>
                        <Image src='/assets/services.webp' alt='services.webp' fill className='object-cover' />
                    </div>
                </div>

            </Wrapper >
        </div >
    )
}

export default page