import type { Metadata } from "next";
import "../globals.css";
import Header from "@/ui/components/header";
import { dmSans } from "../ui/fonts";

export const metadata: Metadata = {
  title: "Frontend Mentor | Weather app",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-neutral-900 pt-200 px-200 pb-600 h-screen ${dmSans.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
