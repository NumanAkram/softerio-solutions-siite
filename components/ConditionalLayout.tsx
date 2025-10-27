"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isPortfolioPage = pathname === "/portfolio";

  return (
    <>
      {!isPortfolioPage && <Header />}
      {children}
      {!isPortfolioPage && <Footer />}
    </>
  );
}

