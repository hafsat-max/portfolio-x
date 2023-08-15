import React from "react";
import { useForm } from "@mantine/form";
import { Box, Button, Flex, PasswordInput, TextInput } from "@mantine/core";
import router from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const values = form.values;

  const fetchLogin = (value: IValues) => {
    axios
      .post("https://web-production-9c5b.up.railway.app/api/account/login/",
        value,
      )
      .then(function (response: { data: { token: any } }) {
        const token = JSON.parse(localStorage.getItem("my-user") as string);

        if (response.data?.token) {
          localStorage.setItem("my-user", JSON.stringify(response.data));
          toast.success("You have successfully logged in", {
            autoClose: 2000,
          });
            router.push("/dashboard");
        }
      })
      .catch((error) => {
        toast.error("Invalid login credentials or not a verified user", {
          autoClose: 2000,
        });
      });
  };

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        fetchLogin(values);
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
