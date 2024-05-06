'use client'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import Wrapper from "@/components/util/Wrapper";
import Image from "next/image";
import React from 'react';

import { allLinksList, productList } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Menu } from "lucide-react";
import Link from 'next/link';
import { Button } from "./ui/button";


const Navbar = () => {
    return (
        <nav className="w-full shadow-md sticky top-0 static left-0 z-50 backdrop-blur-lg bg-gradient-to-b from-background to-background/95 border-y-[1.5rem] border-company-secondary">
            <Wrapper className="flex h-[4.5rem] items-center justify-between">
                <div className="relative w-[180px] h-12 flex-shrink-0">
                    <Link href={"/"}>
                        <Image
                            src="/assets/amana_logo_long.webp"
                            alt="amana logo"
                            fill
                            className="object-contain bg-white"
                        />
                    </Link>
                </div>
                <div className="md:block hidden">
                    <DesktopNav />
                </div>
                <div className="md:hidden block">
                    <MobileNav />
                </div>
            </Wrapper>
        </nav>

    )
}

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className="flex gap-2"><Menu /><span className="text-lg">Menu</span></Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col items-center gap-4 mt-8">
                    {allLinksList.map((item, index) =>
                        <SheetClose asChild key={index}>
                            <Link href={item.href} className="text-3xl border-0 border-t-2 pt-4 w-full text-center">{item.title}</Link>
                        </SheetClose>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    )
}

const DesktopNav = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href={"/"} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle({ className: "bg-transparent" })}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={"/about-us"} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle({ className: "bg-transparent" })}>
                            About Us
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={"/services"} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle({ className: "bg-transparent" })}>
                            Services
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="flex flex-col w-[300px] gap-2 p-4">
                            {productList.map(item =>
                                <Link href={item.href} key={item.id} className="w-full bg-muted/50 hover:bg-muted px-4 py-2 rounded-lg font-medium" >
                                    {item.title}
                                </Link>)}
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={"/brands"} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle({ className: "bg-transparent" })}>
                            Brands
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={"/industries"} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle({ className: "bg-transparent" })}>
                            Industries
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                    <Link href={"/clients"} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle({ className: "bg-transparent" })}>
                            Clients
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem> */}
                <NavigationMenuItem>
                    <Link href={"/contact-us"} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle({ className: "bg-transparent" })}>
                            Contact Us
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Navbar