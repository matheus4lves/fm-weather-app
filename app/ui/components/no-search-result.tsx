import { dmSans } from "../fonts";

export default function NoSearchResult() {
  return (
    <p
      className={`absolute top-43 md:top-26 w-full text-preset-4 text-neutral-0 text-center ${dmSans.className}`}
    >
      No search result found!
    </p>
  );
}
