"use client";

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
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

interface ReportsAndComplaintsTableProps<TData, TValue> {
    columns: ColumnDef<TValue, TValue>[]
    data: TData[]
}

const customCellRenderer = (cell) => {
  const user = cell.getValue('user');
  const type_of_subscription = cell.getValue('type_of_subscription');
  const reporter = cell.getValue('reporter');
  const reasons_for_report = cell.getValue('reasons_for_report');
  const date = cell.getValue('date');
  const reported = cell.getValue('reported');
  const status = cell.getValue('status');


  const reporterUserName = user?.name;
  const reporterUserEmail = user?.email;

  const reportedUserName = reported?.name
  const reportedUserEmail = reported?.email

  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-purple-200 text-purple-400";
      case "Pending":
        return "bg-orange-200 text-orange-400";
      case "Closed":
       return "bg-gray-100 text-gray-300";
      default:
        return "bg-white";
    }
  }

  if((cell.column.id) === "reporter") {
    return (
      <div>
        <div>{reporterUserName}</div>
        <div className='text-xs text-gray-200'>{reporterUserEmail}</div>
      </div>
    );
  } else if((cell.column.id) === "reason_for_report") {
    return (
      <div className="text-overflow-ellipsis">
      <h2 className='text-sm line-clamp-1'>{type_of_subscription}</h2>
      </div>
    );
  } else if((cell.column.id) === "reported") {
    return (
      <div>
        <div>{reportedUserName}</div>
        <div className='text-xs text-gray-200'>{reportedUserEmail}</div>
      </div>
    );
  } else if((cell.column.id) === "date") {
    return (
      <div className="text-overflow-ellipsis">
      <h2 className='text-sm line-clamp-1'>{date}</h2>
      </div>
    );
  } else if((cell.column.id) === "status")  {
    const statusColor = getStatusColor(status);
    return (
      <div className={`${statusColor} flex justify-center w-[70px] sm:-ml-4 mx-auto rounded-sm`}>{status}</div>
    )
  } else {
    return ;
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
                    <TableHead key={header.id}>
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