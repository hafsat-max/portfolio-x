import { Layout } from "@/component/shared";
import { data } from "@/component/shared/customer-data";
import { Box } from "@mantine/core";
import React from "react";

const Customers = () => {
  return (
    <Layout>
      <Box>
        {data.map((item, idx) => (
          <Box>
            
          </Box>
        ))}
      </Box>
    </Layout>
  );
};

export default Customers;
