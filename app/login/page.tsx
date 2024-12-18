"use client";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import classes from "../app.module.css";
import Link from "next/link";
export default function AuthenticationLogin() {
  return (
    <Container
      fluid
      bg="var(--mantine-color-gray-0)"
      className={classes.fullheight}
    >
      <Container size={440} pt={60} pb={60}>
        <Title ta="center">Welcome back</Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{" "}
          <Anchor component={Link} href="/signup" size="sm">
            Create account
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form>
            <TextInput label="Email" placeholder="you@likepion.com" required />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              mt="md"
            />
          </form>
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component={Link} href="/forgotpassword" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl">
            Sign in
          </Button>
        </Paper>
      </Container>
    </Container>
  );
}
