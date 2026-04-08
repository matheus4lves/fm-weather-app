import {
  City,
  BaseSearchProps,
  SearchFormProps,
  SearchResultProps,
} from "@/types";

export const createMockCity = (overrides?: Partial<City>) => ({
  admin1: "Santa Catarina",
  country: "Brazil",
  country_code: "BR",
  id: 3469034,
  latitude: -26.99056,
  longitude: -48.63472,
  name: "Balneário Camboriú",
  countryFlagURL: "https://flagcdn.com/br.svg",
  countryFlagAlt:
    "The flag of Brazil has a green field with a large yellow rhombus in the center. Within the rhombus is a dark blue globe with twenty-seven small five-pointed white stars depicting a starry sky and a thin white convex horizontal band inscribed with the national motto 'Ordem e Progresso' across its center.",
  ...overrides,
});

const createBaseSearchProps = (): BaseSearchProps => ({
  inputRef: { current: null },
  searchResults: null,
  setSearchResults: jest.fn(),
  setCity: jest.fn(),
  setQuery: jest.fn(),
});

export const defaultSearchFormProps: SearchFormProps = {
  ...createBaseSearchProps(),
  query: "",
  handleSubmit: jest.fn(),
};

export const defaultSearchResultsProps: SearchResultProps = {
  ...createBaseSearchProps(),
};
