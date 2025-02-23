import { Card, CardContent } from "@/components/ui/card";
import { Lock } from "lucide-react";

export function NewBizReactivation() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-xl">🚀</span>
          <h2 className="text-lg font-semibold">New biz + reactivation MRR (QoQ)</h2>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 min-h-[200px]">
          <Lock className="h-12 w-12 text-gray-400" />
          <p className="text-sm text-gray-500 text-center">
            Upgrade to a paid subscription analytics plan to access custom charts.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}