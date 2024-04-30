import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

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
                <Toaster richColors />
            </body>
        </html>
    );
}
