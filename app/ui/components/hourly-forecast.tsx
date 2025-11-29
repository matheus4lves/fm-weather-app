"use client";
import { useState } from "react";

// External libraries
import { format } from "date-fns";

// Fonts
import { dmSans } from "@/ui/fonts";

// Components
import DaysDropdown from "./days-dropdown";
import HourlyForecastCard from "./hourly-forecast-card";

// Types
import { HourlyForecastData } from "@/types";

export default function HourlyForecast({
  hourly: { time, temperature_2m, weather_code },
}: {
  hourly: HourlyForecastData;
}) {
  // For displays the days of the DaysDropdown component
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function rotateWeekdays(startJsDay: number) {
    return [...weekdays.slice(startJsDay), ...weekdays.slice(0, startJsDay)];
  }

  function getSliceForDay(dropDownDayIndex: number) {
    const start = dropDownDayIndex * 24;
    const end = start + 24;

    const times = time
      .slice(start, end)
      .map(time => format(new Date(time), "h a"));
    const temperatures = temperature_2m.slice(start, end);
    const weatherCodes = weather_code.slice(start, end);

    return times.map((time, index) => ({
      time,
      temperature: temperatures[index],
      weatherCode: weatherCodes[index],
    }));
  }

  const startJsDay = new Date(time[0]).getDay();

  const dropdownDays = rotateWeekdays(startJsDay);

  const [weekday, setWeekday] = useState<string>(dropdownDays[0]);

  const hourlyData = getSliceForDay(dropdownDays.indexOf(weekday));

  return (
    <div className="xl2:col-[3/4] xl2:row-[1/3] rounded-20 overflow-hidden">
      <section className="md:max-h-[693px] max-h-[685px] overflow-y-auto custom-scrollbar flex flex-col gap-4 pl-200 pr-150 py-250 md:pl-300 md:pr-250 md:py-300 bg-neutral-800">
        <div className="flex items-center justify-between">
          <p
            className={`${dmSans.className} text-preset-5 font-semibold text-neutral-0`}
          >
            HourlyForecast
          </p>
          <DaysDropdown
            dropdownDays={dropdownDays}
            weekday={weekday}
            setWeekday={setWeekday}
          />
        </div>
        <div className="flex flex-col gap-4">
          {hourlyData.map((hour, index) => (
            <HourlyForecastCard
              key={index}
              time={hour.time}
              temperature={hour.temperature}
              weatherCode={hour.weatherCode}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
