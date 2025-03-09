/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";
import moment from "moment-timezone";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getToken } from "@/redux/features/getToken";
import { toast } from "sonner";
import { TOrder } from "@/types/order";

export default function PurchaseHistory() {
  const [purchaseHistory, setPurchaseHistory] = React.useState<TOrder[]>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  console.log(purchaseHistory);

  const token = getToken();
  //   fetch purchase history from API
  React.useEffect(() => {
    const fetchPurchaseHistory = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/transactions/purchases-history`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch purchase history");
        }
        const result = await response.json();

        // filter out items where itemID is null
        const filteredPurchaseHistory =
          result?.data?.result?.filter(
            (order: TOrder) => order?.itemID !== null
          ) || [];

        setPurchaseHistory(filteredPurchaseHistory);
      } catch (error: any) {
        toast.error(error.message);
      }
    };

    fetchPurchaseHistory();
  }, [token]);

  const columns: ColumnDef<TOrder>[] = [
    {
      accessorKey: "transactionId",
      header: "Transaction ID",
      cell: ({ row }) => (
        <div className="font-medium ">{row.getValue("transactionId")}</div>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "Date",
      cell: ({ row }) => {
        const createdAt = row.getValue("createdAt");
        const formattedDate = createdAt
          ? moment(createdAt).tz("Asia/Dhaka").format("YYYY-MMM-DD")
          : "N/A";

        return <div className="font-medium">{formattedDate}</div>;
      },
    },
    {
      accessorKey: "itemID.title",
      header: "Product",
      cell: ({ row }) => {
        return (
          <div className="font-medium capitalize">
            {row.original.itemID?.title || "N/A"}
          </div>
        );
      },
    },
    {
      accessorKey: "itemID.price",
      header: "Price",
      cell: ({ row }) => {
        return (
          <div className="font-medium ">
            BDT {row.original.itemID?.price || "N/A"}
          </div>
        );
      },
    },
    {
      accessorKey: "sellerID.name",
      header: "Seller",
      cell: ({ row }) => {
        return (
          <div className="font-medium capitalize">
            {row.original.sellerID?.name || "N/A"}
          </div>
        );
      },
    },
    {
      accessorKey: "sellerID.identifier",
      header: "Seller Contact",
      cell: ({ row }) => {
        return (
          <div className="font-medium ">
            {row.original.sellerID?.identifier || "N/A"}
          </div>
        );
      },
    },
    {
      accessorKey: "paymentMethod",
      header: "Payment Method",
      cell: ({ row }) => {
        return (
          <div className="font-medium capitalize">
            {row.getValue("paymentMethod")}
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        return (
          <div className="font-medium capitalize">{row.getValue("status")}</div>
        );
      },
    },
  ];

  const table = useReactTable({
    data: purchaseHistory,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: 10,
        pageIndex: 0,
      },
    },
  });

  return (
    <div className="w-full">
      <div className="flex gap-4 items-center ">
        <Input
          placeholder="Filter sales history by transaction ID..."
          value={
            (table.getColumn("transactionId")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("transactionId")?.setFilterValue(event.target.value)
          }
          className="w-full"
        />

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <Button variant="outline">
                Columns <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="rounded-md border mt-4">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center "
                >
                  No purchase history data found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div>
          <p>
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </p>
        </div>

        <div className="flex items-center space-x-2">
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
  );
}
