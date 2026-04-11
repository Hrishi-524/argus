"use client";

import React from "react";

export default function CasesPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-50">
          Case Builder
        </h1>
        <p className="text-sm text-zinc-400">
          SEBI case construction and evidence management workspace
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
              <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-zinc-300">
            SEBI Case Manager
          </h3>
          <p className="mt-2 max-w-md text-center text-sm text-zinc-500">
            Build enforcement cases by linking alerts, accounts, and evidence.
          </p>
        </div>
      </div>
    </div>
  );
}
