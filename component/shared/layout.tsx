import { Box, Flex } from "@mantine/core";
import React, { ComponentProps } from "react";
import { Aside, Header } from ".";

const Layout = (props: ComponentProps<"div">) => {
  return (
    <Flex h="100vh" direction="column" sx={{ overflow: "auto" }}>
      <Header />

      <Box className="flex-1 grid  grid-cols-[clamp(200px,16.25vw,260px)_1fr] overflow-auto max-[688px]:grid-cols-1">
        <Aside />

        <Box className="bg-[#F8F5FF] dark:bg-[#0B1437] p-5 flex flex-1 overflow-auto">
          {props.children}
        </Box>
      </Box>
    </Flex>
  );
};

export default Layout;


// aside 1111c44
// ob1437