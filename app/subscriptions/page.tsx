import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import React from 'react'

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "m5vuk4i9",
      user: { name: 'Ayodmide', email: 'ayomide@gmail.com' },
      type_of_subscription: "Premium",
      billing_type: "Service provider",
      revenue_quarter: '₦14,000',
      start_date: '29/01/2020',
      expiry_date: '29/02/2020',
      status: 'Paid',
    },
    {
      id: "m5vdk4i9",
      user: { name: 'Chiamaka', email: 'chiamaka@gmail.com' },
      type_of_subscription: "Boost",
      billing_type: "Card",
      revenue_quarter: '₦14,000',
      start_date: '29/01/2020',
      expiry_date: '29/02/2020',
      status: 'Expired',
    },
    {
      id: "m5vdk8i9",
      user: { name: 'Diana', email: 'diana@gmail.com' },
      type_of_subscription: "Boost",
      billing_type: "Service provider",
      revenue_quarter: '₦14,000',
      start_date: '29/01/2020',
      expiry_date: '29/02/2020',
      status: 'Canceled',
    },
    {
      id: "m5pdk8i9",
      user: { name: 'Annie', email: 'annie@gmail.com' },
      type_of_subscription: "Premium",
      billing_type: "Card",
      revenue_quarter: '₦14,000',
      start_date: '29/01/2020',
      expiry_date: '29/02/2020',
      status: 'Canceled',
    },
     {
      id: "m5vdd8i9",
      user: { name: 'Betty', email: 'betty@gmail.com' },
      type_of_subscription: "Boost",
      billing_type: "Card",
      revenue_quarter: '₦14,000',
      start_date: '29/01/2020',
      expiry_date: '29/02/2020',
      status: 'Canceled',
    },
    {
      id: "m5edk8i9",
      user: { name: 'Su', email: 'su@gmail.com' },
      type_of_subscription: "Premium",
      billing_type: "Service Provider",
      revenue_quarter: '₦14,000',
      start_date: '29/01/2020',
      expiry_date: '29/02/2020',
      status: 'Expired',
    },
    {
      id: "m5vdl8i9",
      user: { name: 'Benita', email: 'benita@gmail.com' },
      type_of_subscription: "Boost",
      billing_type: "Card",
      revenue_quarter: '₦14,000',
      start_date: '29/01/2020',
      expiry_date: '29/02/2020',
      status: 'Expired',
    },
     {
      id: "m5vgk8i9",
      user: { name: 'Marvel', email: 'marvel@gmail.com' },
      type_of_subscription: "Boost",
      billing_type: "Service provider",
      revenue_quarter: '₦14,000',
      start_date: '29/01/2020',
      expiry_date: '29/02/2020',
      status: 'Paid',
    },
    {
      id: "m5kgk8i9",
      user: { name: 'Tenny', email: 'tenny@gmail.com' },
      type_of_subscription: "Boost",
      billing_type: "Service provider",
      revenue_quarter: '₦14,000',
      start_date: '29/01/2020',
      expiry_date: '29/02/2020',
      status: 'Paid',
    },
    {
      id: "m5vgk1i9",
      user: { name: 'Big Baby', email: 'bigbaby@gmail.com' },
      type_of_subscription: "Premium",
      billing_type: "Card",
      revenue_quarter: '₦14,000',
      start_date: '29/01/2020',
      expiry_date: '29/02/2020',
      status: 'Paid',
    },
     {
      id: "m5vgk8l9",
      user: { name: 'Oni', email: 'oni@gmail.com' },
      type_of_subscription: "Premium",
      billing_type: "Card",
      revenue_quarter: '₦14,000',
      start_date: '29/01/2020',
      expiry_date: '29/02/2020',
      status: 'Paid',
    },
    {
      id: "m5pgk8i9",
      user: { name: 'Ace', email: 'ace@gmail.com' },
      type_of_subscription: "Premium",
      billing_type: "Card",
      revenue_quarter: '₦14,000',
      start_date: '29/01/2020',
      expiry_date: '29/02/2020',
      status: 'Paid',
    },
  ]
}

export default async function Subscriptions() {
  const data = await getData()
  return (
    <div className='mt-8 mx-8 bg-white rounded-lg'>
      <div className='m-4 py-10'>
      <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}
