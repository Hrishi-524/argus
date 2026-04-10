import type { Alert, EngineInfo, NavItem } from "@/types/argus";

// ─── Navigation Items ────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { label: "Live Alerts", href: "/alerts", icon: "shield-alert", badgeCount: 12 },
  { label: "Account DNA", href: "/accounts", icon: "fingerprint" },
  { label: "Network View", href: "/network", icon: "git-branch" },
  { label: "PS-402 Signals", href: "/ps402", icon: "alert-circle" },
  { label: "Case Builder", href: "/cases", icon: "briefcase" },
  { label: "Weekly Summary", href: "/summary", icon: "bar-chart-3" },
  { label: "Mitigation Center", href: "/mitigation", icon: "shield-check" },
];

// ─── Engine Status ───────────────────────────────────────────────────────────

export const ENGINES: EngineInfo[] = [
  { name: "Graph Neural Network", shortName: "GNN", status: "running" },
  { name: "DNA Pattern Engine", shortName: "DNA", status: "running" },
  { name: "Zero-Day Detector", shortName: "Zero-Day", status: "degraded" },
  { name: "Cross-Market Analyzer", shortName: "Cross-Mkt", status: "running" },
];

// ─── Mock Alerts ─────────────────────────────────────────────────────────────

export const MOCK_ALERTS: Alert[] = [
  {
    id: "ALT-20260410-001",
    score: 9.2,
    scheme: "Front Running",
    scrip: "RELIANCE",
    accountCount: 3,
    timestamp: "2026-04-10T14:28:00Z",
    status: "CRITICAL",
  },
  {
    id: "ALT-20260410-002",
    score: 7.8,
    scheme: "Wash Trade",
    scrip: "HDFC BANK",
    accountCount: 7,
    timestamp: "2026-04-10T14:15:00Z",
    status: "NEW",
  },
  {
    id: "ALT-20260410-003",
    score: 6.1,
    scheme: "Spoofing",
    scrip: "TCS",
    accountCount: 2,
    timestamp: "2026-04-10T13:52:00Z",
    status: "INVESTIGATING",
  },
  {
    id: "ALT-20260410-004",
    score: 4.3,
    scheme: "Layering",
    scrip: "INFY",
    accountCount: 5,
    timestamp: "2026-04-10T13:41:00Z",
    status: "NEW",
  },
  {
    id: "ALT-20260410-005",
    score: 3.1,
    scheme: "Momentum Ignition",
    scrip: "WIPRO",
    accountCount: 1,
    timestamp: "2026-04-10T13:22:00Z",
    status: "RESOLVED",
  },
];

// ─── KPI Stats ───────────────────────────────────────────────────────────────

export const ALERT_STATS = {
  total: 247,
  critical: 12,
  investigating: 38,
  resolved: 197,
} as const;
