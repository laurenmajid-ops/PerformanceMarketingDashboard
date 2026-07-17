import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Target } from "lucide-react";
import { kpiData } from "@/data/mockData";

const icons = [DollarSign, Target];

const KPICards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {kpiData.map((kpi, i) => {
        const Icon = icons[i];
        return (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {kpi.label}
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-4 w-4 text-primary" />
              </div>
            </div>
            <div className="mt-3 text-3xl font-bold text-foreground animate-count-pulse">
              {kpi.value}
            </div>
            <div className="mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-accent" />
              <span className="text-xs font-medium text-accent">{kpi.change}</span>
              <span className="text-xs text-muted-foreground">{kpi.subtitle}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default KPICards;
