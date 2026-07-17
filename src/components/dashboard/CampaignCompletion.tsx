import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { campaignCompletionData } from "@/data/mockData";

const data = [
  { name: "Completed", value: campaignCompletionData.completed },
  { name: "Non-Completed", value: campaignCompletionData.nonCompleted },
];

const CampaignCompletion = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="glass-card p-5"
    >
      <h3 className="text-sm font-semibold text-foreground mb-1">Campaign Completion</h3>
      <p className="text-xs text-muted-foreground mb-4">Completed vs non-completed campaigns</p>

      <div className="relative">
        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              strokeWidth={0}
            >
              <Cell fill="hsl(195, 85%, 46%)" />
              <Cell fill="hsl(220, 14%, 40%)" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">{campaignCompletionData.rate}%</div>
            <div className="text-[10px] text-muted-foreground">Complete</div>
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-center gap-4">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-primary" />
          <span className="text-xs text-muted-foreground">Completed ({campaignCompletionData.completed})</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground" />
          <span className="text-xs text-muted-foreground">Non-Completed ({campaignCompletionData.nonCompleted})</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CampaignCompletion;
