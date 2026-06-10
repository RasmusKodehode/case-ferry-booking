import Image from "next/image";
import Link from "next/link";
import Banner from "../public/Banner.png";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 w-full gap-4 p-0 m-0 bg-amber-50 md:flex-row-reverse md:px-20 md:gap-12">
      <Image
        src={Banner}
        width={1000}
        height={1000}
        alt="Bilde af fjordline båt"
        className="flex w-full p-0 m-0 my-auto md:w-1/2 md:h-auto md:self-start"
      />
      <div className="flex flex-col justify-baseline items-baseline text-left gap-1.5 px-6 md:justify-center md:items-center md:gap-4">
        <p className="text-lg md:text-4xl md:ml-0 md:mr-auto">
          Reis i sommer med <span className="text-red-500">komfort</span>
        </p>
        <p className="text-sm md:text-2xl md:ml-0 md:mr-auto">
          Hvor i <span className="text-red-500">Danmark</span> skal du i sommer?
        </p>
        <Link
          href="/bestill-reise"
          className="flex flex-row items-center justify-between w-full px-3 py-2 mt-4 text-white bg-red-600 rounded-lg md:py-6 md:px-5 md:rounded-2xl"
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
