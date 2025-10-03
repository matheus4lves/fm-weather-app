import Link from "next/link";

// Components
import UnitsDropdown from "./units-dropdown";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="flex items-center justify-between mt-200 mx-200 mb-600 ">
      <Link href="/">
        <Logo className="w-auto h-7 md:h-10" />
      </Link>
      <UnitsDropdown />
    </header>
  );
}
