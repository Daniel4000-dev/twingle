// "use client"
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import React from 'react'

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    {
      id: "3u1reuv4",
      amount: 242,
      status: "success",
      email: "Abe45@gmail.com",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "processing",
      email: "Monserrat44@gmail.com",
    },
    {
      id: "5kma53ae",
      amount: 874,
      status: "success",
      email: "Silas22@gmail.com",
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "failed",
      email: "carmella@hotmail.com",
    },
  ]
}

export default async function AdminManagement() {

  const data = await getData()
  return (
    <div className="w-full">
      <div className='mt-8 mx-8 bg-white rounded-lg'>
        <div className='m-4 py-5'>
        <DataTable columns={columns} data={data} />
        </div>
        </div>
    </div>
  )
}
