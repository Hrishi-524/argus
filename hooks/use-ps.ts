"use client";

import { useEffect, useState } from "react";
import { fetchPS402Signals } from "@/lib/api/ps402";
import type { Signal } from "@/components/ps402/signals-table";

export function usePS402Signals() {
  const [signals, setSignals] = useState<Signal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data = await fetchPS402Signals();
        if (!cancelled) {
          setSignals(Array.isArray(data) ? data : []);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          console.warn("PS402 API unreachable, using empty state:", err);
          setSignals([]);
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

  return { signals, loading, error };
}
