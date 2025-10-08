import Link from "next/link";
import { usePathname } from "next/navigation";

// External libraries
import clsx from "clsx";

// Fonts
import { dmSans } from "../fonts";

// Types
import { SearchResultProps } from "@/types";
import { City } from "@/types";

export default function SearchResult({
  cities,
  inputRef,
  isVisible,
  setIsVisible,
  setQuery,
}: SearchResultProps) {
  function handleClick() {
    setIsVisible(false);
    setQuery("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  const pathname = usePathname();

  return (
    <ul
      className={clsx(
        `absolute top-16.5 px-2 py-2 rounded-12 bg-neutral-800 border border-neutral-700 w-full flex flex-col gap-1`,
        !isVisible && "hidden",
      )}
    >
      {cities?.map(city => {
        const searchParams = `latitude=${city.latitude}&longitude=${city.longitude}&daily=temperature_2m_min%2Ctemperature_2m_max&timezone=auto&hourly=temperature_2m&current=temperature_2m%2Crelative_humidity_2m%2Capparent_temperature%2Cwind_speed_10m%2Cprecipitation&temperature_unit=celsius&wind_speed_unit=kmh&precipitation_unit=mm`;

        return (
          <li
            className="rounded-8 hover:bg-neutral-700 border border-neutral-800 hover:border-neutral-600 "
            key={city.id}
          >
            <Link
              onClick={handleClick}
              className={`block px-2 py-2.5 ${dmSans.className} text-preset-7 text-neutral-0 `}
              href={pathname + "?" + searchParams}
            >
              {/* TODO: Add country flag */}
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
