"use client";

import { useFormStatus } from "react-dom";
import Form from "next/form";

// Fonts
import { dmSans } from "./fonts";

// Components
import SearchInProgress from "./search-in-progress";
import MagnifyingGlassIcon from "./magnifying-glass-icon";

export default function SearchForm() {
  const status = useFormStatus();

  return (
    <Form
      action=""
      className="flex flex-col gap-3 md:flex-row md:gap-4 lg:w-164 lg:m-auto mb-600"
    >
      <div className="grow relative">
        <input
          className={`ps-15 pe-300 py-200 w-full bg-neutral-800 hover:bg-neutral-700 rounded-12 ${dmSans.className} text-neutral-0 text-preset-5 font-medium placeholder:text-neutral-200 placeholder:text-[20px] placeholder:leading-[120%] placeholder:tracking-[0] placeholder:font-medium focus:outline-2 focus:outline-neutral-0 focus:outline-offset-3`}
          type="search"
          name="name"
          placeholder="Search for a place..."
        />
        <MagnifyingGlassIcon className="w-250 h-250 absolute top-1/2 transform -translate-y-1/2 left-6" />
        {status.pending && <SearchInProgress />}
      </div>
      <button
        type="submit"
        className="px-300 py-200 bg-blue-500 hover:bg-blue-700 rounded-12 text-preset-5 font-medium text-neutral-0 focus:outline-2 focus:outline-blue-500 focus:outline-offset-3"
      >
        Search
      </button>
    </Form>
  );
}
