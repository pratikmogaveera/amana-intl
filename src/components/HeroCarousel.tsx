import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"


const HeroCarousel = () => {
    return (
        <section className='w-screen aspect-[2.3]'>
            <Carousel className="w-full h-full aspect-[2.3]" autoplay={true}>
                <CarouselContent className="w-full h-full">
                    <CarouselItem><div className="aspect-[2.3] w-screen bg-muted-foreground/30 border-4 border-muted grid place-items-center"><h1 className="text-5xl font-bold">1</h1></div></CarouselItem>
                    <CarouselItem><div className="aspect-[2.3] w-screen bg-muted-foreground/30 border-4 border-muted grid place-items-center"><h1 className="text-5xl font-bold">2</h1></div></CarouselItem>
                    <CarouselItem><div className="aspect-[2.3] w-screen bg-muted-foreground/30 border-4 border-muted grid place-items-center"><h1 className="text-5xl font-bold">3</h1></div></CarouselItem>
                </CarouselContent>
            </Carousel>
        </section>
    )
}

export default HeroCarousel