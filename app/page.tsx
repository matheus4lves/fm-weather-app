// External libraries
import axios from "axios";

// Fonts
import { bricolageGrotesque } from "@/ui/fonts";

// Components
import SearchForm from "@/ui/components/search-form";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  try {
    const params = await searchParams;
    const { data } = await axios.get(`https://api.open-meteo.com/v1/forecast`, {
      params,
    });
    console.log(data);
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
    </>
  );
}
