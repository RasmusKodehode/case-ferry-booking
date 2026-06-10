"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaRegCalendarAlt } from "react-icons/fa";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface DepartureCalendarProps {
  availableDates: string[];
  selectedDate: Date | null;
  onDateSelect: (date: Date | null) => void;
}

export default function DepartureCalendar({
  availableDates,
  selectedDate,
  onDateSelect
}: DepartureCalendarProps) {
  //const [date, setDate] = useState<Date | null>(null);

  // Convert availableDates (DD.MM.YY) to Date objects for comparison
  const availableDateObjects = availableDates.map((dateStr) => {
    const [day, month, year] = dateStr.split(".").map(Number);
    const dateObj = new Date(2000 + year, month - 1, day);
    console.log("Parsed date:", dateObj, "from string:", dateStr);
    return dateObj;
  });

  // Function to check if a date is available
  /*const isDateAvailable = (date: Date) => {
    //console.log(`incoming date: ${date}`)
    return availableDateObjects.some(
      (availableDate) =>
        availableDate.getDate() === date.getDate() &&
        availableDate.getMonth() === date.getMonth() &&
        availableDate.getFullYear() === date.getFullYear(),
    );
  };*/

  /*const isDateAvailable = (date: Date) => {
    const dateStr = date.toLocaleDateString("en-GB"); // Format as DD/MM/YYYY
    return availableDates.includes(dateStr.replace(/\//g, "."));
  };*/

  const isDateAvailable = (date: Date) => {
    // Normalize the input date to midnight (local time)
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0);

    return availableDateObjects.some((availableDate) => {
      // Normalize the available date to midnight (local time)
      const normalizedAvailableDate = new Date(availableDate);
      normalizedAvailableDate.setHours(0, 0, 0, 0);

      // Compare the normalized dates
      return normalizedAvailableDate.getTime() === normalizedDate.getTime();
    });
  };

  const handleDateChange = (value: Value) => {
    console.log("date changed");
    if (Array.isArray(value)) {
      onDateSelect(value[0] || null); // Handle range selection (if enabled)
    } else {
      onDateSelect(value || null); // Handle single date selection
    }
  };

  return (
    <div className="p-0">
      <div className="flex flex-row items-center gap-1 mb-2">
        <FaRegCalendarAlt />
        <h3 className="text-lg font-semibold">Når skal du reise?</h3>
      </div>
      <div className="overflow-hidden">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileClassName={({ date, view }) => {
            if (view === "month" && isDateAvailable(date)) {
              return "bg-blue-200 hover:bg-blue-300";
            }
          }}
          className="w-full"
        />
      </div>
    </div>
  );
}
