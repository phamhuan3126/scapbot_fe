"use client";

import { Group, Burger, Image, Button, Anchor } from "@mantine/core";
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
  const [opened, { toggle }] = useDisclosure(false);
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));
  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Anchor href="/">
            <Image
              component={NextImage}
              src={Logo}
              alt="Logo LikePion"
              h={35}
              w="auto"
            />
          </Anchor>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <Button variant="default" component={Link} href="/login">
            Log in
          </Button>
          <Button component={Link} href="/signup">
            Sign up
          </Button>
        </Group>
      </div>
    </header>
  );
}
