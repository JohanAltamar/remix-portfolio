import { Link } from "@remix-run/react";
import { useState } from "react";

// Components
import { FormField } from "~/components/form-field";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };

  return (
    <div className="h-full justify-center items-center flex flex-col gap-y-4">
      <h2 className="text-5xl text-center font-extrabold text-yellow-300">
        Welcome to <br /> JohanAltamar.com!
      </h2>
      <p className="font-semibold text-slate-300">Sign Up To Get Started!</p>

      <form method="post" className="rounded-2xl bg-gray-200 p-6 w-96">
        <FormField
          htmlFor="email"
          label="Email"
          value={formData.email}
          onChange={(e) => handleInputChange(e, "email")}
        />
        <FormField
          htmlFor="password"
          type="password"
          label="Password"
          value={formData.password}
          onChange={(e) => handleInputChange(e, "password")}
        />
        <FormField
          htmlFor="firstName"
          label="First Name"
          onChange={(e) => handleInputChange(e, "firstName")}
          value={formData.firstName}
        />
        <FormField
          htmlFor="lastName"
          label="Last Name"
          onChange={(e) => handleInputChange(e, "lastName")}
          value={formData.lastName}
        />
        <Link prefetch="intent" to="/login">
          Already registered? Log in here
        </Link>

        <div className="w-full text-center">
          <button className="rounded-xl mt-2 bg-yellow-300 px-3 py-2 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
