import Image from "next/image";
import UnitsDropdown from "./units-dropdown";

export default function Header() {
  return (
    <header className="flex justify-between h-8.25 mt-200 mr-200 mb-600 ml-200">
      <Image
        className="w-auto h-7 self-center"
        src="/images/logo.svg"
        alt="Site logo."
        width={197}
        height={40}
      />
      <UnitsDropdown />
    </header>
  );
}
