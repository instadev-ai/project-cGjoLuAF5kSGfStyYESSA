import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  data: any[];
}

export function MetricCard({ title, value, change, data }: MetricCardProps) {
  const isPositive = !change.startsWith("-");
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline space-x-3">
          <div className="text-2xl font-bold">{value}</div>
          <div className={`text-sm ${isPositive ? "text-blue-500" : "text-red-500"}`}>
            {change}
            <span className="text-gray-500 ml-1">Last 30 days</span>
          </div>
        </div>
        <div className="h-[80px] mt-3">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={2}
                dot={false}
              />
              <XAxis hide={true} />
              <YAxis hide={true} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}