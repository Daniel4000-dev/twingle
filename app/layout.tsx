import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";
import PageWrapper from "@/components/pagewrapper";
import Header from "@/components/header";
import { Metadata } from 'next';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Twingle",
  description: "Twingle Dashboard"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html lang="en">
      <body className={cn(
         'min-h-screen overflowhidden',
         fontSans.variable
        )}>
        <>
          <Sidebar />
          <div className='flex flex-col min-h-screen w-full pt-[16vh] md:pt-[10vh]'>
            <Header />
            <PageWrapper children={children} />
          </div>
        </>
      </body>
    </html>
  );
}