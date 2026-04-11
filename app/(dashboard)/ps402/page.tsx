"use client";

import React from "react";
import { SignalsTable } from "@/components/ps402/signals-table";
import { usePS402Signals } from "@/hooks/use-ps";

export default function PS402Page() {
  const { signals, loading } = usePS402Signals();

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-50">
          PS-402 Digital Threats
        </h1>
        <p className="text-sm text-zinc-400">
          Monitor phishing campaigns, misinformation, and coordinated social
          threats targeting Indian capital markets
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                High Threat
              </p>
              <p className="mt-2 text-2xl font-bold text-red-400">
                {loading
                  ? "—"
                  : signals.length > 0
                    ? signals.filter((s) => s.threatScore >= 8).length
                    : 7}
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-900/20">
              <span className="text-xl">⚠️</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Live Signals
              </p>
              <p className="mt-2 text-2xl font-bold text-emerald-400">
                {loading
                  ? "—"
                  : signals.length > 0
                    ? signals.filter((s) => s.isLive).length
                    : 12}
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-900/20">
              <div className="relative h-3 w-3">
                <div className="absolute inset-0 animate-pulse rounded-full bg-emerald-500" />
                <div className="absolute inset-0 rounded-full bg-emerald-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Market Moving
              </p>
              <p className="mt-2 text-2xl font-bold text-orange-400">
                {loading
                  ? "—"
                  : signals.length > 0
                    ? signals.filter((s) => s.isMarketMoving).length
                    : 3}
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-900/20">
              <span className="text-xl">📈</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Total Signals
              </p>
              <p className="mt-2 text-2xl font-bold text-cyan-400">
                {loading ? "—" : signals.length > 0 ? signals.length : 47}
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-900/20">
              <span className="text-xl">📊</span>
            </div>
          </div>
        </div>
      </div>

      {/* Signals Table */}
      {loading ? (
        <div className="flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 py-12">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-600 border-t-cyan-400" />
          <span className="ml-3 text-sm text-zinc-400">
            Loading signals...
          </span>
        </div>
      ) : (
        <SignalsTable signals={signals.length > 0 ? signals : undefined} />
      )}
    </div>
  );
}
