"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, ENGINES } from "@/lib/mock/mock-data";
import type { EngineStatus } from "@/types/argus";

const NAV_ICONS: Record<string, React.ReactNode> = {
  "alert-circle": (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
  ),
  "shield-alert": (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
  ),
  fingerprint: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/></svg>
  ),
  "git-branch": (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
  ),
  briefcase: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
  ),
  "bar-chart-3": (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
  ),
  "shield-check": (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
  ),
};

function engineStatusColor(status: EngineStatus): string {
  switch (status) {
    case "running":
      return "bg-emerald-500";
    case "degraded":
      return "bg-amber-500";
    case "down":
      return "bg-red-500";
  }
}

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-zinc-800 bg-zinc-950 transition-all duration-150",
        collapsed ? "w-[60px]" : "w-60"
      )}
    >
      {/* Header */}
      <div className="flex h-12 items-center border-b border-zinc-800 px-4">
        {!collapsed && (
          <span className="text-sm font-semibold tracking-wider text-zinc-50">
            ARGUS
          </span>
        )}
        <button
          onClick={onToggle}
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-50",
            collapsed ? "mx-auto" : "ml-auto"
          )}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn(
              "transition-transform duration-150",
              collapsed && "rotate-180"
            )}
          >
            <path d="m11 17-5-5 5-5" />
            <path d="m18 17-5-5 5-5" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-2">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative flex items-center gap-3 px-4 py-2.5 text-sm transition-colors",
                isActive
                  ? "border-l-2 border-cyan-400 bg-zinc-900 text-cyan-400"
                  : "border-l-2 border-transparent text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
              )}
              title={collapsed ? item.label : undefined}
            >
              <span className="flex-shrink-0">
                {NAV_ICONS[item.icon]}
              </span>
              {!collapsed && (
                <>
                  <span className="truncate">{item.label}</span>
                  {item.badgeCount !== undefined && item.badgeCount > 0 && (
                    <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 font-mono text-[10px] font-semibold text-white">
                      {item.badgeCount}
                    </span>
                  )}
                </>
              )}
              {collapsed && item.badgeCount !== undefined && item.badgeCount > 0 && (
                <span className="absolute right-2 top-1.5 h-2 w-2 rounded-full bg-red-500" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Engine Status + Version */}
      <div className="border-t border-zinc-800 px-4 py-3">
        {!collapsed ? (
          <>
            <div className="mb-2 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
              Engines
            </div>
            <div className="flex items-center gap-3">
              {ENGINES.map((engine) => (
                <div
                  key={engine.shortName}
                  className="flex items-center gap-1.5"
                  title={`${engine.name}: ${engine.status}`}
                >
                  <span
                    className={cn(
                      "inline-block h-2 w-2 rounded-full",
                      engineStatusColor(engine.status)
                    )}
                  />
                  <span className="text-[10px] text-zinc-500">
                    {engine.shortName}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-2 font-mono text-[10px] text-zinc-600">
              v2.4.1
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-1.5">
            {ENGINES.map((engine) => (
              <span
                key={engine.shortName}
                className={cn(
                  "inline-block h-2 w-2 rounded-full",
                  engineStatusColor(engine.status)
                )}
                title={`${engine.name}: ${engine.status}`}
              />
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
