"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TopBarProps {
  sidebarCollapsed: boolean;
}

export function TopBar({ sidebarCollapsed }: TopBarProps) {
  const [utcTime, setUtcTime] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    function updateClock() {
      const now = new Date();
      const h = String(now.getUTCHours()).padStart(2, "0");
      const m = String(now.getUTCMinutes()).padStart(2, "0");
      const s = String(now.getUTCSeconds()).padStart(2, "0");
      setUtcTime(`${h}:${m}:${s} UTC`);
    }

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-30 flex h-12 items-center border-b border-zinc-800 bg-zinc-900 transition-all duration-150",
        sidebarCollapsed ? "left-[60px]" : "left-60"
      )}
      style={{ right: 0 }}
    >
      {/* Left — ARGUS branding + live dot */}
      <div className="flex items-center gap-3 px-5">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold tracking-widest text-zinc-50">
            ARGUS
          </span>
          <span className="argus-pulse-dot relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
        </div>
        <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">
          LIVE
        </span>
      </div>

      {/* Center — Page title */}
      <div className="flex-1 text-center">
        <h1 className="text-sm font-medium text-zinc-300">Live Alerts</h1>
      </div>

      {/* Right — Alert count + UTC Clock */}
      <div className="flex items-center gap-4 px-5">
        {/* Alert bell */}
        <button className="relative flex items-center text-zinc-400 transition-colors hover:text-zinc-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
          <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 font-mono text-[9px] font-bold text-white">
            12
          </span>
        </button>

        {/* UTC Clock */}
        <div className="flex items-center gap-2 border-l border-zinc-800 pl-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-500"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="font-mono text-xs text-zinc-400">
            {mounted ? utcTime : "──:──:── UTC"}
          </span>
        </div>
      </div>
    </header>
  );
}
