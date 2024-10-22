import {
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  rem,
} from '@mantine/core';
import { ArrowLeft } from 'lucide-react';
import classes from './styles.module.scss';

export default function ForgotPassword() {
  return (
    <Container size={460} my={150}>
      <Title size="h2" ta="center">
        Forgot your password?
      </Title>
      <Text c="dimmed" fz="sm" ta="center">
        Enter your email to get a reset link
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <TextInput label="Your email" placeholder="me@likepion.com" required />
        <Group justify="space-between" mt="lg" className={classes.controls}>
          <Anchor href="/login" c="dimmed" size="sm" className={classes.control}>
            <Center inline>
              <ArrowLeft style={{ width: rem(12), height: rem(12) }} />
              <Box ml={5}>Back to the login page</Box>
            </Center>
          </Anchor>
          <Button className={classes.control}>Reset password</Button>
        </Group>
      </Paper>
    </Container>
  );
}