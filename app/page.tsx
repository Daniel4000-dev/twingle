import Activity from "@/components/summaryhead";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SUMMARYHEAD_ITEMS } from "@/constants/summary/summaryhead";
import { Overview } from "./components/overview.tsx";
import { RecentSales } from "./components/recent-sales";


export default function Home() {
  return (
   <>
    <div className='bg-gray-100 flex-1 space-y-4 p-8'>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Activity />
       </div>

       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Subscriptions/Active users</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2 overflow-x">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Summary of complaints</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* <RecentSales   /> */}
                  </CardContent>
                </Card>
        </div>
    </div>
   </>
  );
}
