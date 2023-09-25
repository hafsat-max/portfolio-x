import { flexRender, Table as ReactTable } from "@tanstack/react-table";
import { clsx } from "@mantine/core";
import { RxCaretSort } from "react-icons/rx";
import { css, CSSInterpolation } from "@emotion/css";

export function IndustriesTable({
  table,
  onRowClick,
  rowHoverStyle,
  excludeFromRowClick = [],
}: {
  table: ReactTable<any>;
  rowHoverStyle?: CSSInterpolation;
  onRowClick?: (param: any) => void;
  excludeFromRowClick?: string[];
}) {
  return (
    <div className="overflow-auto no-scroll flex-1">
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index, arr) => {
                return (
                  <th
                    className={clsx(
                      index === arr.length - 1 && "!pr-6",
                      "!py-4 !pl-6"
                    )}
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer flex gap-1 items-center"
                            : "flex justify-start",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: header.column.getCanSort() && <RxCaretSort />,
                          desc: header.column.getCanSort() && <RxCaretSort />,
                        }[header.column.getIsSorted() as string] ??
                          (header.column.getCanSort() && <RxCaretSort />)}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, idx, arr) => {
            return (
              <tr
                className={css`
                  ${rowHoverStyle}
                `}
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      onClick={() =>
                        onRowClick &&
                        cell.column.id !== "select" &&
                        cell.column.id !== "action" &&
                        !excludeFromRowClick.includes(cell.column.id)
                          ? onRowClick(row.original)
                          : {}
                      }
                      className={clsx(
                        idx === arr.length - 1 && "!border-b-0",
                        "py-4 !pl-6"
                      )}
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
