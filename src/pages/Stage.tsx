import { useParams, Navigate } from "react-router-dom";
import data from "@/data/rose.json";
import { StagePager } from "@/components/StagePager";
import { useEffect } from "react";

const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

const Stage = () => {
  const { id } = useParams();
  const num = Number(id);

  if (!num || num < 1 || num > data.stages.length) {
    return <Navigate to="/" replace />;
  }

  const stage = data.stages[num - 1];
  const cleanTitle = stage.title.replace(/^\d+\.\s*/, "");
  const paragraphs = stage.body.split("\n").filter((p) => p.trim());

  // Re-trigger animation on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [num]);

  return (
    <main className="min-h-screen">
      <article
        key={num}
        className="container max-w-3xl py-20 md:py-28 animate-[fadeInUp_0.7s_ease-out]"
      >
        <div className="flex items-center gap-4 mb-8">
          <span className="font-serif-display text-5xl gradient-gold-text leading-none">
            {romanNumerals[num - 1]}
          </span>
          <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Этап {num} из {data.stages.length}
          </span>
        </div>

        <h1 className="font-serif-display text-4xl md:text-6xl leading-[1.05] mb-8 text-foreground">
          {cleanTitle}
        </h1>

        <div className="ornament-line w-24 mb-10" />

        <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/85 font-light">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "first-letter:font-serif-display first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-gold"
                  : ""
              }
            >
              {p}
            </p>
          ))}
        </div>

        <StagePager current={num} />
      </article>
    </main>
  );
};

export default Stage;
