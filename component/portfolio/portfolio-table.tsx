import { builder } from "@/api/builder";
import { Box, Button, Flex, Text, clsx } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  getPaginationRowModel,
} from "@tanstack/react-table";
import React, { useMemo } from "react";
import Pending, { Completed, Hold } from "../icons/status";
import DebouncedInput from "./debounced-input";

export const PortfolioTable = () => {
  //fetch the data from endpoint
  const { data } = useQuery({
    queryFn: async () => await builder.use().table.porfolio(),
    queryKey: builder.table.porfolio.get(),
    select: (data) => data?.data,
  });

  interface ColumnDefProps {
    id: number;
    title: string;
    date: string;
    amount: string;
    status: string;
  }

  const columns: ColumnDef<ColumnDefProps, any>[] = [
    {
      header: "ID",
      accessorKey: "id",
      cell: (info) => info.getValue(),
    },
    {
      header: "Title",
      accessorKey: "title",
      cell: (info) => info.getValue(),
    },
    {
      header: "Date",
      accessorKey: "date",
      cell: (info) => info.getValue(),
    },
    {
      header: "Amount",
      accessorKey: "amount",
      cell: (info) => info.getValue(),
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: ({ cell }) => (
        <span>
          {cell.getValue() === true ? (
            <Flex justify="center" align="center" gap="xs">
              <Completed />
              <Text size="base">Completed</Text>
            </Flex>
          ) : cell.getValue() === false ? (
            <Flex justify="center" align="center" gap="xs">
              <Pending />
              <Text size="base">Pending</Text>
            </Flex>
          ) : (
            <Flex justify="center" align="center" gap="xs">
              <Hold />
              <Text size="base">On hold</Text>
            </Flex>
          )}
        </span>
      ),
    },
  ];
  const table = useReactTable({
    data: data || [],
    columns,
    // state:{
    //   globalFilter,
    // },
    initialState: {
      pagination: {
        pageSize: 4,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <Box bg="white" className="flex-1">
      {/*Pagination  */}
      <Flex align="center" gap="sm" p="xs">
        <Button
          variant="default"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage}
        >
          {"<"}
        </Button>
        <Button
          variant="default"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage}
        >
          {">"}
        </Button>
        <Text>
          Page{" "}
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </Text>
        <DebouncedInput />
      </Flex>
      <table width="100%" className="mt-[10px]">
        {table.getHeaderGroups().map((headergroup) => (
          <tr key={headergroup.id}>
            {headergroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
        <tbody>
          {table.getRowModel().rows.map((row, i) => (
            <tr
              key={row.id}
              className={clsx(
                "text-center",
                i % 2 === 0 ? "bg-[#F8F5FF]" : "white"
              )}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className=" py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};
