import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import React from 'react'

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "m5gr84i9",
      user: { name: 'Chiamaka', email: 'chiamaka@gmail.com' },
      complaint: "I subscribed to the mobile app that",
      status: "Pending",
      date: '29/01/2020'
    },
    {
      id: "m5e4i4i9",
      user: { name: 'Big Baby', email: 'bigbaby@gmail.com' },
      complaint: "I subscribed to the mobile app that",
      status: "Open",
      date: '29/01/2020'
    },
    {
      id: "m5vdk4i9",
      user: { name: 'Chioma', email: 'chioma@gmail.com' },
      complaint: "I subscribed to the mobile app that",
      status: "Closed",
      date: '29/01/2020'
    },
    {
      id: "m5gsu8i9",
      user: { name: 'Su', email: 'su@gmail.com' },
      complaint: "I subscribed to the mobile app that",
      status: "Closed",
      date: '29/01/2020'
    },
    {
      id: "m5geo9i9",
      user: { name: 'Tenny', email: 'chiamaka@gmail.com' },
      complaint: "I subscribed to the mobile app that",
      status: "Open",
      date: '29/01/2020'
    },
  ]
}

export default async function CustomerSupport() {
  const data = await getData()
  return (
    <div className='h-[85vh] mt-8 mx-8 bg-white rounded-lg'>
      <div className='m-4 py-10'>
      <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}
