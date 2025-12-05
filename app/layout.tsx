import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import ConditionalLayout from "@/components/ConditionalLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Softerio Solutions",
  icons: {
    icon: [
      { url: "/icons/logo.webp", sizes: "48x48", type: "image/webp" },
      { url: "/icons/logo.webp", sizes: "64x64", type: "image/webp" },
      { url: "/icons/logo.webp", sizes: "96x96", type: "image/webp" },
    ],
    apple: [
      { url: "/icons/logo.webp", sizes: "180x180", type: "image/webp" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="icon" href="/icons/logo.webp" type="image/webp" sizes="48x48" />
        <link rel="icon" href="/icons/logo.webp" type="image/webp" sizes="64x64" />
        <link rel="icon" href="/icons/logo.webp" type="image/webp" sizes="96x96" />
        <link rel="apple-touch-icon" href="/icons/logo.webp" sizes="180x180" />
        <link rel="apple-touch-icon" href="/icons/logo.webp" sizes="192x192" />
        <link rel="apple-touch-icon" href="/icons/logo.webp" sizes="512x512" />
      </head>
      <body className={`${inter.className} overflow-x-hidden max-w-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConditionalLayout>{children}</ConditionalLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
