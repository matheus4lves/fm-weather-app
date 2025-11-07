import Image from "next/image";
import { getImageProps } from "next/image";

// Fonts
import { dmSans, dmSansItalic600 } from "../fonts";

// Types
import { City, CurrentWeatherData, CurrentWeatherUnits } from "@/types";

export default function CurrentWeather({
  selectedCity,
  current,
  currentUnits,
}: {
  selectedCity: City | undefined;
  current: CurrentWeatherData | undefined;
  currentUnits: CurrentWeatherUnits | undefined;
}) {
  const common = {
    alt: "An illustration of a night sky with some clouds and stars.",
  };

  const { props: phoneProps } = getImageProps({
    ...common,
    src: "/images/bg-today-small.svg",
    width: 343,
    height: 286,
  });

  const { props: tabletAndDesktopProps } = getImageProps({
    ...common,
    src: "/images/bg-today-large.svg",
    width: 800,
    height: 286,
  });

  return (
    <section className="flex flex-col gap-5">
      {/* Temperature */}
      <div className="relative h-[286px] rounded-20 overflow-hidden">
        {/* See https://nextjs.org/docs/app/api-reference/components/image#background-image */}
        <Image
          {...phoneProps}
          className="w-full h-full object-cover object-center md:hidden"
        />
        <Image
          {...tabletAndDesktopProps}
          className="w-full h-full object-cover object-center hidden md:block"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col md:flex-row md:justify-between md:px-300 items-center gap-4">
          <div>
            <p
              className={`${dmSans.className} font-bold text-preset-4 text-neutral-0 text-center mb-150`}
            >
              Berlin, Germany
            </p>
            <p
              className={`${dmSans.className} font-medium text-preset-6 text-neutral-0 opacity-80 text-center`}
            >
              Tuesday, Aug 5, 2025
            </p>
          </div>
          <div className="flex items-center gap-5">
            <Image
              className="w-[120] h-[120]"
              src="/images/icon-sunny.webp"
              alt="Sunny icon."
              width={320}
              height={320}
            />
            <span
              className={`${dmSansItalic600.className} text-preset-1 text-neutral-0`}
            >
              68&deg;
            </span>
          </div>
        </div>
      </div>
      {/* Details */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
        {/* Feels like */}
        <div className="px-250 py-250 rounded-12 bg-neutral-800 ">
          <p
            className={`${dmSans.className} text-preset-6 font-medium text-neutral-200 mb-300`}
          >
            Feels Like
          </p>
          <p
            className={`${dmSans.className} text-preset-3 font-light text-neutral-0`}
          >
            64&deg;
          </p>
        </div>
        {/* Humidity */}
        <div className="px-250 py-250 rounded-12 bg-neutral-800 ">
          <p
            className={`${dmSans.className} text-preset-6 font-medium text-neutral-200 mb-300`}
          >
            Humidity
          </p>
          <p
            className={`${dmSans.className} text-preset-3 font-light text-neutral-0`}
          >
            46%
          </p>
        </div>
        {/* Wind */}
        <div className="px-250 py-250 rounded-12 bg-neutral-800 ">
          <p
            className={`${dmSans.className} text-preset-6 font-medium text-neutral-200 mb-300`}
          >
            Wind
          </p>
          <p
            className={`${dmSans.className} text-preset-3 font-light text-neutral-0`}
          >
            9 mph
          </p>
        </div>
        {/* Precipitation */}
        <div className="px-250 py-250 rounded-12 bg-neutral-800 ">
          <p
            className={`${dmSans.className} text-preset-6 font-medium text-neutral-200 mb-300`}
          >
            Precipitation
          </p>
          <p
            className={`${dmSans.className} text-preset-3 font-light text-neutral-0`}
          >
            0 in
          </p>
        </div>
      </div>
    </section>
  );
}
