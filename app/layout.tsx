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
    <html className="" lang="en">
      <header className="min-h-screen min-w-screen px-96 bg-white text-black max-2xl:px-1">
        <div className="pt-8 pb-1 border-b-5">
          <div className=" flex justify-between gap-50 max-2xl:gap-0">
            <div className=" flex w-full">
              <nav className="flex justify-between items-end grow text-l px-10 pb-1 max-2xl:items-center">
                <Link href="/">TÓNLEIKARAÐIR</Link>
                <Link href="/composers">TÓNHÖFUNDAR</Link>
                <Link href="/musicians">FLYTJENDUR</Link>
              </nav>
            </div>
            <div className="mb-4 flex justify-end">
              <Image
                src="/KAMMER_logo.png"
                alt="Kammermusikklubburinn"
                className="max-2xl:hidden"
                width={300}
                height={200}
                priority
              />
            </div>
          </div>
          <div className="text-right text-2xl max-2xl:hidden">
            STOFNAÐUR 1957
          </div>
        </div>
      </header>

      <body>{children}</body>
    </html>
  );
}
