import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import data from "@/data/rose.json";

interface StagePagerProps {
  current: number; // 1-based
}

export const StagePager = ({ current }: StagePagerProps) => {
  const total = data.stages.length;
  const prev =
    current === 1
      ? { to: "/", label: "Введение" }
      : {
          to: `/stage/${current - 1}`,
          label: data.stages[current - 2].title.replace(/^\d+\.\s*/, ""),
        };
  const next =
    current === total
      ? { to: "/conclusion", label: "Эпилог" }
      : {
          to: `/stage/${current + 1}`,
          label: data.stages[current].title.replace(/^\d+\.\s*/, ""),
        };

  return (
    <nav className="mt-20 pt-10 border-t border-border/40 grid grid-cols-1 sm:grid-cols-2 gap-6">
      <Link
        to={prev.to}
        className="group flex items-start gap-4 p-5 border border-border/40 rounded-sm hover:border-gold/60 transition-elegant"
      >
        <ArrowLeft className="h-4 w-4 mt-1 text-gold/70 group-hover:-translate-x-1 transition-elegant shrink-0" />
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">
            Назад
          </p>
          <p className="font-serif-display text-lg leading-snug text-foreground/90 group-hover:text-gold transition-elegant">
            {prev.label}
          </p>
        </div>
      </Link>
      <Link
        to={next.to}
        className="group flex items-start gap-4 p-5 border border-border/40 rounded-sm hover:border-gold/60 transition-elegant text-right sm:flex-row-reverse"
      >
        <ArrowRight className="h-4 w-4 mt-1 text-gold/70 group-hover:translate-x-1 transition-elegant shrink-0" />
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">
            Далее
          </p>
          <p className="font-serif-display text-lg leading-snug text-foreground/90 group-hover:text-gold transition-elegant">
            {next.label}
          </p>
        </div>
      </Link>
    </nav>
  );
};
