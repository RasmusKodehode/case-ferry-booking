"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useBooking } from "@/context/BookingContext";

export default function ConfirmationPage() {
  const { bookingData } = useBooking();

  if (!bookingData) {
    return <div>Beklager, fant ingen booking. Gå tilbake til forrige side og velg avgang.</div>;
  }

  const { date, departure, start, end, arrivalDate, arrivalTime, duration, price } = bookingData;

  return (
    <div className="flex flex-col items-baseline flex-1 w-full gap-2 p-2 bg-amber-50 md:px-20">
      <h2 className="mb-4 text-2xl font-bold">Dine reisedetaljer</h2>
      <div className="flex flex-col gap-2 p-4 bg-white border rounded-lg shadow-lg">
        <div className="flex flex-col gap-2">
          Utreise:
          <div className="flex flex-row items-center p-2 border rounded">
            <div className="flex flex-col text-sm">
              <p>
                {date} kl {departure} fra {start} - {arrivalDate} kl{" "}
                {arrivalTime} i {end}
              </p>
              <p className="text-xs">Reisen tar {duration} timer</p>
            </div>
            <div>
              <p>{price} kr</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-full border-t-2">
          <p className="text-lg font-semibold">Pris:</p>
          <p className="text-lg">{price} kr</p>
        </div>
      </div>
      <Link
        href="/checkout"
        className="flex flex-row items-center justify-between w-full px-3 py-2 mt-4 text-white bg-red-600 rounded-lg md:py-6 md:px-5 md:rounded-2xl"
      >
        Confirm Booking
        <FaArrowRight />
      </Link>
    </div>
  );
}
