import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { emailMetrics, brandData, industryData } from "@/data/mockData";

const GaugeChart = ({ label, value, benchmark, max }: { label: string; value: number; benchmark: number; max: number }) => {
  const radius = 60;
  const strokeWidth = 10;
  const circumference = Math.PI * radius;
  const valueOffset = circumference - (value / max) * circumference;
  const benchmarkAngle = (benchmark / max) * 180;

  return (
    <div className="flex flex-col items-center">
      <svg width="140" height="80" viewBox="0 0 140 80">
        {/* Background arc */}
        <path
          d="M 10 75 A 60 60 0 0 1 130 75"
          fill="none"
          stroke="hsl(220, 14%, 25%)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Value arc */}
        <path
          d="M 10 75 A 60 60 0 0 1 130 75"
          fill="none"
          stroke="hsl(152, 41%, 52%)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${circumference}`}
          strokeDashoffset={valueOffset}
        />
        {/* Benchmark marker */}
        <circle
          cx={70 + radius * Math.cos(Math.PI - (benchmarkAngle * Math.PI) / 180)}
          cy={75 - radius * Math.sin((benchmarkAngle * Math.PI) / 180)}
          r={4}
          fill="hsl(38, 92%, 50%)"
        />
        <text x="70" y="65" textAnchor="middle" className="fill-foreground text-lg font-bold" fontSize="18">
          {value}%
        </text>
      </svg>
      <div className="text-xs font-medium text-foreground">{label}</div>
      <div className="text-[10px] text-muted-foreground">Benchmark: {benchmark}%</div>
    </div>
  );
};

const EmailMetricsComponent = () => {
  return (
    <div className="space-y-4">
      {/* Gauges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-card p-5"
      >
        <h3 className="text-sm font-semibold text-foreground mb-1">Email Performance Scorecard</h3>
        <p className="text-xs text-muted-foreground mb-4">Current metrics vs industry benchmarks</p>
        <div className="flex justify-around">
          <GaugeChart label="Open Rate" value={emailMetrics.openRate.value} benchmark={emailMetrics.openRate.benchmark} max={emailMetrics.openRate.max} />
          <GaugeChart label="CTR" value={emailMetrics.ctr.value} benchmark={emailMetrics.ctr.benchmark} max={emailMetrics.ctr.max} />
        </div>
        <div className="mt-3 flex items-center justify-center gap-4 text-[10px]">
          <div className="flex items-center gap-1"><div className="h-2 w-2 rounded-full bg-accent" /> Actual</div>
          <div className="flex items-center gap-1"><div className="h-2 w-2 rounded-full bg-warning" /> Benchmark</div>
        </div>
      </motion.div>

      {/* Brand Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-card p-5"
      >
        <h3 className="text-sm font-semibold text-foreground mb-1">Brand Performance</h3>
        <p className="text-xs text-muted-foreground mb-4">Open rate & CTR by brand</p>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={brandData} barGap={2}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 20%)" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: "hsl(215, 12%, 50%)", fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "hsl(215, 12%, 50%)", fontSize: 10 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(222, 40%, 12%)",
                border: "1px solid hsl(220, 14%, 20%)",
                borderRadius: "8px",
                fontSize: "12px",
                color: "hsl(210, 20%, 92%)",
              }}
            />
            <Bar dataKey="openRate" name="Open Rate %" fill="hsl(195, 85%, 46%)" radius={[3, 3, 0, 0]} />
            <Bar dataKey="ctr" name="CTR %" fill="hsl(152, 41%, 52%)" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-2 flex items-center justify-center gap-4 text-[10px]">
          <div className="flex items-center gap-1"><div className="h-2 w-2 rounded-full bg-primary" /> Open Rate</div>
          <div className="flex items-center gap-1"><div className="h-2 w-2 rounded-full bg-accent" /> CTR</div>
        </div>
      </motion.div>

      {/* Industry Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-card p-5"
      >
        <h3 className="text-sm font-semibold text-foreground mb-1">Industry: Completed vs Non-Completed</h3>
        <p className="text-xs text-muted-foreground mb-4">Campaign completion by industry</p>
        <div className="space-y-3">
          {industryData.map((ind) => (
            <div key={ind.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-foreground">{ind.name}</span>
                <span className="text-[10px] text-muted-foreground font-mono">{ind.completed}/{ind.total}</span>
              </div>
              <div className="h-3 rounded-full bg-secondary overflow-hidden flex">
                <div
                  className="h-full bg-primary rounded-l-full"
                  style={{ width: `${(ind.completed / ind.total) * 100}%` }}
                />
                <div
                  className="h-full bg-muted-foreground/30"
                  style={{ width: `${(ind.nonCompleted / ind.total) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default EmailMetricsComponent;
