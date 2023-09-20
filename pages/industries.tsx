import { builder } from "@/api/builder";
import { AddIndustry } from "@/component/modals/add-industry";
import { Layout } from "@/component/shared";
import TableTemplate from "@/component/shared/table-template";
import { Button, Flex, Table } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useDisclosure } from "@mantine/hooks";

const Industries = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const { data } = useQuery({
    queryFn: () => builder.use().api.client.industry_list(),
    queryKey: builder.api.client.industry_list.get(),
    select: (data) => data?.data?.data,
  });

  return (
    <Layout>
      <Flex
        bg="white"
        direction="column"
        className="flex-1"
        align="center"
        justify="center"
      >
        <Button mt="sm" variant="default" onClick={() => open()}>
          Add Industry
        </Button>
        <TableTemplate text="Industries List">
          <Table
            verticalSpacing="lg"
            className="border border-collapse text-center"
          >
            <thead>
              <tr>
                <th className="!text-center">Id</th>
                <th className="!text-center">Industry Name</th>
                <th className="!text-center">Industry description</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item: any) => (
                <tr key={item?.id}>
                  <td>{item?.id}</td>
                  <td>{item?.industry_name}</td>
                  <td>{item?.industry_description}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableTemplate>
      </Flex>
      <AddIndustry opened={opened} close={close} />
    </Layout>
  );
};

export default Industries;
