import { Flex, Text } from "@mantine/core";
import React from "react";
import Form from "./form";

const LoginForm = () => {
  return (
    <Flex direction="column" justify="space-between" gap="2.5rem" className=" self-start">
      <Flex direction="column" justify="space-between" gap="19px">
        <Text size="md" variant="sonic-silver">
          Welcome to Portfoliox,
        </Text>
        <Text size="bg" variant="black">Sign in to your Dashboard</Text>
        <Text size="md" variant="sonic-silver">
          Input your admin email and password.
        </Text>
      </Flex>

      <Form />

    </Flex>
  );
};

export default LoginForm;
