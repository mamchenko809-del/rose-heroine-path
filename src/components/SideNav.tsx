import { NavLink, useLocation } from "react-router-dom";
import data from "@/data/rose.json";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const SideNav = () => {
  const stages = data.stages;
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close mobile menu on route change
  const handleNav = () => setOpen(false);

  const linkBase =
    "block py-2 pr-3 pl-4 border-l text-sm leading-snug transition-elegant";
  const linkIdle =
    "border-border/40 text-foreground/60 hover:text-foreground hover:border-gold/60";
  const linkActive = "border-gold text-gold";

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded bg-card/90 backdrop-blur border border-border/60 text-foreground"
        aria-label={open ? "Закрыть оглавление" : "Открыть оглавление"}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 xl:w-80 bg-card/95 backdrop-blur-md border-r border-border/40 overflow-y-auto transition-transform duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="px-6 py-8">
          <NavLink to="/" onClick={handleNav} className="block mb-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold/80 mb-2">
              Титаник · 1997
            </p>
            <h2 className="font-serif-display text-2xl leading-tight text-foreground">
              Путешествие <em className="gradient-gold-text">героини</em>
            </h2>
            <p className="text-xs text-muted-foreground mt-2">
              Разбор Розы по схеме Морин Мёрдок
            </p>
          </NavLink>

          <div className="ornament-line w-full mb-6" />

          <nav className="space-y-1">
            <NavLink
              to="/"
              end
              onClick={handleNav}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkIdle}`
              }
            >
              <span className="text-[10px] uppercase tracking-[0.3em] block mb-0.5 opacity-70">
                Введение
              </span>
              Десять шагов от корсета к свободе
            </NavLink>

            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70 px-4 pt-6 pb-2">
              Этапы пути
            </p>

            {stages.map((s, i) => (
              <NavLink
                key={i}
                to={`/stage/${i + 1}`}
                onClick={handleNav}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkIdle}`
                }
              >
                <span className="font-serif-display text-base text-gold/70 mr-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.title.replace(/^\d+\.\s*/, "")}
              </NavLink>
            ))}

            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70 px-4 pt-6 pb-2">
              Финал
            </p>

            <NavLink
              to="/conclusion"
              onClick={handleNav}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkIdle}`
              }
            >
              Эпилог · Архетип
            </NavLink>
          </nav>
        </div>
      </aside>

      {/* Mobile backdrop */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-background/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};
