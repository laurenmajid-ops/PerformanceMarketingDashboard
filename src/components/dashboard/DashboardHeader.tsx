import { motion } from "framer-motion";
import { Activity, FileText, Presentation, Table, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { filterOptions, filterDefaults } from "@/data/mockData";
import { useState, useEffect } from "react";

const DashboardHeader = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-4 py-6 lg:flex-row lg:items-center lg:justify-between"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Activity className="h-5 w-5 text-primary" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-foreground">
              Marketing Dashboard
            </h1>
            <span className="inline-flex items-center gap-1 rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-semibold text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              LIVE
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Last updated: {new Date().toLocaleString()}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Select defaultValue={filterDefaults.quarter}>
          <SelectTrigger className="h-8 w-[120px] text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {filterOptions.quarter.map((q) => (
              <SelectItem key={q} value={q}>{q}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select defaultValue={filterDefaults.brand}>
          <SelectTrigger className="h-8 w-[130px] text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {filterOptions.brand.map((b) => (
              <SelectItem key={b} value={b}>{b}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select defaultValue={filterDefaults.industry}>
          <SelectTrigger className="h-8 w-[140px] text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {filterOptions.industry.map((i) => (
              <SelectItem key={i} value={i}>{i}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select defaultValue={filterDefaults.campaignType}>
          <SelectTrigger className="h-8 w-[120px] text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {filterOptions.campaignType.map((t) => (
              <SelectItem key={t} value={t}>{t}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex items-center gap-1 ml-2">
          <Button variant="ghost" size="sm" className="h-8 gap-1.5 text-xs text-muted-foreground">
            <FileText className="h-3.5 w-3.5" /> PDF
          </Button>
          <Button variant="ghost" size="sm" className="h-8 gap-1.5 text-xs text-muted-foreground">
            <Presentation className="h-3.5 w-3.5" /> PPT
          </Button>
          <Button variant="ghost" size="sm" className="h-8 gap-1.5 text-xs text-muted-foreground">
            <Table className="h-3.5 w-3.5" /> CSV
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default DashboardHeader;
