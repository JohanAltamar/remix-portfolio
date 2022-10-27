import { Link } from "@remix-run/react";

// Types
import type { MetaFunction } from "@remix-run/node";

// Layouts
import { Layout } from "~/components/layouts/main-layout";

export const meta: MetaFunction = () => {
  return {
    title: "Johan Altamar - Frontend Developer",
    description: "Freelance frontend developer",
  };
};

export default function Index() {
  return (
    <Layout className="flex flex-col-reverse lg:grid lg:grid-cols-12">
      <article className="flex-1 flex flex-col px-4 lg:px-0 lg:col-start-2 lg:col-span-5 lg:justify-center">
        <h2 className="font-bold leading-tight text-3xl sm:text-4xl lg:text-6xl mt-10 lg:mt-0 mb-6 lg:mb-10 text-center lg:text-left">
          Frontend Developer
        </h2>
        <p className="text-center lg:text-left sm:text-lg text-gray-500 pr-0 mb-8 lg:mb-14 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          tenetur vel quasi ipsum molestiae explicabo, magni incidunt.
        </p>
        <div className="flex items-start justify-center lg:justify-start mb-14 xl:mb-20">
          <Link
            to="/about"
            className="bg-black text-white font-bold p-4 rounded-lg mr-4 xl:mr-8 hover:bg-black/50 transition-all duration-300"
          >
            See more
          </Link>
          <a
            download="JOHAN_ALTAMAR_CV"
            href="/assets/images/image-hero-mobile.png"
            className="font-bold p-4 rounded-lg hover:bg-black/10 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
        <div className="flex justify-evenly mb-10">
          <figure className="h-11 lg:h-14">
            <img
              className="h-full"
              src="/assets/logos/globant.svg"
              alt="globant logo"
            />
          </figure>
          <figure className="h-11 lg:h-14">
            <img
              className="h-full"
              src="/assets/logos/dmed.png"
              alt="disney media and entertainment distribution logo"
            />
          </figure>
        </div>
      </article>
      <figure className="flex items-center lg:col-start-8 lg:col-span-4">
        <img
          className="content-hero-sm lg:content-hero w-full aspect-[133/100] lg:aspect-auto"
          alt="johan profile"
        />
      </figure>
    </Layout>
  );
}
