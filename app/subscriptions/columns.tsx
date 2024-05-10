"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
    id: string
    user: Pay,
    type_of_subscription: string
    billing_type: string
    revenue_quarter: string
    start_date: string
    expiry_date: string
    status: "Paid" | "Expired" | "Cancelled"
  }

  export type Pay = {
    name: string;
    email: string;
  }

  export const columns: ColumnDef<Payment>[] = [
    {
      id: 'user',
      accessorKey: "user",
      header: "User",
    },
    {
      id: 'type_of_subscription',
      accessorKey: "type_of_subscription",
      header: "Type of Subscription",
    },
    {
      id: 'billing_type',
      accessorKey: "billing_type",
      header: "Billing type",
    },
    {
      id: 'revenue_quarter',
      accessorKey: "revenue_quarter",
      header: "Revenue/Quarter",
    },
    {
      id: 'start_date',
      accessorKey: "start_date",
      header: "Start Date",
    },
    {
      id: 'expiry_date',
      accessorKey: "expiry_date",
      header: "Expiry Date",
    },
    {
      id: 'status',
      accessorKey: "status",
      header: "Status",
    },
  ]