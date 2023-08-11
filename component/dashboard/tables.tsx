import React, { useState } from "react";
import { DateInput } from "@mantine/dates";
// import { CalendarMonth } from "./data-icon";
import { Button, Flex, Popover, Table } from "@mantine/core";
import Edit from "../icons/edit";
import Head from "../icons/head";
import TableHeader from "@/table-header";
// import { ArrowDropDown } from "./drop-down";
// import ActionIcon from "./action-icon";
// import { data } from "./data-for-table";
const data = [
  {
    name: "Akin Fergusion",
    portfolio: "Real Estate",
    gender: "Male",
    manager: "Tom Watsbarn",
    action: "",
    status: "Active",
  },
  {
    name: "Dele Farotimi",
    portfolio: "Stock",
    gender: "Male",
    manager: "Johann Drasport",
    action: "",
    status: "Active",
  },
  {
    name: "Nuella Marion",
    portfolio: "Stock",
    gender: "Female",
    manager: "Harry Pickket",
    action: "",
    status: "Inactive",
  },
  {
    name: "Dele Farotimi",
    portfolio: "Stock",
    gender: "Male",
    manager: "Johann Drasport",
    action: "",
    status: "Active",
  },
  {
    name: "Dele Farotimi",
    portfolio: "Stock",
    gender: "Male",
    manager: "Johann Drasport",
    action: "",
    status: "Active",
  },
  {
    name: "Dele Farotimi",
    portfolio: "Stock",
    gender: "Male",
    manager: "Johann Drasport",
    action: "",
    status: "Active",
  },
];

const header = [
  "Customer’s Name",
  "Portfolio",
  "Gender",
  "Portfolio Manager",
  "Action",
  "Status",
];

function CustomersListTable() {
  const [value, setValue] = useState<Date | null>(null);
  const [placeholderValue, setPlaceholderValue] = useState("Last Week");
  const test = "Active";

  return (
    <div className="p-30 flex-1 flex flex-col rounded-[14px] px-2 dark:bg-[#111c44] pt-22 bg-white mx-30 w-full">
      <TableHeader />
      <Table
        highlightOnHover
        verticalSpacing={16}
        className=" bg-[#FFFFFF] dark:bg-[#111c44] dark:text-white"
        styles={{}}
      >
        <thead className="dark:text-white">
          <tr className="!rounded-[10px] ">
            {header.map((item, idx) => (
              <th className="dark:text-white">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.name} className=" hover:!bg-[#F8F5FF]">
              <td>{item.name}</td>
              <td>{item.portfolio}</td>
              <td>{item.gender}</td>
              <td>{item.manager}</td>
              <td>
                <Flex gap="10px">
                  <Edit />
                  <Head />
                </Flex>
              </td>
              <td>
                {item.status === "Active" ? (
                  <span className="text-[#56C456] text-12 px-4 max-w-fit py-2 bg-[#F5FBF5] rounded-[6px]">
                    Active
                  </span>
                ) : (
                  <span className="text-[#F26E6E] text-12 px-4 max-w-fit py-2 bg-[#FFF5F5] rounded-[6px]">
                    Inactive
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CustomersListTable;
