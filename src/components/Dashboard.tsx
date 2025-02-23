import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Confetti from "@/components/Confetti";
import {
  BarChart3,
  Users,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const Dashboard = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Confetti isActive={showConfetti} />
      
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <Button onClick={triggerConfetti}>Celebrate! 🎉</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Revenue Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <ArrowUpRight className="h-4 w-4 text-green-500" />
                +20.1% from last month
              </p>
            </CardContent>
          </Card>

          {/* Subscriptions Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <ArrowUpRight className="h-4 w-4 text-green-500" />
                +180.1% from last month
              </p>
            </CardContent>
          </Card>

          {/* Sales Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <ArrowDownRight className="h-4 w-4 text-red-500" />
                -19% from last month
              </p>
            </CardContent>
          </Card>

          {/* Active Now Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <ArrowUpRight className="h-4 w-4 text-green-500" />
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Chart placeholder</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;