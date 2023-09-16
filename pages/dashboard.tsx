import Graph from "@/component/dashboard/graph";
import Tables from "@/component/dashboard/tables";
import { Layout } from "@/component/shared";
import { Piechart } from "@/component/shared/pie-chart";
import { Flex, Table, Text, rem } from "@mantine/core";
import dynamic from "next/dynamic";

const Dashboard = () => {
  return (
    <Layout>
      {/* top */}
      <Flex className="w-full max-[1000px]:flex-col justify-between gap-5">
        <Graph />
        <Piechart />
      </Flex>

      <Tables />
    </Layout>
  );
};

export default Dashboard;
