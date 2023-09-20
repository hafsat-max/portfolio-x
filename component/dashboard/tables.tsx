import React, { useState } from "react";
import { DateInput } from "@mantine/dates";
// import { CalendarMonth } from "./data-icon";
import { Button, Flex, Popover, Table } from "@mantine/core";
import Edit from "../icons/edit";
import Head from "../icons/head";
import TableHeader from "@/component/shared/table-header";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
// import { ArrowDropDown } from "./drop-down";
// import ActionIcon from "./action-icon";
// import { data } from "./data-for-table";
const dummyData = [
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

  const { data } = useQuery({
    queryFn: async (data) => await builder.use().api.client.client_list(),
    queryKey: builder.api.client.client_list.get(),
    select: (data) => data?.data?.data,
  });

  return (
    <div className="p-30 flex-1 flex flex-col rounded-[14px] px-8 dark:bg-[#111c44] pt-22 bg-white mx-30 w-full">
      <TableHeader text="Customers List" />
      <Table
        highlightOnHover
        verticalSpacing={16}
        className=" bg-[#FFFFFF] dark:bg-[#111c44] dark:text-white"
        styles={{}}
      >
        <thead className="dark:text-white">
          <tr className="!rounded-[10px] ">
            {header.map((item, idx) => (
              <th className="dark:text-white" key={idx}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any, idx: string) => (
            <tr key={idx} className=" hover:!bg-[#F8F5FF]">
              <td>
                {item?.client_first_name} {item?.client_last_name}
              </td>
              <td>{item?.client_industry?.industry_name}</td>
              <td>{item?.client_gender}Male</td>
              <td>Taofeeq Otu</td>
              <td>
                <Flex gap="10px">
                  <Edit />
                  <Head />
                </Flex>
              </td>
              <td>
                {item.status ? (
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
