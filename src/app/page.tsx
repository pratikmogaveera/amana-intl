import HeroCarousel from "@/components/HeroCarousel";
import HomeBrands from "@/components/HomeBrands";
import HomeMarquee from "@/components/HomeMarquee";
import HomeProducts from "@/components/HomeProducts";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home - Amana International Industrial Company",
};

export default function Home() {
    return (
        <div className="flex flex-col">
            <HeroCarousel />
            <HomeBrands />
            <HomeProducts />
            <HomeMarquee />
        </div>
    );
}
