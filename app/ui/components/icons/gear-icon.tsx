import Image from "next/image";

export default function GearIcon({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      src="/images/icon-units.svg"
      alt="Gear icon."
      width={16}
      height={16}
    />
  );
}
