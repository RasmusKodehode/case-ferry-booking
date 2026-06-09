"use client";
import { useState } from "react";

interface dropDownProps {
    locations: string[];
    selectedLocation: string | undefined;
    setSelectedLocation: (newLocation: string) => void;
}

export default function DropDown({ locations, selectedLocation, setSelectedLocation }: dropDownProps) {
  //const [selectedLocation, setSelectedLocation] = useState<string>("");

  return (
    <div>
      <select
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">Velg sted</option>
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  );
}
