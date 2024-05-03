import { BadgeCheck, ChevronRightCircle } from 'lucide-react'
import React from 'react'
import { Heading, Title } from './util/DetailSections'
import DualSection from './util/DualSection'
import ImagePlaceholder from './util/ImagePlaceholder'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { Card, CardContent } from './ui/card'

const HomeChooseUs = () => {
    return (
        <DualSection imgSide='right'>
            <div className='flex flex-col flex-1 justify-center gap-4 h-full'>
                <div className='flex flex-col gap-4'>
                    <Heading heading='Why Choose Us?'>
                        <BadgeCheck size={50} />
                    </Heading>

                    <Title title='Discover the Key Reasons to Partner with Amana' />

                    <ul className='flex flex-col gap-4 text-black leading-tight'>
                        <ListItem>
                            Leveraging over 30 years of industry expertise, our seasoned team is poised to meet your every need.
                        </ListItem>
                        <ListItem>
                            Our customer-centric approach ensures tailored solutions that precisely match your unique requirements.
                        </ListItem>
                        <ListItem>
                            Trust in our unwavering support team for swift and dependable assistance whenever you need it.
                        </ListItem>
                        <ListItem>
                            Our commitment to excellence guarantees the delivery of top-quality spares and components, customized for the diverse needs of Food Industries and Processing Plants.
                        </ListItem>
                        <ListItem>
                            Elevate the efficiency of your food and processing operations with our seamless supply services by partnering with Amana today.
                        </ListItem>
                        <ListItem>
                            Unlock the full potential of your business with our unparalleled spare parts supply services, meticulously designed to optimize your operations.
                        </ListItem>
                    </ul>
                </div>
            </div>

            <Carousel autoplay={true} buttonPos='outside' className='w-full block lg:hidden'>
                <CarouselContent className='items-center'>
                    <CarouselItem className=''>
                        <div className='p-2 grid place-items-center'>
                            <Card className='w-full max-w-md'>
                                <CardContent className=''>
                                    <div className='w-full h-[250px] relative rounded-lg overflow-hidden'>
                                        <Image
                                            src={`/assets/why-choose-1.webp`}
                                            alt={`why-choose-1.webp`}
                                            fill
                                            className='object-cover'
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className=''>
                        <div className='p-2 grid place-items-center'>
                            <Card className='w-full max-w-md'>
                                <CardContent className=''>
                                    <div className='w-full h-[250px] relative rounded-lg overflow-hidden'>
                                        <Image
                                            src={`/assets/why-choose-2.webp`}
                                            alt={`why-choose-2.webp`}
                                            fill
                                            className='object-cover'
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>

            <div className='hidden lg:flex w-full h-full gap-4'>
                <div className='w-[50%] h-full relative'>
                    <Image
                        src='/assets/why-choose-1.webp'
                        alt="why-choose-1.webps"
                        fill
                        className='object-cover rounded-lg'
                    />
                </div>
                <div className='w-[50%] h-full relative'>
                    <Image
                        src='/assets/why-choose-2.webp'
                        alt="why-choose-2.webps"
                        fill
                        className='right-0 -top-10 object-cover rounded-lg'
                    />
                </div>
            </div>
        </DualSection>
    )
}

const ListItem = ({ children }: { children: React.ReactNode }) => {
    return (
        <li className='flex gap-3 items-start'>
            <ChevronRightCircle size={20} className='flex-grow-0 flex-shrink-0 mt-0.5 stroke-1' />
            {children}
        </li>

    )
}

export default HomeChooseUs