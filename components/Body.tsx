'use client'
import { Montserrat, IBM_Plex_Mono } from "next/font/google";
import { ThemePicker } from "./ThemePicker";
import { useThemeStore } from "@/providers/theme";

const ibmMono = IBM_Plex_Mono({
    variable: "--font-ibm-mono",
    weight: "400",
    subsets: ["latin"],
});

const montserratSans = Montserrat({
    variable: "--font-montserrat-sans",
    subsets: ["latin"],
});

export default function Body({ children }: Readonly<{children: React.ReactNode}>) {
    const { name } = useThemeStore(state => state);
    return (
        <html lang="en" className={name}>
            <body className={`${ibmMono.variable} ${montserratSans.variable}`}>
                <ThemePicker className="fixed right-4 top-4" />
                {children}
            </body>
        </html>
    );
}