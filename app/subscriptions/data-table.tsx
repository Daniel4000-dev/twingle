"use client";

import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import '../../styles/custom-styles.css';

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
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

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
        return "bg-red-200 text-red-400";
      case "Canceled":
       return "bg-gray-100 text-gray-300";
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
      <div className="text-overflow-ellipsis">
      <h2 className='text-sm line-clamp-1'>{type_of_subscription}</h2>
      </div>
    );
  } else if((cell.column.id) === "billing_type") {
    return (
      <div className="text-overflow-ellipsis">
      <h2 className='text-sm line-clamp-1'>{billing_type}</h2>
      </div>
    );
  } else if((cell.column.id) === "revenue_quarter") {
    return (
      <div className="text-overflow-ellipsis">
      <h2 className='text-sm line-clamp-1'>{revenue_quarter}</h2>
      </div>
    );
  } else if((cell.column.id) === "start_date") {
    return (
      <div className="text-overflow-ellipsis">
      <h2 className='text-sm line-clamp-1'>{start_date}</h2>
      </div>
    );
  } else if((cell.column.id) === "expiry_date") {
    return (
      <div className="text-overflow-ellipsis">
      <h2 className='text-sm line-clamp-1'>{expiry_date}</h2>
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
      getPaginationRowModel: getPaginationRowModel(),
      initialState: {
        pagination: {
            "pageIndex": 0,
            "pageSize": 7,
        }
      },
    })

    return (
      <div className="rounded-md border-none">
         <div className="flex items-center py-4">
        <Input
          className='ring-0 appearance-none no-focus- focus-visible:ring1-0 bg-red-700'
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </div>
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