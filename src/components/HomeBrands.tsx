import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Wrapper from './util/Wrapper'
import { Card, CardContent } from "./ui/card"


const HomeBrands = () => {
    const images = [
        "abb.png",
        "allen_bradley.png",
        "bonfiglioli.png",
        "intralox.png",
        "lenze.png",
        "mitsubishi.png",
        "sew.png",
        "siemens.png",
        "tellure_rota.png",
    ]
    return (
        <Wrapper>
            <div className='flex flex-col gap-8 items-center py-16'>
                <h1 className='font-semibold text-2xl md:text-3xl text-center'>
                    Our Brands
                </h1>
                <div className='hidden md:flex items-center flex-wrap justify-center gap-x-4'>
                    {images.map((item, index) =>
                        <div className='relative w-[90px] h-[42px] lg:w-[220px] lg:h-[110px]' key={index}>
                            <Image
                                alt={item}
                                src={`/assets/brands/${item}`}
                                fill
                                className='object-contain'
                            />
                        </div>
                    )}
                </div>
                <div className="md:hidden w-full">
                    <Carousel className="" autoplay={true}>
                        <CarouselContent>
                            {images.map((item, index) => (
                                <CarouselItem key={index} className="basis-1/3">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                                                <Image
                                                    alt={item}
                                                    src={`/assets/brands/${item}`}
                                                    fill
                                                    className='object-contain'
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </Wrapper>
    )
}

export default HomeBrands