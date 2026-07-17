import { motion } from "framer-motion";
import { Brain, AlertTriangle, CheckCircle, Clock, Circle } from "lucide-react";
import { aiInsights, trendingTopics, anomalies, recommendations, benchmarkGaps } from "@/data/mockData";

const impactColors = {
  high: "bg-destructive/20 text-destructive",
  medium: "bg-warning/20 text-warning",
  low: "bg-accent/20 text-accent",
};

const priorityColors = {
  High: "bg-destructive/20 text-destructive",
  Medium: "bg-warning/20 text-warning",
  Low: "bg-accent/20 text-accent",
};

const statusIcons = {
  Pending: <Clock className="h-3.5 w-3.5 text-muted-foreground" />,
  "In Progress": <Circle className="h-3.5 w-3.5 text-warning" />,
  Completed: <CheckCircle className="h-3.5 w-3.5 text-accent" />,
};

const DeepDiveAnalytics = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {/* AI Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="glass-card p-5"
      >
        <div className="flex items-center gap-2 mb-4">
          <Brain className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">AI-Powered Insights</h3>
        </div>
        <div className="space-y-3">
          {aiInsights.map((insight, i) => (
            <div key={i} className="rounded-lg border border-border bg-secondary/20 p-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-semibold text-foreground">{insight.title}</span>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${impactColors[insight.impact]}`}>
                  {insight.impact}
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-muted-foreground">{insight.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Trending Themes + Anomalies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="glass-card p-5"
      >
        <h3 className="text-sm font-semibold text-foreground mb-4">Trending Campaign Themes</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {trendingTopics.map((t) => (
            <span
              key={t.topic}
              className="rounded-full bg-primary/10 px-2.5 py-1 text-primary font-medium"
              style={{ fontSize: `${Math.max(11, Math.min(22, 11 + (t.weight / 95) * 11))}px` }}
            >
              {t.topic}
            </span>
          ))}
        </div>

        <h4 className="text-xs font-semibold text-foreground mb-3 flex items-center gap-1.5">
          <AlertTriangle className="h-3.5 w-3.5 text-warning" />
          Performance Anomalies
        </h4>
        <div className="space-y-2">
          {anomalies.map((a, i) => (
            <div key={i} className="flex items-start gap-2 rounded-lg border border-border bg-secondary/20 p-2.5">
              <AlertTriangle className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${
                a.severity === "high" ? "text-destructive" : "text-warning"
              }`} />
              <span className="text-[11px] text-foreground/80">{a.text}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Recommendations + Benchmarks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="glass-card p-5"
      >
        <h3 className="text-sm font-semibold text-foreground mb-4">Strategic Recommendations</h3>
        <div className="space-y-2.5 mb-6">
          {recommendations.map((r, i) => (
            <div key={i} className="flex items-start gap-2 rounded-lg border border-border bg-secondary/20 p-2.5">
              {statusIcons[r.status]}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className={`rounded-full px-1.5 py-0 text-[9px] font-semibold ${priorityColors[r.priority]}`}>
                    {r.priority}
                  </span>
                  <span className="text-[10px] text-muted-foreground">{r.status}</span>
                </div>
                <p className="text-[11px] text-foreground/80">{r.action}</p>
                <p className="text-[10px] text-accent font-medium mt-0.5">{r.impact}</p>
              </div>
            </div>
          ))}
        </div>

        <h4 className="text-xs font-semibold text-foreground mb-3">Benchmark Gap Analysis</h4>
        <div className="space-y-3">
          {benchmarkGaps.map((b) => (
            <div key={b.metric}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] text-foreground">{b.metric}</span>
                <span className="text-[10px] font-mono text-accent">{b.yours}% vs {b.benchmark}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden relative">
                <div className="h-full bg-primary/40 rounded-full" style={{ width: `${(b.benchmark / Math.max(b.yours, b.benchmark) * 1.2) * 100 / 1.2}%` }} />
                <div className="absolute top-0 h-full bg-primary rounded-full" style={{ width: `${(b.yours / Math.max(b.yours, b.benchmark) * 1.2) * 100 / 1.2}%` }} />
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center gap-4 text-[10px] mt-2">
            <div className="flex items-center gap-1"><div className="h-2 w-2 rounded-sm bg-primary" /> Yours</div>
            <div className="flex items-center gap-1"><div className="h-2 w-2 rounded-sm bg-primary/40" /> Benchmark</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DeepDiveAnalytics;
