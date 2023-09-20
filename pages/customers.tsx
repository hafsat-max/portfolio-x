import { Layout } from "@/component/shared";
import { data } from "@/component/shared/customer-data";
import { Box, Flex. Text} from "@mantine/core";
import Image from "next/image";
import React from "react";

const images = [""];
const Customers = () => {
  return (
    <Layout>
      <Flex>
        {data.map((item, idx) => (
          <Flex key={idx} bg="white">
            <Image
              width={44}
              height={44}
              alt="User image"
              src="/head-icon.svg"
            />
            <Text></Text>

          </Flex>
        ))}
      </Flex>
    </Layout>
  );
};

export default Customers;
