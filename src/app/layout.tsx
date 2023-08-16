import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legend State Manager",
  description: "Blazingly fast React/Nextjs state manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="m-12 flex item-center justify-center">
          <h1 className="text-5xl text-balance text-orange-500 underline">
            Legend State Manager
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}
