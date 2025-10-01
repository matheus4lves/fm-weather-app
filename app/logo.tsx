import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      src="/images/logo.svg"
      alt="Site logo."
      width={197}
      height={40}
    />
  );
}
