import type {Metadata} from "next";
// import localFont from "next/font/local";
import "./globals.css";
import {Providers} from "@/components/Providers";
import TopNav from "@/components/navbar/TopNav";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
    title: "Date App",
    description: "Date App - NextJS practice project",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <TopNav></TopNav>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}
