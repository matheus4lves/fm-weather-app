// External libraries
import axios from "axios";

// Fonts
import { bricolageGrotesque } from "./fonts";

// Components
import SearchForm from "./search-form";
import NoSearchResult from "./no-search-result";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  let cities;

  try {
    const params = await searchParams;

    const response = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search`,
      {
        params,
      },
    );

    // `cities` is either `undefined` or a non-empty array of city objects
    cities = response.data.results;
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <h1
        className={`max-w-xs md:max-w-sm lg:max-w-none m-auto text-center ${bricolageGrotesque.className} text-preset-2 text-neutral-0 mb-600`}
      >
        How&apos;s the sky looking today?
      </h1>
      <SearchForm />
      {!cities && <NoSearchResult />}
    </>
  );
}
