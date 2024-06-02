import Image from '@/node_modules/next/image'
import { SummaryHeadItem } from '@/types/types.jsx'
import React from 'react'
import coin from '@/public/coin.png'
import user from '@/public/tag-user.png'
import heart from '@/public/heart-search.png'
import profile from '@/public/profile-tick.png'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const Activity = () => {

    const SUMMARYHEAD_ITEMS: SummaryHeadItem[] = [
        {
            title: "Revenue",
            icon: coin,
            body: " ₦128,939,938",
            note: "↑ 8% from last month",
        },
        {
            title: "Sign ups",
            icon: profile,
            body: "123,847",
            note: "↑ 6% from last month",
        },
        {
            title: "Active users",
            icon: user,
            body: "73,420",
            note: "↓ 4% from last month",
        },
        {
            title: "Matches",
            icon: heart,
            body: "12,700",
            note: "- same as last month",
        },
    ]
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {SUMMARYHEAD_ITEMS.map((item, index) => {
        return (
        <Card className='rounded-lg h-[13vh] flex items-center' key={index}>
          <div className='ml-10'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex gap-3 ml-0'>
              {item.icon && (
            <Image className='-ml-12' src={item.icon} alt=''/>
              )}
            <div className="text-2xl font-bold">{item.body}</div>
            </div>
            <p className={`text-xs textgreen-300 text-${index === (SUMMARYHEAD_ITEMS.length - 2) ? 'red-400' : 'green-300'} ${index === (SUMMARYHEAD_ITEMS.length) && "text-black"}`}>{item.note}</p>
          </CardContent>
          </div>
        </Card>
     
        )
      })}
    </div>
  )
}

export default Activity