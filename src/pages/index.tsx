import StringToQRCode from "@/components/StringToQRCode";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Qrify</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <nav className="grid place-items-center h-32 border-b">
          <div className="flex flex-col items-center gap-y-1">
            <h1 className="text-4xl font-black text-gray-900">Qrify</h1>
            <p className="text-gray-500">Dead-simple String to QR Code</p>
          </div>
        </nav>
        <main className="flex-grow">
          <div className="mt-10 mb-5 max-w-lg mx-auto w-full">
            <StringToQRCode />
          </div>
        </main>
        <footer className="text-center text-sm h-20 bg-gray-900 text-white grid place-items-center">
          <p>
            Made with 💙 by{" "}
            <Link
              className="hover:text-sky-400"
              href="https://carlo.vercel.app"
            >
              Carlo
            </Link>{" "}
            for Meh-meh 💖
          </p>
        </footer>
      </div>
    </>
  );
}
