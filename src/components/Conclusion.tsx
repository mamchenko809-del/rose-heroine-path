import { useReveal } from "@/hooks/useReveal";

interface ConclusionProps {
  text: string;
}

export const Conclusion = ({ text }: ConclusionProps) => {
  const ref = useReveal<HTMLElement>();
  const lines = text.split("\n");
  const heading = lines[0];
  const paragraphs = lines.slice(1).filter((p) => p.trim());

  return (
    <section ref={ref} className="reveal relative py-24 md:py-40">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.5em] text-gold mb-6">Эпилог</p>
          <h2 className="font-serif-display text-5xl md:text-7xl leading-tight mb-6">
            <em className="gradient-gold-text">{heading}</em>
          </h2>
          <div className="ornament-line w-24 mx-auto" />
        </div>

        <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/85 font-light">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="ornament-line w-32 mx-auto mb-8" />
          <p className="font-serif-display italic text-2xl md:text-3xl text-gold/90 max-w-2xl mx-auto leading-relaxed">
            «Её настоящая победа — не в том, что она однажды полюбила, а в том,
            что после этого смогла прожить свою жизнь как свою.»
          </p>
        </div>
      </div>
    </section>
  );
};
