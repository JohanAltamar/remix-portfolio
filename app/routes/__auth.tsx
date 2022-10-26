import { Outlet } from "@remix-run/react";

// Layouts
import { Layout } from "~/components/layouts/auth-layout";

export default function Auth() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
