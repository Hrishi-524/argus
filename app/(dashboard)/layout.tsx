"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { DashboardShell } from "@/components/layout/DashboardShell";

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
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBar sidebarCollapsed={sidebarCollapsed} />
        <DashboardShell>{children}</DashboardShell>
      </div>
    </div>
  );
}
