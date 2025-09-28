"use client";

import Image from "next/image";
import { dmSans } from "./fonts";

import {
  Menu,
  MenuButton,
  MenuHeading,
  MenuItem,
  MenuItems,
  MenuSection,
  MenuSeparator,
} from "@headlessui/react";

export default function UnitsDropdown() {
  return (
    <Menu>
      <MenuButton className="bg-neutral-800 hover:bg-neutral-700 focus:outline-2 focus:outline-neutral-0 focus:outline-offset-3 px-125 py-100 rounded-6 flex items-center gap-1.5">
        <Image
          className="w-3.5 h-3.5"
          src="/images/icon-units.svg"
          alt="Gear icon."
          width={16}
          height={16}
        />
        <span
          className={`${dmSans.className} font-medium text-preset-8 text-neutral-0`}
        >
          Units
        </span>
        <Image
          className="w-2.25 h-3.5"
          src="/images/icon-dropdown.svg"
          alt="Dropdown icon."
          width={13}
          height={8}
        />
      </MenuButton>
      <MenuItems
        anchor="bottom end"
        className={`[--anchor-gap:10px] text-preset-7 text-neutral-0 ${dmSans.className} font-medium bg-neutral-800 rounded-12 px-100 py-075 flex flex-col w-53.5 `}
      >
        <MenuItem>
          <button className="px-100 py-125 mb-050 rounded-8 w-full text-start hover:bg-neutral-700 focus:outline-1 focus:outline-neutral-0 focus:outline-offset-1">
            Switch to Imperial
          </button>
        </MenuItem>

        {/* Temperature  */}
        <MenuSection className="flex flex-col">
          <MenuHeading
            className={`text-preset-8 text-neutral-300 px-100 pt-075 mb-100`}
          >
            Temperature
          </MenuHeading>
          <MenuItem>
            <button
              className={` rounded-8 px-100 py-125 mb-050 w-full flex justify-between hover:bg-neutral-700 focus:outline-1 focus:outline-neutral-0 focus:outline-offset-1`}
            >
              <span>Celsius (&deg;C)</span>
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className={`rounded-8 px-100 py-125 mb-050 w-full flex justify-between hover:bg-neutral-700 focus:outline-1 focus:outline-neutral-0 focus:outline-offset-1`}
            >
              <span>Fahrenheit (&deg;F)</span>
            </button>
          </MenuItem>
        </MenuSection>

        <MenuSeparator className="bg-neutral-600 h-px mb-050" />

        {/* Wind speed */}
        <MenuSection className="flex flex-col">
          <MenuHeading
            className={`text-preset-8 text-neutral-300 px-100 pt-075 mb-100`}
          >
            Wind Speed
          </MenuHeading>
          <MenuItem>
            <button
              className={`rounded-8 px-100 py-125 mb-050 w-full flex justify-between hover:bg-neutral-700 focus:outline-1 focus:outline-neutral-0 focus:outline-offset-1`}
            >
              <span>km/h</span>
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className={`rounded-8 px-100 py-125 mb-050 w-full flex justify-between hover:bg-neutral-700 focus:outline-1 focus:outline-neutral-0 focus:outline-offset-1`}
            >
              <span>mph</span>
            </button>
          </MenuItem>
        </MenuSection>

        <MenuSeparator className="bg-neutral-600 h-px mb-050" />

        {/* Precipitation */}
        <MenuSection className="flex flex-col items-start">
          <MenuHeading
            className={`text-preset-8 text-neutral-300 px-100 pt-075 mb-100`}
          >
            Precipitation
          </MenuHeading>
          <MenuItem>
            <button
              className={`rounded-8 px-100 py-125 mb-050 w-full flex justify-between hover:bg-neutral-700 focus:outline-1 focus:outline-neutral-0 focus:outline-offset-1`}
            >
              <span>Millimeters (mm)</span>
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className={`rounded-8 px-100 py-125  w-full flex justify-between hover:bg-neutral-700 focus:outline-1 focus:outline-neutral-0 focus:outline-offset-1`}
            >
              <span>Inches (in)</span>
            </button>
          </MenuItem>
        </MenuSection>
      </MenuItems>
    </Menu>
  );
}
