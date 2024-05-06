import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "./ui/button"

const slides = [
    {
        heading: "Geared Units & Motors",
        content: "Elevate your industrial processes with our premium gear units and geared motors. Designed for durability and efficiency, our products ensure smooth operations in any environment.",
        images: ["motors-1", "motors-2", "motors-3", "motors-4", "motors-5"],
        link: "/products/geared-servo-ac-motors",
    },
    {
        heading: "Bread Slicing Blades & Knives",
        content: "Experience precision slicing with our high-quality blades and knives, designed for consistent and efficient bread processing",
        images: ["blade-1", "blade-2", "blade-3", "blade-4", "blade-5"],
        link: "/products/bread-slicing-blades-knives-and-cutters",
    },
    // {
    //     heading: "Conveyor Systems",
    //     content: "Enhance your production efficiency with our versatile conveyor systems, tailored to meet the unique needs of various industries.",
    //     images: ["conveying-1", "conveying-2", "conveying-3"],
    //     link: "/products/",
    // },
    {
        heading: "Automation Components",
        content: "Streamline your processes with our comprehensive range of automation components, designed to optimize productivity and efficiency.",
        images: ["auto-1", "auto-2", "auto-3", "auto-4", "auto-5"],
        link: "/products/automation",
    },
]


const HeroCarousel = () => {
    return (
        <section className='w-screen aspect-[2.3]'>
            <Carousel className="w-full h-full aspect-[2.3]" autoplay={true}>
                <CarouselContent className="w-full h-full">
                    {slides.map((item, index) => <Item heading={item.heading} images={item.images} link={item.link} key={index} />)}
                </CarouselContent>
            </Carousel>
        </section>
    )
}

interface Item {
    heading: string,
    images: string[]
    link: string
}

const Item = ({ heading, images, link }: Item) => {
    return (<CarouselItem>
        <div className="aspect-[2.3] w-screen">
            <div className="flex flex-1 items-center h-full w-full">
                <div className="flex flex-col gap-4 lg:gap-8 justify-center w-full h-full p-4 lg:pl-24 lg:pr-16 border-b-[1.5rem] border-company-secondary">
                    <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold leading-tight">{heading}</h1>
                    <p className="hidden md:block text-xs lg:text-lg text-justify text-muted-foreground leading-tight">Elevate your industrial processes with our premium gear units and geared motors. Designed for durability and efficiency, our products ensure smooth operations in any environment.</p>
                    <Link
                        href={link}
                        className='text-primary-foreground w-fit bg-company-secondary hover:bg-company-secondary/90 h-8 md:h-10 px-4 py-1 md:px-4 md:py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs md:text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
                    >
                        Read More
                    </Link>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-3 w-full h-full p-4 md:p-8 bg-company-secondary">
                    <div className="w-full h-full  bg-white/30 rounded-lg relative">
                        <Image src={`/assets/products/${images[0]}.webp`} alt={images[0]} fill className="object-cover p-1 lg:p-2 rounded-lg" />
                    </div>
                    <div className="w-full h-full row-start-2 row-end-3 col-start-2 col-end-3  bg-white/20 rounded-lg relative">
                        <Image src={`/assets/products/${images[1]}.webp`} alt={images[1]} fill className="object-cover p-1 lg:p-2 rounded-lg" />
                    </div>
                    <div className="hidden md:block w-full h-full row-start-3 row-end-4 col-start-3 col-end-4  bg-white/20 rounded-lg relative">
                        <Image src={`/assets/products/${images[2]}.webp`} alt={images[2]} fill className="object-cover p-1 lg:p-2 rounded-lg" />
                    </div>
                    <div className="hidden md:block w-full h-full row-start-3 row-end-4 col-start-1 col-end-2  bg-white/20 rounded-lg relative">
                        <Image src={`/assets/products/${images[3]}.webp`} alt={images[3]} fill className="object-cover p-1 lg:p-2 rounded-lg" />
                    </div>
                    <div className="hidden md:block w-full h-full row-start-1 row-end-2 col-start-3 col-end-4  bg-white/20 rounded-lg relative">
                        <Image src={`/assets/products/${images[4]}.webp`} alt={images[4]} fill className="object-cover p-1 lg:p-2 rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    </CarouselItem>)
}

export default HeroCarousel