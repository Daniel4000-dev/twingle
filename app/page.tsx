import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SUMMARYHEAD_ITEMS } from "@/constants/summary/summaryhead";


export default function Home() {
  return (
   <>
    <div className='flex-1 space-y-4 p-8'>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {SUMMARYHEAD_ITEMS.map((item, index) => {
        return (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.body}</div>
            <p className="text-xs ">{item.note}</p>
          </CardContent>
        </Card>
     
        )
      })}
       </div>
    </div>
   </>
  );
}
