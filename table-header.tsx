import { Button, Flex, Text } from "@mantine/core";
import React from "react";

const TableHeader = () => {
  return (
    <Flex justify="space-between" align="center">
      <Text size="lg" variant="arsenic">
        Customer's Name
      </Text>

      <Flex>
        <Button variant="default">Generate Report</Button>

        <Flex justify="space-between" align="center" bg="#F8F5FF">
            
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TableHeader;
