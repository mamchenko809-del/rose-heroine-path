import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/rose-hero.jpg";
import data from "@/data/rose.json";

const Home = () => {
  const stages = data.stages;

  return (
    <main>
      {/* Hero */}
      <header className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Силуэт женщины на носу корабля под луной"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-background/30" />

        <div className="relative z-10 h-full flex flex-col justify-end container max-w-5xl py-12">
          <p className="text-xs uppercase tracking-[0.5em] text-gold mb-6">
            Титаник · 1997 · Архетипический разбор
          </p>
          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
            Путешествие
            <br />
            <em className="gradient-gold-text font-light">героини</em>
          </h1>
          <p className="text-lg md:text-xl text-foreground/85 max-w-xl font-light leading-relaxed">
            История Розы как путь женщины, которая перестала быть объектом чужой
            конструкции и стала автором собственной судьбы.
          </p>
        </div>
      </header>

      {/* Intro */}
      <section className="py-20 md:py-28 container max-w-3xl">
        <p className="text-xs uppercase tracking-[0.5em] text-gold mb-6">
          Введение
        </p>
        <h2 className="font-serif-display text-4xl md:text-5xl leading-tight mb-8">
          Десять шагов от <em className="text-rose-accent">корсета</em> к свободе
        </h2>
        <div className="ornament-line w-32 mb-8" />
        <p className="text-lg text-foreground/80 leading-relaxed font-light">
          Морин Мёрдок описала женский путь к целостности как спираль из десяти
          этапов — от отделения от живой природы до объединения мужского и
          женского начал. История Розы из «Титаника» — почти учебная иллюстрация
          этого пути. Каждый этап раскрывается на отдельной странице.
        </p>

        <Link
          to="/stage/1"
          className="group inline-flex items-center gap-4 mt-10 text-sm uppercase tracking-[0.3em] text-gold hover:text-gold-soft transition-elegant"
        >
          Начать путешествие
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-elegant" />
        </Link>
      </section>

      {/* Index */}
      <section className="py-16 md:py-24 container max-w-4xl">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-8">
          Оглавление
        </p>
        <ol className="grid sm:grid-cols-2 gap-x-10 gap-y-1">
          {stages.map((s, i) => (
            <li key={i}>
              <Link
                to={`/stage/${i + 1}`}
                className="group flex items-baseline gap-4 py-4 border-b border-border/40 hover:border-gold/60 transition-elegant"
              >
                <span className="font-serif-display text-2xl text-gold/70 group-hover:text-gold transition-elegant w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm md:text-base text-foreground/80 group-hover:text-foreground transition-elegant leading-snug">
                  {s.title.replace(/^\d+\.\s*/, "")}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <footer className="py-12 border-t border-border/40">
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

export default Home;
