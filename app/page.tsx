"use client";
import {
  Button,
  Container,
  Space,
  Card,
  Image,
  Text,
  Title,
  Badge,
  Group,
  SimpleGrid,
} from "@mantine/core";
import Link from "next/link";
import NextImage from "next/image";
export default function HomePage() {
  return (
    <Container size="lg">
      <Space h="xl" />
      <Group>
        <Text
          size="xl"
          fw={700}
          variant="gradient"
          gradient={{ from: "blue", to: "cyan", deg: 90 }}
        >
          Developed by ScapBot
        </Text>
      </Group>
      <Title>
        One SEO tool for{" "}
        <Text span c="blue" variant="gradient" fw={900} inherit>
          ALL YOU NEED
        </Text>
      </Title>
      <Space h="xl" />
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
        <Card shadow="lg" padding="xl" radius="md" withBorder>
          <Card.Section>
            <Image
              component={NextImage}
              src="/bg-4.png"
              height={160}
              width={284}
              style={{ width: "100%", height: "auto" }}
              alt="Entity"
              priority
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={700} size="xl">
              Entity
            </Text>
            <Badge color="green">Running</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            Next generation backlink generator. Build high quality link profile
            for your website. No captcha, no proxy, no server...It's so easy
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Get Started
          </Button>
        </Card>
        <Card shadow="lg" padding="xl" radius="md" withBorder>
          <Card.Section>
            <Image
              component={NextImage}
              src="/bg-4.png"
              height={160}
              width={284}
              style={{ width: "100%", height: "auto" }}
              alt="Social"
              priority
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={700} size="xl">
              Social
            </Text>
            <Badge color="orange">Developing</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            Automated social posting for any website. Get social signals to gain
            ranking advantage today. No setup required...It's amazing
          </Text>

          <Button disabled color="blue" fullWidth mt="md" radius="md">
            Join the Waitlist
          </Button>
        </Card>
        <Card shadow="lg" padding="xl" radius="md" withBorder>
          <Card.Section>
            <Image
              component={NextImage}
              src="/bg-4.png"
              height={160}
              width={284}
              style={{ width: "100%", height: "auto" }}
              alt="Indexed"
              priority
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={700} size="xl">
              Indexed
            </Text>
            <Badge color="yellow">Maintenance</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            A powerful reliable backlink indexing system that you can use. It
            always works today, tomorrow even until you stop SEO. LOL...
          </Text>

          <Button disabled color="blue" fullWidth mt="md" radius="md">
            Join the Waitlist
          </Button>
        </Card>
      </SimpleGrid>
      <Space h="xl" />
    </Container>
  );
}
