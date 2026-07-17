// KPI Data
export const kpiData = [
  {
    label: "Total Revenue",
    value: "$8.42M",
    change: "+18.7%",
    positive: true,
    subtitle: "18.7% growth",
  },
  {
    label: "Campaign ROI",
    value: "342%",
    change: "+5.1%",
    positive: true,
    subtitle: "Benchmark: 310%",
  },
];

// Heatmap Data
export const heatmapData = [
  { type: "Email", jan: 87, feb: 92, mar: 78, apr: 95, may: 88, jun: 91 },
  { type: "Social", jan: 65, feb: 72, mar: 81, apr: 69, may: 76, jun: 84 },
  { type: "PPC", jan: 93, feb: 88, mar: 95, apr: 91, may: 97, jun: 89 },
  { type: "Content", jan: 71, feb: 68, mar: 74, apr: 82, may: 79, jun: 86 },
  { type: "Webinar", jan: 58, feb: 63, mar: 71, apr: 66, may: 72, jun: 75 },
];

// Campaign Completion
export const campaignCompletionData = {
  completed: 847,
  nonCompleted: 400,
  rate: 67.9,
};

// Product Performance
export const productData = [
  { name: "SaaS Platform", revenue: 2800000, leads: 8400, effort: 5, emailsSent: 1240, emailColor: "green" },
  { name: "Analytics Suite", revenue: 1900000, leads: 5200, effort: 4, emailsSent: 870, emailColor: "green" },
  { name: "Security Tools", revenue: 1200000, leads: 3800, effort: 3, emailsSent: 320, emailColor: "orange" },
  { name: "Cloud Storage", revenue: 950000, leads: 6100, effort: 2, emailsSent: 85, emailColor: "red" },
  { name: "Dev Tools", revenue: 1570000, leads: 4900, effort: 4, emailsSent: 540, emailColor: "orange" },
];

// Email Performance
export const emailMetrics = {
  openRate: { value: 24.7, benchmark: 21.3, max: 50 },
  ctr: { value: 3.8, benchmark: 2.6, max: 10 },
};

// Brand Performance
export const brandData = [
  { name: "Alpha", openRate: 26.2, ctr: 4.1 },
  { name: "Beta", openRate: 22.8, ctr: 3.4 },
  { name: "Gamma", openRate: 25.1, ctr: 3.9 },
  { name: "Combined", openRate: 24.7, ctr: 3.8 },
];

// Industry Completion
export const industryData = [
  { name: "Technology", completed: 78, nonCompleted: 14, total: 92 },
  { name: "Healthcare", completed: 65, nonCompleted: 22, total: 87 },
  { name: "Finance", completed: 58, nonCompleted: 26, total: 84 },
  { name: "Retail", completed: 49, nonCompleted: 29, total: 78 },
  { name: "Education", completed: 41, nonCompleted: 30, total: 71 },
  { name: "Manufacturing", completed: 36, nonCompleted: 32, total: 68 },
];

// YoY Email Metrics
export const yoyEmailData = [
  { month: "Jan", or2023: 19.2, or2024: 22.1, ctr2023: 2.1, ctr2024: 3.2 },
  { month: "Feb", or2023: 20.1, or2024: 23.4, ctr2023: 2.3, ctr2024: 3.4 },
  { month: "Mar", or2023: 18.8, or2024: 22.8, ctr2023: 2.0, ctr2024: 3.1 },
  { month: "Apr", or2023: 21.3, or2024: 25.1, ctr2023: 2.4, ctr2024: 3.7 },
  { month: "May", or2023: 20.7, or2024: 24.3, ctr2023: 2.2, ctr2024: 3.6 },
  { month: "Jun", or2023: 21.0, or2024: 24.7, ctr2023: 2.5, ctr2024: 3.8 },
];

// YoY Campaign Volume
export const yoyCampaignVolume = [
  { month: "Jan", y2023: 85, y2024: 102 },
  { month: "Feb", y2023: 92, y2024: 118 },
  { month: "Mar", y2023: 88, y2024: 124 },
  { month: "Apr", y2023: 95, y2024: 135 },
  { month: "May", y2023: 91, y2024: 142 },
  { month: "Jun", y2023: 97, y2024: 148 },
];

