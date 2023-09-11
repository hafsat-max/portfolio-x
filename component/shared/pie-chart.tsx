import { Box, Flex, RingProgress, Text } from "@mantine/core";
import { details } from "./aside-data";
import PieList from "./pie-list";
import ArrowDown from "../icons/arrow-down";

export function Piechart() {
  return (
    <Box className="bg-white dark:bg-[#111c44] rounded-[14px] justify-center items-center !max-h-[299px] !min-h-[299px] flex flex-col flex-1">
      <Flex justify='space-between' align='center' w='80%' pt='20px'>
        <Text variant="arsenic" size="base">
          Top Clients By Sector
        </Text>
        <Flex bg="#F8F5FF" align='center' justify='space-between' px='10px' py='8px' className="rounded-[10px]">
          <Text>Volume</Text>
          <ArrowDown />
        </Flex>
      </Flex>

      <Flex align="center">
        <RingProgress
          size={250}
          thickness={32}
          className="w-[70%]"
          label={
            <Flex direction="column" align="center">
              <Text variant="gray" size="xs">
                Top 4 Sector
              </Text>
              <Text variant="steel" size="md" className="!font-bold">
                $79,760,00
              </Text>
            </Flex>
          }
          sections={details.map((item, index) => item)}
        />
        <PieList />
      </Flex>
    </Box>
  );
}
