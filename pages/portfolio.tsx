import PortfolioTable from "@/component/portfolio/portfolio-table";
import TopNews from "@/component/portfolio/top-news";
import { Layout } from "@/component/shared";
import { Piechart } from "@/component/shared/pie-chart";
import { Box, Flex } from "@mantine/core";
import dynamic from "next/dynamic";
import React from "react";

const Portfolio = () => {
  return (
    <Layout>
      <Box>
        <Flex justify="space-between" gap="18px">
          <Piechart />
          <Piechart />
          <TopNews />
        </Flex>
      </Box>

      <Flex>
        <PortfolioTable />
      </Flex>
    </Layout>
  );
};

export default Portfolio;
