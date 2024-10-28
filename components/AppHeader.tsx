"use client";

import {
  Group,
  Stack,
  Burger,
  Image,
  Button,
  Anchor,
  Avatar,
  Drawer,
  Space,
} from "@mantine/core";
import classes from "./components.module.scss";
import { useDisclosure } from "@mantine/hooks";
import NextImage from "next/image";
import Link from "next/link";
import Logo from "/public/logo-likepion.svg";

const links = [
  { link: "/about", label: "Features" },
  { link: "/pricing", label: "Pricing" },
  { link: "/docs", label: "API Docs" },
  { link: "/community", label: "Community" },
];

export default function AppHeader() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => {
        event.preventDefault(); // Ngăn chuyển trang khi bấm (tạm thời)
        close(); // Đóng Drawer
      }}
    >
      {link.label}
    </a>
  ));
  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="md" />
          <Drawer opened={opened} onClose={close} padding="md" size="xs">
            {items}
            <Space h="md" />
            <Stack>
              <Button
                variant="default"
                component={Link}
                href="/login"
                onClick={close}
              >
                Log in
              </Button>
              <Button component={Link} href="/signup" onClick={close}>
                Sign up
              </Button>
            </Stack>
          </Drawer>
          <Anchor component={Link} href="/">
            <Image
              visibleFrom="md"
              component={NextImage}
              src={Logo}
              alt="Logo LikePion"
              h={35}
              w="auto"
              priority
            />
            <Image
              hiddenFrom="md"
              component={NextImage}
              src={Logo}
              alt="Logo LikePion"
              h={28}
              w="auto"
              priority
            />
          </Anchor>
        </Group>
        <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
          {items}
        </Group>
        <Group>
          <Button visibleFrom="md" variant="default" component={Link} href="/login">
            Log in
          </Button>
          <Button visibleFrom="md" component={Link} href="/signup">
            Sign up
          </Button>
          <Avatar hiddenFrom="md" radius="xl" />
        </Group>
      </div>
    </header>
  );
}
