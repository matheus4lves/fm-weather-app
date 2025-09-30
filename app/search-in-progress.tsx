import Image from "next/image";
import { dmSans } from "./fonts";

export default function SearchInProgress() {
  return (
    <div
      className={`absolute top-17.5 w-full px-200 py-4.5 bg-neutral-800 rounded-12 border border-neutral-700 flex items-center gap-2.5 ${dmSans.className} text-preset-7 text-neutral-0`}
    >
      <Image
        src="/images/icon-loading.svg"
        alt="Loading icon."
        width={16}
        height={16}
      />
      <span>Search in progress</span>
    </div>
  );
}
