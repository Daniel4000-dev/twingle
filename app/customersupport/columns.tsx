"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
    id: string
    user: Pay,
    complaint: string
    status: "Open" | "Closed" | "Pending" | "Failed"
    date: string
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
      id: 'complaint',
      accessorKey: "complaint",
      header: "Complaint",
    },
    {
      id: 'status',
      accessorKey: "status",
      header: "Status",
    },
    {
      id: 'date',
      accessorKey: "date",
      header: "Date",
    },
  ]