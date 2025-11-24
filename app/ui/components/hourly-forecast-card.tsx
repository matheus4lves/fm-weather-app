import Image from "next/image";
import { dmSans } from "../fonts";

export default function HourlyForecastCard() {
  return (
    <div className="pt-125 pr-200 pb-125 pl-150 rounded-8 bg-neutral-700 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image
          className="w-[40px] h-[40px]"
          src="/images/icon-drizzle.webp"
          width={320}
          height={320}
          alt=""
        />
        <span
          className={`${dmSans.className} text-preset-5 font-medium text-neutral-0`}
        >
          2 PM
        </span>
      </div>
      <span
        className={`${dmSans.className} text-preset-7 font-medium text-neutral-0`}
      >
        22°
      </span>
    </div>
  );
}
