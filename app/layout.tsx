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
    <html className="w-full m-0 p-0" lang="en">
      <body className="min-h-screen min-w-screen px-96 bg-white text-black max-2xl:px-10">
        <div className="pt-8 pb-1 border-b-5 mb-10">
          <div className=" flex justify-between gap-10 max-2xl:gap-0 max-2xl:flex-col-reverse max-xl:gap-1">
            <div className=" flex grow-2">
              <nav className="flex justify-between w-full items-end text-l px-10 pb-1 max-2xl:items-center max-xl:flex-col max-xl:gap-2">
                <Link href="/">TÓNLEIKARAÐIR</Link>
                <Link href="/composers">TÓNHÖFUNDAR</Link>
                <Link href="/musicians">FLYTJENDUR</Link>
              </nav>
            </div>
            <div className="mb-4 flex grow-1 justify-end max-2xl:justify-center">
              <Image
                src="/KAMMER_logo.png"
                alt="Kammermusikklubburinn"
                width={318}
                height={134}
                priority
              />
            </div>
          </div>
          <div className="text-right text-2xl max-2xl:hidden">
            STOFNAÐUR 1957
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
