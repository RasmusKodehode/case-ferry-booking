"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { getMockData } from "../actions";
import DropDown from "@/components/DropDown";
import DepartureCalendar from "@/components/Calendar";
import DepartureTable from "@/components/DepartureTable";

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
  const [data, setData] = useState<dataProps[]>([]);
  const [startLocations, setStartLocations] = useState<string[]>([]);
  const [endLocations, setEndLocations] = useState<string[]>([]);
  const [selectedStart, setSelectedStart] = useState<string | undefined>(
    undefined,
  );
  const [selectedEnd, setSelectedEnd] = useState<string | undefined>(undefined);
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [filteredDepartures, setFilteredDepartures] = useState<any[]>([]);
  const [selectedDeparture, setSelectedDeparture] = useState<number | null>(
    null,
  );

  const filterListOfDates = data.filter(
    (item: dataProps) =>
      item.departure === selectedStart && item.arrival === selectedEnd,
  );

  const filterDepartures = () => {
    if (!selectedStart || !selectedEnd || !selectedDate || !data) {
      setFilteredDepartures([]);
      return;
    }
    const filtered = data.filter((departure) => {
      // Parse ETD (DD.MM.YY HH.MM) into a Date object
      const [day, month, year] = departure.ETD.split(" ")[0]
        .split(".")
        .map(Number);
      const departureDate = new Date(2000 + year, month - 1, day);

      // Normalize both dates to midnight for comparison
      const normalizedDepartureDate = new Date(departureDate);
      normalizedDepartureDate.setHours(0, 0, 0, 0);

      const normalizedSelectedDate = new Date(selectedDate);
      normalizedSelectedDate.setHours(0, 0, 0, 0);

      return (
        departure.departure === selectedStart &&
        departure.arrival === selectedEnd &&
        normalizedDepartureDate.getTime() === normalizedSelectedDate.getTime()
      );
    });
    setFilteredDepartures(filtered);
  };

  const toggleRowSelection = useCallback((index: number) => {
    setSelectedDeparture((prev) => (prev === index ? null : index));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMockData();
      setData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setStartLocations([...new Set(data.map((item: any) => item.departure))]);
    setEndLocations([...new Set(data.map((item: any) => item.arrival))]);
  }, [data]);

  useEffect(() => {
    setAvailableDates([
      ...new Set(filterListOfDates.map((item) => item.ETD.split(" ")[0])),
    ]);
  }, [selectedStart, selectedEnd]);

  useEffect(() => {
    filterDepartures();
  }, [selectedStart, selectedEnd, selectedDate]);

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
        {availableDates.length !== 0 && (
          <DepartureCalendar
            availableDates={availableDates}
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
          />
        )}
        {/*`Available dates are ${availableDates} and available times are ${availableTimes}`*/}
        {`selected date is ${selectedDate}`}
        {selectedDate && selectedStart && selectedEnd && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">
              Available Departures:
            </h2>
            {filteredDepartures.length > 0 ? (
              <ul className="list-disc pl-5">
                {filteredDepartures.map((departure) => (
                  <li key={departure.id}>
                    {departure.ETD} - {departure.ETA} (Duration:{" "}
                    {departure.duration} hours)
                  </li>
                ))}
              </ul>
            ) : (
              <p>No departures available for the selected route and date.</p>
            )}
          </div>
        )}
        {selectedDate && selectedStart && selectedEnd && (
          <DepartureTable
            departures={filteredDepartures}
            selectedDeparture={selectedDeparture}
            toggleRowSelection={toggleRowSelection}
          />
        )}
        {selectedDeparture && filteredDepartures.length !== 0 && (
              <p>Your journey</p>
            )}
      </main>
    </div>
  );
}
