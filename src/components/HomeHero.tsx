import Image from 'next/image'
import { Button, buttonVariants } from './ui/button'
import Link from 'next/link'

const HomeHero = () => {
    return (
        <div className='w-full h-[calc(100vh-4rem)] relative'>
            <Image
                src={'/assets/landing-2.jpg'}
                alt=""
                fill
                className='object-cover'
            />

            <div className='flex flex-col md:items-center justify-center gap-16 md:gap-8 absolute top-1/2 left-1/2 z-40 -translate-x-1/2 -translate-y-1/2 p-4 md:w-2/3 w-full'>
                <h1 className='text-white text-5xl md:text-6xl font-bold'>Azhar International Trading Est.</h1>
                <p className='text-white md:text-center md:w-2/3'>
                    Azhar is a trusted name in industrial supplies, offering hassle-free access to authentic parts for various process and utility equipment brands.
                </p>
                <div className='flex gap-4'>
                    <Button variant={"outline"} className='text-white hover:text-black'>Explore Products</Button>

                    <Link className={buttonVariants({ variant: 'secondary' })} href={'/contact-us'}>
                        Contact Us
                    </Link>
                </div>
            </div>

            <div className='h-full w-full bg-[#19233a] z-20 absolute top-0 left-0 mix-blend-multiply' ></div>
        </div>
    )
}

export default HomeHero