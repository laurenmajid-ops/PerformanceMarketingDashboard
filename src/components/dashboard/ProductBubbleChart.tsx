import { motion, AnimatePresence } from "framer-motion";
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer, ZAxis } from "recharts";
import { productData } from "@/data/mockData";
import { useState } from "react";

const chartData = productData.map((p) => ({
  x: p.revenue / 1000000,
  y: p.leads,
  z: p.leads,
  name: p.name,
}));

const ProductBubbleChart = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedProduct = productData.find((p) => p.name === selected);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="glass-card p-5"
    >
      <h3 className="text-sm font-semibold text-foreground mb-1">Product Performance Matrix</h3>
      <p className="text-xs text-muted-foreground mb-4">Revenue vs leads (bubble = lead volume)</p>

      <ResponsiveContainer width="100%" height={200}>
        <ScatterChart margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
          <XAxis
            dataKey="x"
            type="number"
            name="Revenue"
            tick={{ fill: "hsl(215, 12%, 50%)", fontSize: 10 }}
            axisLine={{ stroke: "hsl(220, 14%, 30%)" }}
            tickLine={false}
            unit="M"
            label={{ value: "Revenue ($M)", position: "bottom", fontSize: 10, fill: "hsl(215, 12%, 50%)" }}
          />
          <YAxis
            dataKey="y"
            type="number"
            name="Leads"
            tick={{ fill: "hsl(215, 12%, 50%)", fontSize: 10 }}
            axisLine={{ stroke: "hsl(220, 14%, 30%)" }}
            tickLine={false}
          />
          <ZAxis dataKey="z" range={[60, 400]} name="Leads" />
          <Tooltip
            cursor={false}
            contentStyle={{
              backgroundColor: "hsl(222, 40%, 12%)",
              border: "1px solid hsl(220, 14%, 20%)",
              borderRadius: "8px",
              fontSize: "12px",
              color: "hsl(210, 20%, 92%)",
            }}
          />
          <Scatter
            data={chartData}
            fill="hsl(195, 85%, 46%)"
            fillOpacity={0.6}
            onClick={(data: any) => setSelected(data?.name === selected ? null : data?.name)}
            cursor="pointer"
          />
        </ScatterChart>
      </ResponsiveContainer>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 rounded-lg border border-border bg-secondary/30 p-3"
          >
            <div className="text-xs font-semibold text-foreground mb-2">{selectedProduct.name}</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-muted-foreground">Effort Level: </span>
                <span className="font-mono">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={i < selectedProduct.effort ? "text-primary" : "text-muted-foreground/30"}>■</span>
                  ))}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Emails Sent: </span>
                <span className={`font-mono font-medium ${
                  selectedProduct.emailColor === "green" ? "text-accent" :
                  selectedProduct.emailColor === "orange" ? "text-warning" : "text-destructive"
                }`}>
                  {selectedProduct.emailsSent.toLocaleString()}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProductBubbleChart;
