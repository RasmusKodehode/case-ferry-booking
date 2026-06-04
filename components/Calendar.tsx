"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function DepartureCalendar({ availableDates }: { availableDates: string[] }) {
  const [date, setDate] = useState<Date | null>(null);

  // Convert availableDates (DD.MM.YY) to Date objects for comparison
  const availableDateObjects = availableDates.map((dateStr) => {
    const [day, month, year] = dateStr.split(".").map(Number);
    return new Date(2000 + year, month - 1, day); // Note: Year 2000 + YY (e.g., 26 -> 2026)
  });

  // Function to check if a date is available
  const isDateAvailable = (date: Date) => {
    return availableDateObjects.some(
      (availableDate) =>
        availableDate.getDate() === date.getDate() &&
        availableDate.getMonth() === date.getMonth() &&
        availableDate.getFullYear() === date.getFullYear()
    );
  };

  const handleDateChange = (value: Value) => {
    if (Array.isArray(value)) {
      setDate(value[0] || null); // Handle range selection (if enabled)
    } else {
      setDate(value || null); // Handle single date selection
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Select Departure Date</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileClassName={({ date, view }) => {
          if (view === "month" && isDateAvailable(date)) {
            return "bg-blue-200 hover:bg-blue-300";
          }
        }}
      />
      {date && <p className="mt-2">Selected: {date.toLocaleDateString()}</p>}
    </div>
  );
}