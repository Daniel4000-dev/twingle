import { Overview } from "@/components/homerender/overview";
import Activity from "@/components/summaryhead";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Complaints from "../components/homerender/complaints";
import Disputes from "../components/homerender/disputes";


export default function Home() {
  return (
   <>
    <div className='bg-gray-100 flex-1 space-y-4 p-8'>
      <div>
        <Activity />
       </div>

       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 xl:col-span-5">
                  <CardHeader>
                    <CardTitle>Subscriptions/Active users</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2 overflow-x">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3 xl:col-span-2">
                  <CardHeader>
                    <CardTitle>Summary of complaints</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Complaints />
                  </CardContent>
                </Card>
        </div>

        <div>
            <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>47 pending disputes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Disputes />
                  </CardContent>
            </Card>
        </div>
    </div>
   </>
  );
}
