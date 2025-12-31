"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ContributionDay {
  color: string;
  contributionCount: number;
  contributionLevel: string;
  date: string;
}

interface GitHubActivityProps {
  username: string;
  className?: string;
}

export function GitHubActivity({ username, className }: GitHubActivityProps) {
  const [data, setData] = useState<{
    contributions: ContributionDay[][];
    totalContributions: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch(
          `https://github-contributions-api.deno.dev/${username}.json`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch GitHub contributions:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username]);

  if (loading) {
    return (
      <div className={className}>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-mono text-muted-foreground">
            Loading GitHub activity...
          </span>
        </div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  // Get last 52 weeks (full year) for complete view
  const recentWeeks = data.contributions;

  // Get the last contribution date and count
  const lastWeek = data.contributions[data.contributions.length - 1];
  const lastDay = lastWeek[lastWeek.length - 1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={className}
    >
      <div className="flex flex-col gap-3">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h3 className="text-xs font-mono text-muted-foreground tracking-wider">
            GITHUB ACTIVITY
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-mono font-bold tabular-nums">
              {data.totalContributions}
            </span>
            <span className="text-sm font-mono text-muted-foreground">
              contributions
            </span>
          </div>
        </div>

        {/* Contribution Graph */}
        <div className="flex gap-[3px] overflow-x-auto pb-2 scrollbar-hide">
          {recentWeeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-[3px]">
              {week.map((day, dayIndex) => (
                <motion.div
                  key={`${weekIndex}-${dayIndex}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: weekIndex * 0.005 + dayIndex * 0.001 }}
                  className="group relative"
                >
                  <div
                    className="w-[11px] h-[11px] rounded-sm transition-all hover:ring-2 hover:ring-offset-1 hover:ring-primary"
                    style={{ backgroundColor: day.color }}
                    title={`${day.contributionCount} contributions on ${day.date}`}
                  />
                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 border">
                    {day.contributionCount} on {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="font-mono">Less</span>
          <div className="flex gap-[3px]">
            <div className="w-[11px] h-[11px] rounded-sm" style={{ backgroundColor: '#ebedf0' }} />
            <div className="w-[11px] h-[11px] rounded-sm" style={{ backgroundColor: '#9be9a8' }} />
            <div className="w-[11px] h-[11px] rounded-sm" style={{ backgroundColor: '#40c463' }} />
            <div className="w-[11px] h-[11px] rounded-sm" style={{ backgroundColor: '#30a14e' }} />
            <div className="w-[11px] h-[11px] rounded-sm" style={{ backgroundColor: '#216e39' }} />
          </div>
          <span className="font-mono">More</span>
        </div>
      </div>
    </motion.div>
  );
}