// Notable Trends
export const trendInsights = [
  { text: "Email open rates up 16.4% YoY across all brands", type: "up" as const },
  { text: "PPC campaigns delivering highest ROI at 4.2x", type: "up" as const },
  { text: "Webinar attendance declining in Education sector", type: "down" as const },
  { text: "Content marketing leads up 28% this quarter", type: "up" as const },
  { text: "Social ad CPM increased 12% — monitor spend", type: "warning" as const },
  { text: "Brand Alpha outperforming in Healthcare vertical", type: "up" as const },
  { text: "Mobile email opens now 68% of total", type: "up" as const },
  { text: "Retail sector showing conversion rate decline", type: "down" as const },
];

// AI Insights
export const aiInsights = [
  {
    title: "Email Performance Surge",
    impact: "high" as const,
    description: "Open rates have increased 16.4% YoY, driven by improved subject line personalization and optimal send-time optimization across Brand Alpha and Gamma.",
  },
  {
    title: "PPC Efficiency Gains",
    impact: "high" as const,
    description: "Cost-per-acquisition dropped 23% while conversion rates climbed. Automated bidding strategies and refined audience targeting are the primary drivers.",
  },
  {
    title: "Funnel Bottleneck Detected",
    impact: "medium" as const,
    description: "MQL-to-SQL conversion shows a 12% drop in the Finance vertical. Lead scoring model may need recalibration for this segment.",
  },
  {
    title: "Content ROI Opportunity",
    impact: "medium" as const,
    description: "Long-form content (2000+ words) generates 3.2x more qualified leads than short-form. Recommend increasing production by 40%.",
  },
  {
    title: "Seasonal Pattern Alert",
    impact: "low" as const,
    description: "Historical data suggests Q3 typically sees a 15-20% dip in webinar attendance. Consider shifting budget to email and content channels.",
  },
];

// Trending Topics
export const trendingTopics = [
  { topic: "AI/ML", weight: 95 },
  { topic: "Cloud Security", weight: 88 },
  { topic: "DevOps", weight: 82 },
  { topic: "Data Analytics", weight: 78 },
  { topic: "Edge Computing", weight: 72 },
  { topic: "Zero Trust", weight: 68 },
  { topic: "Kubernetes", weight: 65 },
  { topic: "MLOps", weight: 61 },
  { topic: "Serverless", weight: 58 },
  { topic: "API Security", weight: 55 },
  { topic: "Observability", weight: 52 },
  { topic: "Platform Eng", weight: 48 },
];

// Performance Anomalies
export const anomalies = [
  { text: "Brand Beta email CTR dropped 18% last week", severity: "high" as const },
  { text: "Unusual spike in PPC spend for Cloud Storage", severity: "medium" as const },
  { text: "Webinar no-show rate exceeded 40% threshold", severity: "high" as const },
];

// Strategic Recommendations
export const recommendations = [
  { priority: "High" as const, action: "Increase long-form content production by 40%", status: "Pending" as const, impact: "+12% lead quality" },
  { priority: "High" as const, action: "Recalibrate MQL scoring model", status: "In Progress" as const, impact: "+5.6% SQL conversion" },
  { priority: "Medium" as const, action: "A/B test new social creative for Retail", status: "Pending" as const, impact: "+8% engagement" },
  { priority: "Medium" as const, action: "Implement dynamic email personalisation for Brand Beta", status: "Completed" as const, impact: "+15% open rate" },
  { priority: "Low" as const, action: "Explore webinar co-hosting in Education", status: "Pending" as const, impact: "+20% registration" },
];

// Benchmark Gap Analysis
export const benchmarkGaps = [
  { metric: "Open Rate", yours: 24.7, benchmark: 21.3 },
  { metric: "CTR", yours: 3.8, benchmark: 2.6 },
  { metric: "Conversion Rate", yours: 4.2, benchmark: 3.8 },
];

// Filter options
export const filterOptions = {
  quarter: ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024"],
  brand: ["All Brands", "Brand Alpha", "Brand Beta", "Brand Gamma"],
  industry: ["All Industries", "Technology", "Healthcare", "Finance", "Retail", "Education"],
  campaignType: ["All Types", "Email", "Social", "PPC", "Content", "Webinar"],
};

export const filterDefaults = {
  quarter: "Q2 2024",
  brand: "All Brands",
  industry: "All Industries",
  campaignType: "All Types",
};
