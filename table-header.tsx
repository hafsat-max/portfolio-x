import { Button, Flex, Popover, Text } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import React, { useState } from "react";
import Calendar from "./component/icons/calendar";
import ArrowDown from "./component/icons/arrow-down";
import BoldArrow from "./component/icons/bold-arrow";

const TableHeader = () => {
  const [value, setValue] = useState<Date | null>(null);
  const [placeholderValue, setPlaceholderValue] = useState("Last Week");
  const test = "Active";
  return (
    <Flex justify="space-between" align="center" py='22px'>
      <Text size="lg" variant="arsenic">
        Customer's Name
      </Text>

      <Flex align="center" justify="space-between" gap="40px">
        <Button variant="default">Generate Report</Button>

        <Flex
          justify="space-between"
          align="center"
          gap="10px"
          bg="#F8F5FF"
          px="18px"
          py="8px"
          sx={{ borderRadius: "18px" }}
        >
          <DateInput
            dateParser={(input) => {
              if (input === "WW2") {
                return new Date(1939, 8, 1);
              }
              return new Date(input);
            }}
            icon={<Calendar />}
            value={value}
            onChange={setValue}
            valueFormat="DD/MM/YYYY"
            placeholder="Filter by Date"
            maw={200}
            mx="auto"
            styles={{
              root: {
                fontSize: "9.3px",
                color: "#61677F",
                fontFamily: "Poppins",
                borderRadius: '5px'
              },
            }}
          />
          <Popover
            width="target"
            position="bottom"
            classNames={{
              dropdown: "!bg-[#262830] !px-[8px] !py-[12px]",
            }}
          >
            <Popover.Target>
              <Flex
                w={85}
                align='center'
                gap='10px'
                classNames={{
                  root: "!bg-white !px-1 !text-[12px] ",
                  label: "flex",
                }}
                styles={{
                  root: {
                    background: "#F8F5FF",
                    "&:hover": {
                      background: "#F8F5FF",
                    },
                    padding: 0,
                    color: "black",
                  },
                }}
              >
                <Text size="xxs" variant="blue-electric" p={0}>
                  {placeholderValue}
                </Text>
                  <BoldArrow />
              </Flex>
            </Popover.Target>
            <Popover.Dropdown>
              <button
                className="p-[6px] bg-[#3B3D47] rounded text-[8px] text-white w-full text-start"
                onClick={() => setPlaceholderValue("12 Months")}
              >
                12 Months
              </button>

              <button
                className="p-[6px] bg-[#3B3D47] rounded text-[8px] text-white w-full text-start"
                onClick={() => setPlaceholderValue("6 Months")}
              >
                6 Months
              </button>

              <button
                className="p-[6px] bg-[#3B3D47] rounded text-[8px] text-white w-full text-start"
                onClick={() => setPlaceholderValue("30 Days")}
              >
                30 Days
              </button>

              <button
                className="p-[6px] bg-[#3B3D47] rounded text-[8px] text-white w-full text-start"
                onClick={() => setPlaceholderValue("7 Days")}
              >
                7 Days
              </button>

              <button
                className="p-[6px] bg-[#3B3D47] rounded text-[8px] text-white w-full text-start"
                onClick={() => setPlaceholderValue("Custom Date")}
              >
                Custom Date
              </button>
            </Popover.Dropdown>
          </Popover>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TableHeader;
