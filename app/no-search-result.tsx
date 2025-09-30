import { dmSans } from "./fonts";

export default function NoSearchResult() {
  return (
    <p
      className={`text-preset-4 text-neutral-0 text-center ${dmSans.className}`}
    >
      No search result found!
    </p>
  );
}
