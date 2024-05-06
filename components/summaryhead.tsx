import { SUMMARYHEAD_ITEMS } from '@/constants/summary/summaryhead.jsx'
import { SummaryHeadItem } from '@/types/types.jsx'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card.jsx'

const Activity = () => {

    export const SUMMARYHEAD_ITEMS: SummaryHeadItem[] = [
        {
            title: "Revenue",
            body: "128,939,938",
            note: "↑ 8% from last month",
        },
        {
            title: "Sign ups",
            body: "123,847",
            note: "↑ 6% from last month",
        },
        {
            title: "Active users",
            body: "73,420",
            note: " 4% from last month",
        },
        {
            title: "Matches",
            body: "12,700",
            note: "↑ same as last month",
        },
    ]
  return (
    <div>
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
  )
}

export default Activity