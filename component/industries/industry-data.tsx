import { ColumnDef } from "@tanstack/react-table";
import { MdMoreVert } from "react-icons/md";
import { IndeterminateCheckbox } from "./indeterminant-checkbox";

const tableData: TableData[] = [];

export interface TableData {
  id: number;
  industry_description: string;
  industry_name: string;
}

export const columns: ColumnDef<TableData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },

  {
    accessorKey: "id",
    header: "Id",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "industry_name",
    header: "Industry Name",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "industry_description",
    header: "Industry Description",
    cell: (info) => info.getValue(),
  },
  {
    id: "action",
    header: "Action",
    cell: () => <MdMoreVert className="rotate-90" />,
  },
];

<IndeterminateCheckbox />;
