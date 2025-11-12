import Image from "next/image";

// Fonts
import { dmSans } from "../fonts";

export default function DailyForecast() {
  const dailyForecast = [
    {
      day: "Tue",
      src: "/images/icon-rain.webp",
      maxTemperature: 68,
      minTemperature: 57,
    },
    {
      day: "Wed",
      src: "/images/icon-drizzle.webp",
      maxTemperature: 70,
      minTemperature: 69,
    },
    {
      day: "Thu",
      src: "/images/icon-sunny.webp",
      maxTemperature: 75,
      minTemperature: 57,
    },
    {
      day: "Fri",
      src: "/images/icon-partly-cloudy.webp",
      maxTemperature: 77,
      minTemperature: 55,
    },
    {
      day: "Sat",
      src: "/images/icon-storm.webp",
      maxTemperature: 68,
      minTemperature: 57,
    },
    {
      day: "Sun",
      src: "/images/icon-snow.webp",
      maxTemperature: 77,
      minTemperature: 61,
    },
    {
      day: "Mon",
      src: "/images/icon-rain.webp",
      maxTemperature: 75,
      minTemperature: 59,
    },
  ];

  return (
    <section>
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
              {day.day}
            </p>
            <Image
              className="w-[60px] h-[60px] self-center"
              src={day.src}
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
