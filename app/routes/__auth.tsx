import { Outlet } from "@remix-run/react";

// Layouts
import { Layout } from "~/components/layout";

export default function Auth() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
