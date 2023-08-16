import { Box, Flex, Indicator, Input, useMantineColorScheme } from "@mantine/core";
import React from "react";
import Logo from "./logo";
import Search from "../icons/search";
import Notification from "../icons/notification";
import NameTag from "./name-tag";
import ArrowDown from "../icons/arrow-down";
import { Moon } from "../icons/moon";
import { useTheme } from "next-themes";
import { Sun } from "../icons/sun";
import { Hamburger } from "../icons/hamburger";

const Header = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <Box bg="white" className="  bg-white dark:bg-[#111c44] ">
      <Flex
        justify="space-between"
        align="center"
        py="22px"
        w="95%"
        mx="auto"
        gap="30px"
      >
        <Flex justify="space-between" align="center" gap="8rem">
          <Logo />

          <Input
            icon={<Search />}
            placeholder="Search by customer..."
            className="max-[688px]:hidden"
            sx={{
              input: {
                outline: "1px solid #CDCFD4",
                paddingInlineEnd: "60px",
                paddingInlineStart: "20px",
                "&::focus": {
                  outline: "1px solid #CDCFD4",
                },
              },
            }}
          />
        </Flex>

        <Flex justify="space-between" align="center" gap="clamp(15px,2.5vw,40px)">
          <Flex align="center" gap="10px" className=" cursor-pointer">
            {colorScheme === "light" ? (
              <Moon
                onClick={() => {
                  toggleColorScheme('dark');
                  setTheme('dark');
                }}
              />
            ) : (
              <Sun
                onClick={() => {
                  toggleColorScheme('light');
                  setTheme('light')
                }}
              />
            )}

            <Indicator
              color="red"
              className="max-[688px]:hidden"
              processing
              styles={{
                common: {
                  top: "5px",
                },
                indicator: {
                  top: "5px",
                },
              }}
            >
              <Flex
                justify="center"
                align="center"
                w="36px"
                h="36px"
                bg="#FFFFFF"
                sx={{ borderRadius: "100%" }}
              >
                <Notification />
              </Flex>
            </Indicator>
          </Flex>

          <NameTag />
          <ArrowDown/>
          <Hamburger />

        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
