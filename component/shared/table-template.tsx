import React, { ReactNode } from "react";
import TableHeader from "./table-header";

const TableTemplate = (
  props: Record<"text", string> & { children?: ReactNode }
) => {
  return (
    <div className="p-30 flex-1 flex flex-col rounded-[14px] px-8 dark:bg-[#111c44] pt-22 bg-white mx-30 w-full">
      <TableHeader text={props.text} />

      {props.children}
    </div>
  );
};

export default TableTemplate;
