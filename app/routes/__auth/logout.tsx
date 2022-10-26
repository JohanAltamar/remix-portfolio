import { redirect } from "@remix-run/node";

import { getUser, logout } from "~/utils/auth.server";

// Types
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  return (await getUser(request)) ? logout(request) : redirect("/login");
};

export default function Logout() {
  return (
    <div className="h-full justify-center items-center flex flex-col gap-y-4">
      <h2 className="text-5xl text-center font-extrabold text-yellow-300">
        You'll be redirected to the login page!
      </h2>
    </div>
  );
}
