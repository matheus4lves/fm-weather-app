import { useFormStatus } from "react-dom";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Fonts
import { dmSans } from "@/ui/fonts";

// Components
import SearchInProgress from "./search-in-progress";
import NotFound from "./not-found";

// Types
import { SearchResultProps, City } from "@/types";

export default function SearchResult({
  inputRef,
  searchResults,
  setSearchResults,
  setQuery,
  setCity,
}: SearchResultProps) {
  const status = useFormStatus();
  const pathname = usePathname();

  function handleClick(city: City) {
    setCity(city);
    setSearchResults(null);
    setQuery("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  if (status.pending) {
    return <SearchInProgress />;
  }

  if (searchResults && searchResults.length === 0) {
    return <NotFound />;
  }

  if (searchResults && searchResults.length > 0) {
    return (
      <ul className="col-start-1 col-span-1 absolute left-0 right-0 top-17.5 px-2 py-2 rounded-12 bg-neutral-800 border border-neutral-700 flex flex-col gap-1 z-10">
        {searchResults?.map(city => {
          const searchParams = `latitude=${city.latitude}&longitude=${city.longitude}&timezone=auto&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m&temperature_unit=celsius&wind_speed_unit=kmh&precipitation_unit=mm`;

          return (
            <li
              className="rounded-8 hover:bg-neutral-700 border border-neutral-800 hover:border-neutral-600 "
              key={city.id}
            >
              <Link
                onClick={() => handleClick(city)}
                className={`block px-2 py-2.5 ${dmSans.className} text-preset-7 text-neutral-0 flex gap-4 items-center`}
                href={pathname + "?" + searchParams}
              >
                {city.countryFlagURL ? (
                  <div className="relative w-400 h-400 rounded-full overflow-hidden">
                    <Image
                      objectFit="cover"
                      src={city.countryFlagURL}
                      alt="" // replace with city.countryFlagAlt
                      fill={true}
                    />
                  </div>
                ) : (
                  // To test the fallback, render it outside of the ternary operator
                  <div className="w-400 h-400 rounded-full overflow-hidden bg-neutral-700 border border-neutral-600 text-center leading-8">
                    {city.country_code}
                  </div>
                )}
                <span>
                  {city.name + `${city.admin1 ? ", " + city.admin1 : ""}`}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return null;
}
