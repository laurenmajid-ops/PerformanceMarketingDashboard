import { motion } from "framer-motion";
import { heatmapData } from "@/data/mockData";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const getHeatColor = (value: number) => {
  if (value >= 90) return "bg-primary/90 text-primary-foreground";
  if (value >= 80) return "bg-primary/60 text-primary-foreground";
  if (value >= 70) return "bg-primary/35 text-foreground";
  if (value >= 60) return "bg-primary/20 text-foreground";
  return "bg-primary/10 text-muted-foreground";
};

const PerformanceHeatmap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-card p-5"
    >
      <h3 className="text-sm font-semibold text-foreground mb-1">Campaign Performance Heatmap</h3>
      <p className="text-xs text-muted-foreground mb-4">Performance scores (0–100) by type & month</p>

      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr>
              <th className="px-2 py-1.5 text-left font-medium text-muted-foreground">Type</th>
              {months.map((m) => (
                <th key={m} className="px-2 py-1.5 text-center font-medium text-muted-foreground">{m}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {heatmapData.map((row) => (
              <tr key={row.type}>
                <td className="px-2 py-1 font-medium text-foreground">{row.type}</td>
                {(["jan", "feb", "mar", "apr", "may", "jun"] as const).map((m) => (
                  <td key={m} className="px-1 py-1">
                    <div className={`rounded-md px-2 py-2 text-center font-mono font-medium ${getHeatColor(row[m])}`}>
                      {row[m]}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default PerformanceHeatmap;
