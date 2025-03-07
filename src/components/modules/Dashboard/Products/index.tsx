/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
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
import { ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
import Image from "next/image";

import Link from "next/link";
import { toast } from "sonner";
import { TProduct } from "@/types";
import { getToken } from "@/redux/features/getToken";

export default function ManageProducts() {
  const [products, setProducts] = React.useState<TProduct[]>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const token = getToken();

  // fetch products from API
  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/listings/byUser`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const result = await response.json();

        setProducts(result?.data?.result || []);
      } catch (error: any) {
        toast.error(error.message);
      }
    };

    fetchProducts();
  }, [token]);

  const columns: ColumnDef<TProduct>[] = [
    {
      accessorKey: "images",
      header: "Image",
      cell: ({ row }) => {
        const images = row.getValue("images") as string[];
        const firstImage = images?.[0];

        return firstImage ? (
          <div className="w-[50px] h-[50px]  rounded-lg">
            <Image
              src={firstImage}
              width={50}
              height={50}
              alt="Thumbnail Image"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-[50px] h-[50px] flex items-center justify-center bg-gray-200">
            <span className="text-xs text-gray-500">No Image</span>
          </div>
        );
      },
    },
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => (
        <div className="font-medium capitalize">{row.getValue("title")}</div>
      ),
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => {
        const colors = [
          "#4CAF50",
          "#2196F3",
          "#FF9800",
          "#9C27B0",
          "#03A9F4",
          "#FF5722",
          "#673AB7",
          "#607D8B",
          "#8BC34A",
          "#FFC107",
          "#CDDC39",
          "#009688",
        ];

        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        return (
          <div className="flex items-center">
            <span
              style={{ backgroundColor: randomColor }}
              className="px-3 py-1 rounded-full text-white text-xs font-medium"
            >
              {row.getValue("category")}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => {
        return (
          <div className="font-medium capitalize">{row.getValue("price")}</div>
        );
      },
    },
    {
      accessorKey: "condition",
      header: "Condition",
      cell: ({ row }) => {
        return (
          <div className="font-medium capitalize">
            {row.getValue("condition")}
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const product = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <Button variant="outline" className="h-8 w-8 p-4 capitalize">
                {product.status}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                Available
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Sold
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
    {
      accessorKey: "negotiable",
      header: "Negotiable",
      cell: ({ row }) => {
        const negotiable = row.getValue("negotiable");

        return (
          <div className="font-medium capitalize">
            {negotiable ? (negotiable as string) : "N/A"}
          </div>
        );
      },
    },
    {
      id: "actions",
      header: "Actions",
      enableHiding: false,
      cell: ({ row }) => {
        const product = row.original;
        console.log(product, "original");
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <Button variant="ghost" className="h-8 w-8 p-0 ">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <Link
                  //   href={`/dashboard/projects/update-project/${project?._id}`}
                  href="#"
                  className="flex gap-2"
                >
                  <FaEdit className="mr-2 text-green-500" /> Edit
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem
                // onClick={() => handleDeleteProject(project?._id)}
                className="cursor-pointer"
              >
                <FaTrash className="mr-2 text-red-600" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data: products,
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
          placeholder="Filter products by title..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm "
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
                  No products data found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between py-4 mt-4">
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
