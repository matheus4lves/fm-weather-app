import { Dispatch, RefObject, SetStateAction } from "react";
import { CurrentWeatherData, CurrentWeatherUnits } from "./weather";
import { City } from "./geocoding";

export interface BaseSearchProps {
  inputRef: RefObject<HTMLInputElement | null>;
  searchResults: City[] | null;
  setSearchResults: Dispatch<SetStateAction<City[] | null>>;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  setCity: Dispatch<SetStateAction<City | null>>;
}

export interface SearchFormProps extends BaseSearchProps {
  handleSubmit: (formData: FormData) => Promise<void>;
}

export type SearchResultProps = BaseSearchProps;

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

export interface DaysDropdownProps {
  dropdownDays: string[];
  weekday: string;
  setWeekday: Dispatch<SetStateAction<string>>;
}

export interface ApiErrorProps {
  onRetry: () => void;
}

export * from "./geocoding";
export * from "./weather";
export * from "./query";
export * from "./toast";
