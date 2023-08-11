import React from "react";
import { Flex, Text } from "@mantine/core";
import Image from "next/image";
import LogoIcon from "../icons/logo-icon";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Flex  align="center" gap={8} className={className}>
      <LogoIcon />
      <Text variant="cetacean-blue" size="lg">
        PortfolioX
      </Text>
    </Flex>
  );
};

export default Logo;
