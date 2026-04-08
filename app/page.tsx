"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "next/navigation";

// External libraries
import axios from "axios";

// Fonts
import { bricolageGrotesque } from "@/ui/fonts";

// Components
import SearchForm from "@/ui/components/search-form";
import CurrentWeather from "@/ui/components/current-weather";
import DailyForecast from "@/ui/components/daily-forecast";
import HourlyForecast from "@/ui/components/hourly-forecast";

// Types
import {
  City,
  WeatherForecastApiResponse,
  GeocodingApiResponse,
} from "@/types";

export default function Home() {
  const [searchResults, setSearchResults] = useState<City[] | null>(null);
  const [city, setCity] = useState<City | null>(null);
  const [weatherData, setWeatherData] =
    useState<WeatherForecastApiResponse | null>(null);
  const [query, setQuery] = useState("");
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSearch(query: string) {

    try {
      const response = await axios.get<GeocodingApiResponse>(
        `https://geocoding-api.open-meteo.com/v1/search?name=${query}`,
      );
      if (response.data.results) {
        const cities = await addFlagsToCities(response.data.results);

        setSearchResults(await Promise.all(cities));
      } else if (!response.data.results) {
        setSearchResults([]);
        setWeatherData(null);
        setQuery("");

        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error.response.data);
      } else {
        console.error(error);
      }
    }
  }

  async function addFlagsToCities(cities: City[]) {
    return cities.map(async (city: City) => {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${city.country_code}?fields=flags`,
      );

      const {
        flags: { svg, alt },
      } = response.data;

      return { ...city, countryFlagURL: svg, countryFlagAlt: alt };
    });
  }

  async function handleSubmit(formData: FormData) {
    const queryValue = formData.get("name") as string;
    await handleSearch(queryValue);
  }
  const fetchWeather = useCallback(
    async (signal?: AbortSignal) => {

      try {
        const response = await axios.get<WeatherForecastApiResponse>(
          `https://api.open-meteo.com/v1/forecast`,
          {
            params: searchParams,
            signal,
          },
        );

        setWeatherData(response.data);
      } catch (error) {
        if (axios.isCancel(error)) return;

        if (axios.isAxiosError(error) && error.response) {
          console.log(error.response.data);
        } else {
          console.error(error);
        }
      }
    },
    [searchParams],
  );

  useEffect(() => {
    // Guard: Only fetch weather if the URL has coordinates
    const latitude = searchParams.get("latitude");
    const longitude = searchParams.get("longitude");

    if (!latitude || !longitude) return;

    const controller = new AbortController();
    const timeoutSignal = AbortSignal.timeout(5000);
    const combinedSignal = AbortSignal.any([controller.signal, timeoutSignal]);

    fetchWeather(combinedSignal);

    return () => controller.abort();
  }, [fetchWeather, searchParams]);


  return (
    <>
      <h1
        className={`max-w-xs md:max-w-sm lg:max-w-none m-auto text-center ${bricolageGrotesque.className} text-preset-2 text-neutral-0 mb-600`}
      >
        How&apos;s the sky looking today?
      </h1>
      <main className="max-w-[1216px] lg:mx-auto">
        <SearchForm
          setCity={setCity}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          inputRef={inputRef}
          query={query}
          setQuery={setQuery}
          handleSubmit={handleSubmit}
        />
        {city && weatherData && (
          <div className="grid grid-cols-1 gap-y-8 xl2:grid-cols-3 xl2:grid-rows-[repeat(2,minmax(0,auto))] xl2:gap-x-8 xl2:gap-y-12">
            <CurrentWeather
              city={city}
              current={weatherData.current!}
              currentUnits={weatherData.current_units!}
            />
            <DailyForecast daily={weatherData.daily!} />
            <HourlyForecast hourly={weatherData.hourly!} />
          </div>
        )}
      </main>
    </>
  );
}
