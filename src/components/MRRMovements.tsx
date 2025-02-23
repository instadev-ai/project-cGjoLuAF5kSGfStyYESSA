import { Card, CardContent } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", value: 400 },
  { month: "Feb", value: 300 },
  { month: "Mar", value: 200 },
  { month: "Apr", value: 500 },
  { month: "May", value: 400 },
  { month: "Jun", value: 600 },
  { month: "Jul", value: -200 },
  { month: "Aug", value: -300 },
];

export function MRRMovements() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="text-lg font-semibold mb-4">MRR Movements</div>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <Bar
                dataKey="value"
                fill={(d) => (d.value >= 0 ? "#3b82f6" : "#ef4444")}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}