import { useReveal } from "@/hooks/useReveal";

interface StageCardProps {
  index: number;
  title: string;
  body: string;
  align: "left" | "right";
}

const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export const StageCard = ({ index, title, body, align }: StageCardProps) => {
  const ref = useReveal<HTMLElement>();
  const paragraphs = body.split("\n").filter((p) => p.trim());

  // Strip leading "N. " from title
  const cleanTitle = title.replace(/^\d+\.\s*/, "");

  return (
    <section
      ref={ref}
      id={`stage-${index + 1}`}
      className="reveal relative py-20 md:py-32 scroll-mt-20"
    >
      <div className="container max-w-5xl">
        <div className={`flex flex-col ${align === "right" ? "md:items-end md:text-right" : "md:items-start"}`}>
          <div className={`flex items-center gap-4 mb-6 ${align === "right" ? "md:flex-row-reverse" : ""}`}>
            <span className="font-serif-display text-5xl md:text-6xl gradient-gold-text leading-none">
              {romanNumerals[index]}
            </span>
            <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Этап {index + 1} из 10
            </span>
          </div>

          <h2 className="font-serif-display text-4xl md:text-6xl leading-[1.05] mb-8 max-w-3xl text-foreground">
            {cleanTitle}
          </h2>

          <div className={`ornament-line w-24 mb-10 ${align === "right" ? "md:ml-auto" : ""}`} />

          <div className="max-w-2xl space-y-6 text-base md:text-lg leading-relaxed text-foreground/85 font-light">
            {paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "first-letter:font-serif-display first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-gold" : ""}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
