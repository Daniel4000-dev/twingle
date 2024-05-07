import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";
import PageWrapper from "@/components/pagewrapper";
import Header from "@/components/header";

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
          <div className='flex flex-col min-h-screen w-full pt-12'>
            <Header />
            <PageWrapper children={children} />
          </div>
        </>
      </body>
    </html>
  );
}