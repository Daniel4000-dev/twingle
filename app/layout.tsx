"use client"
import Sidebar from "@/components/Sidebar.tsx";
import { Outfit } from "next/font/google";
import { metadata } from './metadata.ts';
import { usePathname } from "next/navigation.js";
import "./globals.css";

const inter = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
  props
}: Readonly<{
  children: React.ReactNode;
  props: React.ReactNode;
}>)
{

  const currentRoute = usePathname()
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <div className=''>
          <Sidebar currentRoute={currentRoute}>{children}</Sidebar>
        </div>
      </body>
    </html>
  );
}