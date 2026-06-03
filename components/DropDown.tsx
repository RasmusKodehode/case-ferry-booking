"use client";
import { useState } from "react";

export default function DropDown({ locations }: { locations: string[] }) {
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  return (
    <div>
      <select
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">Select a location</option>
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
      {selectedLocation && <p>You selected: {selectedLocation}</p>}
    </div>
  );
}
