"use client";
import { useBooking } from "@/context/BookingContext";

export default function ConfirmationPage() {
  const { bookingData } = useBooking();

  if (!bookingData) {
    return <div>No booking data found.</div>;
  }

  const { date, departure, start, end, arrivalDate, arrivalTime, price } = bookingData;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Confirm Your Booking</h1>
      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p>
          You have selected <span className="font-medium">{date}</span> at{" "}
          <span className="font-medium">{departure}</span> from{" "}
          <span className="font-medium">{start}</span> to{" "}
          <span className="font-medium">{end}</span>{" "}
          <span className="font-medium">{arrivalDate}</span>
          <span className="font-medium">{arrivalTime}</span> .
        </p>
        <p className="mt-2">Price: {price} NOK</p>
      </div>
      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Confirm Booking
      </button>
    </div>
  );
}
