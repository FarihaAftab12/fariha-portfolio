import type { Metadata } from "next";
import { Oswald, PT_Serif } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Fariha Aftab | Senior Frontend Engineer",
  description:
    "Senior React & Angular Specialist with 5 Years Of Experience, executing clean code in Fintech, Healthtech, and Claude AI integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${oswald.variable} ${ptSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
