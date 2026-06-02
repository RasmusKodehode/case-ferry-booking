import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 bg-white sm:items-start">
        <Link href="/bestill-reise" className="w-fit px-3 py-2 bg-red-600">Book din tur med Fjordline her!</Link>
      </main>
    </div>
  );
}
