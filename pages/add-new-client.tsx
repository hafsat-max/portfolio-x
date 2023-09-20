import { builder } from "@/api/builder";
import { Layout } from "@/component/shared";
import { ICreateClient, IValues } from "@/type";
import {
  Box,
  Button,
  Flex,
  NumberInput,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

const schema = Yup.object().shape({
  client_first_name: Yup.string()
    .min(2, "Name should have at least 2 letters")
    .required("First name is required"),
  client_last_name: Yup.string()
    .min(2, "Name should have at least 2 letters")
    .required("Last name is required"),
  client_email: Yup.string()
    .email("Invalid email")
    .required("Kindly input correct email address"),
  client_gender: Yup.string().required("This field is compulsory."),
  client_industry: Yup.string()
    .min(2, "Name should have at least 2 letters")
    .required("This field is compulsory."),
  client_security_question: Yup.string()
    .min(2, "Name should have at least 2 letters")
    .required("This field is compulsory."),
  client_security_answer: Yup.string()
    .min(2, "Name should have at least 2 letters")
    .required("This field is compulsory."),
  total_investment: Yup.number()
    .min(1, "Enter total investment.")
    .required("This field is compulsory."),
});
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
      total_investment: 0,
    },

    validate: yupResolver(schema),
  });

  // create client portfolio
  const { mutate } = useMutation({
    mutationFn: async (payload: ICreateClient) =>
      await builder.use().api.client.create_client_portfolio(payload),
    mutationKey: builder.api.client.create_client_portfolio.get(),
    onSuccess: (data) => {
      form.reset();
      toast.success("Client successfully created");
    },
    onError: (error) => {},
  });

  // populate select field
  const { data } = useQuery({
    queryFn: async () => await builder.use().api.client.industry_list(),
    queryKey: builder.api.client.industry_list.get(),
  });

  const industryName = data?.data?.data;

  let industry_name = [];
  if (industryName) {
    industry_name = data?.data?.data?.map((data: { industry_name: any }) => {
      return { value: data.industry_name, label: data.industry_name };
    });
  }

  return (
    <Layout>
      <form
        className=" flex flex-1 justify-center bg-white"
        onSubmit={form.onSubmit((values) => {
          mutate(values);
        })}
      >
        <Flex direction="column" w="50%" justify="center" mx="auto">
          <Flex gap="lg" className="max-[980px]:flex-col">
            <TextInput
              mt="md"
              label="First Name"
              placeholder="First Name"
              className=" flex flex-1 flex-col gap-3"
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
              {...form.getInputProps("client_first_name")}
            />
            <TextInput
              mt="md"
              label="Last Name"
              placeholder="Last Name"
              className=" flex flex-1 flex-col gap-3"
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
              {...form.getInputProps("client_last_name")}
            />
          </Flex>
          <Flex gap="lg" className="max-[980px]:flex-col">
            <TextInput
              mt="md"
              label="Email"
              placeholder="Enter email address"
              className=" flex flex-1 flex-col gap-3"
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
              {...form.getInputProps("client_email")}
            />
            <TextInput
              mt="md"
              label="Gender"
              placeholder="Enter gender"
              className=" flex flex-1 flex-col gap-3"
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
              {...form.getInputProps("client_gender")}
            />
          </Flex>

          <Flex gap="lg" className="max-[980px]:flex-col">
            <Select
              mt="md"
              label="Client Industry"
              placeholder="Enter industry"
              className=" flex flex-1 flex-col gap-3"
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
              data={industry_name}
              {...form.getInputProps("client_industry")}
            />

            <NumberInput
              mt="md"
              type="number"
              label="Total Investments"
              placeholder="Total Investments"
              className=" flex flex-1 flex-col gap-3"
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
              {...form.getInputProps("total_investment")}
            />
          </Flex>
          <Flex justify="space-between" gap="lg">
            <Select
              mt="md"
              label="Security Questions"
              placeholder="What is the..."
              className=" flex flex-1 flex-col gap-3"
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
              data={[
                {
                  value: "What is your favourite color?",
                  label: "Favorite color",
                },
                {
                  value: "What secondary school did you attend?",
                  label: "Secondary school attended",
                },
              ]}
              {...form.getInputProps("client_security_question")}
            />
            <TextInput
              mt="md"
              label="Answer"
              placeholder="Answer"
              className=" flex flex-1 flex-col gap-3"
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
              {...form.getInputProps("client_security_answer")}
            />
          </Flex>
          <Button variant="default" mt="30px" type="submit">
            Save Changes
          </Button>
        </Flex>
      </form>
    </Layout>
  );
};

export default AddNewClient;
