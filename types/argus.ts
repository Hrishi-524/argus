// ─── ARGUS Surveillance Dashboard Types ─────────────────────────────────────

export type AlertStatus = "CRITICAL" | "NEW" | "INVESTIGATING" | "RESOLVED";

export type SchemeType =
  | "Front Running"
  | "Wash Trade"
  | "Spoofing"
  | "Layering"
  | "Momentum Ignition"
  | "Insider Trading"
  | "Pump & Dump"
  | "Circular Trading";

export type EngineStatus = "running" | "degraded" | "down";

export interface Alert {
  id: string;
  score: number;
  scheme: SchemeType;
  scrip: string;
  accountCount: number;
  timestamp: string; // UTC ISO string
  status: AlertStatus;
}

export interface Account {
  id: string;
  pan: string;
  name: string;
  broker: string;
  riskScore: number;
  alertCount: number;
  linkedAccounts: string[];
  flags: string[];
}

export interface SEBICase {
  id: string;
  caseNumber: string;
  title: string;
  status: "DRAFT" | "SUBMITTED" | "UNDER_REVIEW" | "CLOSED";
  alertIds: string[];
  accountIds: string[];
  createdAt: string;
  updatedAt: string;
  assignee: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
}

export interface EngineInfo {
  name: string;
  shortName: string;
  status: EngineStatus;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
  badgeCount?: number;
}
