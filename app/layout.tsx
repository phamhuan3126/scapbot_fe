import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import AppHeader from "../components/AppHeader";
import { Notifications } from "@mantine/notifications";

export const metadata = {
  title: "LikePion - Save Your Time",
  description: "Great SEO Tools for You",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon-likepion.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Notifications />
          <AppHeader />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
