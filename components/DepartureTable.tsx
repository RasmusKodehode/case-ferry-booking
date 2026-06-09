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
      <table className="w-full bg-white margin-sm">
        <thead>
          {/*<tr>
            <th className="p-2 text-left">Departure Time</th>
            <th className="p-2 text-left">Arrival Time</th>
            <th className="p-2 text-left">Duration</th>
            <th className="p-2 text-left">Price (NOK)</th>
          </tr>*/}
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
              className={`${selectedDeparture === index ? "border-3 border-green-900" : "border-none"} cursor-pointer rounded-sm focus:outline-2 focus:-outline-offset-2 shadow`}
            >
              <td className="flex flex-row items-center justify-between p-2">
                <div className="flex flex-col">
                  <div className="text-xs md:text-base">{row.ETD} fra {row.departure} -</div>
                  <div className="text-xs md:text-base">{row.ETA} i {row.arrival}</div>
                  <div className="text-xs">Reisen tar {row.duration} timer</div>
                </div>
                <div>
                  {row.price} kr
                </div>
              </td>
              {/*<td className="p-2">{row.ETD}</td>
              <td className="p-2 border">{row.ETA}</td>
              <td className="p-2 border">{row.duration} hours</td>
              <td className="p-2 border">{row.price}</td>*/}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
