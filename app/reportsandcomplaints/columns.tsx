"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  id: string
  reporter: Pay,
  reason_for_report: string
  reported: Payer,
  status: "Open" | "Closed" | "Pending"
  date: string
}

export type Pay = {
  name: string;
  email: string;
}

export type Payer = {
  name: string;
  email: string;
}

  export const columns: ColumnDef<Payment>[] = [
    {
      id: "reporter",
      accessorKey: "reporter",
      header: "Reporter",
    },
    {
      id: "reason_for_report",
      accessorKey: "reason_for_report",
      header: "Reason for Report",
    },
    {
      id: "reported",
      accessorKey: "reported",
      header: "Reported",
    },
    {
      id: "status",
      accessorKey: "status",
      header: "Satus",
    },
    {
      id: "date",
      accessorKey: "date",
      header: "Date",
    },
  ]