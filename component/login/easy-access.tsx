import React from "react";
import Note from "../icons/note";
import Card from "../icons/card";
import { Box, Flex, Text } from "@mantine/core";

const list = [
  {
    icon: <Note />,
    text: "Easy access to Data",
    paragraph:
      "Easy access to investment data assists in making crucial investment decisions on behalf of the investors",
  },
  {
    icon: <Card />,
    text: "Use of multi-card payments",
    paragraph:
      "Have more than one debit or credit card? Don't worry, we support payments using more than one card.",
  },
];
const EasyAccess = () => {
  return (
    <Flex direction="column" justify="space-between" gap="44px">
      {list.map((item, idx) => (
        <Flex key={idx}  align="start" gap="40px">
          <Box className=" bg-violet dark:bg-[#111c44] p-3 rounded-xl">
            {item.icon}
          </Box>

          <Flex direction="column" justify="space-between" gap="12px">
            <Text size="lg" variant="black">
              {item.text}
            </Text>
            <Text
              size="base"
              variant="electric-blue"
              className=" max-w-[450px]"
            >
              {item.paragraph}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default EasyAccess;
