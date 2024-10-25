import { Button, Box, Container, Space } from "@mantine/core";
import Link from "next/link";
export default function HomePage() {
  return (
    <Container>
      <Space h="md" />
      <Box>
        <Button component={Link} href="/login" variant="filled">
          Login
        </Button>
      </Box>
    </Container>
  );
}
