import { BadgeInfo } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { Details, Heading, Title } from './util/DetailSections'
import DualSection from './util/DualSection'
import ImagePlaceholder from './util/ImagePlaceholder'
import ContactButton from './ui/ContactButton'
import Image from 'next/image'

const HomeAbout = () => {
    return (
        <DualSection imgSide='left'>
            <div className='relative aspect-square h-full w-full bg-indigo-500 rounded-lg overflow-hidden'>
                <Image
                    src='/assets/about-us.jpg'
                    alt='about-us'
                    className='object-cover object-center'
                    fill
                />
            </div>

            <div className='flex flex-col flex-1 justify-center gap-4 h-full'>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center text-company gap-4'>
                        <Heading heading='About Us'>
                            <BadgeInfo size={50} />
                        </Heading>
                    </div>

                    <Title title='Amana: Your Trusted Industrial Supplier' />

                    <Details>
                        At Amana, we pride ourselves on our ability to ship clearly specified parts, including those hard-to-find items.
                        <br />
                        <br />
                        We are dedicated to providing hassle-free access to authentic parts for diverse equipment brands. With our extensive range of components and vast OEM network, we cater to a wide variety of industries.
                    </Details>
                </div>

                <ContactButton fit='fit' />
            </div>
        </DualSection>
    )
}

export default HomeAbout