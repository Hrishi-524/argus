"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-zinc-950">
      <Sidebar collapsed={sidebarCollapsed} onToggle={handleToggleSidebar} />
      <div
        className={cn(
          "flex flex-1 flex-col overflow-hidden transition-all duration-150",
          sidebarCollapsed ? "pl-[60px]" : "pl-60"
        )}
      >
        <TopBar sidebarCollapsed={sidebarCollapsed} />
        <main className="flex-1 overflow-y-auto pt-12">
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
