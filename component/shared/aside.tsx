import { Box, Button, Flex, Text, clsx } from "@mantine/core";
import React from "react";
import { AsideData, LogoutList } from "./aside-data";
import Link from "next/link";
import Plus from "../icons/plus";
import router, { useRouter } from "next/router";
import { useDisclosure } from "@mantine/hooks";
import path from "path";

const Aside = ({ as }: { as: "drawer" | "sidebar" }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { asPath } = useRouter();
  const activeCheck = (link: string) => link === asPath;
  const NewClient = (link: string) => link === asPath;

  return (
    <Flex
      direction="column"
      justify="space-between"
      className={clsx(
        as === "sidebar"
          ? "max-[688px]:hidden"
          : as === "drawer"
          ? "h-full gap-40 p-0"
          : "",
        "bg-white dark:bg-[#111c44] pl-5 pt-5 "
      )}
    >
      {/* top */}
      <Flex direction="column" justify="space-between" gap="40px">
        {/* list */}
        <Flex direction="column" gap="18px">
          {AsideData.map((item, idx) => (
            <Text
              component={Link}
              href={item.link}
              key={idx}
              size="smd"
              variant="metallic-silver"
              className={`flex items-center gap-5 py-1 px-[18px] no-underline rounded-[5px]  dark:text-white ${
                activeCheck(item.link)
                  ? "text-[var(--violet)] bg-[#F8F5FF] dark:bg-[#0b1437]"
                  : "text-[#A6ACB8]"
              }`}
            >
              {item.icon}
              {item.text}
            </Text>
          ))}
          <Button
            variant="default"
            component={Flex}
            onClick={()=>router.push('/add-new-client')}
            className=" flex  gap-4 items-center justify-between self-start mx-[18px]"
          >
            <Flex gap="10px" align="center">
              <Plus />
              <Text size="xxs" variant="primary">
                Add new Clients
              </Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>

      {/* bottom */}
      <Flex direction="column" justify="space-between" gap="10px" pb="25px">
        {LogoutList.map((item, idx) => (
          <Text
            component={Link}
            href={item.link}
            key={idx}
            size="smd"
            variant="metallic-silver"
            className={`flex items-center gap-5 py-1 px-[18px] no-underline rounded-[5px]  dark:text-white ${
              activeCheck(item.link)
                ? "text-[var(--violet)] bg-[#F8F5FF] dark:bg-[#0b1437]"
                : "text-[#A6ACB8]"
            }`}
          >
            {item.icon}
            {item.text}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default Aside;
