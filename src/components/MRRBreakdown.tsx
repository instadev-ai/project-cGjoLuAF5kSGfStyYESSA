import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MRRBreakdownItem {
  id: number;
  label: string;
  value: number;
  count: number;
  color: string;
}

const mrrData: MRRBreakdownItem[] = [
  { id: 1, label: "New Business MRR", value: 2045, count: 94, color: "text-blue-500" },
  { id: 2, label: "Expansion MRR", value: 772, count: 36, color: "text-blue-500" },
  { id: 3, label: "Contraction MRR", value: -82.74, count: 4, color: "text-red-500" },
  { id: 4, label: "Churn MRR", value: -723, count: 33, color: "text-red-500" },
  { id: 5, label: "Reactivation MRR", value: 126, count: 6, color: "text-blue-500" },
  { id: 6, label: "Net MRR Movement", value: 2138, count: 0, color: "text-gray-900 font-semibold" },
  { id: 7, label: "Scheduled MRR Movements", value: -167, count: 8, color: "text-gray-500" },
];

export function MRRBreakdown() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">MRR Breakdown</CardTitle>
        <select className="text-sm bg-transparent border rounded px-2 py-1">
          <option>This month</option>
        </select>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mrrData.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {item.count > 0 && (
                  <span className={`${item.color} text-sm`}>{item.count}</span>
                )}
                <span className={item.color}>{item.label}</span>
              </div>
              <span className={item.color}>
                ${Math.abs(item.value).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}