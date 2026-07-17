import DashboardHeader from "@/components/dashboard/DashboardHeader";
import KPICards from "@/components/dashboard/KPICards";
import PerformanceHeatmap from "@/components/dashboard/PerformanceHeatmap";
import CampaignCompletion from "@/components/dashboard/CampaignCompletion";
import ProductBubbleChart from "@/components/dashboard/ProductBubbleChart";
import EmailMetrics from "@/components/dashboard/EmailMetrics";
import TrendAnalysis from "@/components/dashboard/TrendAnalysis";
import DeepDiveAnalytics from "@/components/dashboard/DeepDiveAnalytics";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1600px] px-6">
        <DashboardHeader />
        <KPICards />

        {/* Main 3-column layout */}
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Left - Performance Summary */}
          <div className="space-y-4">
            <PerformanceHeatmap />
            <CampaignCompletion />
            <ProductBubbleChart />
          </div>

          {/* Center - Email Metrics */}
          <div>
            <EmailMetrics />
          </div>

          {/* Right - Trend Analysis */}
          <div>
            <TrendAnalysis />
          </div>
        </div>

        {/* Bottom - Deep Dive */}
        <div className="mt-4">
          <DeepDiveAnalytics />
        </div>

        {/* Footer */}
        <footer className="mt-8 pb-6">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Marketing Performance Dashboard · Data refreshed every 15 minutes · © 2024
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
