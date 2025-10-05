import Image from "next/image";

export default function DropdownIcon({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      src="/images/icon-dropdown.svg"
      alt="Dropdown icon."
      width={13}
      height={8}
    />
  );
}
