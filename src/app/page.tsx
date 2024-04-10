import HeroCarousel from "@/components/HeroCarousel";
import HomeAbout from "@/components/HomeAbout";
import HomeChooseUs from "@/components/HomeChooseUs";
import HomeContactUs from "@/components/HomeContactUs";
import HomeBrands from "@/components/HomeBrands";
import HomeProducts from "@/components/HomeProducts";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home - Amana International Industrial Company",
};

export default function Home() {
    return (
        <div className="flex flex-col">
            <HeroCarousel />
            <HomeAbout />
            <HomeBrands />
            <HomeProducts />
            <HomeChooseUs />
            <HomeContactUs />
        </div>
    );
}
