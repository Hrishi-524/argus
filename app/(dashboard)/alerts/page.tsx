"use client";

import React from "react";
import { useAlerts } from "@/hooks/use-alerts";
import { ScoreBar } from "@/components/reports/ScoreBar";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import type { AlertStatus } from "@/types/argus";

function statusBadgeVariant(
  status: AlertStatus
): "destructive" | "default" | "secondary" | "outline" {
  switch (status) {
    case "CRITICAL":
      return "destructive";
    case "NEW":
      return "default";
    case "INVESTIGATING":
      return "outline";
    case "RESOLVED":
      return "secondary";
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

export default function AlertsPage() {
  const { alerts, loading } = useAlerts();

  const criticalCount = alerts.filter((a) => a.status === "CRITICAL").length;
  const newCount = alerts.filter((a) => a.status === "NEW").length;
  const investigatingCount = alerts.filter(
    (a) => a.status === "INVESTIGATING"
  ).length;

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-50">
          Live Alerts
        </h1>
        <p className="text-sm text-zinc-400">
          Real-time surveillance alerts for market manipulation and suspicious
          activities
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Total Alerts
          </p>
          <p className="mt-2 text-2xl font-bold text-zinc-50">
            {alerts.length}
          </p>
        </div>
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Critical
          </p>
          <p className="mt-2 text-2xl font-bold text-red-400">
            {criticalCount}
          </p>
        </div>
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            New
          </p>
          <p className="mt-2 text-2xl font-bold text-cyan-400">{newCount}</p>
        </div>
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Investigating
          </p>
          <p className="mt-2 text-2xl font-bold text-amber-400">
            {investigatingCount}
          </p>
        </div>
      </div>

      {/* Alerts Table */}
      <div className="w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50">
        <div className="border-b border-zinc-800 bg-zinc-950 px-6 py-4">
          <h2 className="text-lg font-semibold text-zinc-50">
            Alert Feed
          </h2>
          <p className="mt-1 text-xs text-zinc-400">
            Sorted by severity score
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-600 border-t-cyan-400" />
            <span className="ml-3 text-sm text-zinc-400">
              Loading alerts...
            </span>
          </div>
        ) : alerts.length === 0 ? (
          <div className="py-12 text-center text-zinc-500">
            No alerts found
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-zinc-800 hover:bg-transparent">
                  <TableHead className="text-zinc-400">ID</TableHead>
                  <TableHead className="text-zinc-400">Score</TableHead>
                  <TableHead className="text-zinc-400">Scheme</TableHead>
                  <TableHead className="text-zinc-400">Scrip</TableHead>
                  <TableHead className="text-zinc-400">Accounts</TableHead>
                  <TableHead className="text-zinc-400">Time</TableHead>
                  <TableHead className="text-zinc-400">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {alerts.map((alert) => (
                  <TableRow
                    key={alert.id}
                    className={cn(
                      "border-b border-zinc-800/50 transition-colors",
                      alert.status === "CRITICAL"
                        ? "bg-red-950/5 hover:bg-red-950/20"
                        : "hover:bg-zinc-800/50"
                    )}
                  >
                    <TableCell className="font-mono text-xs text-zinc-300">
                      {alert.id}
                    </TableCell>
                    <TableCell>
                      <ScoreBar score={alert.score} />
                    </TableCell>
                    <TableCell className="text-zinc-100">
                      {alert.scheme}
                    </TableCell>
                    <TableCell className="font-semibold text-zinc-100">
                      {alert.scrip}
                    </TableCell>
                    <TableCell className="text-zinc-300">
                      {alert.accountCount}
                    </TableCell>
                    <TableCell className="text-sm text-zinc-400">
                      {formatTime(alert.timestamp)}
                    </TableCell>
                    <TableCell>
                      <Badge variant={statusBadgeVariant(alert.status)}>
                        {alert.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        <div className="flex items-center justify-between border-t border-zinc-800 bg-zinc-950/50 px-6 py-3 text-xs text-zinc-400">
          <div>{alerts.length} alerts</div>
          <div>{criticalCount} critical</div>
        </div>
      </div>
    </div>
  );
}
