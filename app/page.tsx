
// Fonts
import { bricolageGrotesque } from "./fonts";

// Components
import SearchForm from "./search-form";

export default async function Page({

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
