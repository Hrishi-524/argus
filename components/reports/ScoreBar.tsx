import { cn } from "@/lib/utils";

interface ScoreBarProps {
  score: number;
  className?: string;
}

export function ScoreBar({ score, className }: ScoreBarProps) {
  const percentage = (score / 10) * 100;

  let colorClass: string;
  if (score > 8) {
    colorClass = "bg-red-500";
  } else if (score >= 6) {
    colorClass = "bg-amber-500";
  } else {
    colorClass = "bg-cyan-400";
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="font-mono text-sm font-medium text-zinc-50">
        {score.toFixed(1)}
      </span>
      <div className="h-1 w-16 rounded-full bg-zinc-800">
        <div
          className={cn("h-full rounded-full transition-all", colorClass)}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
