"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Checkout() {
  return (
    <main className="flex flex-col items-baseline flex-1 w-full gap-2 p-2 bg-amber-50 md:px-20 md:justify-center">
      <h2 className="pt-3 text-2xl font-bold">Din bestilling er bekreftet</h2>
      <p>Takk for at du reiser med FjordLine!</p>
      <Link
        href="/"
        className="flex flex-row items-center justify-between w-full px-3 py-2 mt-4 text-white bg-red-600 rounded-lg md:py-6 md:px-5 md:rounded-2xl md:w-fit md:gap-5"
      >
        Tilbake til hjemmeside
        <FaArrowRight />
      </Link>
    </main>
  );
}
