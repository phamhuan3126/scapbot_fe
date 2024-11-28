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
import axios from "axios";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { signupSchema } from "../../schema/auth";
import { useRouter } from "next/navigation";
import { notifications } from "@mantine/notifications";

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
      try {
        const submitButton = document.querySelector('button[type="submit"]');
        if (submitButton) (submitButton as HTMLButtonElement).disabled = true;
        // Gửi dữ liệu đến API Fastify
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_URL_API}/user/signup`,
          values,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        notifications.show({
          title: "Registration successful",
          message: "Account created, you can log in now",
          color: "green",
        });

        router.push("/login");
      } catch (error: any) {
        // Xử lý lỗi chi tiết
        if (error.response) {
          // Lỗi từ phía server
          const serverError = error.response.data;

          switch (serverError.statusCode) {
            case 409: // Conflict
              const conflictField = serverError.field;
              if (conflictField === "email") {
                form.setErrors({
                  email: "The email has already been registered.",
                });
              } else if (conflictField === "username") {
                form.setErrors({
                  username: "The username already exists.",
                });
              } else {
                notifications.show({
                  title: "Registration fail",
                  message:
                    serverError.message ||
                    "Email or username already exists. Please try again.",
                  color: "red",
                });
              }
              break;
        
            case 400: // Bad Request
              form.setErrors(serverError.validation || {});
              break;
        
            default:
              notifications.show({
                title: "Registration fail",
                message: serverError.message || "An error occurred.",
                color: "red",
              });
          }
        } else if (error.request) {
          // Lỗi kết nối
          notifications.show({
            title: "Connection error",
            message:
              "Unable to connect to the server.",
            color: "red",
          });
        } else {
          // Lỗi không xác định
          notifications.show({
            title: "Undefined error",
            message: "An unexpected error occurred.",
            color: "red",
          });
        }
      } finally {
        const submitButton = document.querySelector('button[type="submit"]');
        if (submitButton) (submitButton as HTMLButtonElement).disabled = false;
      }
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
