"use client";

interface SelectableTableProps {
  departures: any[];
  selectedDeparture: number | null;
  toggleRowSelection: (index: number) => void;
}

export default function DepartureTable({
  departures,
  selectedDeparture,
  toggleRowSelection,
}: SelectableTableProps) {
  return (
    <>
      <table className="bg-amber-400 w-full margin-sm">
        <thead>
          <tr>
            <th className="p-2 text-left">Departure Time</th>
            <th className="p-2 text-left">Arrival Time</th>
            <th className="p-2 text-left">Duration</th>
            <th className="p-2 text-left">Price (NOK)</th>
          </tr>
        </thead>
        <tbody>
          {departures.map((row, index) => (
            <tr
              key={row.ETD}
              onClick={() => toggleRowSelection(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleRowSelection(index);
                }
              }}
              role="button"
              tabIndex={0}
              aria-pressed={selectedDeparture === index}
              className={`${selectedDeparture === index ? "bg-amber-800" : "bg-white"} cursor-pointer border rounded-sm border-spacing-0.5 focus:outline-2 focus:-outline-offset-2`}
            >
              <td className="p-2 border">{row.ETD}</td>
              <td className="p-2 border">{row.ETA}</td>
              <td className="p-2 border">{row.duration} hours</td>
              <td className="p-2 border">{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
