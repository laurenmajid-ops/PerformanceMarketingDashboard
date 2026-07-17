import { motion } from "framer-motion";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts";
import { TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";
import { yoyEmailData, yoyCampaignVolume, trendInsights } from "@/data/mockData";

const tooltipStyle = {
  backgroundColor: "hsl(222, 40%, 12%)",
  border: "1px solid hsl(220, 14%, 20%)",
  borderRadius: "8px",
  fontSize: "12px",
  color: "hsl(210, 20%, 92%)",
};

const TrendAnalysis = () => {
  return (
    <div className="space-y-4">
      {/* YoY Email */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-card p-5"
      >
        <h3 className="text-sm font-semibold text-foreground mb-1">YoY Email Metrics</h3>
        <p className="text-xs text-muted-foreground mb-4">Open rate & CTR comparison</p>
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={yoyEmailData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 20%)" vertical={false} />
            <XAxis dataKey="month" tick={{ fill: "hsl(215, 12%, 50%)", fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "hsl(215, 12%, 50%)", fontSize: 10 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={tooltipStyle} />
            <Line type="monotone" dataKey="or2023" name="Open Rate 2023" stroke="hsl(220, 8%, 46%)" strokeDasharray="5 5" strokeWidth={1.5} dot={false} />
            <Line type="monotone" dataKey="or2024" name="Open Rate 2024" stroke="hsl(152, 41%, 52%)" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="ctr2023" name="CTR 2023" stroke="hsl(38, 92%, 50%)" strokeDasharray="5 5" strokeWidth={1.5} dot={false} opacity={0.5} />
            <Line type="monotone" dataKey="ctr2024" name="CTR 2024" stroke="hsl(38, 92%, 50%)" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-[10px]">
          <div className="flex items-center gap-1"><div className="h-0.5 w-4 bg-accent" /> OR 2024</div>
          <div className="flex items-center gap-1"><div className="h-0.5 w-4 bg-muted-foreground border-dashed border-t" /> OR 2023</div>
          <div className="flex items-center gap-1"><div className="h-0.5 w-4 bg-warning" /> CTR 2024</div>
          <div className="flex items-center gap-1"><div className="h-0.5 w-4 bg-warning/50" /> CTR 2023</div>
        </div>
      </motion.div>

      {/* YoY Campaign Volume */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-card p-5"
      >
        <h3 className="text-sm font-semibold text-foreground mb-1">YoY Campaign Volume</h3>
        <p className="text-xs text-muted-foreground mb-4">Monthly campaign count comparison</p>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={yoyCampaignVolume} barGap={2}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 20%)" vertical={false} />
            <XAxis dataKey="month" tick={{ fill: "hsl(215, 12%, 50%)", fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "hsl(215, 12%, 50%)", fontSize: 10 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={tooltipStyle} />
            <Bar dataKey="y2023" name="2023" fill="hsl(240, 4%, 36%)" radius={[3, 3, 0, 0]} />
            <Bar dataKey="y2024" name="2024" fill="hsl(152, 41%, 52%)" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-2 flex items-center justify-center gap-4 text-[10px]">
          <div className="flex items-center gap-1"><div className="h-2 w-2 rounded-sm bg-chart-4" /> 2023</div>
          <div className="flex items-center gap-1"><div className="h-2 w-2 rounded-sm bg-accent" /> 2024</div>
        </div>
      </motion.div>

      {/* Notable Trends Ticker */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="glass-card p-5 overflow-hidden"
      >
        <h3 className="text-sm font-semibold text-foreground mb-3">Notable Trends</h3>
        <div className="h-[160px] overflow-hidden relative">
          <div className="animate-ticker">
            {[...trendInsights, ...trendInsights].map((trend, i) => {
              const Icon = trend.type === "up" ? TrendingUp : trend.type === "down" ? TrendingDown : AlertTriangle;
              const color = trend.type === "up" ? "text-accent" : trend.type === "down" ? "text-destructive" : "text-warning";
              return (
                <div key={i} className="flex items-start gap-2 py-2">
                  <Icon className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${color}`} />
                  <span className="text-xs text-foreground/80">{trend.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TrendAnalysis;
