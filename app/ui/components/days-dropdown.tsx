import { useState } from "react";

// External libraries
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

import DropdownIcon from "./icons/dropdown-icon";

// Fonts
import { dmSans } from "../fonts";

export default function DaysDropdown() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [weekday, setWeekday] = useState<string>(days[0]);

  return (
    // <Select className="flex flex-col gap-1">

    <Listbox value={weekday} onChange={setWeekday}>
      <ListboxButton
        className={`flex gap-3 items-center px-200 py-100 rounded-8 bg-neutral-700 ${dmSans.className} text-preset-7 font-medium text-neutral-0`}
      >
        {weekday}
        <DropdownIcon />
      </ListboxButton>
      <ListboxOptions
        anchor={{ to: "bottom end", gap: 10 }}
        className="w-[214px] p-100 rounded-12 bg-neutral-800 border border-neutral-600 flex flex-col gap-1"
      >
        {days.map((day, index) => (
          <ListboxOption
            key={index}
            value={day}
            className="px-100 py-125 rounded-8 bg-neutral-800 hover:bg-neutral-700"
          >
            <span
              className={`${dmSans.className} text-preset-7 font-medium text-neutral-0`}
            >
              {day}
            </span>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}
