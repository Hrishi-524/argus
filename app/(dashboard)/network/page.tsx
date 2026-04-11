"use client";

import React from "react";

export default function NetworkPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-50">
          Network View
        </h1>
        <p className="text-sm text-zinc-400">
          Graph-based entity relationship analysis and fund flow visualization
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
              <line x1="6" x2="6" y1="3" y2="15" />
              <circle cx="18" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <path d="M18 9a9 9 0 0 1-9 9" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-zinc-300">
            Network Graph
          </h3>
          <p className="mt-2 max-w-md text-center text-sm text-zinc-500">
            Entity relationship network visualization will be displayed here.
            Select an account or alert to explore connections.
          </p>
        </div>
      </div>
    </div>
  );
}
