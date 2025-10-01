import Image from "next/image";

export default function CheckmarkIcon({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      src="/images/icon-checkmark.svg"
      alt="Checkmark icon."
      width={14}
      height={11}
    />
  );
}
