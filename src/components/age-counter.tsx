"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AgeCounterProps {
  birthDate: string; // Format: "YYYY-MM-DD"
  className?: string;
}

export function AgeCounter({ birthDate, className }: AgeCounterProps) {
  const [age, setAge] = useState<string>("0.000000000");

  useEffect(() => {
    const calculateAge = () => {
      const birth = new Date(birthDate).getTime();
      const now = Date.now();
      const ageInYears = (now - birth) / (1000 * 60 * 60 * 24 * 365.25);
      return ageInYears.toFixed(9);
    };

    // Initial calculation
    setAge(calculateAge());

    // Update every 100ms for smooth animation
    const interval = setInterval(() => {
      setAge(calculateAge());
    }, 100);

    return () => clearInterval(interval);
  }, [birthDate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <div className="flex flex-col items-end gap-1">
        <span className="text-xs font-mono text-muted-foreground tracking-wider">
          ON EARTH FOR
        </span>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-mono font-bold tabular-nums">
            {age}
          </span>
          <span className="text-sm font-mono text-muted-foreground">years</span>
        </div>
      </div>
    </motion.div>
  );
}
