"use client";

import React from "react";

export default function MitigationPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-50">
          Mitigation Center
        </h1>
        <p className="text-sm text-zinc-400">
          Automated response workflows and risk mitigation tracking
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
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-zinc-300">
            Risk Mitigation
          </h3>
          <p className="mt-2 max-w-md text-center text-sm text-zinc-500">
            Automated response actions and mitigation workflows will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}
