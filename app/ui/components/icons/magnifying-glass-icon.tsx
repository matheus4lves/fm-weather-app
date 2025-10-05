import Image from "next/image";

export default function MagnifyingGlassIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <Image
      className={className}
      src="/images/icon-search.svg"
      alt="Magnifying glass icon."
      width={21}
      height={21}
    />
  );
}
