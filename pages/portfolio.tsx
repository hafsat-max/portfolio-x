import TopNews from "@/component/portfolio/top-news";
import { Layout } from "@/component/shared";
import PieC from "@/component/shared/pie-chart";
import { Box, Flex } from "@mantine/core";
import dynamic from "next/dynamic";
import React from "react";
const PieCharts = dynamic(() => import("@/component/shared/pie-chart"), {
  ssr: false,
});

const Portfolio = () => {
  return (
    <Layout>
      <Box>
        <Flex  justify='space-between' gap='18px'>
          <PieC/>
          <PieCharts />
          <TopNews />
        </Flex>
      </Box>
    </Layout>
  );
};

export default Portfolio;
