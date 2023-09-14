import { Box, Flex, Text } from "@mantine/core";
import React from "react";
import { portList } from "../shared/aside-data";

const PortList = () => {
  return (
    <Box>
      <Flex justify='space-between'>
        <Flex justify='space-between' w='100%'>
        <Text variant='lintel' size='xx`s'>Transanctions</Text>
          {portList.map((item, idx) => (
            <Flex align='center' justify='space-between' gap='10px'>
              <Text variant='lintel' size='xxs'>{item.text}</Text>
              {item.icon}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default PortList;
