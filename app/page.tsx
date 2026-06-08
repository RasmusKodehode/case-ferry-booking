import Image from "next/image";
import Link from "next/link";
import Banner from "../public/Banner.png";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col gap-4 bg-white">
      <div className="flex w-full m-0 p-0">
        <Image
          src={Banner}
          width={1000}
          height={1000}
          alt="Bilde af fjordline båt"
        />
      </div>
      <div className="flex flex-col justify-baseline gap-1.5 px-6">
        <p className="text-lg">
          Reis i sommer med <span className="text-red-500">komfort</span>
        </p>
        <p className="text-sm">
          Hvor i <span className="text-red-500">Danmark</span> skal du i sommer?
        </p>
        <Link
          href="/bestill-reise"
          className="flex flex-row justify-between w-full mt-4 px-3 py-2 bg-red-600 text-white items-center rounded-lg"
        >
          <div className="flex flex-row items-center gap-2">
            <FaSearch />
            <p>Finn min reise</p>
          </div>
          <FaArrowRight />
        </Link>
      </div>
    </main>
  );
}
