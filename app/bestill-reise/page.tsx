import Image from "next/image";
import { getMockData } from "../actions";

export default async function BookTravel() {
  const data = await getMockData();
  console.log(data);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-between px-18 py-32 bg-white sm:items-start">
        Bestill reise her!
      </main>
    </div>
  );
}
