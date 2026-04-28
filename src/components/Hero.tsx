import heroImg from "@/assets/rose-hero.jpg";

export const Hero = () => {
  const scrollDown = () => {
    document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Силуэт женщины на носу корабля под луной — путешествие героини Розы"
        className="absolute inset-0 w-full h-full object-cover object-center"
        width={1080}
        height={1920}
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-background/30" />

      <div className="relative z-10 h-full flex flex-col justify-between container max-w-6xl py-12">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.4em] text-gold/80">
            Архетипический разбор
          </span>
          <span className="text-xs uppercase tracking-[0.4em] text-foreground/60">
            по Морин Мёрдок
          </span>
        </div>

        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.5em] text-gold mb-6 animate-shimmer">
            Титаник · 1997
          </p>
          <h1 className="font-serif-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] mb-8">
            Путешествие
            <br />
            <em className="gradient-gold-text font-light">героини</em>
          </h1>
          <p className="text-lg md:text-xl text-foreground/85 max-w-xl font-light leading-relaxed">
            История Розы как путь женщины, которая перестала быть объектом чужой
            конструкции и стала автором собственной судьбы.
          </p>
        </div>

        <button
          onClick={scrollDown}
          className="group self-start flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-foreground/70 hover:text-gold transition-elegant"
          aria-label="Начать путешествие"
        >
          <span className="block w-12 h-px bg-current group-hover:w-20 transition-elegant" />
          Начать путешествие
        </button>
      </div>

      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 animate-float-slow">
        <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/50 [writing-mode:vertical-rl]">
          Scroll
        </span>
      </div>
    </header>
  );
};
