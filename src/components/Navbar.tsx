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
        <nav className="w-full shadow-md sticky top-0 static left-0 z-50 backdrop-blur-lg bg-company-secondary">
            <Wrapper className="flex h-16 items-center justify-between">
                <div className="relative w-[80px] h-12 flex-shrink-0">
                    <Link href={"/"}>
                        <Image
                            src="/assets/amana_logo.png"
                            alt="amana logo"
                            fill
                            className="object-contain bg-white p-0.5"
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
                        <NavigationMenuLink className={navigationMenuTriggerStyle({ className: "bg-transparent text-muted" })}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={"/about-us"} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle({ className: "bg-transparent text-muted" })}>
                            About Us
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={"/services"} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle({ className: "bg-transparent text-muted" })}>
                            Services
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-muted">Products</NavigationMenuTrigger>
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
                        <NavigationMenuLink className={navigationMenuTriggerStyle({ className: "bg-transparent text-muted" })}>
                            Brands
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={"/industries"} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle({ className: "bg-transparent text-muted" })}>
                            Industries
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={"/clients"} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle({ className: "bg-transparent text-muted" })}>
                            Clients
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={"/contact-us"} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle({ className: "bg-transparent text-muted" })}>
                            Contact Us
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