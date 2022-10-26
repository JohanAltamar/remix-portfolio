import type { MetaFunction } from "@remix-run/node"; // or cloudflare/deno
import { Layout } from "~/components/layouts/main-layout";

export const meta: MetaFunction = () => {
  return {
    title: "Johan Altamar - Frontend Developer",
    description: "Freelance frontend developer",
  };
};

export default function Index() {
  return (
    <Layout>
      <div className="h-screen bg-gray-200 flex justify-center items-center">
        <h2 className="text-blue-600 font-extrabold text-5xl">
          This is a remix and TailwindCSS project!
        </h2>
      </div>
    </Layout>
  );
}
