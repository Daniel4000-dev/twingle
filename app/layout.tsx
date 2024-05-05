import "@/styles/global.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

const inter = Inter({ 
  subsets: ["latin"] ,
  variable: "--font-inter",
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
      <body className={inter.className}>
        <>
          <Sidebar />
          <div>
            <Header />
          </div>
        </>
      </body>
    </html>
  );
}