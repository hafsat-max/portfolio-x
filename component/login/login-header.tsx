import React from "react";
import Logo from "../shared/logo";
import { NavList } from "../shared";
import BookTrial from "../shared/book-trial";
import { useTheme } from "next-themes";
import { Box, Flex, useMantineColorScheme } from "@mantine/core";
import { Moon } from "../icons/moon";
import { Sun } from "../icons/sun";

const LoginHeader = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <section
      className=" bg-whit w-full "
      style={{
        borderBlockEnd: "1px solid rgba(0, 0, 0, 0.16)",
        paddingInline: 0,
      }}
    >
      <nav className="flex justify-between items-center align py-24 max-[999px]:wfull max-[999px]:px-0">
        <Logo />

        <NavList />

        <Flex justify="space-between" align="center" gap="20px">
          <Box>
            {colorScheme === "light" ? (
              <Moon
                onClick={() => {
                  toggleColorScheme("dark");
                  setTheme("dark");
                }}
              />
            ) : (
              <Sun
                onClick={() => {
                  toggleColorScheme("light");
                  setTheme("light");
                }}
              />
            )}
          </Box>
          <BookTrial />
        </Flex>
      </nav>
    </section>
  );
};

export default LoginHeader;
