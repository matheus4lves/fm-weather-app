import Form from "next/form";
import Image from "next/image";
import { bricolageGrotesque, dmSans } from "./fonts";

export default function Home() {
  return (
    <>
      <h1
        className={`max-w-xs md:max-w-sm lg:max-w-none m-auto text-center ${bricolageGrotesque.className} text-preset-2 text-neutral-0 mb-600`}
      >
        How&apos;s the sky looking today?
      </h1>
      <Form
        action="/"
        className="flex flex-col gap-3 md:flex-row md:gap-4 lg:w-164 lg:m-auto mb-150"
      >
        <div className="grow relative">
          <input
            className={`ps-15 pe-300 py-200 w-full bg-neutral-800 hover:bg-neutral-700 rounded-12 ${dmSans.className} text-neutral-0 text-preset-5 font-medium placeholder:text-neutral-200 placeholder:text-[20px] placeholder:leading-[120%] placeholder:tracking-[0] placeholder:font-medium focus:outline-2 focus:outline-neutral-0 focus:outline-offset-3`}
            type="search"
            name="location"
            placeholder="Search for a place..."
          />
          <Image
            className="w-250 h-250 absolute top-1/2 transform -translate-y-1/2 left-6"
            src="/images/icon-search.svg"
            alt="Magnifying glass icon."
            width={21}
            height={21}
          />
        </div>
        <button className="px-300 py-200 bg-blue-500 hover:bg-blue-700 rounded-12 text-preset-5 font-medium text-neutral-0 focus:outline-2 focus:outline-blue-500 focus:outline-offset-3">
          Search
        </button>
      </Form>
    </>
  );
}
