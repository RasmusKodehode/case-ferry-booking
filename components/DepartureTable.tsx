"use client";

interface SelectableTableProps {
  departures: any[];
  selectedDeparture: number[];
  toggleRowSelection: (index: number) => void;
}

export default function DepartureTable({
  departures,
  selectedDeparture,
  toggleRowSelection,
}: SelectableTableProps) {
  return (
    <>
      <table className="APItable paramtable margin-sm">
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
              key={row.column1}
              onClick={() => toggleRowSelection(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleRowSelection(index);
                }
              }}
              role="button"
              tabIndex={0}
              aria-pressed={selectedDeparture.includes(index)}
              className={`${selectedDeparture.includes(index) ? "selectedRow" : "unselectedRow"} paramRow`}
            >
              <td className="p-2">{row.ETD}</td>
              <td className="p-2">{row.ETA}</td>
              <td className="p-2">{row.duration} hours</td>
              <td className="p-2">{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
