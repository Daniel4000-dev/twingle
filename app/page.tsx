// import Image from "next/image";
import AdminChart from '@/components/AdminChart.tsx';
import Complaints from '@/components/Complaints.tsx';
import Customers from '@/components/Customers.tsx';
import Header from '@/components/Header.tsx'
import TopCards from '@/components/TopCards.tsx';
import { useRouter } from 'next/router.js';
export default function Home() {
  // const router = useRouter();

  // if (router.pathname === '/customers') {
  //   return <Customers />
  // }
  return (
    <div className="bg-gray-100 h-screen w-full">
      <Header />
      <TopCards />
      <div className='mx-8 grid md:grid-cols-3 grid-cols-1 gap-3 mb-4'>
        <AdminChart />
        <Complaints />
      </div>
    </div>
  );
}
