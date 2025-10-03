"use client";

import { useState, useEffect } from "react";

// External libraries
import clsx from "clsx";
import {
  Menu,
  MenuButton,
  MenuHeading,
  MenuItem,
  MenuItems,
  MenuSection,
  MenuSeparator,
} from "@headlessui/react";

// Fonts
import { dmSans } from "./fonts";

// Components
import GearIcon from "./gear-icon";
import DropdownIcon from "./dropdown-icon";
import CheckmarkIcon from "./checkmark-icon";

export default function UnitsDropdown() {
  const [isCelsius, setIsCelsius] = useState(true);
  const [isKmh, setIsKmh] = useState(true);
  const [isMillimeters, setIsMillimeters] = useState(true);
  const [isMetric, setIsMetric] = useState(true);

  function toggleMeasurementSystem() {
    if (isMetric) {
      setIsMetric(false);
      setIsCelsius(false);
      setIsKmh(false);
      setIsMillimeters(false);
    } else {
      setIsMetric(true);
      setIsCelsius(true);
      setIsKmh(true);
      setIsMillimeters(true);
    }
  }

  useEffect(() => {
    if (isCelsius && isKmh && isMillimeters) {
      setIsMetric(true);
    } else if (!isCelsius && !isKmh && !isMillimeters) {
      setIsMetric(false);
    }
  }, [isCelsius, isKmh, isMillimeters]);

  return (
    <Menu>
      <MenuButton className="bg-neutral-800 hover:bg-neutral-700 focus:outline-2 focus:outline-neutral-0 focus:outline-offset-3 px-125 md:px-200 py-100 md:py-150 rounded-6 md:rounded-8 flex items-center gap-1.5 md:gap-2.5">
        <GearIcon className="w-3.5 md:w-200 h-3.5 md:h-200" />
        <span
          className={`${dmSans.className} font-medium text-preset-8 md:text-[16px] text-neutral-0`}
        >
          Units
        </span>
        <DropdownIcon className="w-2.25 md:w-3 h-3.5 md:h-4.5" />
      </MenuButton>
      <MenuItems
        anchor="bottom end"
        className={`[--anchor-gap:10px] text-preset-7 text-neutral-0 ${dmSans.className} font-medium bg-neutral-800 rounded-12 px-100 py-075 flex flex-col w-53.5 `}
      >
        <MenuItem>
          <button
            className="px-100 py-125 mb-050 rounded-8 w-full text-start hover:bg-neutral-700 focus:outline-1 focus:outline-neutral-0 focus:outline-offset-1"
            onClick={toggleMeasurementSystem}
          >
            {isMetric ? "Switch to Imperial" : "Switch to Metric"}
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
              className={clsx(
                "rounded-8 px-100 py-125 mb-050 w-full flex justify-between hover:bg-neutral-700 focus:outline-1 focus:outline-neutral-0 focus:outline-offset-1",
                isCelsius && "bg-neutral-700",
              )}
              onClick={event => {
                // Prevent collapsing the dropdown
                event.preventDefault();
                setIsCelsius(true);
              }}
            >
              <span>Celsius (&deg;C)</span>
              {isCelsius && <CheckmarkIcon />}
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className={clsx(
                "rounded-8 px-100 py-125 mb-050 w-full flex justify-between hover:bg-neutral-700 focus:outline-1 focus:outline-neutral-0 focus:outline-offset-1",
                !isCelsius && "bg-neutral-700",
              )}
              onClick={event => {
                event.preventDefault();
                setIsCelsius(false);
              }}
            >
              <span>Fahrenheit (&deg;F)</span>
              {!isCelsius && <CheckmarkIcon />}
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
              className={clsx(
                "rounded-8 px-100 py-125 mb-050 w-full flex justify-between hover:bg-neutral-700 focus:outline-1 focus:outline-neutral-0 focus:outline-offset-1",
                isKmh && "bg-neutral-700",
              )}
              onClick={event => {
                event.preventDefault();
                setIsKmh(true);
              }}
            >
              <span>km/h</span>
              {isKmh && <CheckmarkIcon />}
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className={clsx(
                "rounded-8 px-100 py-125 mb-050 w-full flex justify-between hover:bg-neutral-700 focus:outline-1 focus:outline-neutral-0 focus:outline-offset-1",
                !isKmh && "bg-neutral-700",
              )}
              onClick={event => {
                event.preventDefault();
                setIsKmh(false);
              }}
            >
              <span>mph</span>
              {!isKmh && <CheckmarkIcon />}
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
              className={clsx(
                "rounded-8 px-100 py-125 mb-050 w-full flex justify-between hover:bg-neutral-700 focus:outline-1 focus:outline-neutral-0 focus:outline-offset-1",
                isMillimeters && "bg-neutral-700",
              )}
              onClick={event => {
                event.preventDefault();
                setIsMillimeters(true);
              }}
            >
              <span>Millimeters (mm)</span>
              {isMillimeters && <CheckmarkIcon />}
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className={clsx(
                "rounded-8 px-100 py-125  w-full flex justify-between hover:bg-neutral-700 focus:outline-1 focus:outline-neutral-0 focus:outline-offset-1",
                !isMillimeters && "bg-neutral-700",
              )}
              onClick={event => {
                event.preventDefault();
                setIsMillimeters(false);
              }}
            >
              <span>Inches (in)</span>
              {!isMillimeters && <CheckmarkIcon />}
            </button>
          </MenuItem>
        </MenuSection>
      </MenuItems>
    </Menu>
  );
}
