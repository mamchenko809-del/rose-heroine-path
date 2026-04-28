import { useEffect, useState } from "react";

interface StageNavProps {
  stages: { title: string }[];
}

export const StageNav = ({ stages }: StageNavProps) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handler = () => {
      const sections = stages.map((_, i) => document.getElementById(`stage-${i + 1}`));
      const mid = window.innerHeight / 2;
      let current = 0;
      sections.forEach((s, i) => {
        if (s) {
          const rect = s.getBoundingClientRect();
          if (rect.top < mid) current = i;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [stages]);

  return (
    <nav className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
      {stages.map((s, i) => (
        <a
          key={i}
          href={`#stage-${i + 1}`}
          className="group flex items-center gap-3 transition-elegant"
          aria-label={s.title}
        >
          <span
            className={`block h-px transition-elegant ${
              active === i ? "w-12 bg-gold" : "w-6 bg-foreground/30 group-hover:w-10 group-hover:bg-gold/60"
            }`}
          />
          <span
            className={`text-xs uppercase tracking-[0.25em] transition-elegant ${
              active === i ? "text-gold opacity-100" : "text-muted-foreground opacity-0 group-hover:opacity-100"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
        </a>
      ))}
    </nav>
  );
};
