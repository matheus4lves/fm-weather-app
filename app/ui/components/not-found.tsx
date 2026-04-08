import { dmSans } from "@/ui/fonts";

export default function NotFound() {
  return (
    <p
      className={`col-span-full absolute left-0 right-0 top-43 md:top-26 text-preset-4 text-neutral-0 text-center ${dmSans.className}`}
    >
      No search result found!
    </p>
  );
}
