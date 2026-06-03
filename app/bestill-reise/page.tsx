"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { getMockData } from "../actions";
import DropDown from "@/components/DropDown";

interface dataProps {
  id: number;
  departure: string;
  arrival: string;
  ETD: string;
  ETA: string;
  duration: string;
  price: number;
}

export default function BookTravel() {
  const [startLocations, setStartLocations] = useState<string[]>([]);
  const [endLocations, setEndLocations] = useState<string[]>([]);
  const [selectedStart, setSelectedStart] = useState<string | undefined>(
    undefined,
  );
  const [selectedEnd, setSelectedEnd] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMockData();
      const uniqueStarts = [
        ...new Set(data.map((item: any) => item.departure)),
      ];
      const uniqueEnds = [...new Set(data.map((item: any) => item.arrival))];
      setStartLocations(uniqueStarts);
      setEndLocations(uniqueEnds);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-between px-18 py-32 bg-white sm:items-start">
        Bestill reise her!
        <DropDown
          locations={startLocations}
          selectedLocation={selectedStart}
          setSelectedLocation={setSelectedStart}
        />
        {selectedStart && <p>You selected: {selectedStart}</p>}
        <DropDown
          locations={endLocations}
          selectedLocation={selectedEnd}
          setSelectedLocation={setSelectedEnd}
        />
        {selectedEnd && <p>You selected: {selectedEnd}</p>}
      </main>
    </div>
  );
}
