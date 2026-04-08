// Fonts
import { dmSans } from "@/ui/fonts";

// Components
import LoadingIcon from "./icons/loading-icon";

export default function SearchInProgress() {
  return (
    <div
      className={`col-start-1 col-span-1 absolute left-0 right-0 top-17.5 px-200 py-4.5 bg-neutral-800 rounded-12 border border-neutral-700 flex items-center gap-2.5 ${dmSans.className} text-preset-7 text-neutral-0 z-20`}
    >
      <LoadingIcon />
      <span>Search in progress</span>
    </div>
  );
}
