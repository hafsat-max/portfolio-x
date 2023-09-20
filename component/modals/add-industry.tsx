import {
  Modal,
  Button,
  Group,
  Text,
  Flex,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { ICreateIndustry, IModalProps } from "@/type";
import { ToastContainer, toast } from "react-toastify";
import React from "react";
import { useForm, yupResolver } from "@mantine/form";
import {} from "@mantine/core";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { builder } from "@/api/builder";
import { cookieStorage } from "@ibnlanre/portal";

const schema = Yup.object().shape({
  industry_name: Yup.string().min(2, "Name should have at least 2 letters"),
  industry_description: Yup.string().min(
    2,
    "Name should have at least 2 letters"
  ),
});

export function AddIndustry({ opened, close }: IModalProps) {
  const form = useForm({
    initialValues: {
      industry_name: "",
      industry_description: "",
    },
    validate: yupResolver(schema),
  });

  const { mutate } = useMutation({
    mutationFn: async (payload: ICreateIndustry) =>
      await builder.use().api.client.create_industry(payload),
    mutationKey: builder.api.client.create_industry.get(),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        size="sm"
        centered
        withCloseButton={false}
      >
        <form
          onSubmit={form.onSubmit((values) => {
            console.log("first");
            mutate(values);
          })}
        >
          <Flex direction="column" w="100%" justify="center" align="center">
            <TextInput
              mt="md"
              label="Industry Name"
              placeholder="Industry Name"
              className=" flex flex-col gap-3 w-full"
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
              {...form.getInputProps("industry_name")}
            />
            <TextInput
              mt="md"
              label="Industry Description"
              placeholder="Industry Description"
              className=" flex flex-col w-full gap-3"
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
              {...form.getInputProps("industry_description")}
            />
          </Flex>
          <Button variant="default" mt="sm" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </Modal>
    </>
  );
}
