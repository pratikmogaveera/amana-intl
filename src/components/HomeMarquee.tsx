import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const HomeMarquee = () => {
    const clients = [
        { img: "al-rashed-food.jpg", name: "Al Rashed Food" },
        { img: "cl-logo-10.jpg", name: "Al Amal Icecream" },
        { img: "cl-logo-11.jpg", name: "Saudi Masterbaker" },
        { img: "cl-logo-13.jpg", name: "United Carbon" },
        { img: "cl-logo-15.jpg", name: "KIMMCO" },
        { img: "cl-logo-18.jpg", name: "Al Faysal" },
        { img: "cl-logo-22.jpg", name: "Youmi International Bakeries" },
        { img: "cl-logo-24.jpg", name: "Hada Water" },
        { img: "cl-logo-4.jpg", name: "Mahmood Saeed" },
        { img: "cl-logo-6.jpg", name: "Zawaq Foods" },
        { img: "kudu.jpg", name: "Kudu" },
    ]

    return (
        <div className='py-8 md:py-16 flex flex-col justify-center gap-12'>
            <h1 className='font-semibold text-2xl md:text-3xl text-center text-white p-4 bg-company-secondary'>
                Our Clients
            </h1>

            <Marquee speed={75}>
                <div className='flex space-x-4'>
                    {clients.map((item, index) =>
                        <div key={index} className='h-[100px] w-[150px] lg:h-[150px] lg:w-[220px] relative'>
                            <Image
                                src={`/assets/clients/${item.img}`}
                                alt={item.name}
                                fill
                                className='object-contain'
                            />
                        </div>
                    )}
                </div>
            </Marquee>
        </div>
    )
}

export default HomeMarquee