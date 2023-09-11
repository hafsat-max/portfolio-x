import { Pie } from "@ant-design/charts";
import { Box } from "@mantine/core";
import React from "react";


type DataType = "new" | "evaluating" | "ongoing" | "finished" | "archived";

interface PieChartData {
  type: DataType;
  value: number;
}

const pieChartData: PieChartData[] = [
  {
    type: "new",
    value: 40,
  },
  {
    type: "evaluating",
    value: 25,
  },
  {
    type: "ongoing",
    value: 22,
  },
  {
    type: "finished",
    value: 22,
  },
  {
    type: "archived",
    value: 10,
  },
];

const config = {
  appendPadding: 10,
  data: pieChartData,
  angleField: "value",
  colorField: "type",
  radius: 1,
  innerRadius: 0.5,
  label: {
    type: "inner",
    offset: "-50%",
    content: "{value}",
    style: {
      textAlign: "center",
      fontSize: 14,
    },
  },
  interactions: [{ type: "element-selected" }, { type: "element-active" }],
  statistic: {
    title: false as const,
    content: {
      style: {
        whiteSpace: "pre-wrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
      formatter: function formatter() {
        return `total\n134`;
      },
    },
  },
};

export function PieChart() {
  return (
    <Box className="bg-white dark:bg-[#111c44] rounded-[14px] !max-h-[299px] !min-h-[299px] flex flex-1 items-center justify-center">
      <Pie {...config} />
    </Box>
  );
}

export default PieChart;
