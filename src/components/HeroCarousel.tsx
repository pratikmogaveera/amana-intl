import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const HeroCarousel = () => {
    return (
        <section className='h-[calc(100vh-4rem)] w-full'>
            <Carousel className="w-screen h-full" autoplay={true}>
                <CarouselContent className="w-full h-full">
                    <CarouselItem><div className="h-[calc(100vh-4rem)] w-full bg-muted-foreground/30 border-4 border-muted grid place-items-center"><h1 className="text-5xl font-bold">1</h1></div></CarouselItem>
                    <CarouselItem><div className="h-[calc(100vh-4rem)] w-full bg-muted-foreground/30 border-4 border-muted grid place-items-center"><h1 className="text-5xl font-bold">2</h1></div></CarouselItem>
                    <CarouselItem><div className="h-[calc(100vh-4rem)] w-full bg-muted-foreground/30 border-4 border-muted grid place-items-center"><h1 className="text-5xl font-bold">3</h1></div></CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}

export default HeroCarousel