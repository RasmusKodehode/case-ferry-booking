"use client";

import Link from "next/link";
import Image from "next/image";
import Block from "../../public/Block.png";
import HamburgerMenu from "./Hamburger";

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between w-full h-20 px-3 py-7 bg-primary">
      <Link href="/">
      <Image src={Block} width={100} height={100} alt="Logo med link til hjemmeside" className="w-auto h-10" />
      </Link>
      <div className="flex md:hidden">
        <HamburgerMenu />
      </div>
      <div className="md:flex md:flex-row md:gap-3 md:h-fit md:items-center hidden">
        <Link href="/bestill-reise">Bestill reise</Link>
        <div>Våre ruter</div>
        <div>Kontakt oss</div>
        <div className="bg-red-500 p-1.5 rounded-lg text-white">Min Side</div>
        <div className="bg-black p-1.5 rounded-lg text-white">Registrer</div>
      </div>
    </div>
  );
}
