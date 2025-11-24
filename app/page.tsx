"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

// External libraries
import axios from "axios";

// Fonts
import { bricolageGrotesque } from "@/ui/fonts";

// Components
import SearchForm from "@/ui/components/search-form";
import CurrentWeather from "@/ui/components/current-weather";
import DailyForecast from "./ui/components/daily-forecast";
import HourlyForecast from "./ui/components/hourly-forecast";

// Types
import { City, WeatherApiSuccess } from "./types";

export default function Page() {
  const [selectedCity, setSelectedCity] = useState<City>();
  const [weatherData, setWeatherData] = useState<WeatherApiSuccess>();

  const searchParams = useSearchParams();

  useEffect(() => {
    const controller = new AbortController(); // Cancels request on component unmount
    const timeoutSignal = AbortSignal.timeout(5000); // Cancels request on timeout
    const combinedSignal = AbortSignal.any([controller.signal, timeoutSignal]);

    async function getWeatherData() {
      try {
        // Data is either of type WeatherApiSuccess (response.data) or
        // WeatherApiError (error.response.data)
        const { data } = await axios.get(
          `https://api.open-meteo.com/v1/forecast`,
          {
            params: searchParams,
            signal: combinedSignal,
          },
        );

        console.log("Weather data:", data);
        setWeatherData(data);
      } catch (error) {
        // See https://axios-http.com/docs/handling_errors
        if (axios.isAxiosError(error)) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        }
      }
    }

    getWeatherData();

    return () => controller.abort();
  }, [searchParams]);

  return (
    <>
      <h1
        className={`max-w-xs md:max-w-sm lg:max-w-none m-auto text-center ${bricolageGrotesque.className} text-preset-2 text-neutral-0 mb-600`}
      >
        How&apos;s the sky looking today?
      </h1>
      <main className="max-w-[1216px] lg:mx-auto">
        <SearchForm setSelectedCity={setSelectedCity} />
        {selectedCity && weatherData && (
          <div className="grid grid-cols-1 gap-y-8 xl2:grid-cols-3 xl2:grid-rows-[repeat(2,minmax(0,auto))] xl2:gap-x-8 xl2:gap-y-12">
            <CurrentWeather
              selectedCity={selectedCity}
              current={weatherData.current!}
              currentUnits={weatherData.current_units!}
            />
            <DailyForecast daily={weatherData.daily!} />
            <HourlyForecast />
          </div>
        )}
      </main>
    </>
  );
}
