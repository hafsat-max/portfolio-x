import React from "react";

import { Button, Text } from "@mantine/core";
import { ArrowUpward } from "../icons/arrow-up";
import EasyAccess from "./easy-access";

const LoginBanner = () => {
  return (
    <main className=" flex flex-1 flex-col justify-between gap-20 max-[975px]:hidden">
      <section className=" flex flex-col gap-12">
        <div
          className="flex justify-between gap-8 pt-10"
          style={{
            borderBlockStart: "1px dashed rgba(0, 0, 0, 0.16)",
          }}
        >
          <div className="flex-col flex gap-5">
            <Text size="smd" variant="crayola">
              Returns on Investment (ROI)
            </Text>

            <div className="flex gap-5 items-center">
              <Text variant="cetacean-blue" size="lg">
                $79,760.00
              </Text>
              <Text size="base" variant="pastel-blue">
                (USD)
              </Text>
            </div>

            <Text size="base" variant="pastel-blue">
              <span className=" text-yellow-green">20%</span> increase compared
              to last week
            </Text>
          </div>

          <div className="p-4 self-start bg-[#FFFFFF] flex justify-center items-center rounded-lg">
            <ArrowUpward className="" />
          </div>
        </div>

        <Button variant="secondary" className=" self-center">
          Generate Report
        </Button>
      </section>

      <EasyAccess />
    </main>
  );
};

export default LoginBanner;
