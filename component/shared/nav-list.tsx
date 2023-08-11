import React, { useState } from "react";
import { Box, Flex, NavLink, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const list = [
  {
    list: "Home",
    url: "/dashboard",
  },
  { list: "Products", icon: "/arrow-down.svg", url: "/products" },
  {
    list: "Pricing",
    url: "/pricing",
  },
  {
    list: "User Guide",
    url: "/user-guide",
  },
  {
    list: "Benefits",
    url: "/benefits",
  },
];

const NavList = () => {
  const [active, setActive] = useState(0);

  return (
    <div className=" flex justify-between gap-8 items-center">
      {list.map((item, index) => (
        <Flex gap="4px" align="center" key={index}>
          <Text
            component={Link}
            href={item.url}
            size="smd"
            // variant="metallic-silver"
            onClick={() => setActive(index)}
          >
            {item.list}
          </Text>
          {item.icon ? (
            <Image src="/arrow-down.svg" width={18} height={18} alt="arrow" />
          ) : (
            ""
          )}
        </Flex>
      ))}
    </div>
  );
};

export default NavList;
