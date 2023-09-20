import React from "react";
import { useForm } from "@mantine/form";
import { Box, Button, Flex, PasswordInput, TextInput } from "@mantine/core";
import router from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { builder } from "@/api/builder";
import { cookieStorage } from "@ibnlanre/portal";

interface IValues {
  email: string;
  password: string;
}

const Form = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: (values: IValues) => ({
      email: values.email.match(/^\S+@\S+$/) ? null : "Invalid email",
      password:
        values.password.length < 8
          ? "Password must be at least 8 characters"
          : null,
    }),
  });

  const { mutate } = useMutation({
    mutationFn: async (payload: { email: string; password: string }) =>
      await builder.use().api.login.sign_in(payload),
    mutationKey: builder.api.login.sign_in.get(),
    onSuccess: (data) => {
      cookieStorage.setItem("my-user", JSON.stringify(data?.data));
      toast.success("You have successfully logged in", {
        autoClose: 2000,
      });
      router.push("/dashboard");
    },
  });

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        mutate(values);
      })}
    >
      <Flex direction="column" justify="space-between" gap="2.5rem">
        <TextInput
          mt="md"
          label="Email"
          placeholder="Email"
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
        <PasswordInput
          placeholder="Password"
          label="Password"
          withAsterisk
          className=" flex flex-col gap-3"
          classNames={{
            input: " p-[20px] bg-white",
            innerInput: " p-[20px] bg-white",
            wrapper: "border border-solid rounded-[5px]",
          }}
          styles={{
            innerInput: {
              color: "black !important",
              "&::placeholder": {
                color: "black !important",
              },
            },
          }}
          {...form.getInputProps("password")}
        />

        <Button variant="default" type="submit">
          CONTINUE
        </Button>
      </Flex>
    </form>
  );
};

export default Form;
