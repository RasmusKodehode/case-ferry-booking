"use client";

import Image from "next/image";
import Link from "next/link";

export default function Checkout() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-between px-18 py-32 bg-white sm:items-start">
        Din bestilling er bekreftet, takk for at du reiser med FjordLine!
      </main>
    </div>
  );
}
