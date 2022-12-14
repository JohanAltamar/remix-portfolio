import type {
  MetaFunction,
  LinksFunction,
  LoaderFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { Navbar } from "./components/navbar";

import styles from "./styles/app.css";
import { getUser } from "./utils/auth.server";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
  "google-site-verification": "59QbTyly9xoEFuFLWsC6swG_IAmr6DnDu-gOXhbvc0Q",
});

export const loader: LoaderFunction = async ({ request }) => {
  return Boolean(await getUser(request));
};

export default function App() {
  const isUserAuthenticated = useLoaderData();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col h-screen">
        <Navbar isUserAuthenticated={isUserAuthenticated} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
