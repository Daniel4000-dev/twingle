"use client";

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface CustomerSupportTableProps<TData, TValue> {
    columns: ColumnDef<TValue, TValue>[]
    data: TData[]
}


const customCellRenderer = (cell) => {
  const user = cell.getValue('user');
  const complaint = cell.getValue('complaint');
  const status = cell.getValue('status');
  const date = cell.getValue('date');


  const userName = user?.name;
  const userEmail = user?.email;

  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-purple-200 text-purple-400";
      case "Closed":
        return "bg-gray-100 text-gray-300";
      case "Pending":
       return "bg-orange-200 text-orange-400";
      default:
        return "bg-white";
    }
  }

  if((cell.column.id) === "user") {
    return (
      <div>
        <div>{userName}</div>
        <div className='text-xs text-gray-200'>{userEmail}</div>
      </div>
    );
  } else if((cell.column.id) === "complaint") {
    return (
      <div className=" overflow-hidden text-overflow-ellipsis">
      <h2 className='text-sm line-clamp-1'>{complaint}</h2>
      </div>
    );
  }else if((cell.column.id) === "status")  {
    const statusColor = getStatusColor(status);
    return (
      <div className={`${statusColor} flex justify-center w-[58px] sm:-ml-4 mx-auto rounded-sm`}>{status}</div>
    )
  } else {
    return date;
  }
};

export function DataTable<TData, TValue>({
    columns,
    data,
  }: DataTableProps<TData, TValue>) {
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
       getPaginationRowModel: getPaginationRowModel(),
      initialState: {
        pagination: {
            "pageIndex": 0,
            "pageSize": 6,
        }
      },
    })

    return (
      <div className="rounded-md border-none">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className='text-gray-200' key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {customCellRenderer(cell)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex items-center justify-end space-x-2 py-4">
      <div className="flex-1 text-sm text-muted-foreground">
       Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </div>
      <div className="space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
      </div>
    )
  }