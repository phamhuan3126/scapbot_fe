import { Button, Box, Container, Space } from "@mantine/core";

export default function HomePage() {
  return (
    <Container>
      <Space h="md" />
      <Box>
        <Button href="/login" component="a" variant="filled">
          Login
        </Button>
      </Box>
    </Container>
  );
}
