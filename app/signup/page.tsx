import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from "@mantine/core";
import classes from "../app.module.scss";
import Link from "next/link";

export default function AuthenticationSignup() {
  return (
    <Container
      fluid
      bg="var(--mantine-color-gray-0)"
      className={classes.fullheight}
    >
      <Container size={440} pt={60} pb={60}>
        <Title ta="center">Sign up</Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Already have an account?{" "}
          <Anchor component={Link} href="/login" size="sm">
            Login Now
          </Anchor>
        </Text>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form>
            <TextInput label="Username" placeholder="username" />
            <TextInput
              label="Email"
              placeholder="you@likepion.com"
              required
              mt="md"
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              mt="md"
            />
          </form>
          <Text size="sm" mt="md">
            By continuing, you agree to our{" "}
            <Anchor component={Link} href="/" size="sm">
              terms of service
            </Anchor>
          </Text>
          <Button fullWidth mt="xl">
            Sign up
          </Button>
        </Paper>
      </Container>
    </Container>
  );
}
