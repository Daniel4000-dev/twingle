'use client';
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import React from 'react'

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "m5vuk4i9",
      reporter: { name: 'Ayodmide', email: 'ayomide@gmail.com' },
      reason_for_report: "Fake profile",
      reported: { name: 'Dennis', email: 'dennis@gmail.com'},
      date: '29/01/2020',
      status: 'Open',
    },
    {
      id: "m5vuk4i9",
      reporter: { name: 'Chiamaka', email: 'chiamaka@gmail.com' },
      reason_for_report: "Inappropriate content",
      reported: { name: 'Dennis', email: 'dennis@gmail.com'},
      date: '29/01/2020',
      status: 'Pending',
    },
    {
      id: "derv1ws0",
      reporter: { name: 'Diana', email: 'diana@gmail.com' },
      reason_for_report: "Scam",
      reported: { name: 'Dennis', email: 'dennis@gmail.com'},
      date: '29/01/2020',
      status: 'Closed',
    },
    {
      id: "5kma53ae",
      reporter: { name: 'Annie', email: 'annie@gmail.com' },
      reason_for_report: "Underage",
      reported: { name: 'Dennis', email: 'dennis@gmail.com'},
      date: '29/01/2020',
      status: 'Closed',
    },
    {
      id: "bhqecj4p",
      reporter: { name: 'Betty', email: 'betty@gmail.com' },
      reason_for_report: "Inappropriate conversation",
      reported: { name: 'Dennis', email: 'dennis@gmail.com'},
      date: '29/01/2020',
      status: 'Closed',
    },
    {
      id: "bhqgjj4p",
      reporter: { name: 'Su', email: 'su@gmail.com' },
      reason_for_report: "Susipcious information",
      reported: { name: 'Dennis', email: 'dennis@gmail.com'},
      date: '29/01/2020',
      status: 'Pending',
    },
    {
      id: "bhqksj4p",
      reporter: { name: 'Marvel', email: 'marvel@gmail.com' },
      reason_for_report: "Suspicious information",
      reported: { name: 'Dennis', email: 'dennis@gmail.com'},
      date: '29/01/2020',
      status: 'Pending',
    },
    {
      id: "bwkec3ip",
      reporter: { name: 'Tenny', email: 'tenny@gmail.com' },
      reason_for_report: "Suspicious information",
      reported: { name: 'Dennis', email: 'dennis@gmail.com'},
      date: '29/01/2020',
      status: 'Pending',
    },
    {
      id: "bolgjj4p",
      reporter: { name: 'Su', email: 'su@gmail.com' },
      reason_for_report: "Susipcious information",
      reported: { name: 'Dennis', email: 'dennis@gmail.com'},
      date: '29/01/2020',
      status: 'Pending',
    },
    {
      id: "bhjfsj4p",
      reporter: { name: 'Marvel', email: 'marvel@gmail.com' },
      reason_for_report: "Suspicious information",
      reported: { name: 'Dennis', email: 'dennis@gmail.com'},
      date: '29/01/2020',
      status: 'Pending',
    },
  ]
}

export default async function ReportsAndComplaints() {

  const data = await getData()
  return (
    <div className='mt-8 mx-8 bg-white rounded-lg'>
      <div className='m-4 py-10'>
      <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}
