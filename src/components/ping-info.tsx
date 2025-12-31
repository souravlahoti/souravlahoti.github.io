"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PingInfoProps {
  className?: string;
}

interface LocationData {
  ip: string;
  city: string;
  country: string;
  ping: number;
}

export function PingInfo({ className }: PingInfoProps) {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const startTime = performance.now();

        // Using ipapi.co for geolocation (free, no API key required)
        const response = await fetch("https://ipapi.co/json/");
        const endTime = performance.now();
        const ping = Math.round(endTime - startTime);

        const data = await response.json();

        setLocation({
          ip: data.ip || "Unknown",
          city: data.city || "Unknown",
          country: data.country_name || "Unknown",
          ping,
        });
      } catch (error) {
        // Fallback data if API fails
        setLocation({
          ip: "Unable to fetch",
          city: "Unknown",
          country: "Unknown",
          ping: 0,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchLocationData();
  }, []);

  if (loading) {
    return (
      <div className={className}>
        <div className="flex flex-col items-end gap-1">
          <span className="text-xs font-mono text-muted-foreground">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={className}
    >
      <div className="flex flex-col items-end gap-1">
        <div className="flex items-baseline gap-1">
          <span className="text-xs font-mono text-muted-foreground">PING</span>
          <span className="text-sm font-mono font-semibold">{location?.ping}ms</span>
        </div>
        <div className="text-right">
          <div className="text-lg font-mono font-bold tabular-nums">
            {location?.ip}
          </div>
          <div className="flex items-center gap-1 text-xs font-mono text-muted-foreground">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="uppercase">
              {location?.city}, {location?.country}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
