"use client";
import { useBooking } from "@/context/BookingContext";

export default function ConfirmationPage() {
  const { bookingData } = useBooking();

  if (!bookingData) {
    return <div>No booking data found.</div>;
  }

  const { date, departure } = bookingData;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Confirm Your Booking</h1>
      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p>
          You have selected{" "}
          <span className="font-medium">{date?.toLocaleDateString()}</span> at{" "}
          <span className="font-medium">{departure.ETD}</span> from{" "}
          <span className="font-medium">{departure.departure}</span> to{" "}
          <span className="font-medium">{departure.arrival}</span>.
        </p>
        <p className="mt-2">
          Duration: {departure.duration} hours | Price: {departure.price} NOK
        </p>
      </div>
      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Confirm Booking
      </button>
    </div>
  );
}
