import { Dispatch, FormEvent, RefObject, SetStateAction } from "react";

import { CurrentWeatherData, CurrentWeatherUnits } from "./weather";
import { City } from "./geocoding";

export interface SearchFormProps {
  isVisible: boolean;
  query: string;
  result: City[] | undefined;
  submitted: boolean;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  setQuery: Dispatch<SetStateAction<string>>;
  setSelectedCity: Dispatch<SetStateAction<City | undefined>>;
export interface CurrentWeatherProps {
  city: City;
  current: CurrentWeatherData;
  currentUnits: CurrentWeatherUnits;
}

export interface HourlyForecastCardProps {
  time: string;
  temperature: number;
  weatherCode: number;
}

export interface SearchResultProps {
  cities: City[] | undefined;
  inputRef: RefObject<HTMLInputElement | null>;
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  setQuery: Dispatch<SetStateAction<string>>;
  setSelectedCity: Dispatch<SetStateAction<City | undefined>>;
export interface DaysDropdownProps {
  dropdownDays: string[];
  weekday: string;
  setWeekday: Dispatch<SetStateAction<string>>;
}
}

export * from "./geocoding";
export * from "./weather";
