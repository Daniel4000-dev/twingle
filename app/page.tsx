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
import Complaints from "./components/Complaints";
import { Overview } from "./components/overview";


export default function Home() {
  return (
   <>
    <div className='bg-gray-100 flex-1 space-y-4 p-8'>
      <div>
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
                    <Complaints />
                  </CardContent>
                </Card>
        </div>
    </div>
   </>
  );
}
