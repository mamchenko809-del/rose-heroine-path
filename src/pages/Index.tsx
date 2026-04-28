import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { StageCard } from "@/components/StageCard";
import { StageNav } from "@/components/StageNav";
import { Conclusion } from "@/components/Conclusion";
import data from "@/data/rose.json";

const Index = () => {
  const stages = data.stages;

  return (
    <main className="relative">
      <Hero />
      <StageNav stages={stages} />
      <Intro stages={stages} />

      <div className="relative">
        {stages.map((s, i) => (
          <StageCard
            key={i}
            index={i}
            title={s.title}
            body={s.body}
            align={i % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>

      <Conclusion text={data.conclusion} />

      <footer className="py-16 border-t border-border/40">
        <div className="container max-w-4xl text-center">
          <div className="ornament-line w-24 mx-auto mb-6" />
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-2">
            По схеме Морин Мёрдок
          </p>
          <p className="text-sm text-foreground/60 font-light">
            «Путешествие героини. Женский путь к целостности»
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
