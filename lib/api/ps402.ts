import { apiFetch } from "./client";
import type { Signal } from "@/components/ps402/signals-table";

export async function fetchPS402Signals(): Promise<Signal[]> {
  return apiFetch<Signal[]>("/ps402/signals");
}
