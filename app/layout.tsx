import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kammermúsíkklúbburinn",
  description: "Leitarvél kammermúsíkklúbbsins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header className="min-h-screen min-w-screen px-96 bg-white text-black">
        <div className="py-8 flex justify-between gap-50 border-b-6">
          <nav className="flex justify-between items-end grow text-l px-10">
            <Link href="/composers">TÓNHÖFUNDAR</Link>
            <Link href="/concert-seasons">TÓNLEIKARAÐIR</Link>
            <Link href="/musicians">FLYTJENDUR</Link>
          </nav>
          <div className="mb-4 flex justify-end">
            <Image
              src="/KAMMER_logo.png"
              alt="Kammermusikklubburinn"
              width={300}
              height={200}
              priority
            />
          </div>
        </div>
      </header>

      <body>{children}</body>
    </html>
  );
}
