import Link from "next/link";

// External libraries
import clsx from "clsx";

// Fonts
import { dmSans } from "./fonts";
import { Dispatch, RefObject, SetStateAction } from "react";

type SearchResultProps = {
  cities: {
    admin1: string;
    country: string;
    country_code: string;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
  }[];
  isVisible: boolean;
  setQuery: Dispatch<SetStateAction<string>>;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  inputRef: RefObject<HTMLInputElement | null>;
};

export default function SearchResult({
  cities,
  isVisible,
  setIsVisible,
  setQuery,
  inputRef,
}: SearchResultProps) {
  function handleClick() {
    setIsVisible(false);
    setQuery("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <ul
      className={clsx(
        `absolute top-16.5 px-2 py-2 rounded-12 bg-neutral-800 border border-neutral-700 w-full flex flex-col gap-1`,
        !isVisible && "hidden",
      )}
    >
      {cities.map(city => (
        <li
          className="px-2 py-2.5 rounded-8 hover:bg-neutral-700 border border-neutral-800 hover:border-neutral-600"
          key={city.id}
        >
          <Link
            onClick={handleClick}
            className={`${dmSans.className} text-preset-7 text-neutral-0`}
            href={`/?latitude=${city.latitude}&longitude=${city.longitude}`}
          >
            {/* TODO: Add country flag */}
            <span>
              {city.name}, {city.admin1}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
