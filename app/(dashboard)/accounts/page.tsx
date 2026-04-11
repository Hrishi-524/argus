"use client";

import React from "react";
import { useAccounts } from "@/hooks/use-accounts";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ScoreBar } from "@/components/reports/ScoreBar";

export default function AccountsPage() {
  const { accounts, loading } = useAccounts();

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-50">
          Account DNA
        </h1>
        <p className="text-sm text-zinc-400">
          Entity-level risk profiles and behavioral fingerprints
        </p>
      </div>

      <div className="w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50">
        <div className="border-b border-zinc-800 bg-zinc-950 px-6 py-4">
          <h2 className="text-lg font-semibold text-zinc-50">
            Monitored Accounts
          </h2>
          <p className="mt-1 text-xs text-zinc-400">
            Risk-scored entities under surveillance
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-600 border-t-cyan-400" />
            <span className="ml-3 text-sm text-zinc-400">
              Loading accounts...
            </span>
          </div>
        ) : accounts.length === 0 ? (
          <div className="py-12 text-center text-zinc-500">
            No accounts found. Connect to the backend to view account data.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-zinc-800 hover:bg-transparent">
                  <TableHead className="text-zinc-400">ID</TableHead>
                  <TableHead className="text-zinc-400">Name</TableHead>
                  <TableHead className="text-zinc-400">PAN</TableHead>
                  <TableHead className="text-zinc-400">Broker</TableHead>
                  <TableHead className="text-zinc-400">Risk Score</TableHead>
                  <TableHead className="text-zinc-400">Alerts</TableHead>
                  <TableHead className="text-zinc-400">Flags</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {accounts.map((account) => (
                  <TableRow
                    key={account.id}
                    className="border-b border-zinc-800/50 transition-colors hover:bg-zinc-800/50"
                  >
                    <TableCell className="font-mono text-xs text-zinc-300">
                      {account.id}
                    </TableCell>
                    <TableCell className="font-medium text-zinc-100">
                      {account.name}
                    </TableCell>
                    <TableCell className="font-mono text-xs text-zinc-400">
                      {account.pan}
                    </TableCell>
                    <TableCell className="text-zinc-300">
                      {account.broker}
                    </TableCell>
                    <TableCell>
                      <ScoreBar score={account.riskScore} />
                    </TableCell>
                    <TableCell className="text-zinc-300">
                      {account.alertCount}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {account.flags.map((flag) => (
                          <Badge key={flag} variant="outline" className="text-[10px]">
                            {flag}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        <div className="flex items-center justify-between border-t border-zinc-800 bg-zinc-950/50 px-6 py-3 text-xs text-zinc-400">
          <div>{accounts.length} accounts</div>
        </div>
      </div>
    </div>
  );
}
