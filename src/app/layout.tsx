import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import {cn} from "@/lib/utils"
import "./globals.css";


const montserrat = Montserrat({subsets: ['latin'], variable: '--montserrat'})

export const metadata: Metadata = {
    title: "Let's food",
    description: "Generated by create next app",
    icons: {
        icon: '/icons/logo.png'
    },
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={cn(
            "min-h-screen bg-background font-sans antialiased",
            montserrat.variable
        )}>{children}</body>
        </html>
    );
}
