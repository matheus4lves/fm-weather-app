// Fonts
import { dmSans } from "@/ui/fonts";

import DaysDropdown from "./days-dropdown";
import HourlyForecastCard from "./hourly-forecast-card";

export default function HourlyForecast() {
  const weekDays = Array(24).fill(null);

  return (
    <div className="xl2:col-[3/4] xl2:row-[1/3] rounded-20 overflow-hidden">
      <section className="md:max-h-[693px] max-h-[685px] overflow-y-auto custom-scrollbar flex flex-col gap-4 pl-200 pr-150 py-250 md:pl-300 md:pr-250 md:py-300 bg-neutral-800">
        <div className="flex items-center justify-between">
          <p
            className={`${dmSans.className} text-preset-5 font-semibold text-neutral-0`}
          >
            HourlyForecast
          </p>
          <DaysDropdown />
        </div>
        <div className="flex flex-col gap-4">
          {weekDays.map((_day, index) => (
            <div key={index}>
              <HourlyForecastCard />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
