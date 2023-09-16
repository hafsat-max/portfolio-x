import { Box, Flex, Text } from "@mantine/core";
import React from "react";
import { news } from "../shared/aside-data";
import Dots from "../icons/dots";
import GreyboldArrow from "../icons/greybold-arrow";
import Hr from "../icons/hr";

const TopNews = () => {
  return (
    <Flex gap="10px" direction="column">
      <Box bg="white" p="lg" sx={{ borderRadius: "14px 14px 0 0" }}>
        <Text size="base" variant="arsenic" align="center">
          Top News
        </Text>
      </Box>

      <Flex
        direction="column"
        bg="white"
        p="lg"
        sx={{ borderRadius: "0 0 14px 14px" }}
      >
        {news.map((item, idx) => (
          <Flex key={idx} direction="column" gap="14px" mb="sm">
            <Flex align="center" gap="8px">
              <Dots />
              <Flex direction="column" justify="space-between" gap="4px">
                <Text variant="black" size="xxs">
                  {item.text}
                </Text>
                <Text variant="black" size="xs">
                  {item.paragraph}
                </Text>
              </Flex>
              <GreyboldArrow />
            </Flex>
            <Hr />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default TopNews;
