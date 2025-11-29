import Image from "next/image";

// Fonts
import { dmSans } from "../fonts";

// Lib
import { getWeatherIconSrc } from "@/lib/weather";

// Types
import { HourlyForecastCardProps } from "@/types";

export default function HourlyForecastCard({
  time,
  temperature,
  weatherCode,
}: HourlyForecastCardProps) {
  return (
    <div className="pt-125 pr-200 pb-125 pl-150 rounded-8 bg-neutral-700 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image
          className="w-[40px] h-[40px]"
          src={getWeatherIconSrc(weatherCode)}
          width={320}
          height={320}
          alt=""
        />
        <span
          className={`${dmSans.className} text-preset-5 font-medium text-neutral-0`}
        >
          {time}
        </span>
      </div>
      <span
        className={`${dmSans.className} text-preset-7 font-medium text-neutral-0`}
      >
        {temperature}&deg;
      </span>
    </div>
  );
}
