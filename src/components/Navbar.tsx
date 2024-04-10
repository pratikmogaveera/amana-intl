'use client'
import Wrapper from "@/components/util/Wrapper";
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
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import React from 'react';

import { aboutUsList, navLinks } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowUpRightFromCircle, ArrowUpRightSquare, Menu } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import ContactButton from "./ui/ContactButton";


const Navbar = () => {
    return (
        <nav className="w-full shadow-md sticky top-0 static left-0 z-50 backdrop-blur-lg bg-gradient-to-b from-background to-background/95">
            <Wrapper className="flex h-16 items-center justify-between">
                <div className="relative w-[80px] h-12">
                    <Link href={"/"}>
                        <Image
                            src="/assets/amana_logo.png"
                            alt="amana logo"
                            fill
                            className="object-contain"
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
                    <SheetClose asChild>
                        <Link href={"/"} className="text-3xl border-0 border-t-2 pt-4 w-full text-center">Home</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href={"/about-us"} className="text-3xl border-0 border-t-2 pt-4 w-full text-center">About Us</Link>
                    </SheetClose>
                    {aboutUsList.map((item, index) =>
                        <SheetClose asChild key={index}>
                            <Link href={item.href} className="text-3xl border-0 border-t-2 pt-4 w-full text-center">{item.title}</Link>
                        </SheetClose>
                    )}

                    <div className="border-0 border-t-2 pt-4 w-full items-center text-center">
                        <SheetClose asChild>
                            <ContactButton fit="full" />
                        </SheetClose>
                    </div>

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
                    <NavigationMenuTrigger className="bg-transparent">Explore</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-2 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-5">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/30 to-muted/80 p-6 hover:bg-muted no-underline outline-none focus:shadow-md"
                                        href="/about-us"
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium flex gap-2 justify-between">
                                            AMANA

                                            <span className="text-muted-foreground">
                                                <ArrowUpRightFromCircle />
                                            </span>
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Amana International Industrial Company, one of the leading & reputed industrial supplies company dedicated to providing hassle-free supplies of original parts for all makes and brands of process and utility equipment. With our extensive range of components and vast OEM network, we cater to a wide variety of industries.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            {aboutUsList.map(item =>
                                <ListItem key={item.id} href={item.href} title={item.title}>
                                    {item.description}
                                </ListItem>)}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={"/contact-us"} legacyBehavior passHref>
                        <NavigationMenuLink asChild>
                            <ContactButton fit="fit" />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium uppercase">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default Navbar