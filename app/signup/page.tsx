"use client";
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
import classes from "../app.module.css";
import Link from "next/link";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { signupSchema } from "../../schema/auth";
import { useRouter } from 'next/navigation';
import { notifications } from '@mantine/notifications';

export default function AuthenticationSignup() {
  const router = useRouter();
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate: zodResolver(signupSchema),
  });
  const handleSubmit = async (values: any) => {
    
    // Validate form trước khi xử lý
    const validationResult = form.validate();
    
    // Nếu form không hợp lệ, dừng xử lý
    if (!validationResult.hasErrors) {
      
      const submitButton = document.querySelector('button[type="submit"]');
      if (submitButton) (submitButton as HTMLButtonElement).disabled = true;

      notifications.show({
        title: 'Đăng ký thành công',
        message: 'Tài khoản của bạn đã được tạo',
        color: 'green'
      });

      router.push('/login');
    }
  };

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
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              label="Username"
              placeholder="username"
              {...form.getInputProps("username")}
            />
            <TextInput
              label="Email"
              placeholder="you@likepion.com"
              mt="md"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              mt="md"
              {...form.getInputProps("password")}
            />
            <Text size="sm" mt="md">
              By continuing, you agree to our{" "}
              <Anchor component={Link} href="/" size="sm">
                terms of service
              </Anchor>
            </Text>
            <Button fullWidth mt="xl" type="submit">
              Sign up
            </Button>
          </form>
        </Paper>
      </Container>
    </Container>
  );
}
