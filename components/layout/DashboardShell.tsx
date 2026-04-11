"use client";

import React from "react";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1 overflow-y-auto pt-12">
      <div className="p-6">{children}</div>
    </main>
  );
}
