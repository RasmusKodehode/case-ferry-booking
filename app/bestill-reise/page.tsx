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
  duration: number;
  price: number;
}

export default function BookTravel() {
  const [data, setData] = useState<dataProps[]>([])
  const [startLocations, setStartLocations] = useState<string[]>([]);
  const [endLocations, setEndLocations] = useState<string[]>([]);
  const [selectedStart, setSelectedStart] = useState<string | undefined>(
    undefined,
  );
  const [selectedEnd, setSelectedEnd] = useState<string | undefined>(undefined);
  const [dates, setDates] = useState<string[]>([]);
  const [times, setTimes] = useState<string[]>([]);

  const filterDepartures = data.filter((item: dataProps) => item.departure === selectedStart && item.arrival === selectedEnd);

  const getDate = (datestring: string) => {
    const dateTimeArray = datestring.split(" ");
    const date = dateTimeArray[0];
    return date;
  }

  const getTime = (datestring: string) => {
    const dateTimeArray = datestring.split(" ");
    const time = dateTimeArray[1];
    return time;
  };

  const availableDates = [
    ...new Set(filterDepartures.map((item) => item.ETD.split(" ")[0])),
  ];

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMockData();
      const uniqueStarts = [
        ...new Set(data.map((item: any) => item.departure)),
      ];
      const uniqueEnds = [...new Set(data.map((item: any) => item.arrival))];
      setStartLocations(uniqueStarts);
      setEndLocations(uniqueEnds);
      setData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    
  }, [data])

  useEffect(() => {

  })

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
