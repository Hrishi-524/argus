"use client";

import { useEffect, useState } from "react";
import { fetchAlerts } from "@/lib/api/alerts";
import { MOCK_ALERTS } from "@/lib/mock/mock-data";
import type { Alert } from "@/types/argus";

export function useAlerts() {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data = await fetchAlerts();
        if (!cancelled) {
          setAlerts(Array.isArray(data) ? data : []);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          console.warn("Backend unreachable, falling back to mock data:", err);
          setAlerts(MOCK_ALERTS);
          setError(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { alerts, loading, error };
}
