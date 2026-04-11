import { apiFetch } from "./client";
import type { Alert } from "@/types/argus";

export async function fetchAlerts(): Promise<Alert[]> {
  return apiFetch<Alert[]>("/alerts");
}
