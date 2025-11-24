import Image from "next/image";
import { getWeatherIconSrc } from "@/lib/weather";

// External libraries
import { format } from "date-fns";

// Fonts
import { dmSans } from "../fonts";

// Types
import { DailyForecastData } from "@/types";

export default function DailyForecast({ daily }: { daily: DailyForecastData }) {
  const dailyForecast: {
    maxTemperature: number;
    minTemperature: number;
    weekDay: string;
    weatherCode: number;
  }[] = daily.time.map((time, index) => ({
    weekDay: format(new Date(time), "iii"),
    maxTemperature: daily.temperature_2m_max[index],
    minTemperature: daily.temperature_2m_min[index],
    weatherCode: daily.weather_code[index],
  }));

  return (
    <section className="xl2:col-[1/3] xl2:row-[2/3]">
      <h2
        className={`${dmSans.className} text-preset-5 font-semibold text-neutral-0 mb-250`}
      >
        Daily forecast
      </h2>
      {/* No spaces are allowed in the value, so `repeat(auto-fit, minmax(100px, 1fr)` won't work */}
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(100px,1fr))]">
        {dailyForecast.map((day, index) => (
          <div
            key={index}
            className="bg-neutral-800 rounded-12 border border-neutral-600 px-125 py-200 flex flex-col gap-4"
          >
            <p
              className={`${dmSans.className} text-preset-6 font-medium text-neutral-0 text-center`}
            >
              {day.weekDay}
            </p>
            <Image
              className="w-[60px] h-[60px] self-center"
              src={getWeatherIconSrc(day.weatherCode)}
              alt="Rain icon."
              width={320}
              height={320}
            />
            <p className="flex justify-between">
              <span
                className={`${dmSans.className} text-preset-7 font-medium text-neutral-0`}
              >
                {day.maxTemperature}&deg;
              </span>
              <span
                className={`${dmSans.className} text-preset-7 font-medium text-neutral-0`}
              >
                {day.minTemperature}&deg;
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
