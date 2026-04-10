"use client";

import React from "react";

export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-50">
          Live Alerts
        </h1>
        <p className="text-sm text-zinc-400">
          Real-time surveillance alerts for market manipulation and suspicious activities
        </p>
      </div>

      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-8">
        <p className="text-center text-zinc-400">
          Alerts will appear here
        </p>
      </div>
    </div>
  );
}
