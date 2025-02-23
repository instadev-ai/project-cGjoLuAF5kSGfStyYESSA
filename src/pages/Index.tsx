import { TopWinsTable } from "@/components/TopWinsTable";
import { MRRBreakdown } from "@/components/MRRBreakdown";
import { MRRMovements } from "@/components/MRRMovements";
import { MetricCard } from "@/components/MetricCard";
import { NewBizReactivation } from "@/components/NewBizReactivation";

// Sample data for the line charts
const generateChartData = (length: number) => {
  return Array.from({ length }, (_, i) => ({
    name: `Day ${i + 1}`,
    value: Math.floor(Math.random() * 100),
  }));
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-14 items-center space-x-8">
            <a href="#" className="text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Sales</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Marketing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Customer Success</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Finance</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-gray-900">Home</h1>
            <button className="text-gray-400 hover:text-gray-500">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <button className="rounded-full w-8 h-8 bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-300">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <TopWinsTable />
            <MRRMovements />
            <NewBizReactivation />
          </div>
          <div className="space-y-6">
            <MRRBreakdown />
            <MetricCard
              title="Annual Run Rate"
              value="$69,672"
              change="+87.88%"
              data={generateChartData(30)}
            />
            <MetricCard
              title="MRR"
              value="$5,806"
              change="+87.88%"
              data={generateChartData(30)}
            />
            <MetricCard
              title="Subscribers"
              value="244"
              change="+59.48%"
              data={generateChartData(30)}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;