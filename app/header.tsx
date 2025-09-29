import Image from "next/image";
import UnitsDropdown from "./units-dropdown";

export default function Header() {
  return (
    <header className="flex items-center justify-between mt-200 mx-200 mb-600 ">
      <Image
        className="w-auto h-7 md:h-10"
        src="/images/logo.svg"
        alt="Site logo."
        width={197}
        height={40}
      />
      <UnitsDropdown />
    </header>
  );
}
