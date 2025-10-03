"use client";

import { FormEvent, useState, useRef } from "react";
import { useFormStatus } from "react-dom";

// External libraries
import axios from "axios";

// Fonts
import { dmSans } from "./fonts";

// Components
import SearchInProgress from "./search-in-progress";
import MagnifyingGlassIcon from "./magnifying-glass-icon";
import SearchResult from "./search-result";
import NoSearchResult from "./no-search-result";

type Cities = {
  admin1: string;
  country: string;
  country_code: string;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}[];

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Cities>();
  const [isVisible, setIsVisible] = useState(true);
  const status = useFormStatus();
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${query}`,
      );

      // `response.data.results` is either a non-empty array or undefined
      // See: https://open-meteo.com/en/docs/geocoding-api#api_documentation
      setResult(response.data.results);
      setIsVisible(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={event => handleSubmit(event)}
      action=""
      className="relative flex flex-col gap-3 md:flex-row md:gap-4 lg:w-164 lg:m-auto mb-600"
    >
      <div className="grow relative">
        <input
          onChange={event => setQuery(event.target.value)}
          className={`ps-15 pe-300 py-200 w-full bg-neutral-800 hover:bg-neutral-700 rounded-12 ${dmSans.className} text-neutral-0 text-preset-5 font-medium placeholder:text-neutral-200 placeholder:text-[20px] placeholder:leading-[120%] placeholder:tracking-[0] placeholder:font-medium focus:outline-2 focus:outline-neutral-0 focus:outline-offset-3`}
          type="search"
          name="name"
          value={query}
          placeholder="Search for a place..."
          ref={inputRef}
        />
        <MagnifyingGlassIcon className="w-250 h-250 absolute top-1/2 transform -translate-y-1/2 left-6" />
        {status.pending && <SearchInProgress />}
        {result && (
          <SearchResult
            cities={result}
            setQuery={setQuery}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            inputRef={inputRef}
          />
        )}
      </div>
      <button
        type="submit"
        className="px-300 py-200 bg-blue-500 hover:bg-blue-700 rounded-12 text-preset-5 font-medium text-neutral-0 focus:outline-2 focus:outline-blue-500 focus:outline-offset-3"
      >
        Search
      </button>
      {!result && <NoSearchResult />}
    </form>
  );
}
