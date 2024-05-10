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

interface CustomerSupportTableProps<TData, TValue> {
    columns: ColumnDef<TValue, TValue>[]
    data: TData[]
}


const customCellRenderer = (cell) => {
  const user = cell.getValue('user');
  const type_of_subscription = cell.getValue('type_of_subscription');
  const billing_type = cell.getValue('billing_type');
  const revenue_quarter = cell.getValue('revenue_quarter');
  const start_date = cell.getValue('start_date');
  const expiry_date = cell.getValue('expiry_date');
  const status = cell.getValue('status');


  const userName = user?.name;
  const userEmail = user?.email;

  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-purple-200 text-purple-400";
      case "Expired":
        return "bg-red-100 text-red-300";
      case "Canceled":
       return "bg-gray-200 text-gray-400";
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
  } else if((cell.column.id) === "type_of_subscription") {
    return (
      <div className=" overflow-hidden text-overflow-ellipsis">
      <h2 className='text-sm line-clamp-1'>{type_of_subscription}</h2>
      </div>
    );
  } else if((cell.column.id) === "billing_type") {
    return (
      <div className=" overflow-hidden text-overflow-ellipsis">
      <h2 className='text-sm line-clamp-1'>{billing_type}</h2>
      </div>
    );
  } else if((cell.column.id) === "revenue_quarter") {
    return (
      <div className=" overflow-hidden text-overflow-ellipsis">
      <h2 className='text-sm line-clamp-1'>{revenue_quarter}</h2>
      </div>
    );
  } else if((cell.column.id) === "status")  {
    const statusColor = getStatusColor(status);
    return (
      <div className={`${statusColor} flex justify-center w-[58px] sm:-ml-4 mx-auto rounded-sm`}>{status}</div>
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
      </div>
    //   <div className="flex items-center justify-end space-x-2 py-4">
    //   <div className="flex-1 text-sm text-muted-foreground">
    //    Page {table.getState().pagination.pageIndex + 1} of{" "}
    //     {table.getPageCount()}
    //   </div>
    //   <div className="space-x-2">
    //     <Button
    //       variant="outline"
    //       size="sm"
    //       onClick={() => table.previousPage()}
    //       disabled={!table.getCanPreviousPage()}
    //     >
    //       Previous
    //     </Button>
    //     <Button
    //       variant="outline"
    //       size="sm"
    //       onClick={() => table.nextPage()}
    //       disabled={!table.getCanNextPage()}
    //     >
    //       Next
    //     </Button>
    //   </div>
    // </div>
    )
  }