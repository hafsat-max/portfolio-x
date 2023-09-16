import { Layout } from "@/component/shared";
import { ICreateClient, IValues } from "@/type";
import { Box, Flex, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";

const AddNewClient = () => {
  const form = useForm({
    initialValues: {
      client_first_name: "",
      client_last_name: "",
      client_gender: "",
      client_email: "",
      client_industry: "",
      client_security_question: "",
      client_security_answer: "",
      status: false,
      total_investment: 0,
    },

    validate: (values: ICreateClient) => ({
      client_first_name:
        values.client_first_name.length < 2
          ? "Name must have at least 2 letters"
          : null,
      client_last_name:
        values.client_last_name.length < 2
          ? "Name must have at least 2 letters"
          : null,
      client_gender:
        values.client_gender.length < 2
          ? "Name must have at least 2 letters"
          : null,
      client_email: values.client_email.match(/^\S+@\S+$/)
        ? null
        : "Invalid email",
      client_industry:
        values.client_industry.length < 2
          ? "Name must have at least 2 letters"
          : null,
      client_security_question:
        values.client_security_question.length < 2
          ? "Name must have at least 2 letters"
          : null,
      client_security_account:
        values.client_security_answer.length < 2
          ? "Name must have at least 2 letters"
          : null,
      status: typeof values.status === "boolean" ? "" : null,
      total_investment: typeof values.total_investment === "number" ? null : "Input a number",
    }),
  });
  return (
    <Layout>
      <Flex bg="white" justify="center" sx={{ flex: 1 }}>
        <Flex direction="column">
          <Flex justify="space-between" gap='lg'>
            <TextInput
              mt="md"
              label="First Name"
              placeholder="First Name"
              className=" flex flex-col gap-3"
              classNames={{
                input: " p-[20px]",
                wrapper: "border border-solid rounded-[5px]",
              }}
              styles={{
                input: {
                  color: "black !important",
                  "&::placeholder": {
                    color: "black !important",
                  },
                },
              }}
              {...form.getInputProps("email")}
            />
            <TextInput
              mt="md"
              label="Last Name"
              placeholder="Last Name"
              className=" flex flex-col gap-3"
              classNames={{
                input: " p-[20px]",
                wrapper: "border border-solid rounded-[5px]",
              }}
              styles={{
                input: {
                  color: "black !important",
                  "&::placeholder": {
                    color: "black !important",
                  },
                },
              }}
              {...form.getInputProps("email")}
            />
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default AddNewClient;
