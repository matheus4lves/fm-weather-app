"use client";

import Image from "next/image";

// Fonts
import { bricolageGrotesque, dmSans } from "@/ui/fonts";

// Types
import { ApiErrorProps } from "@/types";

export default function ApiError({ onRetry }: ApiErrorProps) {
  return (
    <main className="flex flex-col gap-6 items-center text-center mt-500">
      <Image
        className="w-500 h-500"
        src="/images/icon-error.svg"
        alt="Error icon."
        width={18}
        height={18}
      />
      <h1
        className={`${bricolageGrotesque.className} text-preset-2 text-neutral-0`}
      >
        Something went wrong
      </h1>
      <p
        className={`${dmSans.className} text-preset-5 font-medium text-neutral-200`}
      >
        We couldn&apos;t connect to the server (API error). Please try again in
        a few moments.
      </p>
      <button
        className={`${dmSans.className} text-preset-7 text-neutral-0 px-150 py-125 rounded-8 bg-neutral-800 flex items-center gap-2.5 cursor-pointer`}
        onClick={() => onRetry()}
      >
        <Image
          src="/images/icon-retry.svg"
          alt="Retry icon."
          width={16}
          height={17}
        />
        <span>Retry</span>
      </button>
    </main>
  );
}
