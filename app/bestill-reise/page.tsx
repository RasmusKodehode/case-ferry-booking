"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { MdOutlineDirectionsBoat } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { useBooking } from "@/context/BookingContext";
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

  const { setBookingData } = useBooking();
  const router = useRouter();

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

  const getDate = (datestring: string) => {
    const dateTimeArray = datestring.split(" ");
    const date = dateTimeArray[0];
    return date;
  };

  const getTime = (datestring: string) => {
    const dateTimeArray = datestring.split(" ");
    const time = dateTimeArray[1];
    return time;
  };

  const handleConfirm = () => {
    if (selectedDeparture === null || selectedDate === null) {
      console.log("no departure or no date");
      return;
    }
    setBookingData({
      date: getDate(filteredDepartures[selectedDeparture].ETD),
      departure: getTime(filteredDepartures[selectedDeparture].ETD),
      //departureDate: getDate(filteredDepartures[selectedDeparture].ETD),
      start: filteredDepartures[selectedDeparture].departure,
      end: filteredDepartures[selectedDeparture].arrival,
      arrivalDate: getDate(filteredDepartures[selectedDeparture].ETA),
      arrivalTime: getTime(filteredDepartures[selectedDeparture].ETA),
      price: filteredDepartures[selectedDeparture].price,
    });
    router.push("/bekreft-reise");
    console.log("confirm booking");
  };

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
    setFilteredDepartures([]);
    setSelectedDate(null);
    setSelectedDeparture(null);
    setAvailableDates([
      ...new Set(filterListOfDates.map((item) => item.ETD.split(" ")[0])),
    ]);
  }, [selectedStart, selectedEnd]);

  useEffect(() => {
    setSelectedDeparture(null);
    filterDepartures();
  }, [selectedDate]);

  return (
    <main className="flex flex-col items-baseline flex-1 w-full gap-4 px-2 bg-amber-50">
      <h2 className="pt-3 font-bold">Finn din reise</h2>
      <div className="flex flex-col p-1.5 shadow-2xl w-full bg-white gap-2">
        <div className="flex flex-row items-center gap-1">
          <MdOutlineDirectionsBoat />
          <h3 className="text-lg font-semibold">Hvor skal du reise?</h3>
        </div>
        <div className="flex flex-col w-full gap-1">
          <label>Fra</label>
          <DropDown
            locations={startLocations}
            selectedLocation={selectedStart}
            setSelectedLocation={setSelectedStart}
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label>Til</label>
          <DropDown
            locations={endLocations}
            selectedLocation={selectedEnd}
            setSelectedLocation={setSelectedEnd}
          />
        </div>
      </div>
      {availableDates.length !== 0 && (
        <div className="flex flex-col p-1.5 shadow-2xl bg-white w-full">
          <DepartureCalendar
            availableDates={availableDates}
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
          />
        </div>
      )}
      {selectedDate &&
        selectedStart &&
        selectedEnd &&
        filteredDepartures.length !== 0 && (
          <div className="flex flex-col w-full gap-2 py-1.5">
            <h2>Utreise fra {selectedStart}</h2>
            <DepartureTable
              departures={filteredDepartures}
              selectedDeparture={selectedDeparture}
              toggleRowSelection={toggleRowSelection}
            />
          </div>
        )}
      {selectedDate &&
        selectedStart &&
        selectedEnd &&
        filteredDepartures.length === 0 && (
          <p>Fant ingen tilgjengelige reiser denne dagen.</p>
        )}
      {filteredDepartures.length !== 0 && selectedDeparture !== null && (
        <button
          type="button"
          onClick={handleConfirm}
          className="flex flex-row items-center justify-between w-full px-3 py-2 mt-4 text-white bg-red-600 rounded-lg md:py-6 md:px-5 md:rounded-2xl"
        >
          Bekreft
          <FaArrowRight />
        </button>
      )}
    </main>
  );
}
