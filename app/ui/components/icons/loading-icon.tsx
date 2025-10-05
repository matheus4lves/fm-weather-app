import Image from "next/image";

export default function LoadingIcon({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      src="/images/icon-loading.svg"
      alt="Loading icon."
      width={16}
      height={16}
    />
  );
}
