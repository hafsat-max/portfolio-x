import { Flex, Text, rem } from "@mantine/core";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Rectangle,
} from "recharts";

const data = [
  {
    name: "Trading",

    uv: 500,

    amt: 500,

    color: "#56C456",

    radius: "[10, 0, 0, 10]}",
  },

  {
    name: "Civil Service",

    uv: 1300,

    pv: 2400,

    amt: 2400,

    color: "#FF9E2C",

    radius: "[10, 0, 0, 10]}",
  },

  {
    name: "Health & Aid",

    uv: 800,

    pv: 2400,

    amt: 2400,

    color: "#000000",

    radius: "[10, 0, 0, 10]}",
  },

  {
    name: "IT",

    uv: 1000,

    pv: 2400,

    amt: 2400,

    color: "#ED3A3A",

    radius: "[10, 0, 0, 10]}",
  },

  {
    name: "Civil Service",

    uv: 1300,

    pv: 2400,

    amt: 2400,

    color: "#C3FF44",

    radius: "[10, 0, 0, 10]}",
  },

  {
    name: "Agriculture",

    uv: 500,

    pv: 2400,

    amt: 2400,

    color: "#FF805D",

    radius: "[10, 0, 0, 10]",
  },
];

const Graph = () => {
  const CustomBar = (props: any) => {
    const { x, y, width, height, color } = props;
    const topLeftRadius = 10;
    const topRightRadius = 10;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={color}
          rx={`${topLeftRadius} ${topRightRadius}`} // Set separate radius for top left and top right corners
          ry={0}
        />
      </g>
    );
  };

  return (
    <Flex
      p="10px"
      direction="column"
      gap={rem(42)}
      h={299}
      className=" bg-white dark:bg-[#111c44] max-[1000px]:w-full mx-auto rounded-[14px] w-[55%]"
    >
      <Flex justify="space-between" w="80%" align="center" mx="auto">
        <Text size="smd" variant="arsenic">
          Clients
        </Text>
        <Text size="xs" variant="gray">
          Number of clients by industry
        </Text>
      </Flex>

      <ResponsiveContainer width="100%">
        <BarChart data={data} layout="horizontal">
          <XAxis
            dataKey="name"
            stroke="#5F6868"
            className="text-xs font-medium text-[#C1C0C0] dark:text-red-500"
          />
          <YAxis
            dataKey={"uv"}
            stroke="#C1C0C0"
            fontSize="12px"
            fontFamily="Inter"
            radius={20}
            type="number"
            className="text-xs font-medium text-[#C1C0C0] dark:text-white"
          />
          <Tooltip />
          <Bar
            dataKey={"uv"}
            fill="blue"
            barSize={45}
            radius={40}
            shape={<CustomBar />}
          />
        </BarChart>
      </ResponsiveContainer>
    </Flex>
  );
};

export default Graph;
