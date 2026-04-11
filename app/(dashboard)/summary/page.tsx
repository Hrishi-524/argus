"use client";

import React from "react";

export default function SummaryPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-50">
          Weekly Summary
        </h1>
        <p className="text-sm text-zinc-400">
          Aggregated surveillance metrics and weekly trend analysis
        </p>
      </div>

      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-8">
        <div className="flex flex-col items-center justify-center py-12">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-400"
            >
              <path d="M3 3v18h18" />
              <path d="M18 17V9" />
              <path d="M13 17V5" />
              <path d="M8 17v-3" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-zinc-300">
            Weekly Analytics
          </h3>
          <p className="mt-2 max-w-md text-center text-sm text-zinc-500">
            Summary reports and trend visualizations will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}
