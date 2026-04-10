"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export interface Signal {
  id: string;
  platform: string;
  threatScore: number;
  type: "phishing" | "misinformation" | "social" | "coordinated";
  scripMentioned: string;
  timestamp: string;
  isLive: boolean;
  isMarketMoving?: boolean;
}

interface SignalsTableProps {
  signals?: Signal[];
}

const DEMO_SIGNALS: Signal[] = [
  {
    id: "PS402-001",
    platform: "Twitter/X",
    threatScore: 9.4,
    type: "coordinated",
    scripMentioned: "RELIANCE",
    timestamp: "2026-04-10T14:28:00Z",
    isLive: true,
    isMarketMoving: true,
  },
  {
    id: "PS402-002",
    platform: "Telegram Group",
    threatScore: 8.7,
    type: "phishing",
    scripMentioned: "HDFC BANK",
    timestamp: "2026-04-10T14:15:00Z",
    isLive: true,
    isMarketMoving: true,
  },
  {
    id: "PS402-003",
    platform: "Reddit",
    threatScore: 7.2,
    type: "misinformation",
    scripMentioned: "TCS",
    timestamp: "2026-04-10T13:52:00Z",
    isLive: false,
    isMarketMoving: false,
  },
  {
    id: "PS402-004",
    platform: "Discord",
    threatScore: 6.8,
    type: "social",
    scripMentioned: "INFY",
    timestamp: "2026-04-10T13:41:00Z",
    isLive: true,
    isMarketMoving: false,
  },
  {
    id: "PS402-005",
    platform: "WhatsApp Groups",
    threatScore: 5.3,
    type: "misinformation",
    scripMentioned: "WIPRO",
    timestamp: "2026-04-10T13:22:00Z",
    isLive: false,
    isMarketMoving: false,
  },
];

function getThreatBadgeVariant(
  score: number
): "default" | "secondary" | "destructive" | "outline" {
  if (score >= 8) return "destructive";
  if (score >= 6) return "default";
  return "secondary";
}

function getThreatTypeColor(type: string): string {
  switch (type) {
    case "phishing":
      return "bg-red-900/30 text-red-200 border border-red-700/50";
    case "coordinated":
      return "bg-orange-900/30 text-orange-200 border border-orange-700/50";
    case "misinformation":
      return "bg-yellow-900/30 text-yellow-200 border border-yellow-700/50";
    case "social":
      return "bg-purple-900/30 text-purple-200 border border-purple-700/50";
    default:
      return "bg-zinc-700 text-zinc-200";
  }
}

function formatTime(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);

  if (diffMins < 1) return "now";
  if (diffMins < 60) return `${diffMins}m ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d ago`;
}

export function SignalsTable({ signals = DEMO_SIGNALS }: SignalsTableProps) {
  return (
    <div className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 overflow-hidden">
      {/* Header */}
      <div className="border-b border-zinc-800 bg-zinc-950 px-6 py-4">
        <h2 className="text-lg font-semibold text-zinc-50">
          PS-402 Digital Threat Signals
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          Real-time monitoring of phishing, misinformation, and coordinated threats
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-zinc-800 hover:bg-transparent">
              <TableHead className="w-12 text-zinc-400">Status</TableHead>
              <TableHead className="text-zinc-400">Platform</TableHead>
              <TableHead className="text-zinc-400">Threat Score</TableHead>
              <TableHead className="text-zinc-400">Type</TableHead>
              <TableHead className="text-zinc-400">Scrip Mentioned</TableHead>
              <TableHead className="text-zinc-400">Time</TableHead>
              <TableHead className="text-right text-zinc-400">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {signals.map((signal) => {
              const isHighThreat = signal.threatScore >= 8;
              return (
                <TableRow
                  key={signal.id}
                  className={cn(
                    "border-b border-zinc-800/50 transition-colors",
                    isHighThreat
                      ? "hover:bg-red-950/20 bg-red-950/5"
                      : "hover:bg-zinc-800/50"
                  )}
                >
                  {/* Status Indicator */}
                  <TableCell className="py-3">
                    <div className="flex items-center justify-center">
                      {signal.isLive ? (
                        <div className="relative h-3 w-3">
                          <div className="absolute inset-0 rounded-full bg-emerald-500 animate-pulse" />
                          <div className="absolute inset-0 rounded-full bg-emerald-400" />
                        </div>
                      ) : (
                        <div className="h-3 w-3 rounded-full bg-zinc-600" />
                      )}
                    </div>
                  </TableCell>

                  {/* Platform */}
                  <TableCell className="font-medium text-zinc-100">
                    {signal.platform}
                  </TableCell>

                  {/* Threat Score with Glow */}
                  <TableCell>
                    <div
                      className={cn(
                        "inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono font-bold transition-all",
                        isHighThreat
                          ? "bg-red-950/40 text-red-300 border border-red-700/50 shadow-lg shadow-red-500/20"
                          : signal.threatScore >= 6
                            ? "bg-orange-950/40 text-orange-300 border border-orange-700/50"
                            : "bg-zinc-800/40 text-zinc-300 border border-zinc-700/50"
                      )}
                    >
                      {signal.threatScore.toFixed(1)}
                      {isHighThreat && (
                        <span className="text-xs">⚠</span>
                      )}
                    </div>
                  </TableCell>

                  {/* Threat Type Badge */}
                  <TableCell>
                    <span
                      className={cn(
                        "inline-block rounded-full px-2.5 py-1 text-xs font-medium",
                        getThreatTypeColor(signal.type)
                      )}
                    >
                      {signal.type === "coordinated"
                        ? "Coordinated"
                        : signal.type.charAt(0).toUpperCase() + signal.type.slice(1)}
                    </span>
                  </TableCell>

                  {/* Scrip Mentioned */}
                  <TableCell className="text-zinc-100 font-semibold">
                    {signal.scripMentioned}
                    {signal.isMarketMoving && (
                      <span className="ml-2 inline-block text-[10px] font-bold bg-red-900/50 text-red-200 px-1.5 py-0.5 rounded border border-red-700/50">
                        MARKET MOVING
                      </span>
                    )}
                  </TableCell>

                  {/* Time */}
                  <TableCell className="text-zinc-400 text-sm">
                    {formatTime(signal.timestamp)}
                  </TableCell>

                  {/* Actions */}
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-7 text-xs border-zinc-700 hover:bg-zinc-800"
                      >
                        Investigate
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-7 text-xs text-zinc-400 hover:text-zinc-200"
                      >
                        ···
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      {/* Footer Stats */}
      <div className="border-t border-zinc-800 bg-zinc-950/50 px-6 py-3 flex items-center justify-between text-xs text-zinc-400">
        <div>
          {signals.length} signals • {signals.filter((s) => s.isLive).length} live
        </div>
        <div>
          {signals.filter((s) => s.threatScore >= 8).length} high-threat •{" "}
          {signals.filter((s) => s.isMarketMoving).length} market-moving
        </div>
      </div>
    </div>
  );
}
