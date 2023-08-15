import Graph from "@/component/dashboard/graph";
import Tables from "@/component/dashboard/tables";
import { Layout } from "@/component/shared";
import { Flex, Table, Text, rem } from "@mantine/core";
import dynamic from "next/dynamic";
const PieCharts = dynamic(() => import("@/component/shared/pie-chart"), {
  ssr: false,
});
const Dashboard = () => {
  return (
    <Layout>
      <Flex direction="column" gap="40px" h="100%" w="100%">
        {/* top */}
        <Flex className="w-full max-[1000px]:flex-col justify-between gap-5">
          <Graph />

          {/* <PieCharts /> */}
        </Flex>

        <Tables />
      </Flex>
    </Layout>
  );
};

export default Dashboard;
