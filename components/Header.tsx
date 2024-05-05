// import Image from "next/image";
import AdminChart from "@/components/AdminChart.tsx";

export default function Header() {
  return (
    <header className='fixed pl-[12.6rem] sm:pl-[20rem]'>
          <div className="flex justify-between items-center px-8 pt-5 mb-7">
            <div>
              <h2 className="text-lg sm:text-3xl font-bold">Summary</h2>
            </div>
            <div className="flex justi">
             <h2>jeddy Teep</h2>
            </div>
          </div>
    </header>
  );
}