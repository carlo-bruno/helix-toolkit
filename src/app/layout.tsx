import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Helix Toolkit",
  description:
    "A web app of tools to help create and update Helix/HX Stomp patches",
  icons: {
    icon: "/tools_icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} flex flex-row`}
        suppressHydrationWarning
      >
        {/* <SideBar /> */}
        {children}
      </body>
    </html>
  );
}
