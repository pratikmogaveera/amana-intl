import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
    title: "Amana International Industrial Company",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className=''>
                <Navbar />
                {children}
                <Footer />
                <SpeedInsights />
                <Toaster />
            </body>
        </html>
    );
}
