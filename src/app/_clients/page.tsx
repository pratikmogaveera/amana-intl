import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Wrapper from '@/components/util/Wrapper';
import type { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Clients - Amana International Industrial Company",
};

const page = () => {
    // const almarai = [
    //     { img: "almarai-7days.jpg", name: "Almarai MFI Plant" },
    //     { img: "almarai-bakery.jpg", name: "Almarai Bakery" },
    //     { img: "almarai-nuralac.jpg", name: "Almarai Baby Food Factory" },
    //     { img: "almarai-poultry.jpg", name: "Almarai Poultry" },
    //     { img: "almarai-western.jpg", name: "Almarai CPP/Dairy Plant" },
    // ]

    // const clients: { img: string, name: string }[] = [
    //     { img: "al-rashed-food.jpg", name: "Al Rashed Food" },
    //     { img: "cl-logo-1.jpg", name: "Golf Union Food" },
    //     { img: "cl-logo-10.jpg", name: "Al Amal Icecream" },
    //     { img: "logo-ame-2.jpg", name: "Americana Foods Co." },
    //     { img: "cl-logo-11.jpg", name: "Saudi Masterbaker" },
    //     { img: "cl-logo-12.jpg", name: "ARASCO" },
    //     { img: "cl-logo-13.jpg", name: "United Carbon" },
    //     { img: "cl-logo-14.jpg", name: "Kuwait Flour" },
    //     { img: "cl-logo-15.jpg", name: "KIMMCO" },
    //     { img: "cl-logo-17.jpg", name: "Masdar Al Hayat" },
    //     { img: "cl-logo-18.jpg", name: "Al Faysal" },
    //     { img: "cl-logo-19.jpg", name: "Al Watania Paper" },
    //     { img: "cl-logo-22.jpg", name: "Youmi International Bakeries" },
    //     { img: "cl-logo-23.jpg", name: "Gandour" },
    //     { img: "cl-logo-24.jpg", name: "Hada Water" },
    //     { img: "cl-logo-29.jpg", name: "Al Mudish" },
    //     { img: "cl-logo-4.jpg", name: "Mahmood Saeed" },
    //     { img: "cl-logo-5.jpg", name: "Al Manhal" },
    //     { img: "cl-logo-6.jpg", name: "Zawaq Foods" },
    //     { img: "cl-logo-7.jpg", name: "Al Amoudi" },
    //     { img: "cl-logo.jpg", name: "Daily Food" },
    //     { img: "herfy-food2.jpg", name: "Herfy Foods" },
    //     { img: "kudu.jpg", name: "Kudu" },
    //     { img: "saudi-bakeries.jpg", name: "Saudi Bakeries" },
    //     { img: "sunbulah-group.jpg", name: "Sunbulah Group" }
    // ];

    return (
        <div>
            <Wrapper className='flex flex-col gap-8 py-16 items-center'>
                <h1 className='text-3xl font-bold text-company-secondary'>Almamrai Plants</h1>
                <div className='hidden md:flex flex-wrap gap-4 justify-center'>
                    {/* {almarai.map((item, index) => <ClientCard key={index} img={item.img} name={item.name} />)} */}
                </div>
                <div className='relative w-full md:hidden'>
                    <Carousel autoplay={true} buttonPos='outside' className='w-full'>
                        <CarouselContent className=''>
                            {/* {almarai.map((item, index) =>
                                <CarouselItem key={index} className='w-full grid place-items-center'>
                                    <ClientCard key={index} img={item.img} name={item.name} />
                                </CarouselItem>)} */}
                        </CarouselContent>
                    </Carousel>
                </div>


                <h1 className='text-3xl font-bold text-company-secondary mt-14'>Other Clients</h1>
                <div className='hidden md:flex flex-wrap gap-4 justify-center'>
                    {/* {clients.map((item: { img: string, name: string }, index) => <ClientCard key={index} img={item.img} name={item.name} />)} */}
                </div>
                <div className='relative w-full md:hidden flex flex-col gap-8'>
                    <Carousel autoplay={true} buttonPos='outside' className='w-full'>
                        <CarouselContent className=''>
                            {/* {clients.slice(0, 6).map((item, index) =>
                                <CarouselItem key={index} className='w-full grid place-items-center'>
                                    <ClientCard key={index} img={item.img} name={item.name} />
                                </CarouselItem>)} */}
                        </CarouselContent>
                    </Carousel>
                    <Carousel autoplay={true} buttonPos='outside' className='w-full'>
                        <CarouselContent className=''>
                            {/* {clients.slice(6, 12).map((item, index) =>
                                <CarouselItem key={index} className='w-full grid place-items-center'>
                                    <ClientCard key={index} img={item.img} name={item.name} />
                                </CarouselItem>)} */}
                        </CarouselContent>
                    </Carousel>
                    <Carousel autoplay={true} buttonPos='outside' className='w-full'>
                        <CarouselContent className=''>
                            {/* {clients.slice(12, 18).map((item, index) =>
                                <CarouselItem key={index} className='w-full grid place-items-center'>
                                    <ClientCard key={index} img={item.img} name={item.name} />
                                </CarouselItem>)} */}
                        </CarouselContent>
                    </Carousel>
                    <Carousel autoplay={true} buttonPos='outside' className='w-full'>
                        <CarouselContent className=''>
                            {/* {clients.slice(18, 25).map((item, index) =>
                                <CarouselItem key={index} className='w-full grid place-items-center'>
                                    <ClientCard key={index} img={item.img} name={item.name} />
                                </CarouselItem>)} */}
                        </CarouselContent>
                    </Carousel>
                </div>
            </Wrapper >
        </div >
    )
}

const ClientCard = ({ img, name }: { img: string, name: string }) => {
    return (
        <div className='w-[280px] flex flex-col gap-4 p-4 rounded-lg relative overflow-hidden border border-muted bg-muted/50'>
            <div className='w-full h-[100px] relative bg-white rounded-t-md'>
                {/* <Image
                    src={`/assets/clients/${img}`}
                    alt={name}
                    fill
                    className='object-contain mix-blend-multiply p-2'
                /> */}
            </div>
            <h2 className='text-center font-medium text-lg'>
                {name}
            </h2>
        </div>
    )
}

export default page