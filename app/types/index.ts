import { Dispatch, FormEvent, RefObject, SetStateAction } from "react";

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
}

export interface SearchResultProps {
  cities: City[] | undefined;
  inputRef: RefObject<HTMLInputElement | null>;
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  setQuery: Dispatch<SetStateAction<string>>;
  setSelectedCity: Dispatch<SetStateAction<City | undefined>>;
}

export * from "./geocoding";
export * from "./weather";
