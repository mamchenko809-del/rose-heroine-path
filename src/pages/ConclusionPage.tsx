import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import data from "@/data/rose.json";
import { ParagraphBlock } from "@/components/ParagraphBlock";

const ConclusionPage = () => {
  const lines = data.conclusion.split("\n");
  const heading = lines[0];
  const paragraphs = lines.slice(1).filter((p) => p.trim());
  const lastStage = data.stages.length;

  return (
    <main className="min-h-screen">
      <article className="container max-w-3xl py-20 md:py-28 animate-[fadeInUp_0.7s_ease-out]">
        <p className="text-xs uppercase tracking-[0.5em] text-gold mb-6">
          Эпилог
        </p>
        <h1 className="font-serif-display text-5xl md:text-7xl leading-tight mb-6">
          <em className="gradient-gold-text">{heading}</em>
        </h1>
        <div className="ornament-line w-24 mb-10" />

        <div className="space-y-8 text-base md:text-lg leading-relaxed text-foreground/85 font-light">
          {paragraphs.map((p, i) => (
            <ParagraphBlock
              key={i}
              text={p}
              image={(data as { conclusionImages?: string[] }).conclusionImages?.[i]}
              index={i}
            />
          ))}
        </div>

        <div className="my-20 text-center">
          <div className="ornament-line w-32 mx-auto mb-8" />
          <p className="font-serif-display italic text-2xl md:text-3xl text-gold/90 max-w-2xl mx-auto leading-relaxed">
            «Её настоящая победа — не в том, что она однажды полюбила, а в том,
            что после этого смогла прожить свою жизнь как свою.»
          </p>
          <div className="ornament-line w-32 mx-auto mt-8" />
        </div>

        <nav className="mt-12 pt-10 border-t border-border/40 flex flex-col sm:flex-row gap-4 justify-between">
          <Link
            to={`/stage/${lastStage}`}
            className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-foreground/70 hover:text-gold transition-elegant"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-elegant" />
            Последний этап
          </Link>
          <Link
            to="/"
            className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-foreground/70 hover:text-gold transition-elegant"
          >
            К началу
          </Link>
        </nav>
      </article>
    </main>
  );
};

export default ConclusionPage;
