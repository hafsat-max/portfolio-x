import { Button, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { SVGProps } from "react";
import { Aside } from "../shared";

export function Hamburger(props: SVGProps<SVGSVGElement>) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <svg
        onClick={open}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        {...props}
        className="hidden max-[688px]:flex cursor-pointer"
        color="currentColor"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M0 3.75A.75.75 0 0 1 .75 3h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 3.75ZM0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8Zm.75 3.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H.75Z"
          clipRule="evenodd"
        ></path>
      </svg>

      <Drawer
        opened={opened}
        position="right"
        onClose={close}
        size={250}
        withCloseButton={false}
        styles={{ body: { padding: 0 } }}
      >
        <Aside as="drawer" />
      </Drawer>
    </>
  );
}
