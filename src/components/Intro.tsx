import { useReveal } from "@/hooks/useReveal";

interface IntroProps {
  stages: { title: string }[];
}

export const Intro = ({ stages }: IntroProps) => {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="intro" className="reveal py-24 md:py-40 container max-w-4xl">
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.5em] text-gold mb-6">Введение</p>
        <h2 className="font-serif-display text-4xl md:text-6xl leading-tight mb-8">
          Десять шагов от <em className="text-rose-accent">корсета</em> к свободе
        </h2>
        <div className="ornament-line w-32 mx-auto mb-8" />
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto font-light">
          Морин Мёрдок описала женский путь к целостности как спираль из десяти
          этапов — от отделения от живой природы до объединения мужского и
          женского начал. История Розы из «Титаника» — почти учебная иллюстрация
          этого пути.
        </p>
      </div>

      <ol className="grid sm:grid-cols-2 gap-x-10 gap-y-4 mt-20 max-w-3xl mx-auto">
        {stages.map((s, i) => (
          <li key={i}>
            <a
              href={`#stage-${i + 1}`}
              className="group flex items-baseline gap-4 py-3 border-b border-border/50 hover:border-gold/60 transition-elegant"
            >
              <span className="font-serif-display text-2xl text-gold/70 group-hover:text-gold transition-elegant w-8">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm md:text-base text-foreground/80 group-hover:text-foreground transition-elegant leading-snug">
                {s.title.replace(/^\d+\.\s*/, "")}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
};
