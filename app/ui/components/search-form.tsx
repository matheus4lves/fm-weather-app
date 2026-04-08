"use client";

// Fonts
import { dmSans } from "@/ui/fonts";

// Components
import MagnifyingGlassIcon from "./icons/magnifying-glass-icon";
import SearchResult from "./search-result";

// Types
import { SearchFormProps } from "@/types";

export default function SearchForm({
  setCity,
  searchResults,
  setSearchResults,
  inputRef,
  query,
  setQuery,
  handleSubmit,
}: SearchFormProps) {
  return (
    <form
      action={handleSubmit}
      className="relative grid grid-cols-1 gap-3 md:grid-cols-[_1fr_auto] md:gap-4 lg:w-164 lg:mx-auto mb-600"
    >
      <div className="relative">
        <input
          onChange={e => setQuery(e.target.value)}
          className={`ps-15 pe-300 py-200 w-full bg-neutral-800 hover:bg-neutral-700 rounded-12 ${dmSans.className} text-neutral-0 text-preset-5 font-medium placeholder:text-neutral-200 placeholder:text-[20px] placeholder:leading-[120%] placeholder:tracking-[0] placeholder:font-medium focus:outline-2 focus:outline-neutral-0 focus:outline-offset-3 cursor-pointer`}
          type="search"
          name="name"
          value={query}
          placeholder="Search for a place..."
          ref={inputRef}
        />
        <MagnifyingGlassIcon className="w-250 h-250 absolute top-1/2 transform -translate-y-1/2 left-6" />
      </div>
      <button
        type="submit"
        className="px-300 py-200 bg-blue-500 hover:bg-blue-700 rounded-12 text-preset-5 font-medium text-neutral-0 focus:outline-2 focus:outline-blue-500 focus:outline-offset-3 cursor-pointer"
      >
        Search
      </button>
      <SearchResult
        inputRef={inputRef}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        setQuery={setQuery}
        setCity={setCity}
      />
    </form>
  );
}
