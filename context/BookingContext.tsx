"use client"; // Required for Next.js client components

import { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of your booking data
interface BookingData {
  date: Date | null;
  departure: any; // Replace with your departure type
}

// Define the context type
interface BookingContextType {
  bookingData: BookingData | null;
  setBookingData: (data: BookingData) => void;
}

// Create the context
const BookingContext = createContext<BookingContextType | undefined>(undefined);

// Create a provider component
export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookingData, setBookingData] = useState<BookingData | null>(null);

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData }}>
      {children}
    </BookingContext.Provider>
  );
}

// Create a custom hook to use the context
export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
